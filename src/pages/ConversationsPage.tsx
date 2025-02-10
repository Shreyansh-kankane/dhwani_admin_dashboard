import React from 'react';
import { MessageSquare, Phone, User, Clock } from 'lucide-react';

interface Conversation {
  id: string;
  customerName: string;
  phoneNumber: string;
  duration: string;
  status: 'completed' | 'failed' | 'in-progress';
  timestamp: string;
  intent: string;
}

const conversations: Conversation[] = [
  {
    id: '1',
    customerName: 'Alice Johnson',
    phoneNumber: '+1 (555) 123-4567',
    duration: '3m 45s',
    status: 'completed',
    timestamp: '2024-03-15 14:30',
    intent: 'Customer Support',
  },
  {
    id: '2',
    customerName: 'Bob Smith',
    phoneNumber: '+1 (555) 987-6543',
    duration: '2m 15s',
    status: 'completed',
    timestamp: '2024-03-15 13:45',
    intent: 'Sales Inquiry',
  },
  {
    id: '3',
    customerName: 'Carol White',
    phoneNumber: '+1 (555) 456-7890',
    duration: '1m 30s',
    status: 'failed',
    timestamp: '2024-03-15 13:15',
    intent: 'Technical Support',
  },
];

export function ConversationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Conversations</h1>
        <p className="mt-1 text-sm text-gray-500">
          View and analyze your AI-powered conversations
        </p>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="p-4 border-b border-gray-200">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search conversations..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option>All Intents</option>
              <option>Customer Support</option>
              <option>Sales Inquiry</option>
              <option>Technical Support</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Intent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {conversations.map((conversation) => (
                <tr key={conversation.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-gray-400 mr-2" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {conversation.customerName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {conversation.phoneNumber}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {conversation.intent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {conversation.duration}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      conversation.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : conversation.status === 'failed'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {conversation.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {conversation.timestamp}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-900">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}