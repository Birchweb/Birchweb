
import React from "react";
import { cn } from "@/lib/utils";
import Button from "./Button";
import { ExternalLink } from "lucide-react";

interface PortfolioItemProps {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  websiteUrl?: string;
  className?: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  category,
  description,
  imageSrc,
  websiteUrl,
  className,
}) => {
  return (
    <div className={cn(
      "group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl",
      className
    )}>
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="heading-4 text-gray-900">{title}</h3>
          <span className="text-xs font-medium uppercase tracking-wider text-primary-600 bg-primary-50 px-2 py-1 rounded">
            {category}
          </span>
        </div>
        
        <p className="mb-5 text-gray-600">{description}</p>
        
        {websiteUrl && (
          <Button href={websiteUrl} variant="outline" size="sm" className="mt-2">
            <span>Bekijk website</span>
            <ExternalLink className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;
