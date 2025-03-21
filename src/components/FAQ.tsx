
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  description?: string;
  className?: string;
}

const FAQ: React.FC<FAQProps> = ({
  items,
  title = "Veelgestelde vragen",
  description,
  className,
}) => {
  return (
    <div className={className}>
      {title && (
        <AnimatedSection className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="heading-2 text-gray-900 mb-4">{title}</h2>
          {description && <p className="body-large text-gray-600">{description}</p>}
        </AnimatedSection>
      )}

      <AnimatedSection className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium text-gray-800 py-4 hover:text-primary-500">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>
    </div>
  );
};

export default FAQ;
