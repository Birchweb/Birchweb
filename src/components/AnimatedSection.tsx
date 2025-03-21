
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-left" | "fade-in-right" | "scale-in" | "bounce-in" | "slide-up" | "rotate-in";
  delay?: number;
  threshold?: number;
  id?: string;
  duration?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = "fade-in",
  delay = 0,
  threshold = 0.2,
  id,
  duration = 600,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold,
      }
    );

    const currentRef = sectionRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  // Define custom animation styles
  const animationStyles = {
    "bounce-in": {
      opacity: 0,
      transform: "scale(0.8)",
      transition: `opacity ${duration}ms ease-out, transform ${duration}ms cubic-bezier(0.17, 0.67, 0.83, 0.67)`,
      ...(isVisible && {
        opacity: 1,
        transform: "scale(1)",
      }),
    },
    "slide-up": {
      opacity: 0,
      transform: "translateY(30px)",
      transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      ...(isVisible && {
        opacity: 1,
        transform: "translateY(0)",
      }),
    },
    "rotate-in": {
      opacity: 0,
      transform: "rotate(-5deg) scale(0.95)",
      transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      ...(isVisible && {
        opacity: 1,
        transform: "rotate(0) scale(1)",
      }),
    },
  };

  const getAnimationClass = () => {
    if (animation === "bounce-in" || animation === "slide-up" || animation === "rotate-in") {
      return "";
    }
    return isVisible ? `animate-${animation}` : "opacity-0";
  };

  const getAnimationStyle = () => {
    if (animation === "bounce-in" || animation === "slide-up" || animation === "rotate-in") {
      return animationStyles[animation];
    }
    return { 
      animationDelay: `${delay}ms`,
      animationFillMode: "forwards",
      animationDuration: `${duration}ms`
    };
  };

  return (
    <div
      id={id}
      ref={sectionRef}
      className={cn(
        getAnimationClass(),
        className
      )}
      style={getAnimationStyle()}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
