export type MenuCategory = {
  id: string;
  label: string;
};

export type MenuAvailability = 'unconfirmed' | 'available' | 'unavailable';

export type MenuItem = {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  /** Leave null until Àṣà Kitchen confirms a price. */
  price: number | null;
  /** Update only after the restaurant confirms current availability. */
  availability: MenuAvailability;
  /** These are sample entries until the restaurant approves its menu. */
  isExample: boolean;
};

/**
 * Editable menu preview. Replace these example entries, descriptions and image
 * paths with the restaurant's approved menu. Prices intentionally remain null.
 */
export const menuCategories: MenuCategory[] = [
  { id: 'rice', label: 'Rice dishes' },
  { id: 'grills', label: 'Proteins & grills' },
  { id: 'soups', label: 'Soups & swallow' },
  { id: 'sides', label: 'Sides & extras' },
  { id: 'drinks', label: 'Drinks' },
];

export const menuItems: MenuItem[] = [
  {
    id: 'party-jollof',
    categoryId: 'rice',
    name: 'Party jollof rice',
    description: 'A richly coloured Nigerian rice favourite, shown with grilled chicken and ripe plantain.',
    image: '/images/jollof-plate.webp',
    alt: 'Nigerian party jollof rice served with grilled chicken and golden fried plantain',
    price: null,
    availability: 'unconfirmed',
    isExample: true,
  },
  {
    id: 'fried-rice',
    categoryId: 'rice',
    name: 'Nigerian fried rice',
    description: 'A colourful rice dish with vegetables, pictured with grilled chicken and plantain.',
    image: '/images/fried-rice.webp',
    alt: 'Nigerian fried rice with vegetables, grilled chicken and fried plantain',
    price: null,
    availability: 'unconfirmed',
    isExample: true,
  },
  {
    id: 'native-rice',
    categoryId: 'rice',
    name: 'Native rice',
    description: 'A rustic Nigerian rice example, paired here with smoked fish and local spices.',
    image: '/images/native-rice.webp',
    alt: 'Nigerian-style native rice with smoked fish and herbs',
    price: null,
    availability: 'unconfirmed',
    isExample: true,
  },
  {
    id: 'grilled-chicken',
    categoryId: 'grills',
    name: 'Peppered grilled chicken',
    description: 'Tender grilled chicken with a lively pepper finish, served alongside jollof rice.',
    image: '/images/hero-jollof.webp',
    alt: 'Peppered grilled chicken served with Nigerian jollof rice and plantain',
    price: null,
    availability: 'unconfirmed',
    isExample: true,
  },
  {
    id: 'grilled-fish',
    categoryId: 'grills',
    name: 'Grilled fish',
    description: 'A whole fish with a lightly charred pepper coating, pictured with fresh garnish.',
    image: '/images/grilled-fish.webp',
    alt: 'Nigerian-style grilled fish with pepper, onion, herbs and lime',
    price: null,
    availability: 'unconfirmed',
    isExample: true,
  },
  {
    id: 'egusi-pounded-yam',
    categoryId: 'soups',
    name: 'Egusi soup & pounded yam',
    description: 'A comforting Nigerian soup and swallow pairing, served in a traditional style.',
    image: '/images/soup-swallow.webp',
    alt: 'Rich egusi soup with leafy greens alongside a smooth serving of pounded yam',
    price: null,
    availability: 'unconfirmed',
    isExample: true,
  },
  {
    id: 'fried-plantain',
    categoryId: 'sides',
    name: 'Fried plantain',
    description: 'Golden ripe plantain, served as a familiar side to a Nigerian meal.',
    image: '/images/jollof-plate.webp',
    alt: 'Golden ripe fried plantain served with Nigerian jollof rice',
    price: null,
    availability: 'unconfirmed',
    isExample: true,
  },
  {
    id: 'zobo',
    categoryId: 'drinks',
    name: 'Zobo',
    description: 'A deep ruby-red hibiscus drink, pictured chilled with a hint of citrus.',
    image: '/images/zobo.webp',
    alt: 'A chilled glass of deep ruby-red zobo with citrus',
    price: null,
    availability: 'unconfirmed',
    isExample: true,
  },
];
