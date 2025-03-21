
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", fullWidth = false, children, href, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-1";
    
    const variants = {
      primary: "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-sm",
      secondary: "bg-secondary text-primary-700 hover:bg-secondary/80 active:bg-secondary/90",
      outline: "border border-primary-500 text-primary-500 hover:bg-primary-50 active:bg-primary-100",
      text: "text-primary-500 hover:bg-primary-50 active:bg-primary-100"
    };
    
    const sizes = {
      sm: "text-sm px-3 py-1.5",
      md: "text-base px-4 py-2",
      lg: "text-lg px-6 py-3"
    };
    
    const buttonClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth && "w-full",
      className
    );
    
    if (href) {
      return (
        <a 
          href={href} 
          className={buttonClasses}
          {...(props as any)}
        >
          {children}
        </a>
      );
    }
    
    return (
      <button 
        className={buttonClasses} 
        ref={ref} 
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
