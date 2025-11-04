
import React from 'react';

// Props for all icons
interface IconProps {
  className?: string;
}

export const FireIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C12 2 12 2 12 2C12 2 12 2 12 2C12 2 12 2 12 2C12 2 12 2 12 2M13.53 3.47C13.53 3.47 13.53 3.47 13.53 3.47C14.15 4.34 14.5 5.35 14.5 6.5C14.5 8.98 12.48 11 10 11C7.52 11 5.5 8.98 5.5 6.5C5.5 5.35 5.85 4.34 6.47 3.47C6.47 3.47 6.47 3.47 6.47 3.47C6.47 3.47 6.47 3.47 6.47 3.47C7.34 2.55 8.58 2 10 2C11.42 2 12.66 2.55 13.53 3.47M10 0C6.43 0 3.5 2.56 3.5 5.61C3.5 7.42 4.41 9.24 5.5 10.36C5.5 10.36 5.5 10.36 5.5 10.36C4.09 11.53 3 13.25 3 15.19C3 17.58 4.54 19.5 6.5 20.35V20.5C6.5 22.43 8.07 24 10 24C11.93 24 13.5 22.43 13.5 20.5V20.35C15.46 19.5 17 17.58 17 15.19C17 13.25 15.91 11.53 14.5 10.36C14.5 10.36 14.5 10.36 14.5 10.36C15.59 9.24 16.5 7.42 16.5 5.61C16.5 2.56 13.57 0 10 0Z" />
  </svg>
);

export const ShieldIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
  </svg>
);

export const SuccessIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

export const FailureIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
  </svg>
);

export const WarningIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.51 12.992a3 3 0 01-2.598 4.504H4.49a3 3 0 01-2.598-4.504l7.51-12.992zM10.5 13.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm1.5-6a.75.75 0 00-.75.75v3.75a.75.75 0 001.5 0V8.25a.75.75 0 00-.75-.75z" clipRule="evenodd" />
    </svg>
);

export const KeyIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
    </svg>
);