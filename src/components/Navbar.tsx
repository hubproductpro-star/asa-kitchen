import { useEffect, useState } from 'react';
import { ArrowUpRight, BowlMark } from './Icons';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const headerClass = `site-header${isScrolled || menuOpen ? ' site-header--solid' : ''}${menuOpen ? ' site-header--open' : ''}`;

  return (
    <header className={headerClass}>
      <div className="site-header__inner">
        <a className="brand-lockup" href="#home" aria-label="Àṣà Kitchen home" onClick={closeMenu}>
          <span className="brand-lockup__mark"><BowlMark /></span>
          <span className="brand-lockup__name">
            <span>Àṣà</span>
            <span className="brand-lockup__sub">KITCHEN</span>
          </span>
        </a>

        <button
          className={`menu-toggle${menuOpen ? ' menu-toggle--open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className={`primary-nav${menuOpen ? ' primary-nav--open' : ''}`} aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href="#enquiry" onClick={closeMenu}>
            Make an enquiry <ArrowUpRight />
          </a>
        </nav>
      </div>
    </header>
  );
}
