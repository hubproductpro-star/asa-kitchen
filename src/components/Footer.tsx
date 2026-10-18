import { business, whatsappUrl } from '../data/business';
import { ArrowUpRight, BowlMark } from './Icons';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const message = `Hello ${business.name}, I would like to get in touch.`;

  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <a className="brand-lockup brand-lockup--footer" href="#home" aria-label="Àṣà Kitchen home">
              <span className="brand-lockup__mark"><BowlMark /></span>
              <span className="brand-lockup__name"><span>Àṣà</span><span className="brand-lockup__sub">KITCHEN</span></span>
            </a>
            <p>Contemporary Nigerian hospitality, rooted in flavour and made for sharing.</p>
          </div>

          <div className="site-footer__column">
            <h2>Explore</h2>
            <nav aria-label="Footer navigation">
              {footerLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
            </nav>
          </div>

          <div className="site-footer__column site-footer__contact">
            <h2>Get in touch</h2>
            <a href={business.phoneHref}>{business.phone}</a>
            <a href={`mailto:${business.email}`}>{business.email}</a>
            <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight /></a>
            <p>{business.address}</p>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} Àṣà Kitchen. All rights reserved.</p>
          <p className="site-footer__note">Food and setting imagery is illustrative.</p>
          <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">Say hello <ArrowUpRight /></a>
        </div>
      </div>
    </footer>
  );
}
