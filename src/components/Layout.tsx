import Icon from './Icon';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const { pathname } = useLocation();
  useEffect(() => { document.title = `${pathname === '/' ? 'Full-stack engineer' : pathname.startsWith('/project') ? 'Project details' : pathname === '/self' ? 'Playground' : pathname === '/work' ? 'Experience' : 'Résumé'} — Sathya P`; }, [pathname]);
  useEffect(() => () => { clearTimeout(timer.current); document.body.style.overflow = ''; }, []);
  function closeMenu() { dialog.current?.close(); document.body.style.overflow = ''; trigger.current?.focus(); }
  async function copyEmail() {
    try { await navigator.clipboard.writeText('sathyaprabhakara@gmail.com'); setCopied(true); clearTimeout(timer.current); timer.current = setTimeout(() => setCopied(false), 2400); }
    catch { window.location.href = 'mailto:sathyaprabhakara@gmail.com'; }
  }
  return <div className="app">
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="header"><nav className="nav" aria-label="Main navigation">
      <Link className="site-name" to="/" aria-label="Sathya, home">sathya<span><Icon name="spark" /></span></Link>
      <div className="nav-links"><NavLink to="/work">Experience</NavLink><NavLink to="/self">Playground</NavLink><NavLink to="/resume">Résumé <span><Icon name="arrow-up-right" /></span></NavLink></div>
      <a className="nav-contact" href="mailto:sathyaprabhakara@gmail.com">Let’s talk <span><Icon name="arrow-up-right" /></span></a>
      <button ref={trigger} className="menu-toggle" aria-label="Open navigation" aria-haspopup="dialog" onClick={() => { dialog.current?.showModal(); document.body.style.overflow = 'hidden'; }}><Icon name="menu" /></button>
    </nav></header>
    <main id="main" tabIndex={-1} className="main" key={pathname}>{children}</main>
    <dialog ref={dialog} className="menu-dialog" aria-label="Navigation" onCancel={closeMenu} onClick={e => { if (e.target === e.currentTarget) closeMenu(); }} onClose={() => { document.body.style.overflow = ''; }}>
      <button className="menu-close" onClick={closeMenu} aria-label="Close navigation"><Icon name="close" /></button>
      <p className="eyebrow">Take a look around</p><nav>{[['/', 'Home'], ['/work', 'Experience'], ['/self', 'Playground'], ['/resume', 'Résumé']].map(([url, label]) => <Link key={url} to={url} onClick={closeMenu}>{label} <span><Icon name="arrow-up-right" /></span></Link>)}</nav>
      <a className="menu-email" href="mailto:sathyaprabhakara@gmail.com">sathyaprabhakara@gmail.com</a>
    </dialog>
    <footer className="footer"><div className="footer-top"><div><p className="eyebrow">Have something in mind?</p><a className="footer-title" href="mailto:sathyaprabhakara@gmail.com">Let’s build<br/>something <em>great.</em> <span><Icon name="arrow-up-right" /></span></a></div><div className="footer-contact"><span className="small-label">START A CONVERSATION</span><a href="mailto:sathyaprabhakara@gmail.com">sathyaprabhakara@gmail.com</a><button onClick={copyEmail} aria-live="polite">{copied ? 'Copied to clipboard' : 'Copy email address'} <Icon name={copied ? 'check' : 'arrow-up-right'} /></button></div></div>
      <div className="footer-bottom"><p className="footer-copyright">© {new Date().getFullYear()} <strong>Sathya P</strong></p><p className="footer-signature">Built with intention.<span>From Bengaluru.</span></p><div><a href="https://github.com/sathyaprabhakara" target="_blank" rel="noreferrer">GitHub <Icon name="arrow-up-right" /></a><a href="https://www.linkedin.com/in/sathyaprabhakara" target="_blank" rel="noreferrer">LinkedIn <Icon name="arrow-up-right" /></a></div></div>
    </footer>
  </div>;
}
