export type OpeningHour = {
  day: string;
  opens: string;
  closes: string;
};

const addressDetails = {
  streetAddress: '123, Ajao Road',
  addressLocality: 'Ikeja',
  addressRegion: 'Lagos',
  addressCountry: 'NG',
  countryName: 'Nigeria',
};
const phone = '09110443054';

/** Verified restaurant details. Keep unconfirmed information out of this object. */
export const business = {
  name: 'Àṣà Kitchen',
  phone,
  phoneHref: `tel:${phone}`,
  email: 'Info@asakitchen.com',
  ...addressDetails,
  address: [addressDetails.streetAddress, addressDetails.addressLocality, addressDetails.addressRegion, addressDetails.countryName].join(', '),
  location: [addressDetails.addressLocality, addressDetails.addressRegion, addressDetails.countryName].join(', '),
  whatsappNumber: '2349110443054',
  // Add the verified schedule here when the restaurant supplies it.
  openingHours: [] as OpeningHour[],
} as const;

export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`;

export function whatsappUrl(message: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
