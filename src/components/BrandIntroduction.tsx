import { ArrowUpRight } from './Icons';
import { FoodImage } from './FoodImage';

export function BrandIntroduction() {
  return (
    <section className="introduction section-pad" id="introduction" aria-labelledby="introduction-title">
      <div className="page-shell introduction__layout">
        <div className="introduction__copy">
          <p className="eyebrow"><span className="eyebrow__dash" /> A table with meaning</p>
          <h2 className="section-title" id="introduction-title">Rooted in tradition.<br /><em>Made for today.</em></h2>
          <p className="body-copy">
            At Àṣà Kitchen, Nigerian cuisine takes centre stage. Discover familiar flavours, beautifully prepared dishes, and a welcoming atmosphere inspired by the richness of our food culture.
          </p>
          <a className="text-link" href="#about">
            Get to know Àṣà <ArrowUpRight />
          </a>
          <p className="introduction__note">Food and setting images across this site are illustrative, not photographs of the restaurant.</p>
        </div>

        <figure className="introduction__visual">
          <div className="introduction__image-frame">
            <FoodImage
              src="/images/jollof-plate.webp"
              alt="A plate of Nigerian jollof rice, grilled chicken and golden fried plantain"
              className="introduction__image"
            />
          </div>
          <figcaption className="image-caption">
            <span>Flavour, culture, togetherness</span>
            <span>01 / 05</span>
          </figcaption>
          <span className="introduction__seal" aria-hidden="true"><span>Àṣà</span><span>at the table</span></span>
        </figure>
      </div>
    </section>
  );
}
