
import { useState } from 'react';
import { ExternalLink } from "lucide-react";

interface FloatingProductProps {
  title: string;
  description: string;
  websiteUrl: string;
  delay: number;
  color: string;
}

const FloatingProduct = ({ 
  title, 
  description, 
  websiteUrl,
  delay,
  color
}: FloatingProductProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  
  const animationClass = delay === 0 
    ? 'animate-float' 
    : delay === 1 
      ? 'animate-float-slow' 
      : 'animate-float-slower';

  const handleVisitWebsite = (): void => {
    window.open(websiteUrl, '_blank');
  };

  return (
    <div 
      className={`product-card ${animationClass} max-w-[320px] cursor-pointer transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}
      onClick={handleVisitWebsite}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundColor: color }}
    >
      <div className="relative overflow-hidden rounded-xl p-8 min-h-[280px] flex flex-col justify-center">
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-white/20 opacity-70"></div>
        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-white/20 opacity-70"></div>
        
        <h2 className="text-4xl font-bold mb-3 text-white text-center relative z-10">{title}</h2>
        <div className="w-16 h-1 bg-white/50 mx-auto mb-4"></div>
        <p className="text-sm text-white/90 text-center relative z-10 line-clamp-3">{description}</p>
        
        <div className="mt-6 flex justify-center items-center">
          <span className="text-white flex items-center gap-1 text-sm font-medium">
            Visit Website <ExternalLink className={`ml-1 h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FloatingProduct;
