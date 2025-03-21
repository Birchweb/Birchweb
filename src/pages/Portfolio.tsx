
import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import PortfolioItem from "@/components/PortfolioItem";

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      title: "De Groene Bakker",
      category: "Webshop",
      description: "Een moderne webshop voor een ambachtelijke bakkerij met online bestel- en betaalfunctie.",
      imageSrc: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      websiteUrl: "#"
    },
    {
      title: "Studio Mindful",
      category: "Website",
      description: "Minimalistische website voor een yogastudio met online reserveringssysteem.",
      imageSrc: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      websiteUrl: "#"
    },
    {
      title: "Groen Advies",
      category: "Webapplicatie",
      description: "Interactieve web-app voor een adviesbureau met klantportal en dashboards.",
      imageSrc: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      websiteUrl: "#"
    },
    {
      title: "Brasserie Zomaar",
      category: "Website",
      description: "Stijlvolle website voor een lokaal restaurant met menukaart en reserveringssysteem.",
      imageSrc: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      websiteUrl: "#"
    },
    {
      title: "Van Dijk Advocaten",
      category: "Website",
      description: "Professionele website voor een advocatenkantoor met verschillende specialisaties.",
      imageSrc: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      websiteUrl: "#"
    },
    {
      title: "Meubelmakerij Hendriks",
      category: "Website",
      description: "Showcase website voor een ambachtelijke meubelmaker met uitgebreide portfoliosectie.",
      imageSrc: "https://images.unsplash.com/photo-1595814433015-e6f5ce69144e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      websiteUrl: "#"
    }
  ];

  return (
    <main className="pt-20">
      {/* Header Section */}
      <section className="relative py-20 bg-primary-500 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20" />
        
        <div className="container-custom relative">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="heading-1 text-white mb-6">Portfolio</h1>
            <p className="body-large text-white/90 mb-0">
              Een selectie van recente projecten die ik heb ontworpen en ontwikkeld voor verschillende klanten.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Items */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <PortfolioItem {...item} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-4">Wat klanten zeggen</h2>
            <p className="body-large text-gray-600">
              Ik werk nauw samen met mijn klanten om het beste resultaat te bereiken.
              Hier is wat zij over onze samenwerking te zeggen hebben.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Lisa van der Berg",
                company: "Studio Mindful",
                quote: "Dankzij de nieuwe website hebben we 30% meer aanmeldingen voor onze yogalessen. De website is precies wat we nodig hadden!",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Peter de Vries",
                company: "De Groene Bakker",
                quote: "Onze webshop heeft onze omzet aanzienlijk verhoogd. De samenwerking was prettig en professioneel.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Marieke Jansen",
                company: "Groen Advies",
                quote: "De web-app die voor ons is ontwikkeld bespaart ons uren administratie per week. Een uitstekende investering!",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((testimonial, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="mt-4 flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500/10">
        <div className="container-custom text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-4">
              Jouw project als volgende succes?
            </h2>
            <p className="body-large text-gray-600 mb-8">
              Laten we samen jouw ideeën omzetten in een professionele website die werkt voor jouw bedrijf.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-600 transition-colors"
            >
              Neem contact op
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
