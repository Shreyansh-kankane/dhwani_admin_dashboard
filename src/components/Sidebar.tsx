import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Key, 
  BarChart3, 
  MessageSquare, 
  Settings, 
  Users, 
  CreditCard,
  Headphones
} from 'lucide-react';

const navigation = [
  { name: 'Analytics', href: '/dashboard', icon: BarChart3 },
  { name: 'Phone Numbers', href: '/numbers', icon: Phone },
  { name: 'API Keys', href: '/api-keys', icon: Key },
  { name: 'Conversations', href: '/conversations', icon: MessageSquare },
  { name: 'Team', href: '/team', icon: Users },
  { name: 'Billing', href: '/billing', icon: CreditCard },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex flex-col h-full bg-gray-900 w-64 text-white">
      <div className="p-4 flex items-center gap-2 border-b border-gray-800">
        <Headphones className="w-8 h-8 text-blue-500" />
        <span className="text-xl font-bold">Dhwani AI</span>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}