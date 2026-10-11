import React from 'react';

export const CameraIcon = ({ className = "w-6 h-6", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
    <circle cx="12" cy="13" r="3.5"/>
    <circle cx="17.5" cy="9.5" r="0.75" fill={color}/>
  </svg>
);

export const FilmIcon = ({ className = "w-6 h-6", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="3" width="20" height="18" rx="2"/>
    <path d="M7 3v18"/>
    <path d="M17 3v18"/>
    <path d="M2 7.5h5"/>
    <path d="M2 12h5"/>
    <path d="M2 16.5h5"/>
    <path d="M17 7.5h5"/>
    <path d="M17 12h5"/>
    <path d="M17 16.5h5"/>
  </svg>
);

export const ClapperboardIcon = ({ className = "w-6 h-6", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4z"/>
    <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4V7z"/>
    <path d="M7 5l3 6"/>
    <path d="M14 5l3 6"/>
  </svg>
);

export const WhatsAppIcon = ({ className = "w-5 h-5", size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.08C19.42 7.64 20.28 9.7 20.28 11.91C20.28 16.45 16.59 20.15 12.04 20.15C10.56 20.15 9.12 19.75 7.86 19L7.56 18.82L4.44 19.64L5.27 16.6L5.07 16.29C4.24 14.97 3.8 13.46 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67ZM9.14 7.27C8.96 7.27 8.78 7.33 8.63 7.58C8.42 7.94 7.74 8.58 7.74 9.87C7.74 11.16 8.68 12.4 8.81 12.58C8.94 12.76 10.66 15.41 13.3 16.55C13.93 16.82 14.42 16.98 14.8 17.1C15.43 17.3 16 17.27 16.45 17.2C16.95 17.13 17.99 16.57 18.21 15.96C18.43 15.35 18.43 14.83 18.36 14.72C18.29 14.61 18.11 14.54 17.84 14.41C17.57 14.27 16.24 13.62 16 13.52C15.75 13.43 15.57 13.38 15.39 13.66C15.21 13.94 14.69 14.54 14.53 14.72C14.37 14.9 14.21 14.92 13.94 14.79C13.67 14.65 12.8 14.37 11.77 13.45C10.97 12.73 10.43 11.85 10.27 11.58C10.11 11.31 10.25 11.16 10.39 11.02C10.51 10.9 10.66 10.7 10.8 10.54C10.94 10.38 10.98 10.26 11.07 10.08C11.16 9.9 11.12 9.75 11.05 9.61C10.98 9.47 10.43 8.13 10.21 7.59C9.99 7.07 9.77 7.14 9.61 7.13C9.46 7.13 9.3 7.13 9.14 7.27Z"/>
  </svg>
);

export const InstagramIcon = ({ className = "w-5 h-5", size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export const HeartIcon = ({ className = "w-5 h-5", size = 20, fill = "none", color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

export const SparkleIcon = ({ className = "w-5 h-5", size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
    <path d="M12 2L14.2 8.8L21 11L14.2 13.2L12 20L9.8 13.2L3 11L9.8 8.8L12 2Z"/>
  </svg>
);

export const ChevronDownIcon = ({ className = "w-5 h-5", size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

export const CloseIcon = ({ className = "w-6 h-6", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

export const ArrowLeftIcon = ({ className = "w-6 h-6", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12 19 5 12 12 5"/>
  </svg>
);

export const ArrowRightIcon = ({ className = "w-6 h-6", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

export const MenuIcon = ({ className = "w-6 h-6", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
