import React from 'react';
import type { Category } from './data';

/* ---------- Иконки (SVG, 22px) ---------- */
const ic = (d: React.ReactNode) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
);
/* ---------- Иконки из макета (Figma, fill-стиль) ---------- */
const icf = (d: React.ReactNode) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none">{d}</svg>
);
export const IconBell = () => icf(<>
  <path d="M12.751 6C12.751 5.58579 12.4152 5.25 12.001 5.25C11.5867 5.25 11.251 5.58579 11.251 6V10C11.251 10.4142 11.5867 10.75 12.001 10.75C12.4152 10.75 12.751 10.4142 12.751 10V6Z" />
  <path fillRule="evenodd" clipRule="evenodd" d="M4.25102 9C4.25102 4.71979 7.72081 1.25 12.001 1.25C16.2812 1.25 19.751 4.71979 19.751 9V9.7041C19.751 10.401 19.9573 11.0824 20.3439 11.6622L21.4925 13.3851C22.8256 15.3848 21.8079 18.1028 19.4893 18.7351C18.7336 18.9412 17.9716 19.1155 17.2051 19.2581L17.2033 19.2632C16.4343 21.3151 14.3789 22.75 12.001 22.75C9.62296 22.75 7.56765 21.3151 6.79865 19.2632L6.79676 19.2581C6.03035 19.1155 5.26836 18.9412 4.51274 18.7351C2.19415 18.1028 1.17644 15.3848 2.50954 13.3851L3.65814 11.6622C4.04473 11.0824 4.25102 10.401 4.25102 9.7041V9ZM8.62447 19.5369C10.8674 19.8049 13.1345 19.805 15.3774 19.537C14.6665 20.5585 13.4299 21.25 12.001 21.25C10.572 21.25 9.33542 20.5585 8.62447 19.5369ZM12.001 2.75C8.54924 2.75 5.75102 5.54822 5.75102 9V9.7041C5.75102 10.6972 5.45707 11.668 4.90622 12.4943L3.75762 14.2172C2.99244 15.3649 3.57659 16.925 4.90742 17.288C9.55167 18.5546 14.4504 18.5546 19.0946 17.288C20.4254 16.925 21.0096 15.3649 20.2444 14.2172L19.0958 12.4943C18.545 11.668 18.251 10.6972 18.251 9.7041V9C18.251 5.54822 15.4528 2.75 12.001 2.75Z" />
</>);
export const IconSearch = () => icf(<path fillRule="evenodd" clipRule="evenodd" d="M11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75ZM1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 17.1609 17.1609 21.75 11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5ZM19.4697 19.4697C19.7626 19.1768 20.2374 19.1768 20.5303 19.4697L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L19.4697 20.5303C19.1768 20.2374 19.1768 19.7626 19.4697 19.4697Z" />);
export const IconCards = () => ic(<><rect x="3" y="6" width="13" height="15" rx="2.5" /><path d="M8 3h11a2 2 0 0 1 2 2v13" /></>);
export const IconRoute = () => icf(<path fillRule="evenodd" clipRule="evenodd" d="M5.25 7.70031C5.25 4.10215 8.30876 1.25 12 1.25C15.608 1.25 18.6116 3.97488 18.7454 7.45788L19.2231 7.61714C19.6863 7.77148 20.0922 7.90676 20.4142 8.05657C20.7623 8.21853 21.0814 8.42714 21.3253 8.76554C21.5692 9.10394 21.6662 9.47259 21.7098 9.85407C21.7501 10.207 21.75 10.6348 21.75 11.123V16.8712C21.75 17.4806 21.7501 18.0005 21.7028 18.4176C21.653 18.8563 21.5418 19.2875 21.2404 19.6553C21.0674 19.8665 20.8573 20.0445 20.6205 20.1805C20.2081 20.4173 19.7645 20.4561 19.3236 20.433C18.9044 20.4111 18.3915 20.3256 17.7904 20.2254L17.7488 20.2185C16.456 20.003 15.9351 19.9216 15.4274 19.9641C15.2417 19.9796 15.0571 20.0074 14.875 20.0471C14.3774 20.1558 13.8988 20.3891 12.716 20.9805C12.6749 21.0011 12.6342 21.0214 12.594 21.0415C11.2114 21.7331 10.3595 22.1592 9.44031 22.2923C9.16384 22.3323 8.88482 22.3522 8.60546 22.3516C7.67668 22.3499 6.77995 22.0508 5.32536 21.5657C5.28328 21.5517 5.24074 21.5375 5.19772 21.5231L4.81415 21.3953L4.77684 21.3828C4.31373 21.2285 3.90783 21.0932 3.5858 20.9434C3.23766 20.7815 2.91861 20.5729 2.67471 20.2345C2.4308 19.8961 2.33379 19.5274 2.29024 19.1459C2.24995 18.793 2.24997 18.3652 2.25 17.877L2.25 12.8572C2.24997 12.0711 2.24994 11.4085 2.31729 10.8895C2.38759 10.3478 2.54652 9.81811 2.98262 9.4198C3.11082 9.30271 3.25213 9.20085 3.40375 9.11626C3.91953 8.8285 4.47226 8.84521 5.00841 8.94983C5.11717 8.97105 5.23109 8.99718 5.35019 9.02754C5.28411 8.5817 5.25 8.13723 5.25 7.70031ZM5.74869 10.7093C5.32072 10.5713 4.99224 10.475 4.72113 10.4221C4.32599 10.345 4.19646 10.3917 4.13459 10.4262C4.08405 10.4544 4.03694 10.4883 3.99421 10.5274C3.9419 10.5751 3.85663 10.6833 3.80482 11.0825C3.75151 11.4933 3.75 12.0575 3.75 12.908V17.8377C3.75 18.3768 3.75114 18.7181 3.78055 18.9758C3.80779 19.2143 3.85234 19.303 3.89157 19.3574C3.9308 19.4118 4.00083 19.4821 4.21849 19.5834C4.45364 19.6928 4.77709 19.8018 5.28849 19.9723L5.67205 20.1001C7.29563 20.6413 7.95089 20.8504 8.6083 20.8516C8.81478 20.852 9.02101 20.8374 9.22537 20.8078C9.87582 20.7136 10.5009 20.411 12.0452 19.6389C12.0765 19.6232 12.1074 19.6078 12.138 19.5925C13.1987 19.062 13.852 18.7352 14.555 18.5817C14.8014 18.5279 15.051 18.4903 15.3023 18.4693C16.0193 18.4093 16.7344 18.5286 17.8945 18.7221C17.9278 18.7276 17.9614 18.7332 17.9954 18.7389C18.6497 18.8479 19.0779 18.9181 19.4019 18.9351C19.7138 18.9514 19.821 18.9098 19.8735 18.8797C19.9524 18.8344 20.0225 18.775 20.0801 18.7046C20.1185 18.6578 20.1771 18.5589 20.2123 18.2486C20.2489 17.9262 20.25 17.4923 20.25 16.829V11.1623C20.25 10.6232 20.2489 10.2819 20.2195 10.0242C20.1922 9.7857 20.1477 9.69703 20.1084 9.64261C20.0692 9.58818 19.9992 9.51787 19.7815 9.41661C19.5464 9.30722 19.2229 9.19821 18.7115 9.02774L18.6527 9.00813C18.4625 10.3095 17.9996 11.6233 17.3173 12.7959C16.4048 14.364 15.0697 15.7299 13.3971 16.4595C12.5094 16.8468 11.4906 16.8468 10.6029 16.4595C8.93027 15.7299 7.59519 14.364 6.68273 12.7959C6.29871 12.136 5.9842 11.4313 5.74869 10.7093ZM12 2.75C9.06383 2.75 6.75 5.00208 6.75 7.70031C6.75 9.11775 7.18744 10.6808 7.97922 12.0415C8.77121 13.4026 9.88753 14.5109 11.2027 15.0847C11.708 15.3051 12.292 15.3051 12.7973 15.0847C14.1125 14.5109 15.2288 13.4026 16.0208 12.0415C16.8126 10.6808 17.25 9.11775 17.25 7.70031C17.25 5.00208 14.9362 2.75 12 2.75ZM12 6.75C11.3096 6.75 10.75 7.30964 10.75 8C10.75 8.69036 11.3096 9.25 12 9.25C12.6904 9.25 13.25 8.69036 13.25 8C13.25 7.30964 12.6904 6.75 12 6.75ZM9.25 8C9.25 6.48122 10.4812 5.25 12 5.25C13.5188 5.25 14.75 6.48122 14.75 8C14.75 9.51878 13.5188 10.75 12 10.75C10.4812 10.75 9.25 9.51878 9.25 8Z" />);
export const IconChatHeart = () => icf(<path fillRule="evenodd" clipRule="evenodd" d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 13.4811 3.09753 14.8788 3.7148 16.1181C3.96254 16.6155 4.05794 17.2103 3.90163 17.7945L3.30602 20.0205C3.19663 20.4293 3.57066 20.8034 3.97949 20.694L6.20553 20.0984C6.78973 19.9421 7.38451 20.0375 7.88191 20.2852C9.12121 20.9025 10.5189 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C10.2817 22.75 8.65552 22.3463 7.21315 21.6279C6.99791 21.5207 6.77814 21.4979 6.59324 21.5474L4.3672 22.143C2.84337 22.5507 1.44927 21.1566 1.857 19.6328L2.4526 17.4068C2.50208 17.2219 2.47933 17.0021 2.37213 16.7869C1.65371 15.3445 1.25 13.7183 1.25 12ZM15.272 7.82214C16.507 8.28392 17.25 9.53897 17.25 11.1084C17.25 12.0241 16.8154 12.8821 16.2951 13.5946C15.766 14.3192 15.0855 14.9787 14.4574 15.513C14.4262 15.5396 14.3952 15.566 14.3644 15.5923C13.6274 16.2207 13.0148 16.7431 12 16.7431C10.9852 16.7431 10.3726 16.2207 9.63564 15.5923C9.60486 15.566 9.57385 15.5396 9.54259 15.513C8.91448 14.9786 8.23403 14.3192 7.70492 13.5946C7.18465 12.8821 6.75 12.0241 6.75 11.1084C6.75 9.53898 7.49299 8.28393 8.72797 7.82214C9.77086 7.43218 10.9575 7.6854 12 8.4956C13.0425 7.6854 14.2291 7.43218 15.272 7.82214ZM14.7467 9.22713C14.2295 9.03374 13.4049 9.13696 12.5359 10.0245C12.3948 10.1686 12.2017 10.2498 12 10.2498C11.7983 10.2498 11.6052 10.1686 11.4641 10.0245C10.5951 9.13696 9.77052 9.03374 9.25333 9.22713C8.74454 9.41738 8.25 10.0007 8.25 11.1084C8.25 11.5612 8.47476 12.1053 8.91635 12.71C9.34909 13.3027 9.93292 13.8757 10.5145 14.3705C11.3828 15.1091 11.586 15.2431 12 15.2431C12.414 15.2431 12.6172 15.1091 13.4855 14.3705C14.0671 13.8757 14.6509 13.3027 15.0837 12.71C15.5252 12.1053 15.75 11.5612 15.75 11.1084C15.75 10.0007 15.2555 9.41738 14.7467 9.22713Z" />);
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

/* ---------- Логотип (вектор из макета) ---------- */
export const Logo = ({ dark = false, small = false }: { dark?: boolean; small?: boolean }) => (
  <svg
    width={small ? 56 : 70}
    height={small ? 17 : 21}
    viewBox="0 0 70 21"
    fill="currentColor"
    stroke="none"
    aria-label="TO DATE"
    className="select-none"
    style={{ color: dark ? 'var(--card-ink)' : 'var(--primary)', display: 'block' }}
  >
    <path d="M64.1096 8.45149H68.2951V11.2233H64.1096V16.9056H69.3761V19.6775H61.0605V0.274536H69.3761V3.04639H64.1096V8.45149Z" />
    <path d="M50.293 0.274536H59.7173V3.04639H56.5296V19.6775H53.4806V3.04639H50.293V0.274536Z" />
    <path d="M26.4668 0.274536H31.2898C34.3388 0.274536 35.8356 1.96536 35.8356 5.06984V14.8822C35.8356 17.9867 34.3388 19.6775 31.2898 19.6775H26.4668V0.274536ZM29.5158 3.04639V16.9056H31.2344C32.2045 16.9056 32.7866 16.4067 32.7866 15.0208V4.93124C32.7866 3.54532 32.2045 3.04639 31.2344 3.04639H29.5158Z" />
    <path d="M10.5176 4.94095C10.5176 1.83648 12.153 0.0625 15.1466 0.0625C18.1402 0.0625 19.7756 1.83648 19.7756 4.94095V15.0305C19.7756 18.135 18.1402 19.9089 15.1466 19.9089C12.153 19.9089 10.5176 18.135 10.5176 15.0305V4.94095ZM13.5666 15.2245C13.5666 16.6104 14.1764 17.1371 15.1466 17.1371C16.1167 17.1371 16.7265 16.6104 16.7265 15.2245V4.74692C16.7265 3.361 16.1167 2.83435 15.1466 2.83435C14.1764 2.83435 13.5666 3.361 13.5666 4.74692V15.2245Z" />
    <path d="M0 0.274658H9.42429V3.04651H6.23666V19.6776H3.18763V3.04651H0V0.274658Z" />
    <path d="M44.8223 20.5518C41.867 20.4999 40.7968 16.9689 41.6123 13.8273C42.249 11.4647 43.8543 9.15392 45.9432 7.95962C46.3507 7.72597 46.784 7.4923 47.2172 7.31054C47.0896 6.06431 46.6311 2.63715 45.0514 2.58522C41.7905 2.48138 38.9373 12.9175 38.9373 19.5122H36.5938C36.5938 16.0331 37.1539 12.3993 38.1475 9.02412C39.2937 5.18156 41.6376 -0.218792 45.5612 0.222567C48.4909 0.560119 49.2041 4.66229 49.4845 6.71339C50.0959 6.63551 53.1702 6.60954 53.7819 6.60954L53.7563 8.99816C53.1958 8.9722 50.1978 9.02412 49.7139 9.102C49.7392 10.0367 49.7139 11.0493 49.6373 12.0099C49.5354 13.5417 49.306 20.6557 44.8223 20.5518ZM43.7268 15.4889C43.6249 16.4756 43.8543 18.0074 44.8223 18.1632C46.0707 18.3709 46.733 16.3977 47.0643 14.2946C47.3444 12.5032 47.3953 10.6079 47.3953 9.88091C45.2299 11.0493 43.9562 13.2042 43.7268 15.4889Z" />
  </svg>
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
    /* --- Категорийные символы из макета --- */
    case 'fork': // еда — вилка
      return (
        <svg style={common} viewBox="0 0 100 120" aria-hidden="true">
          <g fill="currentColor" transform="rotate(-7 50 62)">
            <rect x="2" y="38" width="30" height="7" rx="3.5" />
            <rect x="2" y="51" width="30" height="7" rx="3.5" />
            <rect x="2" y="64" width="30" height="7" rx="3.5" />
            <rect x="2" y="77" width="30" height="7" rx="3.5" />
            <path d="M26 34h12c15 8 15 46 0 54H26c8-9 8-45 0-54z" />
            <rect x="44" y="54" width="58" height="13" rx="6.5" />
          </g>
        </svg>
      );
    case 'rays': // отдых — лучи солнца
      return (
        <svg style={common} viewBox="0 0 100 120" aria-hidden="true">
          <g fill="currentColor">
            <path d="M-22 98 122 -12v20L-22 118z" />
            <path d="M-22 62 122 -48v12L-22 74z" />
            <path d="M30 122 122 76v16L48 122z" />
            <path d="M-22 22 122 -84v8L-22 30z" />
          </g>
        </svg>
      );
    case 'flower': // релакс — цветок
      return (
        <svg style={common} viewBox="0 0 100 120" aria-hidden="true">
          <g fill="currentColor" transform="translate(50 62)">
            {Array.from({ length: 8 }).map((_, i) => (
              <ellipse key={i} cx="0" cy="-25" rx="11" ry="24" transform={`rotate(${i * 45})`} />
            ))}
            <circle r="10" />
          </g>
        </svg>
      );
    case 'sofa': // дома — диван
      return (
        <svg style={common} viewBox="0 0 100 120" aria-hidden="true">
          <g fill="currentColor">
            <rect x="12" y="40" width="76" height="34" rx="15" />
            <rect x="4" y="60" width="17" height="36" rx="8.5" />
            <rect x="79" y="60" width="17" height="36" rx="8.5" />
            <rect x="15" y="70" width="70" height="26" rx="11" />
            <rect x="16" y="96" width="6" height="13" rx="3" />
            <rect x="78" y="96" width="6" height="13" rx="3" />
          </g>
        </svg>
      );
    default:
      return null;
  }
}

/* Символ и цвет силуэта на плитке категории (из макета) */
export const tileShape: Record<Category, string> = { 'еда': 'fork', 'отдых': 'rays', 'релакс': 'flower', 'дома': 'sofa' };
export const tileShapeColor: Record<Category, string> = {
  'еда': 'var(--pink-soft)',
  'отдых': 'var(--yellow)',
  'релакс': 'rgba(255,255,255,0.25)',
  'дома': 'rgba(255,255,255,0.20)',
};
/* Цвет абстрактных пятен на картах колоды (из макета) */
export const cardShapeColor: Record<Category, string> = {
  'еда': 'var(--pink-shape)',
  'отдых': 'rgba(240,222,110,0.9)',
  'релакс': 'rgba(255,255,255,0.22)',
  'дома': 'rgba(255,255,255,0.22)',
};

export const catClass = (c: Category) => `cat-${c}`;
export const catLabel = (c: Category) => c[0].toUpperCase() + c.slice(1);

/* ---------- Шапка (всегда зафиксирована сверху) ---------- */
export function Header({ onBell, onSearch }: { onBell: () => void; onSearch: () => void }) {
  return (
    <div style={{ position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)', width: 390, maxWidth: '100%', zIndex: 35, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 20px 0', pointerEvents: 'none' }}>
      <button className="circle-btn glass" onClick={onBell} aria-label="Уведомления" style={{ position: 'relative', pointerEvents: 'auto' }}>
        <IconBell />
        <span style={{ position: 'absolute', top: 10, right: 12, width: 9, height: 9, borderRadius: '50%', background: 'var(--primary)', border: '2px solid var(--surface)' }} />
      </button>
      <div style={{ paddingTop: 4 }}><Logo /></div>
      <button className="circle-btn glass" onClick={onSearch} aria-label="Поиск" style={{ pointerEvents: 'auto' }}><IconSearch /></button>
    </div>
  );
}

/* ---------- Нижняя навигация ---------- */
export type NavKey = 'home' | 'routes' | 'favorites' | 'profile';
export function BottomNav({ active, go, initial }: { active: NavKey; go: (k: NavKey) => void; initial: string }) {
  return (
    <nav className="navbar" aria-label="Основная навигация">
      <div className="navbar-pill glass">
        <button className={`nav-ic ${active === 'home' ? 'active' : ''}`} onClick={() => go('home')} aria-label="Каталог" title="Каталог"><IconCards /></button>
        <button className={`nav-ic ${active === 'routes' ? 'active' : ''}`} onClick={() => go('routes')} aria-label="Маршруты" title="Маршруты"><IconRoute /></button>
        <button className={`nav-ic ${active === 'favorites' ? 'active' : ''}`} onClick={() => go('favorites')} aria-label="Избранное" title="Избранное"><IconChatHeart /></button>
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
      <Silhouette shape={tileShape[idea.category]} color={tileShapeColor[idea.category]} />
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
