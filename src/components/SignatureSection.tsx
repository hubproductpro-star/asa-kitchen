import { ArrowRight } from './Icons';
import { FoodImage } from './FoodImage';

export function SignatureSection() {
  return (
    <section className="signature-section" aria-labelledby="signature-title">
      <div className="page-shell signature-section__layout">
        <div className="signature-section__copy">
          <p className="eyebrow eyebrow--light"><span className="eyebrow__dash" /> The joy of the table</p>
          <h2 className="section-title section-title--light" id="signature-title">Good food.<br /><em>Rich flavour.</em><br />Genuine hospitality.</h2>
          <p className="body-copy body-copy--light">
            From satisfying rice dishes to deeply comforting Nigerian classics, discover food that brings flavour, culture, and the joy of sharing to the table.
          </p>
          <a className="text-link text-link--light" href="#gallery">
            Take a closer look <ArrowRight />
          </a>
          <span className="signature-section__ornament" aria-hidden="true">Àṣà <i /> Nigerian food, thoughtfully shared</span>
        </div>

        <div className="signature-collage" aria-label="Illustrative Nigerian food photography">
          <figure className="signature-collage__main">
            <FoodImage
              src="/images/jollof-plate.webp"
              alt="A Nigerian jollof rice plate with grilled chicken and plantain"
              className="signature-collage__image"
            />
            <figcaption>Familiar favourites, made for the moment</figcaption>
          </figure>
          <figure className="signature-collage__detail">
            <FoodImage
              src="/images/soup-swallow.webp"
              alt="Egusi soup with leafy greens and pounded yam"
              className="signature-collage__image"
            />
          </figure>
          <span className="signature-collage__stamp" aria-hidden="true">A taste<br />of home</span>
        </div>
      </div>
    </section>
  );
}
