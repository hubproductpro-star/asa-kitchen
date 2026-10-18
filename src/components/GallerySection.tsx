import { FoodImage } from './FoodImage';

type GalleryItem = {
  title: string;
  alt: string;
  image: string;
  className: string;
};

const galleryItems: GalleryItem[] = [
  {
    title: 'Party jollof, full of colour',
    alt: 'Nigerian party jollof rice with grilled chicken and golden fried plantain',
    image: '/images/hero-jollof.webp',
    className: 'gallery-tile--feature',
  },
  {
    title: 'A little fire, a lot of flavour',
    alt: 'Nigerian-style grilled fish with pepper, onion, lime and herbs',
    image: '/images/grilled-fish.webp',
    className: 'gallery-tile--fish',
  },
  {
    title: 'The comfort of soup and swallow',
    alt: 'Egusi soup and pounded yam arranged on a warm wooden table',
    image: '/images/soup-swallow.webp',
    className: 'gallery-tile--soup',
  },
  {
    title: 'Golden, just like dodo',
    alt: 'A plate of Nigerian fried rice with chicken and plantain',
    image: '/images/fried-rice.webp',
    className: 'gallery-tile--rice',
  },
  {
    title: 'A welcoming table, imagined',
    alt: 'Illustrative contemporary dining-room concept with warm natural light',
    image: '/images/dining-room.webp',
    className: 'gallery-tile--space',
  },
];

export function GallerySection() {
  return (
    <section className="gallery-section section-pad" id="gallery" aria-labelledby="gallery-title">
      <div className="page-shell">
        <div className="gallery-section__heading">
          <div>
            <p className="eyebrow"><span className="eyebrow__dash" /> A visual taste of Àṣà</p>
            <h2 className="section-title" id="gallery-title">Gathered around <em>good food.</em></h2>
          </div>
          <p className="body-copy">A glimpse of the colours, character and comfort of Nigerian cuisine.</p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <figure className={`gallery-tile ${item.className}`} key={item.title}>
              <FoodImage src={item.image} alt={item.alt} className="gallery-tile__image" />
              <figcaption>
                <span className="gallery-tile__number">0{index + 1}</span>
                <span>{item.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="gallery-section__note">Food and interior imagery is illustrative and does not represent verified current dishes or photographs of Àṣà Kitchen.</p>
      </div>
    </section>
  );
}
