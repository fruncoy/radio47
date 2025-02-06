import React from "react";
import { Bell, User, Shield, HelpCircle } from "lucide-react";
export function Settings() {
  const settingsItems = [{
    icon: Bell,
    label: "Notifications"
  }, {
    icon: User,
    label: "Account"
  }, {
    icon: Shield,
    label: "Privacy"
  }, {
    icon: HelpCircle,
    label: "Help & Support"
  }];
  return <div className="flex flex-col px-4 mt-6">
      <div className="grid gap-2">
        {settingsItems.map((item, index) => <button key={index} className="flex items-center space-x-4 bg-[#2c333c] p-4 rounded-lg w-full text-left">
            <item.icon className="text-gray-400" size={20} />
            <span>{item.label}</span>
          </button>)}
      </div>
    </div>;
}