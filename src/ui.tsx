import React from 'react';
import type { Category } from './data';

/* ---------- Иконки (SVG, 22px) ---------- */
const ic = (d: React.ReactNode) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
);
export const IconBell = () => ic(<><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></>);
export const IconSearch = () => ic(<><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>);
export const IconCards = () => ic(<><rect x="3" y="6" width="13" height="15" rx="2.5" /><path d="M8 3h11a2 2 0 0 1 2 2v13" /></>);
export const IconRoute = () => ic(<><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" /><circle cx="12" cy="10" r="2.6" /></>);
export const IconHeart = ({ filled }: { filled?: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19.5 12.6 12 20l-7.5-7.4A5 5 0 1 1 12 6.1a5 5 0 1 1 7.5 6.5z" />
  </svg>
);
export const IconShare = () => ic(<><path d="M12 3v12" /><path d="m7 8 5-5 5 5" /><path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" /></>);
export const IconChevron = () => ic(<path d="m9 6 6 6-6 6" />);
export const IconCheck = () => ic(<path d="m4 12.5 5 5L20 6.5" />);
export const IconCalendar = () => ic(<><rect x="3" y="5" width="18" height="16" rx="2.5" /><path d="M8 3v4M16 3v4M3 10h18" /></>);
export const IconUser = () => ic(<><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" /></>);
export const IconTheme = () => ic(<><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 1 0 18V3z" fill="currentColor" stroke="none" opacity=".25" /></>);
export const IconLang = () => ic(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" /></>);
export const IconSliders = () => ic(<><path d="M4 8h10M18 8h2M4 16h4M12 16h8" /><circle cx="16" cy="8" r="2" /><circle cx="10" cy="16" r="2" /></>);
export const IconChat = () => ic(<><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-3-.4-4.2-1L3 20l1-5.3A8.5 8.5 0 1 1 21 11.5z" /></>);
export const IconCrown = () => ic(<><path d="m3 8 4.5 3L12 5l4.5 6L21 8l-1.5 10h-15L3 8z" /></>);
export const IconBack = () => ic(<path d="m15 6-6 6 6 6" />);

/* ---------- Логотип ---------- */
export const Logo = ({ dark = false, small = false }: { dark?: boolean; small?: boolean }) => (
  <span
    className="font-head select-none"
    style={{
      color: dark ? 'var(--card-ink)' : 'var(--primary)',
      fontSize: small ? 16 : 21,
      letterSpacing: '0.06em',
      lineHeight: 1,
    }}
  >
    TO&nbsp;D<span style={{ fontSize: '0.72em', verticalAlign: '0.16em' }}>✳</span>TE
  </span>
);

/* ---------- Силуэты для плиток (белые 20%) ---------- */
export function Silhouette({ shape, color = 'rgba(255,255,255,0.20)' }: { shape: string; color?: string }) {
  const common: React.CSSProperties = { position: 'absolute', inset: 0, width: '100%', height: '100%', color };
  switch (shape) {
    case 'sun':
      return (
        <svg style={common} viewBox="0 0 100 120" aria-hidden="true">
          <circle cx="50" cy="58" r="24" fill="currentColor" />
          {Array.from({ length: 8 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 45} 50 58)`}>
              <rect x="46.5" y="12" width="7" height="18" rx="3.5" fill="currentColor" />
            </g>
          ))}
        </svg>
      );
    case 'bottle':
      return (
        <svg style={common} viewBox="0 0 100 120" aria-hidden="true">
          <path d="M0 78c14-16 26-20 38-14 14 7 20-6 34-4 12 2 22 12 28 24v36H0z" fill="currentColor" />
          <circle cx="72" cy="34" r="14" fill="currentColor" />
        </svg>
      );
    case 'pear':
      return (
        <svg style={common} viewBox="0 0 100 120" aria-hidden="true">
          <circle cx="30" cy="44" r="18" fill="currentColor" />
          <path d="M0 92c18-10 30-26 52-22 20 4 34 14 48 10v40H0z" fill="currentColor" />
        </svg>
      );
    case 'leaves':
      return (
        <svg style={common} viewBox="0 0 100 120" aria-hidden="true">
          <path d="M30 108c-8-26 4-52 30-60 16-5 30-3 36-2-3 6-6 22-16 36-12 17-32 26-50 26z" fill="currentColor" />
          <path d="M34 100c10-20 26-34 44-42" stroke="rgba(255,255,255,0.35)" strokeWidth="3" fill="none" />
        </svg>
      );
    default:
      return null;
  }
}

export const catClass = (c: Category) => `cat-${c}`;
export const catLabel = (c: Category) => c[0].toUpperCase() + c.slice(1);

/* ---------- Шапка ---------- */
export function Header({ onBell, onSearch }: { onBell: () => void; onSearch: () => void }) {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 20px 0' }}>
      <button className="circle-btn" onClick={onBell} aria-label="Уведомления"><IconBell /></button>
      <div style={{ paddingTop: 4 }}><Logo /></div>
      <button className="circle-btn" onClick={onSearch} aria-label="Поиск"><IconSearch /></button>
    </div>
  );
}

/* ---------- Нижняя навигация ---------- */
export type NavKey = 'home' | 'routes' | 'favorites' | 'profile';
export function BottomNav({ active, go, initial }: { active: NavKey; go: (k: NavKey) => void; initial: string }) {
  return (
    <nav className="navbar" aria-label="Основная навигация">
      <div className="navbar-pill">
        <button className={`nav-ic ${active === 'home' ? 'active' : ''}`} onClick={() => go('home')} aria-label="Каталог" title="Каталог"><IconCards /></button>
        <button className={`nav-ic ${active === 'routes' ? 'active' : ''}`} onClick={() => go('routes')} aria-label="Маршруты" title="Маршруты"><IconRoute /></button>
        <button className={`nav-ic ${active === 'favorites' ? 'active' : ''}`} onClick={() => go('favorites')} aria-label="Избранное" title="Избранное"><IconHeart /></button>
      </div>
      <button className="avatar-fab" onClick={() => go('profile')} aria-label="Профиль">
        <span>{initial}</span>
      </button>
    </nav>
  );
}

/* ---------- Плитка идеи ---------- */
export function IdeaTile({ idea, onClick }: { idea: { id: string; title: string; category: Category; shape: string }; onClick: () => void }) {
  return (
    <button className={`tile ${catClass(idea.category)}`} onClick={onClick}>
      <Silhouette shape={idea.shape} />
      <span className="tag">{catLabel(idea.category)}</span>
      <span className="tile-label">{idea.title}</span>
    </button>
  );
}

/* ---------- «Фото»-заглушка с градиентом ---------- */
export function PhotoStub({ hue, className = '', style = {} }: { hue: number; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={className}
      aria-hidden="true"
      style={{
        background: `linear-gradient(160deg, hsl(${hue} 45% 62%) 0%, hsl(${(hue + 40) % 360} 40% 40%) 55%, hsl(${(hue + 70) % 360} 35% 28%) 100%)`,
        position: 'relative', overflow: 'hidden',
        ...style,
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 90% at 20% 10%, rgba(255,255,255,.35), transparent 55%)' }} />
    </div>
  );
}

/* ---------- Стилизованная карта ---------- */
export function MapStub({ markers = 6, route = false, height = 320 }: { markers?: number; route?: boolean; height?: number }) {
  const pts = [
    [18, 30], [38, 26], [70, 26], [84, 52], [60, 62], [30, 58], [20, 80], [55, 84],
  ].slice(0, markers);
  return (
    <div style={{ position: 'relative', height, background: '#EBECEF', overflow: 'hidden' }} aria-hidden="true">
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* парки */}
        <rect x="6" y="6" width="22" height="14" rx="3" fill="#E2E8E2" />
        <rect x="66" y="8" width="28" height="16" rx="3" fill="#E2E8E2" />
        <rect x="70" y="70" width="24" height="18" rx="3" fill="#E2E8E2" />
        {/* «река» Нева */}
        <path d="M-5 66 C 18 54, 38 74, 58 62 S 88 48, 105 56 L 105 105 L -5 105 Z" fill="#DCE4EC" />
        <path d="M-5 66 C 18 54, 38 74, 58 62 S 88 48, 105 56" stroke="#CFDAE6" strokeWidth="1.2" fill="none" />
        {/* каналы */}
        <path d="M30 0 C 34 30, 26 50, 34 66" stroke="#DCE4EC" strokeWidth="1.6" fill="none" />
        <path d="M62 0 C 58 28, 66 44, 60 62" stroke="#DCE4EC" strokeWidth="1.4" fill="none" />
        {/* улицы */}
        {[16, 30, 44, 58, 74, 88].map((y) => (
          <line key={y} x1="-5" y1={y} x2="105" y2={y - 8} stroke="#F7F8FA" strokeWidth="1.6" />
        ))}
        {[12, 28, 46, 64, 82].map((x) => (
          <line key={x} x1={x} y1="-5" x2={x - 10} y2="105" stroke="#F7F8FA" strokeWidth="1.4" />
        ))}
        <path d="M0 40 C 30 36, 60 46, 100 34" stroke="#F2F3F5" strokeWidth="4" fill="none" />
        {route && (
          <path
            d={`M ${pts.map(([x, y]) => `${x} ${y}`).join(' L ')}`}
            stroke="#FFFFFF" strokeWidth="2.4" fill="none" strokeLinecap="round"
          />
        )}
        {route && (
          <path
            d={`M ${pts.map(([x, y]) => `${x} ${y}`).join(' L ')}`}
            stroke="var(--primary)" strokeWidth="1.4" strokeDasharray="3 2.6" fill="none" strokeLinecap="round"
          />
        )}
      </svg>
      {pts.map(([x, y], i) => (
        <div
          key={i}
          style={{
            position: 'absolute', left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)',
            width: 14, height: 14, borderRadius: '50%', border: '2px solid #fff',
            background: `hsl(${215 + ((i * 24) % 40)} 30% ${52 + (i % 3) * 8}%)`,
            boxShadow: '0 1px 4px rgba(0,0,0,.18)',
          }}
        />
      ))}
    </div>
  );
}
