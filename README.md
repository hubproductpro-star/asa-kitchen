# Àṣà Kitchen

A responsive single-page website for Àṣà Kitchen, a Nigerian restaurant in Ikeja, Lagos. Built with React, TypeScript and Vite.

## Run locally

```sh
npm install
npm run dev
```

Create a production bundle with `npm run build`; preview it with `npm run preview`.

## Update business information

- Verified contact details, address components and WhatsApp configuration: `src/data/business.ts`
- Opening hours are intentionally empty until confirmed. Add verified entries to `business.openingHours` to display them.
- Menu categories, example dishes, images, prices and availability: `src/data/menu.ts`. The current dishes are clearly labelled illustrative examples, and prices and availability are intentionally left unconfirmed.
- Replace the culinary and dining-room concept images in `public/images/` with approved restaurant photography when available. Current images are illustrative and are not represented as photos of the actual restaurant.

The enquiry form validates in the browser and prepares a WhatsApp message to `2349110443054`; a customer must review and send the message to complete an enquiry. It does not confirm reservations.

## Before launch

Once the production domain is confirmed, add its canonical URL and an absolute Open Graph image URL in `index.html`, and publish a sitemap for that domain. No social links, hours, prices, or restaurant-specific photography have been invented.
