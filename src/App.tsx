import { AboutSection } from './components/AboutSection';
import { BrandIntroduction } from './components/BrandIntroduction';
import { ContactSection } from './components/ContactSection';
import { EnquirySection } from './components/EnquirySection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { Navbar } from './components/Navbar';
import { SignatureSection } from './components/SignatureSection';
import { business } from './data/business';

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: business.name,
  servesCuisine: 'Nigerian',
  telephone: business.phone,
  email: business.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.streetAddress,
    addressLocality: business.addressLocality,
    addressRegion: business.addressRegion,
    addressCountry: business.addressCountry,
  },
};

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <script type="application/ld+json">{JSON.stringify(restaurantSchema)}</script>
      <Navbar />
      <main id="main-content">
        <Hero />
        <BrandIntroduction />
        <MenuSection />
        <SignatureSection />
        <AboutSection />
        <GallerySection />
        <EnquirySection />
        <ContactSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

export default App;
