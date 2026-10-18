import { useMemo, useState } from 'react';
import { business, whatsappUrl } from '../data/business';
import { menuCategories, menuItems, type MenuItem } from '../data/menu';
import { ArrowUpRight } from './Icons';
import { FoodImage } from './FoodImage';

function formatPrice(price: number | null) {
  if (price === null) return 'Price to be confirmed';
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(price);
}

function availabilityLabel(availability: MenuItem['availability']) {
  if (availability === 'available') return 'Available';
  if (availability === 'unavailable') return 'Currently unavailable';
  return 'Availability to be confirmed';
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="menu-card">
      <div className="menu-card__image-wrap">
        <FoodImage src={item.image} alt={item.alt} className="menu-card__image" />
        <span className="menu-card__image-label">Example dish</span>
      </div>
      <div className="menu-card__body">
        <div className="menu-card__heading">
          <h3>{item.name}</h3>
          <span className="menu-card__price">{formatPrice(item.price)}</span>
        </div>
        <p>{item.description}</p>
        <span className="menu-card__status">{item.isExample ? 'Illustrative menu preview' : 'Menu item'} · {availabilityLabel(item.availability)}</span>
      </div>
    </article>
  );
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]?.id ?? 'rice');
  const visibleItems = useMemo(
    () => menuItems.filter((item) => item.categoryId === activeCategory),
    [activeCategory],
  );
  const selectedCategory = menuCategories.find((category) => category.id === activeCategory)?.label ?? 'menu';
  const enquireUrl = whatsappUrl(`Hello ${business.name}, could you please confirm your current menu, prices and availability?`);

  return (
    <section className="menu-section section-pad" id="menu" aria-labelledby="menu-title">
      <div className="page-shell">
        <div className="menu-section__top">
          <div>
            <p className="eyebrow"><span className="eyebrow__dash" /> Made with care</p>
            <h2 className="section-title" id="menu-title">A taste of <em>Àṣà.</em></h2>
          </div>
          <div className="menu-section__intro">
            <p className="body-copy">Explore the dishes and flavours that make every meal special.</p>
            <p className="menu-section__disclaimer">
              Menu preview only. These examples, prices and availability are not yet confirmed; please ask us for the current menu.
            </p>
          </div>
        </div>

        <div className="menu-filters" role="group" aria-label="Filter menu preview by category">
          {menuCategories.map((category) => (
            <button
              className={`menu-filter${activeCategory === category.id ? ' menu-filter--active' : ''}`}
              type="button"
              key={category.id}
              aria-pressed={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="menu-grid" id="menu-items" aria-live="polite" aria-label={`${selectedCategory} example dishes`}>
          {visibleItems.map((item) => <MenuCard item={item} key={item.id} />)}
        </div>

        <div className="menu-section__bottom">
          <p>Ask us what’s available today.</p>
          <a className="button button--outline" href={enquireUrl} target="_blank" rel="noopener noreferrer">
            Enquire on WhatsApp <ArrowUpRight />
          </a>
          <span className="menu-section__bottom-note">Prices shown as “to be confirmed” until supplied by Àṣà Kitchen.</span>
        </div>
      </div>
    </section>
  );
}
