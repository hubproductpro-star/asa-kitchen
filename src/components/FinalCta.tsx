import { business, whatsappUrl } from '../data/business';
import { ArrowRight, ArrowUpRight } from './Icons';
import { FoodImage } from './FoodImage';

export function FinalCta() {
  const message = `Hello ${business.name}, I would love to know more about dining with you.`;

  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <FoodImage
        src="/images/grilled-fish.webp"
        alt=""
        className="final-cta__image"
      />
      <div className="final-cta__shade" aria-hidden="true" />
      <div className="page-shell final-cta__inner">
        <p className="eyebrow eyebrow--light"><span className="eyebrow__dash" /> Àṣà Kitchen · {business.location}</p>
        <h2 id="final-cta-title">Come hungry.<br /><em>Leave inspired.</em></h2>
        <p>Explore the menu or get in touch with Àṣà Kitchen in Ikeja, Lagos.</p>
        <div className="final-cta__actions">
          <a className="button button--ivory" href="#menu">Explore the menu <ArrowRight /></a>
          <a className="button button--transparent" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">Chat on WhatsApp <ArrowUpRight /></a>
        </div>
      </div>
    </section>
  );
}
