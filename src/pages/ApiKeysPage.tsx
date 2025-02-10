import React from 'react';
import { Key, Plus, Copy, Eye, EyeOff } from 'lucide-react';

interface ApiKey {
  id: string;
  name: string;
  lastUsed: string;
  createdAt: string;
  key: string;
}

const apiKeys: ApiKey[] = [
  {
    id: '1',
    name: 'Production API Key',
    lastUsed: '2 minutes ago',
    createdAt: '2024-02-15',
    key: 'sk_live_xxxxxxxxxxxxx',
  },
  {
    id: '2',
    name: 'Development API Key',
    lastUsed: '1 hour ago',
    createdAt: '2024-02-10',
    key: 'sk_test_xxxxxxxxxxxxx',
  },
];

export function ApiKeysPage() {
  const [showKey, setShowKey] = React.useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">API Keys</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your API keys for authentication
          </p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Create New Key
        </button>
      </div>

      <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
        {apiKeys.map((apiKey) => (
          <div key={apiKey.id} className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Key className="h-5 w-5 text-gray-400" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">{apiKey.name}</h3>
                  <p className="text-sm text-gray-500">Created on {apiKey.createdAt}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">Last used {apiKey.lastUsed}</span>
                <button
                  onClick={() => setShowKey(showKey === apiKey.id ? null : apiKey.id)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  {showKey === apiKey.id ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
                <button
                  onClick={() => navigator.clipboard.writeText(apiKey.key)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <Copy className="h-5 w-5" />
                </button>
              </div>
            </div>
            {showKey === apiKey.id && (
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <code className="text-sm text-gray-900">{apiKey.key}</code>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}