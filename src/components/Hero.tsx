import { business } from '../data/business';
import { ArrowDown, ArrowRight } from './Icons';
import { FoodImage } from './FoodImage';

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <FoodImage
        src="/images/hero-jollof.webp"
        alt="Nigerian jollof rice with peppered grilled chicken and ripe plantain on a dark table"
        className="hero__image"
        loading="eager"
        fetchPriority="high"
      />
      <div className="hero__shade" aria-hidden="true" />

      <div className="hero__content page-shell">
        <p className="eyebrow eyebrow--light hero__eyebrow">
          <span className="eyebrow__dash" /> Contemporary Nigerian cuisine
        </p>
        <h1 id="hero-title">The soul of <em>Nigerian flavour.</em></h1>
        <p className="hero__intro">
          Discover the richness of Nigerian cuisine, thoughtfully prepared and served with the warmth of Àṣà Kitchen.
        </p>
        <div className="hero__actions">
          <a className="button button--ivory" href="#menu">
            Explore our menu <ArrowRight />
          </a>
          <a className="hero__text-link" href="#contact">
            Contact the restaurant <ArrowRight />
          </a>
        </div>
        <p className="hero__image-note">Illustrative food photography — not a photograph of Àṣà Kitchen.</p>
      </div>

      <div className="hero__bottom page-shell">
        <p className="hero__location"><span className="location-dot" /> {business.location}</p>
        <a className="hero__scroll" href="#introduction" aria-label="Scroll to discover Àṣà Kitchen">
          <span>Scroll to discover</span>
          <ArrowDown />
        </a>
        <p className="hero__index" aria-hidden="true">Àṣà&nbsp;&nbsp; / &nbsp;&nbsp;KITCHEN</p>
      </div>
    </section>
  );
}
