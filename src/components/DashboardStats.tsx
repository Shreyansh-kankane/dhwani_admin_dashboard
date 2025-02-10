import React from 'react';
import { PhoneCall, Clock, DollarSign, Users } from 'lucide-react';

const stats = [
  {
    name: 'Total Calls',
    value: '8,439',
    change: '+12.5%',
    changeType: 'positive',
    icon: PhoneCall,
  },
  {
    name: 'Avg. Response Time',
    value: '0.5ms',
    change: '-18.2%',
    changeType: 'positive',
    icon: Clock,
  },
  {
    name: 'Monthly Cost',
    value: '$2,850',
    change: '+4.3%',
    changeType: 'negative',
    icon: DollarSign,
  },
  {
    name: 'Active Users',
    value: '1,257',
    change: '+28.4%',
    changeType: 'positive',
    icon: Users,
  },
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.name}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {stat.name}
              </dt>
            </div>
            <dd className="mt-4">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <p className={`absolute bottom-4 flex items-center text-sm ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </p>
            </dd>
          </div>
        );
      })}
    </div>
  );
}