import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Header, BottomNav, type NavKey, IconBell } from './ui';
import { Auth, Invite, Accept, Home, IdeaDetail, HintForm, HintSent, MyHints, Favorites, Routes, RouteDetail, Events, Profile, Account, Paywall, Notes } from './screens';

export type RouteName =
  | 'auth' | 'invite' | 'accept' | 'home' | 'idea' | 'hint' | 'hint-sent' | 'hints'
  | 'favorites' | 'routes' | 'route' | 'events' | 'profile' | 'account' | 'paywall' | 'notes';

export interface Route { name: RouteName; id?: string }

export interface Hint { id: string; ideaId: string; from: string; to: string; date: string; status: 'отправлен' | 'услышан' }

export interface AppCtx {
  go: (r: Route) => void;
  back: () => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  hints: Hint[];
  sendHint: (ideaId: string, from: string, to: string) => void;
  subscribed: number;
  subscribe: (days: number) => void;
  profile: { name: string; email: string; partner?: string };
  setProfile: (p: { name: string; email: string; partner?: string }) => void;
  registered: boolean;
  register: (name: string, email: string) => void;
  invitePartner: (email: string) => void;
  toast: (msg: string) => void;
}

function load<T>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(key);
    return v ? (JSON.parse(v) as T) : fallback;
  } catch { return fallback; }
}

function routeFromHash(): Route {
  const h = window.location.hash.replace(/^#\/?/, '');
  const [name, id] = h.split('/');
  const names: RouteName[] = ['auth', 'invite', 'accept', 'home', 'idea', 'hint', 'hint-sent', 'hints', 'favorites', 'routes', 'route', 'events', 'profile', 'account', 'paywall', 'notes'];
  if (names.includes(name as RouteName)) return { name: name as RouteName, id };
  return { name: 'home' };
}

export default function App() {
  const [route, setRoute] = useState<Route>(() => routeFromHash());
  const historyRef = useRef<Route[]>([]);
  const [favorites, setFavorites] = useState<string[]>(() => load('td_favs', ['katok', 'spa']));
  const [hints, setHints] = useState<Hint[]>(() =>
    load('td_hints', [
      { id: 'h1', ideaId: 'desert-tur', from: 'Каролина', to: 'timur@example.com', date: '20.10.2026', status: 'услышан' },
      { id: 'h2', ideaId: 'molot-vedm', from: 'Каролина', to: 'timur@example.com', date: '02.11.2026', status: 'отправлен' },
    ]),
  );
  const [subscribed, setSubscribed] = useState<number>(() => load('td_sub', 0));
  const [profile, setProfile] = useState(() => load('td_profile', { name: 'Каролина', email: 'karolina@example.com' }));
  const [registered, setRegistered] = useState<boolean>(() => load('td_registered', false));
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [notifOpen, setNotifOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => { localStorage.setItem('td_favs', JSON.stringify(favorites)); }, [favorites]);
  useEffect(() => { localStorage.setItem('td_hints', JSON.stringify(hints)); }, [hints]);
  useEffect(() => { localStorage.setItem('td_sub', JSON.stringify(subscribed)); }, [subscribed]);
  useEffect(() => { localStorage.setItem('td_profile', JSON.stringify(profile)); }, [profile]);
  useEffect(() => { localStorage.setItem('td_registered', JSON.stringify(registered)); }, [registered]);

  // Масштабируем холст 390×844 под реальный экран.
  // Высоту берём из screen.height — она стабильна и не зависит от панелей мобильного браузера,
  // иначе Safari с тулбаром уменьшает innerHeight и весь макет «схлопывается» с серыми полями.
  useEffect(() => {
    const apply = () => {
      const h = Math.max(window.innerHeight, window.screen?.height || 0);
      const s = Math.min(window.innerWidth / 390, h / 844);
      const phone = document.querySelector('.phone') as HTMLElement | null;
      if (phone) phone.style.zoom = String(s);
    };
    apply();
    window.addEventListener('resize', apply);
    window.addEventListener('orientationchange', apply);
    return () => {
      window.removeEventListener('resize', apply);
      window.removeEventListener('orientationchange', apply);
    };
  }, []);

  const go = useCallback((r: Route) => {
    setRoute((cur) => { historyRef.current = [...historyRef.current, cur]; return r; });
    window.location.hash = `/${r.name}${r.id ? `/${r.id}` : ''}`;
    window.scrollTo({ top: 0 });
  }, []);
  const back = useCallback(() => {
    const prev = historyRef.current[historyRef.current.length - 1];
    historyRef.current = historyRef.current.slice(0, -1);
    setRoute(prev ?? { name: 'home' });
    window.scrollTo({ top: 0 });
  }, []);

  const toast = useCallback((msg: string) => {
    setToastMsg(msg);
    window.setTimeout(() => setToastMsg(null), 2200);
  }, []);

  const ctx: AppCtx = useMemo(() => ({
    go, back,
    favorites,
    toggleFavorite: (id) => setFavorites((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id])),
    hints,
    sendHint: (ideaId, from, to) => setHints((hs) => [
      { id: `h${Date.now()}`, ideaId, from, to, date: new Date().toLocaleDateString('ru-RU'), status: 'отправлен' },
      ...hs,
    ]),
    subscribed,
    subscribe: (days) => setSubscribed(days),
    profile, setProfile,
    registered,
    register: (name, email) => { setProfile({ name, email }); setRegistered(true); },
    invitePartner: (email) => setProfile((p) => ({ ...p, partner: email })),
    toast,
  }), [go, back, favorites, hints, subscribed, profile, registered, toast]);

  const navActive: NavKey =
    route.name === 'home' || route.name === 'idea' || route.name === 'hint' || route.name === 'hint-sent' ? 'home'
    : route.name === 'routes' || route.name === 'route' ? 'routes'
    : route.name === 'favorites' ? 'favorites'
    : 'profile';

  const showNav = route.name !== 'auth' && route.name !== 'invite' && route.name !== 'accept';
  const goNav = (k: NavKey) =>
    k === 'home' ? go({ name: 'home' })
    : k === 'routes' ? go({ name: 'routes' })
    : k === 'favorites' ? go({ name: 'favorites' })
    : go({ name: 'profile' });

  return (
    <div className="phone">
      {route.name !== 'auth' && route.name !== 'invite' && route.name !== 'accept' && <Header onBell={() => setNotifOpen(true)} onSearch={() => setSearchOpen(true)} />}

      {route.name === 'auth' && <Auth ctx={ctx} />}
      {route.name === 'invite' && <Invite ctx={ctx} />}
      {route.name === 'accept' && <Accept ctx={ctx} />}
      {route.name === 'home' && <Home ctx={ctx} />}
      {route.name === 'idea' && <IdeaDetail ctx={ctx} id={route.id!} />}
      {route.name === 'hint' && <HintForm ctx={ctx} id={route.id!} />}
      {route.name === 'hint-sent' && <HintSent ctx={ctx} id={route.id!} />}
      {route.name === 'hints' && <MyHints ctx={ctx} />}
      {route.name === 'favorites' && <Favorites ctx={ctx} />}
      {route.name === 'routes' && <Routes ctx={ctx} />}
      {route.name === 'route' && <RouteDetail ctx={ctx} id={route.id!} />}
      {route.name === 'events' && <Events ctx={ctx} />}
      {route.name === 'profile' && <Profile ctx={ctx} />}
      {route.name === 'account' && <Account ctx={ctx} />}
      {route.name === 'paywall' && <Paywall ctx={ctx} />}
      {route.name === 'notes' && <Notes ctx={ctx} />}

      {showNav && (
        <>
          <div className="fade-bottom" />
          <BottomNav active={navActive} go={goNav} initial={profile.name.charAt(0).toUpperCase()} />
        </>
      )}

      {/* Уведомления */}
      {notifOpen && (
        <div className="modal-backdrop" onClick={() => setNotifOpen(false)} role="dialog" aria-modal="true">
          <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-handle" style={{ position: 'static', margin: '6px auto 14px' }} />
            <div className="h3" style={{ marginBottom: 12 }}>Уведомления</div>
            <div style={{ display: 'grid', gap: 10 }}>
              <div className="plate" style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 14 }}>
                <span style={{ color: 'var(--primary)' }}><IconBell /></span>
                <div style={{ fontSize: 13, lineHeight: '17px' }}>
                  <b>Обновление недели:</b> новые карточки в категориях «Еда» и «Релакс», новый маршрут по Коломне.
                  <div style={{ fontSize: 10, color: 'var(--text-2)', marginTop: 4 }}>07.11.2026</div>
                </div>
              </div>
              <div className="plate" style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 14 }}>
                <span style={{ color: 'var(--primary)' }}><IconBell /></span>
                <div style={{ fontSize: 13, lineHeight: '17px' }}>
                  <b>Ваш намёк услышан!</b> Партнёр открыл письмо про десерт-тур.
                  <div style={{ fontSize: 10, color: 'var(--text-2)', marginTop: 4 }}>20.10.2026</div>
                </div>
              </div>
            </div>
            <button className="btn-ghost" style={{ width: '100%', marginTop: 14 }} onClick={() => setNotifOpen(false)}>Закрыть</button>
          </div>
        </div>
      )}

      {/* Поиск */}
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} ctx={ctx} />}

      {/* Быстрый вход в события из профиля-меню нет; добавим скрытый доступ: долгое нажатие на логотип не нужно. */}
      {toastMsg && <div className="toast" role="status">{toastMsg}</div>}
    </div>
  );
}

import { useState as useStateS } from 'react';
import { IDEAS } from './data';
import { IdeaTile } from './ui';

function SearchModal({ onClose, ctx }: { onClose: () => void; ctx: AppCtx }) {
  const [q, setQ] = useStateS('');
  const res = q.trim()
    ? IDEAS.filter((i) => i.title.toLowerCase().includes(q.trim().toLowerCase()))
    : IDEAS;
  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-handle" style={{ position: 'static', margin: '6px auto 14px' }} />
        <div className="h3" style={{ marginBottom: 12 }}>Поиск по картотеке</div>
        <input className="input" autoFocus placeholder="Например: каток, спа, фондю…" value={q} onChange={(e) => setQ(e.target.value)} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5, marginTop: 14 }}>
          {res.length === 0 && <div style={{ gridColumn: '1/-1', fontSize: 13, color: 'var(--text-2)', padding: '8px 0' }}>Ничего не нашлось. Попробуйте «каток» или «спа».</div>}
          {res.map((i) => (
            <IdeaTile key={i.id} idea={i} onClick={() => { onClose(); ctx.go({ name: 'idea', id: i.id }); }} />
          ))}
        </div>
        <button className="btn-ghost" style={{ width: '100%', marginTop: 14 }} onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
}
