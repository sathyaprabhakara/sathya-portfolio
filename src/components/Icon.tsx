type IconName = 'arrow-up-right' | 'arrow-right' | 'arrow-down' | 'arrow-left' | 'spark' | 'location' | 'menu' | 'close' | 'check';

export default function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  const paths: Partial<Record<IconName, string>> = {
    'arrow-up-right': 'M5 19 19 5M5 5h14v14',
    'arrow-right': 'M4 12h16m-6-6 6 6-6 6',
    'arrow-down': 'M12 4v16m-6-6 6 6 6-6',
    'arrow-left': 'M20 12H4m6-6-6 6 6 6',
    spark: 'M12 2v20M2 12h20M5 5l14 14M5 19 19 5',
    menu: 'M4 7h16M4 12h16M4 17h16',
    close: 'm5 5 14 14M5 19 19 5',
    check: 'm4 12 5 5L20 6',
  };
  return (
    <svg className={`icon ${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {name === 'location' ? <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></> : <path d={paths[name]}/>}
    </svg>
  );
}
