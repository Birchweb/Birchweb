
import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import { ArrowRight, Code, Heart, Layout, MessageSquare, Zap } from "lucide-react";

const About: React.FC = () => {
  return (
    <main className="pt-20">
      {/* Header Section */}
      <section className="relative py-20 bg-primary-500 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20" />
        
        <div className="container-custom relative">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="heading-1 text-white mb-6">Over mij</h1>
            <p className="body-large text-white/90 mb-0">
              Maak kennis met de persoon achter Birchweb en ontdek 
              hoe ik jou kan helpen met een professionele website.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1605664041952-4a2855d9434b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Portret van webdesigner"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right" delay={200}>
              <div className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-6">
                Freelance webdesigner
              </div>
              
              <h2 className="heading-2 text-gray-900 mb-6">
                Hallo! Ik ben Thomas
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Al meer dan 8 jaar ontwerp en ontwikkel ik websites en webapplicaties voor kleine en middelgrote bedrijven. 
                  Mijn passie ligt bij het vertalen van jouw ideeën en behoeften naar een functionele en 
                  aantrekkelijke online aanwezigheid.
                </p>
                
                <p>
                  Voordat ik Birchweb startte, werkte ik bij verschillende digitale bureaus. 
                  Daar merkte ik dat veel kleine ondernemers behoefte hebben aan persoonlijke service, 
                  zonder de hoge kosten en overhead van een groot bureau.
                </p>
                
                <p>
                  Mijn aanpak is eenvoudig: ik luister naar jouw wensen, denk mee over oplossingen, 
                  werk transparant en lever kwaliteit. Geen ingewikkelde processen of onnodige kosten, 
                  maar een directe en persoonlijke samenwerking.
                </p>
                
                <p>
                  Als je op zoek bent naar een betrouwbare webdesigner die met je meedenkt 
                  en kwaliteit levert tegen een eerlijke prijs, dan ben je bij mij aan het juiste adres.
                </p>
              </div>
              
              <div className="mt-8">
                <Button href="/contact">
                  Neem contact op
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-4">Mijn werkwijze</h2>
            <p className="body-large text-gray-600">
              Dit zijn de kernwaarden die centraal staan in mijn werk en de manier waarop ik samenwerk met mijn klanten.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Passie voor kwaliteit",
                description: "Ik lever alleen werk waar ik 100% achter sta. Kwaliteit gaat bij mij altijd boven kwantiteit."
              },
              {
                icon: Layout,
                title: "Gebruiksvriendelijk design",
                description: "Elk ontwerp begint bij de gebruiker. Ik creëer websites die intuïtief en toegankelijk zijn."
              },
              {
                icon: Code,
                title: "Schone code",
                description: "Ik schrijf nette, gestructureerde code die snel laadt en gemakkelijk te onderhouden is."
              },
              {
                icon: MessageSquare,
                title: "Open communicatie",
                description: "Duidelijke en directe communicatie zorgt voor een soepel proces en het beste resultaat."
              },
              {
                icon: Zap,
                title: "Efficiënte werkwijze",
                description: "Geen onnodige complexiteit of tijdverspilling. Ik werk doelgericht en efficiënt."
              },
              {
                icon: ArrowRight,
                title: "Resultaatgericht",
                description: "Uiteindelijk draait het om het resultaat: een website die werkt voor jouw bedrijf."
              }
            ].map((value, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-full">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-5">
                    <value.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  
                  <h3 className="heading-4 mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left">
              <h2 className="heading-2 text-gray-900 mb-4">
                Expertise & vaardigheden
              </h2>
              <p className="body-large text-gray-600 mb-8">
                Met een brede kennis van webdesign en -ontwikkeling kan ik verschillende 
                oplossingen bieden voor jouw online uitdagingen.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    skill: "Web Design",
                    level: 95,
                  },
                  {
                    skill: "Responsive Development",
                    level: 90,
                  },
                  {
                    skill: "SEO Optimalisatie",
                    level: 85,
                  },
                  {
                    skill: "Web Applicaties",
                    level: 80,
                  },
                  {
                    skill: "Performance Optimalisatie",
                    level: 85,
                  }
                ].map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">{skill.skill}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-primary-500 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "HTML5", "CSS3", "JavaScript", "React",
                  "TypeScript", "TailwindCSS", "WordPress", "PHP",
                  "Node.js", "Git", "Figma", "Adobe XD"
                ].map((tech, i) => (
                  <div 
                    key={i} 
                    className="bg-white rounded-lg border border-gray-200 p-4 text-center hover:border-primary-300 hover:shadow-sm transition-all"
                  >
                    <span className="text-gray-800 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500">
        <div className="container-custom text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-white mb-4">
              Klaar om samen te werken?
            </h2>
            <p className="body-large text-white/90 mb-8">
              Laten we in gesprek gaan over jouw project en hoe ik je kan helpen om je online doelen te bereiken.
            </p>
            <Button 
              href="/contact" 
              className="bg-white text-primary-600 hover:bg-white/90 shadow-md"
              size="lg"
            >
              Neem contact op
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default About;
