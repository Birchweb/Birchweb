
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
      {/* Hero Section with enhanced gradient */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-blue-50 to-primary-50 -z-10">
          {/* Add decorative elements for visual interest */}
          <div className="absolute top-20 right-[20%] w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
          <div className="absolute bottom-20 left-[15%] w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float"></div>
        </div>
        
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
                <AnimatedSection animation="bounce-in" delay={600}>
                  <Button href="/contact" size="lg" className="shadow-lg hover:shadow-primary-200/50 transition-all duration-300">
                    Plan een gesprek
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </AnimatedSection>
                
                <AnimatedSection animation="bounce-in" delay={800}>
                  <Button href="/portfolio" variant="outline" size="lg">
                    Bekijk portfolio
                  </Button>
                </AnimatedSection>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="rotate-in" delay={300} className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-2xl ring-1 ring-gray-200 hover:shadow-primary-200/50 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Moderne website design"
                  className="h-full w-full object-cover"
                />
              </div>
              
              <AnimatedSection animation="slide-up" delay={600} className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg ring-1 ring-gray-200">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-green-100 p-1">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                  </div>
                  <p className="text-sm font-medium text-gray-600">Online in 14 dagen</p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-up" delay={800} className="absolute -top-6 -right-6 rounded-lg bg-white p-4 shadow-lg ring-1 ring-gray-200 max-w-[180px]">
                <div className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-primary-500" />
                  <p className="text-sm font-medium text-gray-600">Google-optimalisatie</p>
                </div>
              </AnimatedSection>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section with enhanced cards */}
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
              <AnimatedSection key={i} delay={i * 150} animation="bounce-in">
                <ServiceCard 
                  {...service} 
                  className={i === 0 ? "border-l-4 border-primary-500" : 
                             i === 1 ? "border-l-4 border-orange-500" : 
                             "border-l-4 border-purple-500"}
                />
              </AnimatedSection>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <AnimatedSection animation="slide-up" delay={300}>
              <Button href="/diensten" variant="outline">
                Alle diensten bekijken
                <ArrowRight className="w-4 h-4" />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section with enhanced card hover effects */}
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
              <AnimatedSection key={i} delay={i * 150} animation="slide-up">
                <PortfolioItem {...item} />
              </AnimatedSection>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <AnimatedSection animation="bounce-in">
              <Button href="/portfolio" variant="outline">
                Alle projecten bekijken
                <ArrowRight className="w-4 h-4" />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section with improved visual appeal */}
      <section className="section-padding relative overflow-hidden">
        {/* Gradient background with decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection animation="fade-in-left">
              <h2 className="heading-2 text-white mb-4">
                Klaar voor een professionele website?
              </h2>
              <p className="body-large text-white/90 mb-6">
                Laten we samen jouw online aanwezigheid versterken. 
                Neem vrijblijvend contact op voor een kennismaking.
              </p>
              <Button href="/contact" className="bg-white text-primary-600 hover:bg-white/90 shadow-lg hover:shadow-white/20 transition-all duration-300">
                Contact opnemen
                <ArrowRight className="w-4 h-4" />
              </Button>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right" delay={200}>
              <div className="rounded-xl bg-white/10 backdrop-blur-sm p-8 border border-white/20 shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
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
                    <AnimatedSection key={i} delay={300 + i * 100} animation="slide-up">
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary-400/20 flex items-center justify-center flex-shrink-0">
                          <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-white">{item}</span>
                      </li>
                    </AnimatedSection>
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
