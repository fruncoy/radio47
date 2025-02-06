import React, { useState } from "react";
import { X, Send, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
export function Chat({
  onClose
}) {
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="fixed inset-0 z-30 bg-[#1a1f25]">
      <div className="flex flex-col h-full relative">
        <div className="bg-[#1E3EA1] h-[15vh] rounded-bl-3xl">
          <div className="absolute inset-x-0 top-0 p-4 flex items-center gap-3">
            <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FFDE2D]">
              <ArrowLeft size={18} className="text-[#1a1f25]" />
            </button>
            <h2 className="text-lg font-medium text-white">
              Radio 47 Live Chat
            </h2>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto bg-[#1a1f25]">
          <div className="p-4 space-y-4">
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-[#2c333c] flex-shrink-0" />
              <div className="bg-[#2c333c] rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%]">
                <p className="text-sm text-white">
                  Welcome to Radio 47 Live Chat!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#2c333c] p-4 rounded-t-3xl border-t border-white/10">
          <div className="flex gap-2 items-center max-w-lg mx-auto">
            <input type="text" placeholder="Type a message..." className="flex-1 bg-white/5 rounded-full px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3EA1]" />
            <button className="w-10 h-10 bg-[#1E3EA1] rounded-full flex items-center justify-center">
              <Send size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>;
}