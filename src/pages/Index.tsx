import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import NoticeBoard from '@/components/NoticeBoard';
import ProgramCards from '@/components/ProgramCards';
import NOMCourses from '@/components/NOMCourses';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = 'CEA - Centro de Enseñanza y Asesorías | Regularización y Cursos NOM';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Centro de Enseñanza y Asesorías: Regularización escolar desde preescolar hasta media superior, cursos de ingreso a preparatoria, capacitación NOM-154 y NOM-002. ¡La educación nunca debe ser aburrida!');
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <NoticeBoard />
      <ProgramCards />
      <NOMCourses />
      <Testimonials />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      
      {/* Schema.org LocalBusiness structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "CEA - Centro de Enseñanza y Asesorías",
            "description": "Centro educativo especializado en regularización escolar, cursos de ingreso a preparatoria y capacitación en normas NOM.",
            "url": "https://ceaensenanza.com",
            "telephone": ["+52-56-13-77-19-48", "+52-55-96-29-35-82"],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ciudad de México",
              "addressCountry": "MX"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "priceRange": "$$",
            "sameAs": [],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios Educativos",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "EducationalOccupationalCredential",
                    "name": "Regularización Escolar"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Course",
                    "name": "Curso NOM-154-SCFI-2005"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Course",
                    "name": "Curso NOM-002-STPS-2010"
                  }
                }
              ]
            }
          })
        }}
      />
    </main>
  );
};

export default Index;
