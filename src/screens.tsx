import React, { useMemo, useState } from 'react';
import { CATEGORIES, DISTRICTS, EVENTS, IDEAS, NOTES, PLANS, ROUTES, type Category, type Idea } from './data';
import {
  Logo, Silhouette, IdeaTile, PhotoStub, MapStub, IconHeart, IconShare, IconChevron,
  IconCheck, IconChat, IconUser, IconTheme, IconLang, IconCrown, IconBack, IconCalendar, catClass, catLabel,
} from './ui';
import type { AppCtx } from './App';

const px = { padding: '0 30px' } as const;

/* ================= КОЛОДА ================= */
export function Deck({ ideas, onOpen, compact = false }: { ideas: Idea[]; onOpen?: (id: string) => void; compact?: boolean }) {
  const [idx, setIdx] = useState(0);
  const n = ideas.length;
  const cur = ideas[idx % n];
  const h = compact ? 300 : 340;
  return (
    <div style={{ position: 'relative', height: h + 26, margin: '0 30px' }}>
      {[2, 1].map((back) => {
        const idea = ideas[(idx + back) % n];
        return (
          <div
            key={`${idea.id}-${back}`}
            className="deck-card"
            style={{
              position: 'absolute', inset: 0, height: h, margin: '0 auto', maxWidth: 300,
              transform: `rotate(${back % 2 ? 3 : -3}deg) translateY(${back * 6}px) scale(${1 - back * 0.04})`,
              background: 'var(--pink-back)', opacity: 0.85, zIndex: 3 - back,
            }}
          />
        );
      })}
      <button
        key={cur.id}
        className="deck-card"
        onClick={() => onOpen?.(cur.id)}
        style={{ position: 'absolute', inset: 0, height: h, margin: '0 auto', maxWidth: 300, width: 'calc(100% - 60px)', display: 'block', border: 'none', cursor: onOpen ? 'pointer' : 'default', zIndex: 3, textAlign: 'center' }}
      >
        <Silhouette shape={cur.shape} color="var(--pink-shape)" />
        <div style={{ position: 'absolute', top: 20, left: 0, right: 0 }}><Logo dark small /></div>
        <div className="font-head" style={{ position: 'absolute', left: 18, right: 18, top: '50%', transform: 'translateY(-42%)', fontSize: 26, lineHeight: '27px', color: 'var(--card-ink)' }}>
          {cur.title}
        </div>
        <div style={{ position: 'absolute', bottom: 14, left: 0, right: 0, fontSize: 10, color: 'rgba(48,8,9,.55)' }}>
          {onOpen ? `${catLabel(cur.category)} · нажмите, чтобы открыть` : catLabel(cur.category)}
        </div>
      </button>
      {n > 1 && (
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 12, zIndex: 4 }}>
          <button className="btn-ghost" style={{ height: 30, padding: '0 14px', fontSize: 11 }} onClick={() => setIdx((idx - 1 + n) % n)} aria-label="Предыдущая карта">←</button>
          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            {ideas.map((i, k) => (
              <span key={i.id} style={{ width: 6, height: 6, borderRadius: 3, background: k === idx % n ? 'var(--primary)' : 'var(--handle)' }} />
            ))}
          </div>
          <button className="btn-ghost" style={{ height: 30, padding: '0 14px', fontSize: 11 }} onClick={() => setIdx((idx + 1) % n)} aria-label="Следующая карта">→</button>
        </div>
      )}
    </div>
  );
}

/* ================= ЛЕНДИНГ ================= */
export function Landing({ ctx }: { ctx: AppCtx }) {
  const [testOpen, setTestOpen] = useState(false);
  return (
    <div style={{ paddingBottom: 60 }}>
      <div style={{ padding: '26px 0 10px', textAlign: 'center' }}><Logo /></div>
      <div style={{ textAlign: 'center', padding: '0 30px', marginBottom: 18 }}>
        <div className="h1">Картотека свиданий<br />для пар Петербурга</div>
        <p style={{ fontSize: 13, lineHeight: '17px', color: 'var(--text-2)', margin: '10px 0 0' }}>
          70+ идей, маршруты по районам и события недели. Главная механика — «намёк о свидании»: партнёру приходит красивое письмо с идеей и секретным бонусом, о котором не знаете даже вы.
        </p>
      </div>
      <Deck ideas={IDEAS.slice(0, 4)} onOpen={(id) => ctx.go({ name: 'idea', id })} compact />
      <div style={{ ...px, marginTop: 26, display: 'grid', gap: 10 }}>
        <button className="btn-primary" style={{ width: '100%' }} onClick={() => setTestOpen(true)}>
          Намекнуть о свидании — тест
        </button>
        <button className="btn-ghost" style={{ width: '100%' }} onClick={() => ctx.go({ name: ctx.registered ? 'home' : 'auth' })}>
          {ctx.registered ? 'Открыть картотеку' : 'Создать аккаунт'}
        </button>
        {!ctx.registered && (
          <button style={{ background: 'none', border: 'none', fontSize: 12, color: 'var(--text-2)', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => ctx.go({ name: 'home' })}>
            Сначала посмотреть демо
          </button>
        )}
      </div>

      <div style={{ ...px, marginTop: 34 }}>
        <div className="h2" style={{ marginBottom: 6 }}>Подписка</div>
        <p style={{ fontSize: 13, color: 'var(--text-2)', margin: '0 0 14px' }}>Еженедельное обновление карточек в каждой из 4 категорий, маршруты и афиша.</p>
        <div style={{ display: 'grid', gap: 10 }}>
          {PLANS.map((p) => (
            <button key={p.id} className="plate" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: p.best ? '2px solid var(--primary)' : '1px solid var(--divider)', cursor: 'pointer', padding: '14px 16px' }} onClick={() => ctx.go({ name: 'paywall' })}>
              <span style={{ textAlign: 'left' }}>
                <span style={{ display: 'block', fontWeight: 600, fontSize: 14 }}>{p.title}</span>
                <span style={{ fontSize: 11, color: 'var(--text-2)' }}>{p.per}</span>
              </span>
              <span className="font-head" style={{ fontSize: 24 }}>{p.price}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ ...px, marginTop: 34 }}>
        <div className="h2" style={{ marginBottom: 6 }}>Заметки на полях</div>
        <p style={{ fontSize: 13, color: 'var(--text-2)', margin: '0 0 14px' }}>Объявления от пар и маленьких бизнесов города.</p>
        <div style={{ display: 'grid', gap: 10 }}>
          {NOTES.slice(0, 2).map((n) => (
            <div key={n.id} className="plate" style={{ padding: '14px 16px' }}>
              <div style={{ fontWeight: 600, fontSize: 13 }}>{n.author}</div>
              <div style={{ fontSize: 13, lineHeight: '17px', margin: '4px 0', color: 'var(--text)' }}>{n.text}</div>
              <div style={{ fontSize: 11, color: 'var(--primary-dark)' }}>{n.contact}</div>
            </div>
          ))}
        </div>
        <button className="btn-ghost" style={{ width: '100%', marginTop: 12 }} onClick={() => ctx.go({ name: 'notes' })}>Все заметки и размещение</button>
      </div>

      <div style={{ ...px, marginTop: 34, textAlign: 'center', fontSize: 11, color: 'var(--text-2)' }}>
        Офлайн-версия — печатная игра из 70+ карт. Онлайн — эта картотека.<br />MVP-прототип · Санкт-Петербург
      </div>

      {testOpen && <TestHintModal onClose={() => setTestOpen(false)} ctx={ctx} />}
    </div>
  );
}

function TestHintModal({ onClose, ctx }: { onClose: () => void; ctx: AppCtx }) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const idea = IDEAS[0];
  const valid = /.+@.+\..+/.test(email);
  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-handle" style={{ position: 'static', margin: '6px auto 14px' }} />
        {!sent ? (
          <>
            <div className="h3" style={{ marginBottom: 6 }}>Тест намёка</div>
            <p style={{ fontSize: 13, lineHeight: '17px', color: 'var(--text-2)', marginTop: 0 }}>
              Введите e-mail — покажем, как выглядит письмо-намёк. В MVP письмо рисуем прямо здесь, без отправки.
            </p>
            <div className="plate" style={{ marginBottom: 14 }}>
              <div className="font-head" style={{ fontSize: 18, lineHeight: '19px', color: 'var(--card-ink)', padding: 6 }}>«{idea.title}»</div>
            </div>
            <label style={{ fontSize: 13, display: 'block', marginBottom: 6 }}>E-mail получателя</label>
            <input className="input" placeholder="partner@example.com" value={email} onChange={(e) => setEmail(e.target.value)} inputMode="email" />
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              <button className="btn-primary" style={{ flex: 1 }} disabled={!valid} onClick={() => setSent(true)}>Показать письмо</button>
              <button className="btn-ghost" onClick={onClose}>Отмена</button>
            </div>
          </>
        ) : (
          <>
            <div className="h3" style={{ marginBottom: 10 }}>Так выглядит намёк 💌</div>
            <div className="plate" style={{ padding: 18 }}>
              <div style={{ fontSize: 11, color: 'var(--text-2)', marginBottom: 8 }}>Кому: {email} · от сервиса TO DATE</div>
              <div className="font-head" style={{ fontSize: 22, lineHeight: '23px' }}>Давай {idea.title.charAt(0).toLowerCase() + idea.title.slice(1)}</div>
              <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', margin: '12px 0' }}>
                <span className="param">{idea.duration}</span>
                <span className="param">{idea.price}</span>
                <span className="param">{idea.metro}</span>
              </div>
              <p style={{ fontSize: 13, lineHeight: '17px', margin: 0 }}>{idea.description}</p>
              <div style={{ marginTop: 12, padding: 12, borderRadius: 16, background: 'var(--pink-back)', fontSize: 12, lineHeight: '16px' }}>
                🔮 {idea.secret}
              </div>
            </div>
            <button className="btn-primary" style={{ width: '100%', marginTop: 16 }} onClick={() => { onClose(); ctx.go({ name: 'paywall' }); }}>
              Хочу такие каждую неделю
            </button>
            <button className="btn-ghost" style={{ width: '100%', marginTop: 10 }} onClick={onClose}>Закрыть</button>
          </>
        )}
      </div>
    </div>
  );
}

/* ================= РЕГИСТРАЦИЯ ================= */
export function Auth({ ctx }: { ctx: AppCtx }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const valid = name.trim().length >= 2 && /.+@.+\..+/.test(email);
  return (
    <div style={{ paddingBottom: 60 }}>
      <div style={{ padding: '26px 0 6px', textAlign: 'center' }}><Logo /></div>
      <div className="sheet" style={{ marginTop: 14, minHeight: '70dvh' }}>
        <div className="sheet-handle" />
        <div style={px}>
          <h1 className="h1" style={{ margin: '0 0 8px' }}>Регистрация</h1>
          <p style={{ fontSize: 13, lineHeight: '17px', color: 'var(--text-2)', marginTop: 0 }}>
            Картотека — для двоих. Сначала расскажите, как вас зовут, потом пригласите половинку.
          </p>
          <div className="plate" style={{ display: 'grid', gap: 12, padding: 16, marginTop: 14 }}>
            <div>
              <label style={{ fontSize: 13, display: 'block', marginBottom: 6 }}>Ваше имя</label>
              <input className="input" placeholder="Например, Алина" value={name} onChange={(e) => setName(e.target.value)} autoFocus />
            </div>
            <div>
              <label style={{ fontSize: 13, display: 'block', marginBottom: 6 }}>E-mail</label>
              <input className="input" placeholder="you@example.com" inputMode="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <button
            className="btn-primary" style={{ width: '100%', marginTop: 16 }} disabled={!valid}
            onClick={() => { ctx.register(name.trim(), email.trim()); ctx.go({ name: 'invite' }); }}
          >
            Продолжить
          </button>
          <p style={{ fontSize: 11, color: 'var(--text-2)', marginTop: 12, textAlign: 'center' }}>
            В MVP аккаунт хранится только в этом браузере. Пароль и письма с кодом появятся в боевой версии.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ================= ПРИГЛАШЕНИЕ ПОЛОВИНКИ ================= */
export function Invite({ ctx }: { ctx: AppCtx }) {
  const [email, setEmail] = useState(ctx.profile.partner ?? '');
  const [sent, setSent] = useState(false);
  const valid = /.+@.+\..+/.test(email);
  return (
    <div style={{ paddingBottom: 60 }}>
      <div style={{ padding: '26px 0 6px', textAlign: 'center' }}><Logo /></div>
      <div className="sheet" style={{ marginTop: 14, minHeight: '70dvh' }}>
        <div className="sheet-handle" />
        <div style={px}>
          <h1 className="h1" style={{ margin: '0 0 8px' }}>Пригласите половинку</h1>
          <p style={{ fontSize: 13, lineHeight: '17px', color: 'var(--text-2)', marginTop: 0 }}>
            На почту партнёра придёт приглашение. Как только оно принято, вы увидите друг друга в профиле и сможете слать намёки.
          </p>
          <div className="plate" style={{ marginTop: 14, padding: 16, background: 'linear-gradient(140deg, var(--pink-back), #EFF4FD)' }}>
            <div style={{ fontSize: 11, color: 'var(--text-2)', marginBottom: 6 }}>Так выглядит приглашение:</div>
            <div className="font-head" style={{ fontSize: 20, lineHeight: '21px' }}>
              {ctx.profile.name || 'Ваша половинка'} приглашает вас в TO DATE
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-2)', marginTop: 6 }}>
              «Я завёл(а) нам картотеку свиданий по Петербургу. Присоединяйся — будет о чём мечтать по будням».
            </div>
          </div>
          <div className="plate" style={{ display: 'grid', gap: 12, padding: 16, marginTop: 10 }}>
            <div>
              <label style={{ fontSize: 13, display: 'block', marginBottom: 6 }}>E-mail партнёра</label>
              <input className="input" placeholder="partner@example.com" inputMode="email" value={email} onChange={(e) => { setEmail(e.target.value); setSent(false); }} />
            </div>
          </div>
          <button
            className="btn-primary" style={{ width: '100%', marginTop: 16 }} disabled={!valid || sent}
            onClick={() => { ctx.invitePartner(email.trim()); setSent(true); ctx.toast('Приглашение отправлено (демо)'); }}
          >
            {sent ? 'Приглашение отправлено ✓' : 'Отправить приглашение'}
          </button>
          <button className="btn-ghost" style={{ width: '100%', marginTop: 10 }} onClick={() => ctx.go({ name: 'home' })}>
            {sent ? 'Перейти в картотеку' : 'Приглашу позже'}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================= ГЛАВНАЯ / КАТАЛОГ ================= */
export function Home({ ctx }: { ctx: AppCtx }) {
  const [cat, setCat] = useState<Category | 'все'>('все');
  const list = useMemo(() => (cat === 'все' ? IDEAS : IDEAS.filter((i) => i.category === cat)), [cat]);
  return (
    <div style={{ paddingBottom: 130 }}>
      <div style={{ height: 96 }} />
      <Deck ideas={IDEAS.slice(0, 5)} onOpen={(id) => ctx.go({ name: 'idea', id })} />
      <div className="sheet" style={{ marginTop: 24, minHeight: '55dvh' }}>
        <div className="sheet-handle" />
        <div style={{ ...px, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 className="h1" style={{ margin: 0 }}>Все карточки</h1>
        </div>
        <div style={{ ...px, marginTop: 14 }}>
          <button className="plate" onClick={() => ctx.go({ name: 'events' })} style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', border: '1px solid var(--divider)', cursor: 'pointer', padding: 14, background: 'linear-gradient(120deg, #FFF6FB, #EFF4FD)' }}>
            <span style={{ color: 'var(--primary)' }}><IconCalendar /></span>
            <span style={{ flex: 1, textAlign: 'left', fontSize: 13, fontWeight: 500 }}>События недели — афиша свиданий в городе</span>
            <span style={{ color: 'var(--stroke)' }}><IconChevron /></span>
          </button>
        </div>
        <div className="row-scroll" style={{ ...px, marginTop: 16 }}>
          <button className={`chip ${cat === 'все' ? 'active' : ''}`} onClick={() => setCat('все')}>Все</button>
          {CATEGORIES.map((c) => (
            <button key={c.key} className={`chip ${cat === c.key ? 'active' : ''}`} onClick={() => setCat(c.key)}>{c.label}</button>
          ))}
        </div>
        <div style={{ ...px, marginTop: 15, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
          {list.map((i) => (
            <IdeaTile key={i.id} idea={i} onClick={() => ctx.go({ name: 'idea', id: i.id })} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= КАРТОЧКА ИДЕИ ================= */
export function IdeaDetail({ ctx, id }: { ctx: AppCtx; id: string }) {
  const idea = IDEAS.find((i) => i.id === id) ?? IDEAS[0];
  const liked = ctx.favorites.includes(idea.id);
  return (
    <div style={{ paddingBottom: 130 }}>
      <div style={{ height: 84 }} />
      <div style={{ margin: '0 30px' }}>
        <Deck ideas={[idea]} compact />
      </div>
      <div className="sheet" style={{ marginTop: 24 }}>
        <div className="sheet-handle" />
        <div style={px}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <button className="btn-ghost" style={{ height: 36, padding: '0 14px' }} onClick={() => ctx.back()}><IconBack /> Назад</button>
            <span className="tag" style={{ position: 'static' }}>{catLabel(idea.category)}</span>
          </div>
          <h1 className="h2" style={{ margin: '0 0 14px' }}>{idea.title}</h1>
          <div className="row-scroll" style={{ marginBottom: 14 }}>
            <span className="param">{idea.duration}</span>
            <span className="param">{idea.price}</span>
            <span className="param">{idea.metro}</span>
          </div>
          <p style={{ fontSize: 13, lineHeight: '17px', maxWidth: 330 }}>{idea.description}</p>
          <div style={{ display: 'flex', gap: 5, marginTop: 22, alignItems: 'center' }}>
            <button className="btn-primary" style={{ flex: 1 }} onClick={() => ctx.go({ name: 'hint', id: idea.id })}>
              Намекнуть о свидании
            </button>
            <button
              className={`round-icon-btn ${liked ? 'liked' : ''}`}
              onClick={() => ctx.toggleFavorite(idea.id)}
              aria-label={liked ? 'Убрать из избранного' : 'В избранное'}
            >
              <IconHeart filled={liked} />
            </button>
            <button className="round-icon-btn" onClick={() => ctx.toast('Ссылка скопирована')} aria-label="Поделиться"><IconShare /></button>
          </div>
        </div>
        <div style={{ height: 40 }} />
      </div>
    </div>
  );
}

/* ================= НАМЁК: ФОРМА ================= */
export function HintForm({ ctx, id }: { ctx: AppCtx; id: string }) {
  const idea = IDEAS.find((i) => i.id === id) ?? IDEAS[0];
  const [from, setFrom] = useState(ctx.profile.name);
  const [to, setTo] = useState('');
  const [agree, setAgree] = useState(false);
  const valid = /.+@.+\..+/.test(to) && agree && from.trim().length > 0;
  return (
    <div style={{ paddingBottom: 130 }}>
      <div style={{ height: 84 }} />
      <div className="sheet" style={{ marginTop: 10 }}>
        <div className="sheet-handle" />
        <div style={px}>
          <h1 className="h1" style={{ margin: '0 0 8px' }}>Намекнуть о свидании</h1>
          <p style={{ fontSize: 13, lineHeight: '17px', color: 'var(--text-2)', marginTop: 0 }}>
            Партнёру придёт письмо с идеей, локацией, длительностью, метро и примерной стоимостью. А ещё — секретный бонус, который не узнаете даже вы.
          </p>

          <div className="plate" style={{ marginTop: 16 }}>
            <div style={{ fontSize: 11, color: 'var(--text-2)', margin: '4px 6px' }}>Что отправляем:</div>
            <div className="font-head" style={{ fontSize: 24, lineHeight: '25px', padding: '0 6px' }}>
              Давай {idea.title.charAt(0).toLowerCase() + idea.title.slice(1)}
            </div>
            <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', margin: '12px 6px' }}>
              <span className="param">{idea.duration}</span>
              <span className="param">{idea.price}</span>
              <span className="param">{idea.metro}</span>
            </div>
            <div style={{ margin: '0 6px 8px', fontSize: 13, lineHeight: '17px', color: 'var(--text-2)' }}>
              Плюс секретный бонус — сюрприз, который делает свидание праздником.
            </div>
          </div>

          <div className="plate" style={{ marginTop: 10, display: 'grid', gap: 12, padding: 16 }}>
            <div>
              <label style={{ fontSize: 13, display: 'block', marginBottom: 6 }}>От кого отправляем:</label>
              <input className="input" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="Ваше имя" />
            </div>
            <div>
              <label style={{ fontSize: 13, display: 'block', marginBottom: 6 }}>Кому отправляем:</label>
              <input className="input" placeholder="E-mail партнёра" inputMode="email" value={to} onChange={(e) => setTo(e.target.value)} />
            </div>
            <label style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13, cursor: 'pointer' }}>
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} style={{ width: 18, height: 18, accentColor: 'var(--primary)' }} />
              Партнёр не против письма
            </label>
          </div>

          <button className="btn-primary" style={{ width: '100%', marginTop: 16 }} disabled={!valid} onClick={() => { ctx.sendHint(idea.id, from, to); ctx.go({ name: 'hint-sent', id: idea.id }); }}>
            Отправить намёк
          </button>
        </div>
        <div style={{ height: 40 }} />
      </div>
    </div>
  );
}

/* ================= НАМЁК ОТПРАВЛЕН ================= */
export function HintSent({ ctx, id }: { ctx: AppCtx; id: string }) {
  const idea = IDEAS.find((i) => i.id === id) ?? IDEAS[0];
  return (
    <div style={{ paddingBottom: 130 }}>
      <div style={{ height: 84 }} />
      <div className="sheet" style={{ marginTop: 10 }}>
        <div className="sheet-handle" />
        <div style={px}>
          <h1 className="h1" style={{ margin: '0 0 8px' }}>Отправили намёк!</h1>
          <p style={{ fontSize: 13, lineHeight: '17px', color: 'var(--text-2)', marginTop: 0 }}>
            Письмо уже летит партнёру. Как только намёк услышат — статус в «Моих намёках» изменится на «Услышан».
          </p>
          <div className="plate" style={{ marginTop: 16, padding: 16 }}>
            <div style={{ fontSize: 11, color: 'var(--text-2)', marginBottom: 8 }}>Что отправляем:</div>
            <div className="font-head" style={{ fontSize: 22, lineHeight: '23px' }}>
              Давай {idea.title.charAt(0).toLowerCase() + idea.title.slice(1)}
            </div>
            <div className={`deck-card`} style={{ marginTop: 14, height: 190 }}>
              <Silhouette shape={idea.shape} color="var(--pink-shape)" />
              <div style={{ position: 'absolute', top: 14, left: 0, right: 0, textAlign: 'center' }}><Logo dark small /></div>
              <div className="font-head" style={{ position: 'absolute', left: 16, right: 16, top: '50%', transform: 'translateY(-40%)', fontSize: 20, lineHeight: '21px', color: 'var(--card-ink)', textAlign: 'center' }}>
                {idea.title}
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 16 }}>
            <button className="btn-primary" style={{ height: 46 }} onClick={() => ctx.go({ name: 'hints' })}>Мои намёки</button>
            <button className="btn-ghost" onClick={() => ctx.go({ name: 'home' })}>В каталог</button>
          </div>
        </div>
        <div style={{ height: 40 }} />
      </div>
    </div>
  );
}

/* ================= МОИ НАМЁКИ ================= */
export function MyHints({ ctx }: { ctx: AppCtx }) {
  return (
    <div style={{ paddingBottom: 130 }}>
      <div style={{ height: 84 }} />
      <div className="sheet" style={{ marginTop: 10, minHeight: '60dvh' }}>
        <div className="sheet-handle" />
        <div style={px}>
          <h1 className="h1" style={{ margin: '0 0 16px' }}>Мои намёки</h1>
          {ctx.hints.length === 0 ? (
            <div className="plate" style={{ padding: 22, textAlign: 'center' }}>
              <div className="font-head" style={{ fontSize: 22 }}>Пока пусто</div>
              <p style={{ fontSize: 13, color: 'var(--text-2)' }}>Откройте карточку идеи и нажмите «Намекнуть о свидании» — первый намёк появится здесь.</p>
              <button className="btn-primary" onClick={() => ctx.go({ name: 'home' })}>Выбрать идею</button>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: 10 }}>
              {ctx.hints.map((h) => {
                const idea = IDEAS.find((i) => i.id === h.ideaId)!;
                return (
                  <div key={h.id} className="plate" style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div className="deck-card" style={{ width: 84, height: 100, flex: 'none', transform: 'rotate(-4deg)' }}>
                      <Silhouette shape={idea.shape} color="var(--pink-shape)" />
                    </div>
                    <div style={{ flex: 1, minWidth: 0, padding: '4px 0' }}>
                      <div style={{ fontSize: 13, lineHeight: '16px', fontWeight: 500, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {idea.title}
                      </div>
                      <div style={{ fontSize: 10, color: 'var(--text-2)', marginTop: 4 }}>{h.to} · {h.date}</div>
                      <div style={{ marginTop: 8 }}>
                        <span className={`status ${h.status === 'услышан' ? 'status-ok' : 'status-neutral'}`}>
                          <IconCheck /> {h.status === 'услышан' ? 'Услышан' : 'Отправлен'}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div style={{ height: 40 }} />
      </div>
    </div>
  );
}

/* ================= ИЗБРАННОЕ ================= */
export function Favorites({ ctx }: { ctx: AppCtx }) {
  const [cat, setCat] = useState<Category | 'все'>('все');
  const favs = IDEAS.filter((i) => ctx.favorites.includes(i.id));
  const list = cat === 'все' ? favs : favs.filter((i) => i.category === cat);
  const fan = favs.slice(0, 6);
  return (
    <div style={{ paddingBottom: 130 }}>
      <div style={{ height: 84 }} />
      {fan.length > 0 && (
        <div style={{ height: 210, position: 'relative', margin: '0 30px', overflow: 'visible' }}>
          {fan.map((idea, k) => {
            const mid = (fan.length - 1) / 2;
            const rot = (k - mid) * 9;
            return (
              <button
                key={idea.id}
                className={`deck-card ${catClass(idea.category)}`}
                onClick={() => ctx.go({ name: 'idea', id: idea.id })}
                style={{
                  position: 'absolute', width: 130, height: 185, left: `calc(50% - 65px + ${(k - mid) * 46}px)`, top: 6,
                  transform: `rotate(${rot}deg)`, border: '2px solid rgba(255,255,255,.6)', cursor: 'pointer', zIndex: k,
                }}
              >
                <Silhouette shape={idea.shape} />
                <span className="font-head" style={{ position: 'absolute', inset: '44px 8px auto', fontSize: 13, lineHeight: '14px', color: 'var(--card-ink)', textAlign: 'center', display: 'block' }}>
                  {idea.title}
                </span>
              </button>
            );
          })}
        </div>
      )}
      <div className="sheet" style={{ marginTop: fan.length ? 10 : 0, minHeight: '50dvh' }}>
        <div className="sheet-handle" />
        <div style={px}>
          <h1 className="h1" style={{ margin: 0 }}>Всё избранное</h1>
        </div>
        <div className="row-scroll" style={{ ...px, marginTop: 16 }}>
          <button className={`chip ${cat === 'все' ? 'active' : ''}`} onClick={() => setCat('все')}>Все</button>
          {CATEGORIES.map((c) => (
            <button key={c.key} className={`chip ${cat === c.key ? 'active' : ''}`} onClick={() => setCat(c.key)}>{c.label}</button>
          ))}
        </div>
        <div style={{ ...px, marginTop: 15 }}>
          {list.length === 0 ? (
            <div className="plate" style={{ padding: 22, textAlign: 'center' }}>
              <div className="font-head" style={{ fontSize: 22 }}>Пока пусто</div>
              <p style={{ fontSize: 13, color: 'var(--text-2)' }}>Нажимайте на сердечко в карточке идеи — она появится здесь.</p>
              <button className="btn-primary" onClick={() => ctx.go({ name: 'home' })}>В каталог</button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
              {list.map((i) => <IdeaTile key={i.id} idea={i} onClick={() => ctx.go({ name: 'idea', id: i.id })} />)}
            </div>
          )}
        </div>
        <div style={{ height: 40 }} />
      </div>
    </div>
  );
}

/* ================= МАРШРУТЫ ================= */
export function Routes({ ctx }: { ctx: AppCtx }) {
  const [district, setDistrict] = useState<string>('Все');
  const favs = ROUTES.filter((r) => r.favorite);
  const list = district === 'Все' ? ROUTES : ROUTES.filter((r) => r.district === district);
  const grouped = DISTRICTS.map((d) => ({ d, items: list.filter((r) => r.district === d) })).filter((g) => g.items.length > 0);
  return (
    <div style={{ paddingBottom: 130 }}>
      <MapStub markers={7} height={340} />
      <div className="sheet" style={{ marginTop: -40 }}>
        <div className="sheet-handle" />
        <div style={px}><h1 className="h1" style={{ margin: 0 }}>Избранные маршруты</h1></div>
        <div className="row-scroll" style={{ ...px, marginTop: 14, gap: 10 }}>
          {favs.map((r) => (
            <button key={r.id} style={{ flex: '0 0 68%', border: 'none', background: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }} onClick={() => ctx.go({ name: 'route', id: r.id })}>
              <div style={{ position: 'relative' }}>
                <PhotoStub hue={r.hue} className="tile-photo" style={{ width: '100%' }} />
                <div style={{ position: 'absolute', top: 10, left: 10, right: 10, display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                  {r.tags.map((t) => (
                    <span key={t} style={{ background: 'rgba(17,17,17,.55)', color: '#fff', fontSize: 12, borderRadius: 999, padding: '4px 10px', backdropFilter: 'blur(4px)', whiteSpace: 'nowrap' }}>{t}</span>
                  ))}
                  <span style={{ background: 'rgba(17,17,17,.55)', color: '#fff', fontSize: 12, borderRadius: 999, padding: '4px 10px', backdropFilter: 'blur(4px)', whiteSpace: 'nowrap' }}>{r.price}</span>
                </div>
              </div>
              <div style={{ fontSize: 16, marginTop: 10 }}>{r.title}</div>
              <div style={{ fontSize: 13, color: 'var(--text-2)', marginTop: 4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{r.description}</div>
            </button>
          ))}
        </div>

        <div style={{ ...px, marginTop: 26, display: 'flex', alignItems: 'center', gap: 8 }}>
          <h1 className="h1" style={{ margin: 0, flex: 1 }}>Все маршруты</h1>
        </div>
        <div className="row-scroll" style={{ ...px, marginTop: 14 }}>
          <button className={`chip ${district === 'Все' ? 'active' : ''}`} onClick={() => setDistrict('Все')}>Все</button>
          {DISTRICTS.map((d) => (
            <button key={d} className={`chip ${district === d ? 'active' : ''}`} onClick={() => setDistrict(d)}>{d}</button>
          ))}
        </div>
        <div style={px}>
          {grouped.map((g) => (
            <div key={g.d} style={{ marginTop: 18 }}>
              <div style={{ fontSize: 16, color: 'var(--text-2)', marginBottom: 10 }}>{g.d}</div>
              <div style={{ display: 'grid', gap: 10 }}>
                {g.items.map((r) => (
                  <button key={r.id} className="plate" style={{ display: 'flex', gap: 14, alignItems: 'center', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 10 }} onClick={() => ctx.go({ name: 'route', id: r.id })}>
                    <PhotoStub hue={r.hue} style={{ width: 100, height: 100, borderRadius: 20, flex: 'none' }} />
                    <div style={{ minWidth: 0 }}>
                      <span className="tag" style={{ position: 'static', marginBottom: 4 }}>{r.district}</span>
                      <div style={{ fontSize: 13, lineHeight: '16px', fontWeight: 500 }}>{r.title}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-2)', marginTop: 4 }}>{r.duration} · {r.price}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ height: 40 }} />
      </div>
    </div>
  );
}

/* ================= МАРШРУТ: ДЕТАЛЬ ================= */
export function RouteDetail({ ctx, id }: { ctx: AppCtx; id: string }) {
  const route = ROUTES.find((r) => r.id === id) ?? ROUTES[0];
  return (
    <div style={{ paddingBottom: 130 }}>
      <MapStub markers={route.points.length + 2} route height={300} />
      <div className="sheet" style={{ marginTop: -40 }}>
        <div className="sheet-handle" />
        <div style={px}>
          <button className="btn-ghost" style={{ height: 36, padding: '0 14px', marginBottom: 12 }} onClick={() => ctx.back()}><IconBack /> Назад</button>
          <h1 className="h2" style={{ margin: '0 0 14px' }}>{route.title}</h1>
          <div className="row-scroll" style={{ marginBottom: 16 }}>
            <span className="param">{route.district}</span>
            <span className="param">{route.duration}</span>
            <span className="param">{route.points.length} точки</span>
            <span className="param">{route.price}</span>
          </div>
          <p style={{ fontSize: 13, lineHeight: '17px', margin: '0 0 16px' }}>{route.description}</p>
          <div className="row-scroll" style={{ gap: 10, alignItems: 'stretch' }}>
            {route.points.map((p, i) => (
              <div key={i} className="plate" style={{ flex: '0 0 78%', padding: 16 }}>
                <div style={{ fontSize: 11, color: 'var(--text-2)', marginBottom: 6 }}>Точка номер {i + 1}</div>
                <div className="font-head" style={{ fontSize: 20, lineHeight: '21px', marginBottom: 8 }}>{p.title}</div>
                <div style={{ fontSize: 13, lineHeight: '17px', color: 'var(--text-2)' }}>{p.text}</div>
                <PhotoStub hue={route.hue + i * 40} style={{ height: 140, borderRadius: 16, marginTop: 12 }} />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 5, marginTop: 20, alignItems: 'center' }}>
            <button className="btn-primary" style={{ flex: 1 }} onClick={() => ctx.go({ name: 'hint', id: IDEAS[0].id })}>Намекнуть о свидании</button>
            <button className={`round-icon-btn ${ctx.favorites.includes(route.id) ? 'liked' : ''}`} onClick={() => ctx.toggleFavorite(route.id)} aria-label="В избранное"><IconHeart filled={ctx.favorites.includes(route.id)} /></button>
            <button className="round-icon-btn" onClick={() => ctx.toast('Ссылка скопирована')} aria-label="Поделиться"><IconShare /></button>
          </div>
        </div>
        <div style={{ height: 40 }} />
      </div>
    </div>
  );
}

/* ================= СОБЫТИЯ ================= */
export function Events({ ctx }: { ctx: AppCtx }) {
  const [cat, setCat] = useState<Category | 'все'>('все');
  const list = cat === 'все' ? EVENTS : EVENTS.filter((e) => e.category === cat);
  return (
    <div style={{ paddingBottom: 130 }}>
      <div style={{ height: 84 }} />
      <div className="sheet" style={{ marginTop: 10, minHeight: '70dvh' }}>
        <div className="sheet-handle" />
        <div style={px}>
          <h1 className="h1" style={{ margin: 0 }}>События недели</h1>
          <p style={{ fontSize: 13, color: 'var(--text-2)', margin: '6px 0 0' }}>Афиша обновляется каждый понедельник.</p>
        </div>
        <div className="row-scroll" style={{ ...px, marginTop: 16 }}>
          <button className={`chip ${cat === 'все' ? 'active' : ''}`} onClick={() => setCat('все')}>Все</button>
          {CATEGORIES.map((c) => (
            <button key={c.key} className={`chip ${cat === c.key ? 'active' : ''}`} onClick={() => setCat(c.key)}>{c.label}</button>
          ))}
        </div>
        <div style={{ ...px, marginTop: 15, display: 'grid', gap: 10 }}>
          {list.map((e) => (
            <button key={e.id} className="plate" style={{ display: 'flex', gap: 14, alignItems: 'center', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 10 }} onClick={() => ctx.toast('В MVP билеты не продаём — скоро')}>
              <PhotoStub hue={e.hue} style={{ width: 100, height: 100, borderRadius: 20, flex: 'none' }} />
              <div style={{ minWidth: 0 }}>
                <div style={{ display: 'flex', gap: 5, marginBottom: 4 }}>
                  <span className="tag" style={{ position: 'static' }}>{e.date}</span>
                  <span className="tag" style={{ position: 'static' }}>{e.price}</span>
                </div>
                <div style={{ fontSize: 13, lineHeight: '16px', fontWeight: 500 }}>{e.title}</div>
                <div style={{ fontSize: 11, color: 'var(--text-2)', marginTop: 4 }}>{e.place}</div>
              </div>
            </button>
          ))}
        </div>
        <div style={{ height: 40 }} />
      </div>
    </div>
  );
}

/* ================= ПРОФИЛЬ ================= */
export function Profile({ ctx }: { ctx: AppCtx }) {
  const row = (icon: React.ReactNode, label: string, onClick: () => void, key?: string) => (
    <button key={key ?? label} onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', height: 54, background: 'none', border: 'none', cursor: 'pointer', padding: '0 16px', fontSize: 13, fontWeight: 500, color: 'var(--text)' }}>
      <span style={{ color: 'var(--primary)' }}>{icon}</span>
      <span style={{ flex: 1, textAlign: 'left' }}>{label}</span>
      <span style={{ color: 'var(--stroke)' }}><IconChevron /></span>
    </button>
  );
  return (
    <div style={{ paddingBottom: 130 }}>
      <div style={{ height: 110, background: 'radial-gradient(60% 100% at 50% 0%, #C5D6EF 0%, var(--bg) 75%)' }} />
      <div style={{ textAlign: 'center', marginTop: -48 }}>
        <div className="avatar-fab" style={{ width: 96, height: 96, margin: '0 auto' }}>
          <span style={{ width: 88, height: 88, fontSize: 34 }}>{ctx.profile.name.charAt(0).toUpperCase()}</span>
        </div>
        <div className="h1" style={{ marginTop: 12 }}>{ctx.profile.name}</div>
        <div style={{ fontSize: 11, color: 'var(--text-2)', marginTop: 4 }}>
          {ctx.subscribed ? `Подписка активна · осталось ${ctx.subscribed} дн.` : 'Подписка не оформлена'}
          {ctx.profile.partner ? ` · пара: ${ctx.profile.partner}` : ''}
        </div>
      </div>
      <div style={{ ...px, marginTop: 24, display: 'grid', gap: 18 }}>
        <div className="plate" style={{ padding: 0, overflow: 'hidden' }}>
          {row(<IconHeart />, 'Избранное', () => ctx.go({ name: 'favorites' }))}
          <div style={{ height: 1, background: 'var(--divider)', margin: '0 16px 0 60px' }} />
          {row(<IconChat />, 'Мои намёки', () => ctx.go({ name: 'hints' }))}
          <div style={{ height: 1, background: 'var(--divider)', margin: '0 16px 0 60px' }} />
          {row(<IconCrown />, ctx.subscribed ? 'Подписка' : 'Оформить подписку', () => ctx.go({ name: 'paywall' }))}
        </div>
        <div className="plate" style={{ padding: 0, overflow: 'hidden' }}>
          {row(<IconUser />, 'Аккаунт', () => ctx.go({ name: 'account' }))}
          <div style={{ height: 1, background: 'var(--divider)', margin: '0 16px 0 60px' }} />
          {row(<IconTheme />, 'Тема', () => ctx.toast('Светлая тема. Тёмная — в планах'))}
          <div style={{ height: 1, background: 'var(--divider)', margin: '0 16px 0 60px' }} />
          {row(<IconLang />, 'Язык', () => ctx.toast('Пока только русский'))}
        </div>
        <button className="btn-ghost" onClick={() => ctx.go({ name: 'landing' })}>О проекте и тарифы</button>
      </div>
    </div>
  );
}

/* ================= АККАУНТ ================= */
export function Account({ ctx }: { ctx: AppCtx }) {
  const [name, setName] = useState(ctx.profile.name);
  const [email, setEmail] = useState(ctx.profile.email);
  return (
    <div style={{ paddingBottom: 130 }}>
      <div style={{ height: 84 }} />
      <div className="sheet" style={{ marginTop: 10, minHeight: '60dvh' }}>
        <div className="sheet-handle" />
        <div style={px}>
          <button className="btn-ghost" style={{ height: 36, padding: '0 14px', marginBottom: 12 }} onClick={() => ctx.back()}><IconBack /> Назад</button>
          <h1 className="h1" style={{ margin: '0 0 16px' }}>Аккаунт</h1>
          <div className="plate" style={{ display: 'grid', gap: 12, padding: 16 }}>
            <div>
              <label style={{ fontSize: 13, display: 'block', marginBottom: 6 }}>Имя</label>
              <input className="input" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label style={{ fontSize: 13, display: 'block', marginBottom: 6 }}>E-mail</label>
              <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} inputMode="email" />
            </div>
            <div>
              <label style={{ fontSize: 13, display: 'block', marginBottom: 6 }}>Половинка</label>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <div style={{ flex: 1, fontSize: 13, color: ctx.profile.partner ? 'var(--text)' : 'var(--text-2)', minHeight: 40, display: 'flex', alignItems: 'center' }}>
                  {ctx.profile.partner ? `Приглашение отправлено: ${ctx.profile.partner}` : 'Партнёр ещё не приглашён'}
                </div>
                <button className="btn-ghost" style={{ height: 40, flex: 'none' }} onClick={() => ctx.go({ name: 'invite' })}>
                  {ctx.profile.partner ? 'Изменить' : 'Пригласить'}
                </button>
              </div>
            </div>
          </div>
          <button className="btn-primary" style={{ width: '100%', marginTop: 16 }} onClick={() => { ctx.setProfile({ ...ctx.profile, name: name.trim() || 'Гость', email }); ctx.toast('Сохранено'); ctx.back(); }}>
            Сохранить
          </button>
          <p style={{ fontSize: 11, color: 'var(--text-2)', marginTop: 12 }}>
            В MVP данные хранятся только в этом браузере (localStorage). Регистрация по почте и синхронизация пары появятся в боевой версии.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ================= ПОДПИСКА ================= */
export function Paywall({ ctx }: { ctx: AppCtx }) {
  const [plan, setPlan] = useState('month');
  const chosen = PLANS.find((p) => p.id === plan)!;
  return (
    <div style={{ paddingBottom: 130 }}>
      <div style={{ height: 84 }} />
      <div className="sheet" style={{ marginTop: 10 }}>
        <div className="sheet-handle" />
        <div style={px}>
          <button className="btn-ghost" style={{ height: 36, padding: '0 14px', marginBottom: 12 }} onClick={() => ctx.back()}><IconBack /> Назад</button>
          <h1 className="h1" style={{ margin: '0 0 8px' }}>Подписка</h1>
          <p style={{ fontSize: 13, lineHeight: '17px', color: 'var(--text-2)', marginTop: 0 }}>
            Полный доступ к картотеке, маршрутам, афише и неограниченным намёкам. Оплата рублями — Продамус или ЮKassa (подключим в боевой версии).
          </p>
          <div style={{ display: 'grid', gap: 10, marginTop: 16 }}>
            {PLANS.map((p) => (
              <button
                key={p.id}
                className="plate"
                onClick={() => setPlan(p.id)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', padding: '16px',
                  border: plan === p.id ? '2px solid var(--primary)' : '1px solid var(--divider)', background: 'var(--surface)', position: 'relative',
                }}
              >
                {p.best && <span style={{ position: 'absolute', top: -10, right: 14, background: 'var(--primary)', color: '#fff', fontSize: 10, fontWeight: 600, borderRadius: 999, padding: '3px 10px' }}>выгодно</span>}
                <span style={{ textAlign: 'left' }}>
                  <span style={{ display: 'block', fontWeight: 600, fontSize: 15 }}>{p.title}</span>
                  <span style={{ fontSize: 11, color: 'var(--text-2)' }}>{p.per}</span>
                </span>
                <span className="font-head" style={{ fontSize: 26 }}>{p.price}</span>
              </button>
            ))}
          </div>
          <button className="btn-primary" style={{ width: '100%', marginTop: 16 }} onClick={() => { ctx.subscribe(chosen.days); ctx.toast('Подписка активна (демо)'); ctx.go({ name: 'home' }); }}>
            Оформить за {chosen.price} — демо
          </button>
          <p style={{ fontSize: 11, color: 'var(--text-2)', marginTop: 12, textAlign: 'center' }}>
            В прототипе оплата не списывается: подписка включается локально для демонстрации.
          </p>
        </div>
        <div style={{ height: 40 }} />
      </div>
    </div>
  );
}

/* ================= ЗАМЕТКИ НА ПОЛЯХ ================= */
export function Notes({ ctx }: { ctx: AppCtx }) {
  const [text, setText] = useState('');
  const [contact, setContact] = useState('');
  const valid = text.trim().length >= 10 && contact.trim().length >= 2;
  return (
    <div style={{ paddingBottom: 130 }}>
      <div style={{ height: 84 }} />
      <div className="sheet" style={{ marginTop: 10 }}>
        <div className="sheet-handle" />
        <div style={px}>
          <button className="btn-ghost" style={{ height: 36, padding: '0 14px', marginBottom: 12 }} onClick={() => ctx.back()}><IconBack /> Назад</button>
          <h1 className="h1" style={{ margin: '0 0 8px' }}>Заметки на полях</h1>
          <p style={{ fontSize: 13, lineHeight: '17px', color: 'var(--text-2)', marginTop: 0 }}>
            Расскажите о себе, своём бизнесе или найдите друзей. Размещение — за символические 99 ₽ на неделю.
          </p>
          <div style={{ display: 'grid', gap: 10, marginTop: 16 }}>
            {NOTES.map((n) => (
              <div key={n.id} className="plate" style={{ padding: '14px 16px' }}>
                <div style={{ fontWeight: 600, fontSize: 13 }}>{n.author}</div>
                <div style={{ fontSize: 13, lineHeight: '17px', margin: '4px 0' }}>{n.text}</div>
                <div style={{ fontSize: 11, color: 'var(--primary-dark)' }}>{n.contact}</div>
              </div>
            ))}
          </div>
          <div className="plate" style={{ marginTop: 16, padding: 16, display: 'grid', gap: 10 }}>
            <div className="font-head" style={{ fontSize: 20 }}>Оставить заметку</div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Текст заметки — о себе, бизнесе или поиске друзей"
              style={{ minHeight: 76, borderRadius: 16, border: '1px solid #B4B5B6', padding: '10px 14px', fontSize: 13, fontFamily: 'inherit', resize: 'vertical', outline: 'none' }}
            />
            <input className="input" placeholder="Контакт: @telegram или e-mail" value={contact} onChange={(e) => setContact(e.target.value)} />
            <button className="btn-primary" disabled={!valid} onClick={() => { setText(''); setContact(''); ctx.toast('Заметка отправлена на модерацию (демо)'); }}>
              Разместить за 99 ₽ — демо
            </button>
          </div>
        </div>
        <div style={{ height: 40 }} />
      </div>
    </div>
  );
}
