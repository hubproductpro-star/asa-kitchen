import { business } from '../data/business';
import { ArrowUpRight, PinIcon } from './Icons';
import { FoodImage } from './FoodImage';

export function AboutSection() {
  return (
    <section className="about-section section-pad" id="about" aria-labelledby="about-title">
      <div className="page-shell about-section__layout">
        <figure className="about-section__visual">
          <FoodImage
            src="/images/dining-room.webp"
            alt="Illustrative contemporary dining room concept with warm light, walnut tables and forest-green accents"
            className="about-section__image"
          />
          <figcaption className="about-section__image-note">An illustrative dining-room concept</figcaption>
          <span className="about-section__visual-mark" aria-hidden="true">KITCHEN<br /><span>Àṣà</span></span>
        </figure>

        <div className="about-section__copy">
          <p className="eyebrow"><span className="eyebrow__dash" /> A place to gather</p>
          <h2 className="section-title" id="about-title">A place for good food and <em>good company.</em></h2>
          <p className="body-copy">
            Àṣà Kitchen celebrates the pleasure of Nigerian food in a welcoming setting. Our website is an invitation to explore our menu, discover our culinary identity, and connect with us for your next meal.
          </p>
          <div className="about-section__location">
            <PinIcon />
            <div>
              <span>Find us in</span>
              <strong>{business.location}</strong>
            </div>
          </div>
          <a className="text-link" href="#contact">
            Plan a visit <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
