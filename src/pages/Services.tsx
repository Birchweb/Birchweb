
import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Code, Layout, Search, Settings, Smartphone, Zap } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";

const Services: React.FC = () => {
  const mainServices = [
    {
      icon: Layout,
      title: "Websites op maat",
      description: "Professionele en responsieve websites die perfect aansluiten bij jouw bedrijf en doelgroep.",
      benefits: [
        "Volledig responsive design",
        "SEO-geoptimaliseerd",
        "Gebruiksvriendelijke interface",
        "Snelle laadtijden",
        "Content management systeem"
      ]
    },
    {
      icon: Smartphone,
      title: "Responsive webdesign",
      description: "Websites die optimaal werken op alle apparaten, van desktop tot smartphone.",
      benefits: [
        "Perfecte weergave op alle apparaten",
        "Verbeterde gebruikerservaring",
        "Hogere conversieratio's",
        "Betere vindbaarheid in Google",
        "Toekomstbestendig ontwerp"
      ]
    },
    {
      icon: Search,
      title: "SEO-optimalisatie",
      description: "Zorg dat jouw website goed vindbaar is in zoekmachines en meer bezoekers trekt.",
      benefits: [
        "On-page SEO optimalisatie",
        "Meta-tags en beschrijvingen",
        "Technische SEO verbeteringen",
        "Performance optimalisatie",
        "Gestructureerde data markup"
      ]
    },
    {
      icon: Settings,
      title: "Onderhoud & updates",
      description: "Zorg dat jouw website altijd up-to-date, veilig en goed functioneert.",
      benefits: [
        "Regelmatige software updates",
        "Technische ondersteuning",
        "Content updates",
        "Beveiliging en monitoring",
        "Performance optimalisatie"
      ]
    },
    {
      icon: Code,
      title: "Webapplicaties",
      description: "Kleine op maat gemaakte webapplicaties om jouw bedrijfsprocessen te stroomlijnen.",
      benefits: [
        "Gebruiksvriendelijke interfaces",
        "Aangepast aan jouw workflow",
        "Veilig en betrouwbaar",
        "Schaalbaar en uitbreidbaar",
        "Integratie met bestaande systemen"
      ]
    },
    {
      icon: Zap,
      title: "Snelle oplevering",
      description: "Geen maandenlange projecten, maar snel resultaat zonder in te leveren op kwaliteit.",
      benefits: [
        "Efficiënt ontwikkelproces",
        "Heldere planning en milestones",
        "Directe communicatie",
        "Snelle iteraties en feedback",
        "Focus op essentiële functionaliteit"
      ]
    }
  ];

  return (
    <main className="pt-20">
      {/* Header Section */}
      <section className="relative py-20 bg-primary-500 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20" />
        
        <div className="container-custom relative">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="heading-1 text-white mb-6">Diensten</h1>
            <p className="body-large text-white/90 mb-0">
              Van statische websites tot kleine webapplicaties: ik help je met
              een professionele online aanwezigheid die werkt voor jouw bedrijf.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-4">Wat ik kan bieden</h2>
            <p className="body-large text-gray-600">
              Als freelance webdesigner en ontwikkelaar bied ik een breed scala aan diensten 
              aan die je helpen om online op te vallen en je doelen te bereiken.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Preview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left">
              <h2 className="heading-2 text-gray-900 mb-4">
                Mijn werkwijze
              </h2>
              <p className="body-large text-gray-600 mb-6">
                Ik werk met een heldere, gestructureerde aanpak om jouw project 
                soepel en voorspelbaar te laten verlopen, van eerste gesprek tot oplevering.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    number: "01",
                    title: "Kennismaking & inventarisatie",
                    description: "We bespreken jouw wensen, doelen en verwachtingen voor het project."
                  },
                  {
                    number: "02",
                    title: "Voorstel & planning",
                    description: "Je ontvangt een duidelijk voorstel met prijsindicatie en planning."
                  },
                  {
                    number: "03",
                    title: "Ontwerp & ontwikkeling",
                    description: "Ik ga aan de slag met het ontwerp en de bouw van jouw website."
                  },
                  {
                    number: "04",
                    title: "Oplevering & instructie",
                    description: "Jouw website gaat live en je krijgt instructie over het gebruik."
                  }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-display font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button href="/werkwijze">
                  Meer over mijn werkwijze
                </Button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right" delay={200}>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Werkproces"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-lg border border-gray-100 max-w-[320px]">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-900">Transparant proces</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    Je weet precies waar je aan toe bent, wat de kosten zijn en wanneer je website klaar is.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500/10">
        <div className="container-custom text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-4">
              Klaar voor jouw nieuwe website?
            </h2>
            <p className="body-large text-gray-600 mb-8">
              Neem contact op voor een vrijblijvend gesprek over 
              de mogelijkheden voor jouw project.
            </p>
            <Button href="/contact" size="lg">
              Neem contact op
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Services;
