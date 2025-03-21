
import React from "react";
import { ArrowRight, Code, Layout, Search, Users, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import PortfolioItem from "@/components/PortfolioItem";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  const services = [
    {
      icon: Layout,
      title: "Websites op maat",
      description: "Professionele websites die perfect passen bij jouw bedrijf en doelstellingen.",
      benefits: ["Responsive design", "SEO-geoptimaliseerd", "Snel en gebruiksvriendelijk"]
    },
    {
      icon: Zap,
      title: "Snelle oplevering",
      description: "Geen lange wachttijden. Jouw website snel online zonder in te leveren op kwaliteit.",
      benefits: ["Korte ontwikkeltijd", "Directe updates", "Flexibel proces"]
    },
    {
      icon: Code,
      title: "Webapplicaties",
      description: "Kleine webapplicaties en functionaliteiten om jouw bedrijfsprocessen te optimaliseren.",
      benefits: ["Op maat gemaakt", "Gebruiksvriendelijk", "Schaalbaar"]
    },
  ];

  const portfolioItems = [
    {
      title: "De Groene Bakker",
      category: "Webshop",
      description: "Een moderne webshop voor een ambachtelijke bakkerij met online bestel- en betaalfunctie.",
      imageSrc: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Studio Mindful",
      category: "Website",
      description: "Minimalistische website voor een yogastudio met online reserveringssysteem.",
      imageSrc: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Groen Advies",
      category: "Webapplicatie",
      description: "Interactieve web-app voor een adviesbureau met klantportal en dashboards.",
      imageSrc: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50 -z-10" />
        
        <div className="container-custom py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left" className="space-y-6">
              <div className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                Webdesign voor ondernemers
              </div>
              
              <h1 className="heading-1 text-gray-900">
                Jouw <span className="text-primary-500">website</span> in vakkundige handen
              </h1>
              
              <p className="body-large text-gray-600 max-w-xl">
                Ik ontwerp en bouw moderne, snelle websites op maat voor jouw bedrijf. 
                Zonder gedoe, voor een scherpe prijs. Persoonlijke aanpak en direct contact.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button href="/contact" size="lg">
                  Plan een gesprek
                  <ArrowRight className="w-4 h-4" />
                </Button>
                
                <Button href="/portfolio" variant="outline" size="lg">
                  Bekijk portfolio
                </Button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right" delay={300} className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-2xl ring-1 ring-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Moderne website design"
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg ring-1 ring-gray-200">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-green-100 p-1">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                  </div>
                  <p className="text-sm font-medium text-gray-600">Online in 14 dagen</p>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 rounded-lg bg-white p-4 shadow-lg ring-1 ring-gray-200 max-w-[180px]">
                <div className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-primary-500" />
                  <p className="text-sm font-medium text-gray-600">Google-optimalisatie</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-4">Waarom kiezen voor Birchweb?</h2>
            <p className="body-large text-gray-600">
              Ik lever meer dan alleen een website. Je krijgt een professionele 
              online identiteit die echt werkt voor jouw bedrijf.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button href="/diensten" variant="outline">
              Alle diensten bekijken
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-4">Recente projecten</h2>
            <p className="body-large text-gray-600">
              Een kleine greep uit mijn recente projecten. 
              Bekijk hoe ik andere ondernemers heb geholpen.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <PortfolioItem {...item} />
              </AnimatedSection>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button href="/portfolio" variant="outline">
              Alle projecten bekijken
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection animation="fade-in-left">
              <h2 className="heading-2 text-white mb-4">
                Klaar voor een professionele website?
              </h2>
              <p className="body-large text-white/90 mb-6">
                Laten we samen jouw online aanwezigheid versterken. 
                Neem vrijblijvend contact op voor een kennismaking.
              </p>
              <Button href="/contact" className="bg-white text-primary-600 hover:bg-white/90">
                Contact opnemen
                <ArrowRight className="w-4 h-4" />
              </Button>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right" delay={200}>
              <div className="rounded-xl bg-white/10 backdrop-blur-sm p-8 border border-white/20 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg">
                      Persoonlijke aanpak
                    </h3>
                    <p className="text-white/80">
                      Direct contact, geen callcenter
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Geen verborgen kosten",
                    "Transparante prijzen",
                    "Snelle oplevering",
                    "Ondersteuning na oplevering",
                    "SEO-geoptimaliseerd",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary-400/20 flex items-center justify-center flex-shrink-0">
                        <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
