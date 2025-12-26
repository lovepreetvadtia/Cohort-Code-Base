import React from 'react';  
import { User, Image as ImageIcon, Plus } from 'lucide-react';

const Card = (props) => {
  console.log(props)
  return (
    <div className="flex items-center justify-center h-fit w-fit p-4">
      {/* Card Container */}
      <div className="relative w-[320px] h-[540px] rounded-[35px] overflow-hidden shadow-2xl group cursor-pointer">
        
        {/* Background Image */}
        <img 
          src={props.image} 
          alt={props.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay - Crucial for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Content Wrapper */}
        <div className="absolute bottom-0 w-full p-6 text-white flex flex-col gap-4">
          
          {/* Header Section */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl font-bold tracking-wide">{props.name}</h2>
              {/* Custom Verified Badge */}
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 text-white fill-white"
                fill="currentColor"
              >
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.1-6.1 1.5 1.5-7.6 7.6z"/>
              </svg>
            </div>
            <p className="text-gray-300 text-[15px] leading-snug font-light">{props.role}
            </p>
          </div>

          {/* Footer Section: Stats & Button */}
          <div className="flex items-center justify-between mt-2">
            
            {/* Stats */}
            <div className="flex items-center gap-5 text-sm font-medium text-gray-200">
              <div className="flex items-center gap-1.5">
                <User size={18} strokeWidth={2.5} />
                <span>{props.followers}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ImageIcon size={18} strokeWidth={2.5} />
                <span>{props.posts}</span>
              </div>
            </div>

            {/* Follow Button */}
            <button className="bg-white text-black px-5 py-2.5 rounded-full font-semibold text-sm flex items-center gap-1 hover:bg-gray-200 transition-colors active:scale-95">
              Follow <Plus size={16} strokeWidth={3} />
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;