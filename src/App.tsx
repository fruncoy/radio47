import React, { useState } from "react";
import { Radio, ListMusic, Settings as SettingsIcon, PlayCircle, PauseCircle, Mic2, Heart, Tv, Volume2, MessageCircle, Share2, MoreHorizontal, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ExpandableTabs } from "./components/ui/expandable-tabs";
import { Shows } from "./pages/Shows";
import { Favorites } from "./pages/Favorites";
import { Settings } from "./pages/Settings";
import { Chat } from "./components/Chat"; // Added this import

export function App() {
  const [currentPage, setCurrentPage] = useState("Radio");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const tabs = [{
    title: "Radio",
    icon: Radio
  }, {
    title: "Live Stream",
    icon: Tv
  }, {
    title: "Shows",
    icon: ListMusic
  }, {
    title: "Favorites",
    icon: Heart
  }, {
    title: "Settings",
    icon: SettingsIcon
  }];
  const upcomingShows = [{
    time: "14:00",
    title: "Jazz Hour",
    host: "John Davis",
    image: "https://images.pexels.com/photos/4087991/pexels-photo-4087991.jpeg"
  }, {
    time: "16:00",
    title: "Tech Talk",
    host: "Sarah Smith",
    image: "https://images.pexels.com/photos/2426085/pexels-photo-2426085.jpeg"
  }, {
    time: "18:00",
    title: "Evening Mix",
    host: "Mike Johnson",
    image: "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg"
  }, {
    time: "20:00",
    title: "Night Vibes",
    host: "Lisa Chen",
    image: "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg"
  }];
  const currentShow = {
    title: "Morning Show with Alex",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    host: "Alex Johnson"
  };
  const renderContent = () => {
    switch (currentPage) {
      case "Live Stream":
        return <div className="flex flex-col items-center">
            <div className="w-full px-4 py-6">
              <div className="w-full aspect-video bg-[#1E3EA1]/10 rounded-3xl relative overflow-hidden">
                <video className="w-full h-full object-cover" poster="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-medium text-lg">
                        Live: Morning Show
                      </h3>
                      <p className="text-white/70">with Alex Johnson</p>
                    </div>
                    <button className="w-14 h-14 bg-[#1E3EA1] rounded-full flex items-center justify-center hover:bg-[#2347b5] transition-colors" onClick={() => setIsPlaying(!isPlaying)}>
                      {isPlaying ? <PauseCircle size={28} className="text-white" /> : <PlayCircle size={28} className="text-white ml-0.5" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-white rounded-tl-3xl">
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-4 text-[#1a1f25]">
                  Upcoming Shows
                </h2>
                <div className="grid grid-cols-2 gap-3 pb-32">
                  {upcomingShows.map((show, index) => <motion.div key={index} initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: index * 0.1
                }} className="relative aspect-[4/5] rounded-xl overflow-hidden group">
                      <ImageWithFallback src={show.image} alt={show.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                      <div className="absolute inset-0 p-3 flex flex-col justify-between">
                        <div className="bg-[#1E3EA1] px-2 py-1 rounded-full self-start">
                          <span className="text-white text-xs font-medium">
                            {show.time}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-medium text-white text-sm mb-0.5 line-clamp-2">
                            {show.title}
                          </h3>
                          <p className="text-xs text-gray-200 line-clamp-1">
                            with {show.host}
                          </p>
                        </div>
                      </div>
                    </motion.div>)}
                </div>
              </div>
            </div>
          </div>;
      case "Shows":
        return <Shows />;
      case "Favorites":
        return <Favorites />;
      case "Settings":
        return <Settings />;
      default:
        return <div className="flex flex-col items-center">
            <div className="min-h-[75vh] flex flex-col items-center justify-center pt-12">
              <div className="relative w-64 h-64 mb-8">
                <div className="absolute inset-0 rounded-full bg-[#1a1f25] shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]" />
                <div className="absolute inset-2 rounded-full bg-[#1E3EA1] shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)]" style={{
                background: "linear-gradient(145deg, #182d7e, #1E3EA1)"
              }} />
                <motion.div className="absolute inset-2 rounded-full border-4 border-[#FFDE2D] border-t-transparent shadow-[0_0_15px_rgba(255,222,45,0.3)]" style={{
                filter: "drop-shadow(0 0 4px rgba(255,222,45,0.2))"
              }} animate={{
                rotate: 360
              }} transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }} />
                <div className="absolute inset-8 rounded-full overflow-hidden">
                  <img src={currentShow.image} alt={currentShow.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span style={{
                    fontFamily: "'Brush Script MT', cursive",
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "white",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
                  }}>
                      Hapa Ndipo
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-6 mb-6">
                <button className="w-10 h-10 bg-[#2c333c] rounded-full flex items-center justify-center hover:bg-[#363e47] transition-colors">
                  <Volume2 size={20} className="text-gray-300" />
                </button>
                <button className="w-14 h-14 bg-[#1E3EA1] rounded-full flex items-center justify-center hover:bg-[#2347b5] transition-colors" onClick={() => setIsPlaying(!isPlaying)}>
                  <AnimatePresence mode="wait">
                    <motion.div key={isPlaying ? "pause" : "play"} initial={{
                    scale: 0
                  }} animate={{
                    scale: 1
                  }} exit={{
                    scale: 0
                  }} transition={{
                    duration: 0.2
                  }}>
                      {isPlaying ? <PauseCircle size={28} className="text-white" /> : <PlayCircle size={28} className="text-white" />}
                    </motion.div>
                  </AnimatePresence>
                </button>
                <button className="w-10 h-10 bg-[#2c333c] rounded-full flex items-center justify-center hover:bg-[#363e47] transition-colors">
                  <Heart size={20} className="text-gray-300" />
                </button>
              </div>
              <div className="text-center mb-8">
                <motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} className="text-sm text-gray-400 mb-1">
                  Now Playing
                </motion.div>
                <motion.div initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} className="text-lg font-semibold">
                  Morning Show with Alex
                </motion.div>
              </div>
            </div>
            <div className="w-full bg-white rounded-tl-3xl">
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-4 text-[#1a1f25]">
                  Upcoming Shows
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {upcomingShows.map((show, index) => <motion.div key={index} initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: index * 0.1
                }} className="relative aspect-[4/5] rounded-xl overflow-hidden group">
                      <ImageWithFallback src={show.image} alt={show.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                      <div className="absolute inset-0 p-3 flex flex-col justify-between">
                        <div className="bg-[#1E3EA1] px-2 py-1 rounded-full self-start">
                          <span className="text-white text-xs font-medium">
                            {show.time}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-medium text-white text-sm mb-0.5 line-clamp-2">
                            {show.title}
                          </h3>
                          <p className="text-xs text-gray-200 line-clamp-1">
                            with {show.host}
                          </p>
                        </div>
                      </div>
                    </motion.div>)}
                </div>
              </div>
            </div>
          </div>;
    }
  };
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
  return <div className="w-full min-h-screen bg-[#1a1f25] text-white font-sans">
      <div className="sticky top-0 z-20 backdrop-blur-xl bg-[#1a1f25]/80 border-b border-white/5 rounded-bl-3xl">
        <div className="flex justify-between items-center px-4 py-3 max-w-lg mx-auto">
          <div className="flex items-center gap-3">
            <motion.div className="w-8 h-8 rounded-full border-2 border-[#FFDE2D] bg-[#1E3EA1] flex items-center justify-center" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Radio size={16} className="text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-white/70">
                Now Playing
              </span>
            </div>
          </div>
          <motion.button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#363e47] transition-colors" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <User size={18} className="text-white/70" />
          </motion.button>
        </div>
      </div>
      <div>{renderContent()}</div>
      <div className="fixed right-4 bottom-20 z-10">
        <div className="relative">
          <motion.button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MoreHorizontal size={20} className="text-[#FFDE2D]" />
          </motion.button>
          <AnimatePresence>
            {isMenuOpen && <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: 10
          }} className="absolute bottom-full right-0 mb-2 flex flex-col gap-2">
                <motion.button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                  <Share2 size={18} className="text-[#FFDE2D]" />
                </motion.button>
                <motion.button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} onClick={() => setIsChatOpen(true)}>
                  <MessageCircle size={18} className="text-[#FFDE2D]" />
                </motion.button>
              </motion.div>}
          </AnimatePresence>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-[#2c333c] border-t border-white/10 px-4 py-3 rounded-tl-3xl">
        <div className="max-w-lg mx-auto">
          <ExpandableTabs tabs={tabs} activeColor="text-white" className="bg-transparent justify-between w-full border-0" onChange={index => index !== null && setCurrentPage(tabs[index].title)} defaultSelected={0} />
        </div>
      </div>
      {isChatOpen && <AnimatePresence>
          <Chat onClose={() => setIsChatOpen(false)} />
        </AnimatePresence>}
    </div>;
}