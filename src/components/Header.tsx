import { Bell, Search } from 'lucide-react';
import { useState } from 'react';
import Logout from './Logout';

export function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 h-16">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center flex-1">
          <div className="max-w-lg w-full lg:max-w-xs relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search..."
              type="search"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-600 hover:text-gray-900">
            <Bell className="h-6 w-6" />
            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500" />
          </button>
          
          <div className="flex items-center gap-3 relative cursor-pointer" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onBlur={() => setIsMenuOpen(false)}
          >
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User avatar"
            />
            <div className="hidden md:block"

            >
              <div className="text-sm font-medium text-gray-900">John Doe</div>
              <div className="text-xs text-gray-500">Admin</div>
            </div>

            <div
              className={`absolute right-0 top-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 ${isMenuOpen ? 'block' : 'hidden'}`} 
            >
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
              <Logout />
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}