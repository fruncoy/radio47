import React, { useState } from "react";
import { Heart, PlayCircle, Radio } from "lucide-react";
import { motion } from "framer-motion";
const favorites = [{
  title: "Morning Jazz",
  lastPlayed: "2h ago",
  duration: "120 min",
  image: "https://images.pexels.com/photos/4087991/pexels-photo-4087991.jpeg"
}, {
  title: "Evening Classics",
  lastPlayed: "Yesterday",
  duration: "90 min",
  image: "https://images.pexels.com/photos/2426085/pexels-photo-2426085.jpeg"
}, {
  title: "Tech Talk Radio",
  lastPlayed: "3d ago",
  duration: "60 min",
  image: "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg"
}];
const ImageWithFallback = ({
  src,
  alt,
  className
}) => {
  const [error, setError] = useState(false);
  if (error) {
    return <div className={`bg-gray-800 flex items-center justify-center ${className}`}>
        <Radio className="text-gray-600" size={24} />
      </div>;
  }
  return <img src={src} alt={alt} className={className} onError={() => setError(true)} />;
};
export function Favorites() {
  return <div className="grid grid-cols-2 gap-4 px-4 mt-4">
      {favorites.map((item, index) => <motion.div key={index} initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: index * 0.1
    }} className="relative group">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <ImageWithFallback src={item.image} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <button className="absolute right-2 top-2 w-8 h-8 bg-[#1E3EA1] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Heart size={16} className="text-white" />
            </button>
            <button className="absolute inset-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"></button>
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h3 className="font-medium text-white text-sm">{item.title}</h3>
              <p className="text-xs text-gray-300">{item.lastPlayed}</p>
            </div>
          </div>
        </motion.div>)}
    </div>;
}