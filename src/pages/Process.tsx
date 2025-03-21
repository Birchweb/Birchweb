
import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, CheckCircle, Clock, Coffee, Layout, MessageSquare, Settings, Smile } from "lucide-react";
import Button from "@/components/Button";

const Process: React.FC = () => {
  const processSteps = [
    {
      icon: MessageSquare,
      title: "Kennismaking & Inventarisatie",
      description: "We beginnen met een vrijblijvend gesprek om jouw wensen, doelen en verwachtingen te bespreken. Ik stel gerichte vragen om een goed beeld te krijgen van je project.",
      details: [
        "Persoonlijk gesprek (online of live)",
        "Inventarisatie van wensen en eisen",
        "Doelgroepanalyse",
        "Functionaliteiten bespreken",
        "Budget en planning afstemmen"
      ]
    },
    {
      icon: Layout,
      title: "Voorstel & Planning",
      description: "Op basis van ons gesprek maak ik een voorstel met daarin een prijsindicatie, tijdsplanning en de besproken functionaliteit. Na akkoord gaan we aan de slag.",
      details: [
        "Gedetailleerd projectvoorstel",
        "Transparante prijsopgave",
        "Duidelijke planning",
        "Afspraken over feedback en oplevering",
        "Milestone-planning"
      ]
    },
    {
      icon: Coffee,
      title: "Ontwerp & Concept",
      description: "Ik werk een ontwerpconcept uit dat past bij jouw merk en doelstellingen. We bespreken het ontwerp en passen het waar nodig aan tot je volledig tevreden bent.",
      details: [
        "Wireframes en schetsen",
        "Visueel ontwerp",
        "Kleurenschema en typografie",
        "Responsief design voor alle apparaten",
        "Feedback en aanpassingen"
      ]
    },
    {
      icon: Settings,
      title: "Ontwikkeling & Bouw",
      description: "Na goedkeuring van het ontwerp ga ik aan de slag met de technische realisatie. Ik bouw jouw website met schone code en optimaliseer deze voor snelheid en vindbaarheid.",
      details: [
        "Development volgens moderne standaarden",
        "Responsief en toegankelijk",
        "SEO-vriendelijke code",
        "Performance optimalisatie",
        "Integratie van functionaliteiten"
      ]
    },
    {
      icon: CheckCircle,
      title: "Testen & Optimaliseren",
      description: "Voor de oplevering test ik de website uitgebreid op verschillende apparaten en browsers. Eventuele problemen worden direct opgelost.",
      details: [
        "Cross-browser testen",
        "Mobiele compatibiliteit",
        "Formulieren en functionaliteiten",
        "Laadtijd optimalisatie",
        "SEO-check"
      ]
    },
    {
      icon: Smile,
      title: "Oplevering & Instructie",
      description: "De website wordt live gezet en ik geef je een heldere instructie over het gebruik. Ook na de oplevering ben ik beschikbaar voor vragen en ondersteuning.",
      details: [
        "Live zetten van de website",
        "Persoonlijke instructie",
        "Documentatie en handleiding",
        "Ondersteuning na launch",
        "Optionele onderhoudsafspraken"
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
            <h1 className="heading-1 text-white mb-6">Werkwijze</h1>
            <p className="body-large text-white/90 mb-0">
              Een gestructureerd en transparant proces om jouw project succesvol 
              op te leveren, van eerste contact tot en met de livegang.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Intro */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary-100 rounded-full">
                <Clock className="w-6 h-6 text-primary-500" />
              </div>
            </div>
            
            <h2 className="heading-2 text-gray-900 mb-4">
              Van idee tot implementatie
            </h2>
            <p className="body-large text-gray-600">
              Ik werk met een heldere, stapsgewijze aanpak om ervoor te zorgen dat 
              jouw project soepel verloopt en aan alle verwachtingen voldoet.
            </p>
          </AnimatedSection>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 hidden md:block"></div>
            
            <div className="space-y-12 relative">
              {processSteps.map((step, i) => (
                <AnimatedSection key={i} animation={i % 2 === 0 ? "fade-in-left" : "fade-in-right"} delay={i * 100}>
                  <div className={`flex flex-col md:flex-row gap-8 items-stretch relative ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    <div className="hidden md:flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center z-10 shadow-lg">
                        {i + 1}
                      </div>
                    </div>
                    
                    <div className={`flex-1 bg-white p-6 rounded-xl shadow-md border border-gray-100 relative ${i % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                      <div className="md:hidden w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center absolute -top-5 left-6 shadow-md">
                        {i + 1}
                      </div>
                      
                      <div className="flex items-center gap-3 mb-4 mt-2 md:mt-0">
                        <step.icon className="w-6 h-6 text-primary-500" />
                        <h3 className="heading-4 text-gray-900">{step.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        {step.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {step.details.map((detail, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="text-primary-500 font-bold mt-0.5">✓</span>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-4">
              Voordelen van mijn aanpak
            </h2>
            <p className="body-large text-gray-600">
              Door mijn gestructureerde werkwijze voorkom ik verrassingen en zorg ik voor een soepel proces.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Transparant proces",
                description: "Je weet precies waar je aan toe bent, wat de kosten zijn en wanneer de website klaar is."
              },
              {
                title: "Persoonlijke aanpak",
                description: "Direct contact met de persoon die jouw website daadwerkelijk maakt, zonder tussenpersonen."
              },
              {
                title: "Flexibiliteit",
                description: "Ruimte voor aanpassingen en nieuwe inzichten tijdens het proces zonder bureaucratie."
              },
              {
                title: "Korte lijnen",
                description: "Snelle communicatie en besluitvorming, direct contact bij vragen of wijzigingen."
              },
              {
                title: "Kwaliteitsbewaking",
                description: "Continue controle op kwaliteit en het voldoen aan de gestelde eisen en verwachtingen."
              },
              {
                title: "Tijdsbesparing",
                description: "Efficiënt proces zonder onnodige meetings of paperwork, focus op wat echt belangrijk is."
              }
            ].map((benefit, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-full">
                  <h3 className="heading-4 mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
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
              Veelgestelde vragen
            </h2>
            <p className="body-large text-gray-600">
              Antwoorden op de meest gestelde vragen over mijn werkwijze en proces.
            </p>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                question: "Hoe lang duurt het om een website te bouwen?",
                answer: "De doorlooptijd hangt af van de complexiteit van het project, maar voor een gemiddelde website kun je rekenen op 3-4 weken van start tot oplevering. Een eenvoudige website kan soms al binnen 2 weken klaar zijn, terwijl een complexe webapplicatie langer kan duren."
              },
              {
                question: "Kan ik tussentijds wijzigingen aanbrengen?",
                answer: "Absoluut! Flexibiliteit is een belangrijk onderdeel van mijn werkwijze. Je krijgt meerdere momenten om feedback te geven en aanpassingen voor te stellen. Grotere wijzigingen die buiten de oorspronkelijke scope vallen, kunnen wel invloed hebben op de planning en kosten."
              },
              {
                question: "Hoe gaat het met hosting en domeinnamen?",
                answer: "Ik kan de hosting en domeinregistratie voor je regelen of samenwerken met je bestaande providers. Als je nog geen hosting hebt, adviseer ik je graag over de beste opties voor jouw specifieke behoeften."
              },
              {
                question: "Bied je ook onderhoud na oplevering?",
                answer: "Ja, ik bied verschillende onderhoudsabonnementen aan voor het up-to-date houden van je website. Dit kan variëren van technische updates en beveiliging tot content-updates en ondersteuning. We bespreken de mogelijkheden en jouw behoeften tijdens het proces."
              },
              {
                question: "Hoe zit het met ondersteuning bij technische problemen?",
                answer: "Ook na oplevering sta ik voor je klaar bij technische vragen of problemen. Bij acute problemen reageer ik zo snel mogelijk, vaak binnen enkele uren. Voor klanten met een onderhoudsabonnement gelden prioriteitsafspraken."
              }
            ].map((faq, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="heading-4 mb-3 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
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
              Klaar om te starten?
            </h2>
            <p className="body-large text-gray-600 mb-8">
              Neem contact op voor een vrijblijvend kennismakingsgesprek en ontdek
              hoe we samen jouw project tot een succes kunnen maken.
            </p>
            <Button href="/contact" size="lg">
              Contact opnemen
              <ArrowRight className="w-4 h-4" />
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Process;
