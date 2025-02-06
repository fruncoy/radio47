import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
export function Shows() {
  const shows = [{
    id: 1,
    name: "Morning Jazz",
    schedule: "Daily • 8:00 AM",
    image: "https://images.pexels.com/photos/4087991/pexels-photo-4087991.jpeg"
  }, {
    id: 2,
    name: "Tech Talk Radio",
    schedule: "Weekly • 4:00 PM",
    image: "https://images.pexels.com/photos/2426085/pexels-photo-2426085.jpeg"
  }, {
    id: 3,
    name: "Evening Mix",
    schedule: "Daily • 6:00 PM",
    image: "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg"
  }, {
    id: 4,
    name: "Night Vibes",
    schedule: "Weekends • 10:00 PM",
    image: "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg"
  }];
  return <div className="flex flex-col px-4 pt-4 pb-32">
      <div className="grid grid-cols-1 gap-4">
        {shows.map((show, index) => <motion.div key={show.id} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="flex items-center">
              <div className="relative w-24 h-24">
                <img src={show.image} alt={show.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="flex-1 p-4">
                <h3 className="font-semibold text-[#1a1f25]">{show.name}</h3>
                <p className="text-sm text-gray-600">{show.schedule}</p>
              </div>
              <button className="mr-4 w-10 h-10 bg-[#FFDE2D] rounded-full flex items-center justify-center hover:bg-[#FFE55C] transition-colors">
                <Play size={18} className="text-[#1a1f25] ml-1" />
              </button>
            </div>
          </motion.div>)}
      </div>
    </div>;
}