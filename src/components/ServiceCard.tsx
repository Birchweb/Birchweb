
import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Button from "./Button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits?: string[];
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  benefits = [],
  buttonText = "Meer informatie",
  buttonHref = "/contact",
  className,
}) => {
  return (
    <div className={cn(
      "glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl group",
      className
    )}>
      <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors">
        <Icon className="w-6 h-6 text-primary-500" />
      </div>
      
      <h3 className="heading-4 mb-3 text-gray-900">{title}</h3>
      
      <p className="text-gray-600 mb-5">{description}</p>
      
      {benefits.length > 0 && (
        <ul className="space-y-2 mb-6">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700">
              <span className="text-primary-500 font-bold">✓</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      )}
      
      <Button href={buttonHref} variant="outline" size="sm">
        {buttonText}
      </Button>
    </div>
  );
};

export default ServiceCard;
