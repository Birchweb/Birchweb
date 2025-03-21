
import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <main className="pt-20">
      {/* Header Section */}
      <section className="relative py-20 bg-primary-500 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20" />
        
        <div className="container-custom relative">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="heading-1 text-white mb-6">Contact</h1>
            <p className="body-large text-white/90 mb-0">
              Heb je een vraag of wil je een project bespreken?
              Ik sta voor je klaar om te helpen.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <AnimatedSection className="lg:col-span-3" animation="fade-in-left">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 h-full">
                <h2 className="heading-3 text-gray-900 mb-6">Stuur een bericht</h2>
                
                <ContactForm />
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="lg:col-span-2" animation="fade-in-right" delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 h-full">
                <h2 className="heading-3 text-gray-900 mb-6">Contactgegevens</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:info@birchweb.nl" className="text-gray-600 hover:text-primary-500 transition-colors">
                        info@birchweb.nl
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Telefoon</h3>
                      <a href="tel:+31612345678" className="text-gray-600 hover:text-primary-500 transition-colors">
                        +31 6 12345678
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Locatie</h3>
                      <p className="text-gray-600">
                        Amsterdam, Nederland
                      </p>
                      <p className="text-gray-600 mt-1">
                        Klanten door heel Nederland
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Bereikbaarheid</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Maandag - Vrijdag</span>
                        <span className="text-gray-900 font-medium">9:00 - 17:30</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Zaterdag</span>
                        <span className="text-gray-900 font-medium">Op afspraak</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Zondag</span>
                        <span className="text-gray-900 font-medium">Gesloten</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="heading-2 text-gray-900 mb-4">Locatie</h2>
            <p className="body-large text-gray-600">
              Ik werk vanuit Amsterdam en ben beschikbaar voor klanten in heel Nederland.
              Afspraken zijn mogelijk op locatie of online.
            </p>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155959.8201950245!2d4.764426470114744!3d52.35474006254506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam!5e0!3m2!1sen!2snl!4v1655378757950!5m2!1sen!2snl"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Birchweb locatie"
              ></iframe>
            </div>
          </AnimatedSection>
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
              Antwoorden op de meest gestelde vragen over contact en beschikbaarheid.
            </p>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Hoe snel reageer je op een contactverzoek?",
                answer: "Ik probeer altijd binnen 24 uur te reageren op contactverzoeken, ook in het weekend. In drukke periodes kan het iets langer duren, maar ik doe mijn best om zo snel mogelijk contact op te nemen."
              },
              {
                question: "Werk je alleen in Amsterdam of ook daarbuiten?",
                answer: "Ik werk vanuit Amsterdam, maar heb klanten door heel Nederland. Fysieke afspraken zijn mogelijk in Amsterdam en omgeving, maar voor klanten verder weg houd ik meestal online meetings via Zoom of Teams."
              },
              {
                question: "Is een kennismakingsgesprek vrijblijvend?",
                answer: "Ja, een kennismakingsgesprek is altijd vrijblijvend en kosteloos. Dit geeft ons beiden de kans om te kijken of we een goede match zijn en of ik de juiste persoon ben voor jouw project."
              },
              {
                question: "Kan ik ook buiten kantoortijden contact opnemen?",
                answer: "Je kunt natuurlijk altijd een e-mail sturen of het contactformulier invullen, ook buiten kantoortijden. Voor telefonisch contact ben ik beschikbaar op werkdagen tussen 9:00 en 17:30."
              }
            ].map((faq, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="heading-4 mb-2 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
