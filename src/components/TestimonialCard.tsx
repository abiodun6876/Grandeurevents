import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  title: string;
  text: string;
  rating: number;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  title, 
  text, 
  rating, 
 
}) => {
  return (
    <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-gold-accent/30 transition-all duration-300">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-gold-accent fill-current' : 'text-white/30'}`} 
          />
        ))}
      </div>
      <p className="font-poppins text-white/80 mb-6 italic">"{text}"</p>
      <div className="flex items-center">
        
        <div>
          <h4 className="font-poppins font-semibold text-white">
            {name}
          </h4>
          <p className="font-poppins text-sm text-white/60">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;