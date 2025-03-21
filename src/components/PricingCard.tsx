
import React from "react";
import Button from "./Button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPrimary?: boolean;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  isPrimary = false,
  buttonText = "Offerte aanvragen",
  buttonHref = "/contact",
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-xl transition-all duration-300",
        isPrimary
          ? "bg-primary-500 text-white shadow-lg scale-105 my-4 shadow-primary-300/30"
          : "glass-card border border-gray-100",
        className
      )}
    >
      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="mb-8">
          <h3 className={cn(
            "text-xl font-display font-bold mb-4",
            isPrimary ? "text-white" : "text-gray-900"
          )}>
            {title}
          </h3>
          
          <div className="flex items-baseline mb-4">
            <span className="text-3xl font-bold">{price}</span>
          </div>
          
          <p className={cn(
            "text-sm mb-6",
            isPrimary ? "text-white/90" : "text-gray-600"
          )}>
            {description}
          </p>
        </div>
        
        <ul className="space-y-3 mb-8 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className={cn(
                "w-5 h-5 flex-shrink-0 mt-0.5",
                isPrimary ? "text-white" : "text-primary-500"
              )} />
              <span className={cn(
                "text-sm",
                isPrimary ? "text-white/90" : "text-gray-700"
              )}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
        
        <Button
          href={buttonHref}
          variant={isPrimary ? "secondary" : "primary"}
          size="md"
          fullWidth
          className={isPrimary ? "bg-white text-primary-600 hover:bg-white/90" : ""}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
