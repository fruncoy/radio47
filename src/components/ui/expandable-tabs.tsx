import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { cn } from "../../lib/utils";
import { BoxIcon } from "lucide-react";
interface Tab {
  title: string;
  icon: BoxIcon;
  type?: never;
}
interface Separator {
  type: "separator";
  title?: never;
  icon?: never;
}
type TabItem = Tab | Separator;
interface ExpandableTabsProps {
  tabs: TabItem[];
  className?: string;
  activeColor?: string;
  onChange?: (index: number | null) => void;
  defaultSelected?: number;
}
const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: ".5rem",
    paddingRight: ".5rem"
  },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? ".5rem" : 0,
    paddingLeft: isSelected ? "1rem" : ".5rem",
    paddingRight: isSelected ? "1rem" : ".5rem"
  })
};
const spanVariants = {
  initial: {
    width: 0,
    opacity: 0
  },
  animate: {
    width: "auto",
    opacity: 1
  },
  exit: {
    width: 0,
    opacity: 0
  }
};
const transition = {
  delay: 0.1,
  type: "spring",
  bounce: 0,
  duration: 0.6
};
export function ExpandableTabs({
  tabs,
  className,
  activeColor = "text-primary",
  onChange,
  defaultSelected
}: ExpandableTabsProps) {
  const [selected, setSelected] = useState<number | null>(defaultSelected ?? null);
  const outsideClickRef = useRef(null);
  useOnClickOutside(outsideClickRef, () => {
    setSelected(null);
    onChange?.(null);
  });
  const handleSelect = (index: number) => {
    setSelected(index);
    onChange?.(index);
  };
  const Separator = () => <div className="mx-1 h-[24px] w-[1.2px] bg-border" aria-hidden="true" />;
  return <div ref={outsideClickRef} className={cn("flex items-center justify-between gap-1 p-1", className)}>
      {tabs.map((tab, index) => {
      if (tab.type === "separator") {
        return <Separator key={`separator-${index}`} />;
      }
      const Icon = tab.icon;
      return <motion.button key={tab.title} variants={buttonVariants} initial={false} animate="animate" custom={selected === index} onClick={() => handleSelect(index)} transition={transition} className={cn("relative flex items-center rounded-xl px-3 py-2 text-xs font-medium transition-all duration-300", selected === index ? "text-white" : "text-gray-400 hover:text-white hover:bg-white/5")}>
            <Icon size={18} className={selected === index ? "text-[#1E3EA1]" : ""} />
            <AnimatePresence initial={false}>
              {selected === index && <motion.span variants={spanVariants} initial="initial" animate="animate" exit="exit" transition={transition} className="overflow-hidden whitespace-nowrap ml-1.5">
                  {tab.title}
                </motion.span>}
            </AnimatePresence>
          </motion.button>;
    })}
    </div>;
}