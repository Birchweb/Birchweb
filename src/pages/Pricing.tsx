
import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import PricingCard from "@/components/PricingCard";
import { ArrowRight, Check } from "lucide-react";
import Button from "@/components/Button";

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      title: "Basis",
      price: "vanaf €995",
      description: "Voor kleine ondernemers die een professionele, statische website nodig hebben.",
      features: [
        "Responsive website (5-7 pagina's)",
        "Op maat gemaakt ontwerp",
        "SEO-geoptimaliseerd",
        "Contactformulier",
        "Google Analytics integratie",
        "1 revisieronde",
        "Oplevering binnen 3 weken",
        "3 maanden support"
      ]
    },
    {
      title: "Premium",
      price: "vanaf €1.495",
      description: "Voor groeiende bedrijven die meer functionaliteit en ondersteuning nodig hebben.",
      features: [
        "Alles uit het Basis pakket",
        "8-12 pagina's",
        "Content management systeem",
        "Nieuwsbrief integratie",
        "Social media integratie",
        "Blog functionaliteit",
        "2 revisierondes",
        "Oplevering binnen 4 weken",
        "6 maanden support"
      ],
      isPrimary: true
    },
    {
      title: "Webapplicatie",
      price: "op aanvraag",
      description: "Voor bedrijven die een op maat gemaakte webapplicatie nodig hebben.",
      features: [
        "Alles uit het Premium pakket",
        "Op maat gemaakte functionaliteit",
        "Gebruikersbeheer / login systeem",
        "Database-integratie",
        "API-koppelingen",
        "Dashboards en rapportages",
        "Uitgebreide testfase",
        "Aangepaste planningsfase",
        "12 maanden support"
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
            <h1 className="heading-1 text-white mb-6">Prijzen</h1>
            <p className="body-large text-white/90 mb-0">
              Transparante prijzen voor webdesign en -ontwikkeling, 
              afgestemd op de behoeften van jouw bedrijf.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-4">
              Kies het pakket dat bij je past
            </h2>
            <p className="body-large text-gray-600">
              Elk pakket is afgestemd op verschillende behoeften en budgetten, 
              met de mogelijkheid om aan te passen aan jouw specifieke wensen.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <PricingCard {...plan} />
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Alle prijzen zijn exclusief BTW. Specifieke wensen of functionaliteiten kunnen de prijs beïnvloeden.
              Neem contact op voor een exacte prijsopgave voor jouw project.
            </p>
            <Button href="/contact" variant="outline">
              Neem contact op voor een offerte op maat
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-4">
              Wat is inbegrepen?
            </h2>
            <p className="body-large text-gray-600">
              Bij elk project zijn de volgende zaken standaard inbegrepen,
              ongeacht welk pakket je kiest.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "Design & Development",
                items: [
                  "Uniek ontwerp op maat gemaakt",
                  "Responsive design (werkt op alle apparaten)",
                  "Schone, gestructureerde code",
                  "Cross-browser compatibiliteit",
                  "Laadtijd-optimalisatie",
                  "Toegankelijkheid volgens WCAG richtlijnen"
                ]
              },
              {
                title: "Functionaliteit & Content",
                items: [
                  "Contactformulier met spam-beveiliging",
                  "Google Maps integratie (indien gewenst)",
                  "Social media integratie",
                  "Content plaatsing en opmaak",
                  "Afbeeldingen optimalisatie",
                  "Basis SEO-optimalisatie"
                ]
              },
              {
                title: "Techniek & Oplevering",
                items: [
                  "SSL-certificaat (https)",
                  "Uitgebreide testfase",
                  "Browser- en apparaattesten",
                  "Persoonlijke uitleg en instructie",
                  "Technische handleiding",
                  "Ondersteuning na oplevering"
                ]
              },
              {
                title: "Extra's & Garanties",
                items: [
                  "Google Analytics setup",
                  "XML sitemap voor zoekmachines",
                  "404-pagina op maat",
                  "Basis beveiligingsmaatregelen",
                  "Performance optimalisatie",
                  "Regelmatige backups"
                ]
              }
            ].map((section, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-full">
                  <h3 className="heading-4 mb-4 text-gray-900">{section.title}</h3>
                  
                  <ul className="space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-4">
              Veelgestelde vragen over prijzen
            </h2>
            <p className="body-large text-gray-600">
              Antwoorden op de meest gestelde vragen over kosten en pakketten.
            </p>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Zijn er verborgen kosten?",
                answer: "Nee, ik ben volledig transparant over alle kosten. Je ontvangt altijd een gedetailleerde offerte vooraf en wordt op de hoogte gehouden als er wijzigingen zijn die invloed kunnen hebben op de prijs."
              },
              {
                question: "Wat als ik aanpassingen wil na de revisierondes?",
                answer: "Na de inbegrepen revisierondes worden extra aanpassingen in rekening gebracht tegen mijn uurtarief. Kleine tekstuele wijzigingen zijn meestal gratis, maar grotere aanpassingen in ontwerp of functionaliteit niet."
              },
              {
                question: "Zijn hosting en domeinnaam inbegrepen in de prijs?",
                answer: "Nee, hosting en domeinnaam zijn niet inbegrepen in de pakketten. Ik kan dit wel voor je regelen en doorberekenen, of adviseren over geschikte hosting providers die bij jouw website passen."
              },
              {
                question: "Hoe werkt de betaling?",
                answer: "Bij de start van het project vraag ik een aanbetaling van 40%. Na goedkeuring van het ontwerp volgt 30%, en de resterende 30% wordt gefactureerd na oplevering. Voor grotere projecten kunnen we een aangepast betalingsschema opstellen."
              },
              {
                question: "Wat zijn de kosten voor onderhoud na de supportperiode?",
                answer: "Ik bied verschillende onderhoudsabonnementen aan, beginnend vanaf €50 per maand. Deze kunnen technisch onderhoud, content updates en ondersteuning omvatten. We bespreken wat het beste bij jouw situatie past."
              }
            ].map((faq, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <details className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <summary className="list-none flex justify-between items-center cursor-pointer">
                    <h3 className="heading-4 text-gray-900">{faq.question}</h3>
                    <span className="transition-transform duration-300 group-open:rotate-180">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500">
        <div className="container-custom text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-white mb-4">
              Klaar voor een offerte op maat?
            </h2>
            <p className="body-large text-white/90 mb-8">
              Neem contact op voor een vrijblijvend gesprek en een prijsopgave 
              die precies aansluit op jouw wensen en budget.
            </p>
            <Button 
              href="/contact" 
              className="bg-white text-primary-600 hover:bg-white/90 shadow-md"
              size="lg"
            >
              Vraag een offerte aan
              <ArrowRight className="w-4 h-4" />
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
