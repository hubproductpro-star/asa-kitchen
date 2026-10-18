import { business, directionsUrl, whatsappUrl, type OpeningHour } from '../data/business';
import { ArrowUpRight, PinIcon } from './Icons';

function OpeningHours({ hours }: { hours: readonly OpeningHour[] }) {
  if (hours.length === 0) return null;

  return (
    <div className="opening-hours">
      <h3>Opening hours</h3>
      <dl>
        {hours.map((hour) => (
          <div key={hour.day}>
            <dt>{hour.day}</dt>
            <dd>{hour.opens}–{hour.closes}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function ContactSection() {
  const defaultMessage = `Hello ${business.name}, I would like to get in touch.`;

  return (
    <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
      <div className="page-shell contact-section__layout">
        <div className="contact-section__heading">
          <p className="eyebrow"><span className="eyebrow__dash" /> Come find us</p>
          <h2 className="section-title" id="contact-title">Find <em>Àṣà Kitchen.</em></h2>
          <p className="body-copy">We’re here in Ikeja, Lagos. Call, write, or get directions for your next visit.</p>
          <a className="contact-section__whatsapp" href={whatsappUrl(defaultMessage)} target="_blank" rel="noopener noreferrer">
            Chat with us on WhatsApp <ArrowUpRight />
          </a>
        </div>

        <div className="contact-details">
          <div className="contact-details__item">
            <span className="contact-details__label">Visit</span>
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="contact-details__value contact-details__address">
              {business.address} <ArrowUpRight />
            </a>
          </div>
          <div className="contact-details__item">
            <span className="contact-details__label">Call</span>
            <a className="contact-details__value" href={business.phoneHref}>{business.phone}</a>
          </div>
          <div className="contact-details__item">
            <span className="contact-details__label">Email</span>
            <a className="contact-details__value" href={`mailto:${business.email}`}>{business.email}</a>
          </div>
          <OpeningHours hours={business.openingHours} />
        </div>

        <a className="directions-card" href={directionsUrl} target="_blank" rel="noopener noreferrer" aria-label={`Get directions to ${business.address} in Google Maps`}>
          <div className="directions-card__pattern" aria-hidden="true" />
          <span className="directions-card__pin"><PinIcon /></span>
          <span className="directions-card__overline">Ikeja · Lagos</span>
          <span className="directions-card__address">{business.streetAddress}<br />{business.addressLocality}, {business.addressRegion}</span>
          <span className="directions-card__link">Open directions <ArrowUpRight /></span>
          <span className="directions-card__footnote">Map search opens in Google Maps</span>
        </a>
      </div>
    </section>
  );
}
