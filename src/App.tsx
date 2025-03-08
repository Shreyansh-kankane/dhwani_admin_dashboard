import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { DashboardStats } from "./components/DashboardStats";
import { PhoneNumbersPage } from "./pages/PhoneNumbersPage";
import { ApiKeysPage } from "./pages/ApiKeysPage";
import { ConversationsPage } from "./pages/ConversationsPage";
import { TeamPage } from "./pages/TeamPage";
import { BillingPage } from "./pages/BillingPage";
import { SettingsPage } from "./pages/SettingsPage";
import AuthScreen from "./components/AuthScreen";
import VerifyEmail from "./pages/VerifyEmail";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isVerified, loading } = useAuth();
  if (loading) return <div className="h-screen flex items-center justify-center">Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/auth" replace />;
  if (!isVerified) return <Navigate to="/verify-email" replace />;
  return children;
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isVerified, loading } = useAuth();
  if (loading) return <div className="h-screen flex items-center justify-center">Loading...</div>;
  if (isAuthenticated) return isVerified ? <Navigate to="/dashboard" replace /> : <Navigate to="/verify-email" replace />;
  return children;
}

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Monitor your AI calling system's performance and analytics
        </p>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Calls</h2>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">System Health</h2>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/auth" element={<PublicRoute><AuthScreen /></PublicRoute>} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<PrivateRoute><DashboardLayout><Dashboard /></DashboardLayout></PrivateRoute>} />
          <Route path="/numbers" element={<PrivateRoute><DashboardLayout><PhoneNumbersPage /></DashboardLayout></PrivateRoute>} />
          <Route path="/api-keys" element={<PrivateRoute><DashboardLayout><ApiKeysPage /></DashboardLayout></PrivateRoute>} />
          <Route path="/conversations" element={<PrivateRoute><DashboardLayout><ConversationsPage /></DashboardLayout></PrivateRoute>} />
          <Route path="/team" element={<PrivateRoute><DashboardLayout><TeamPage /></DashboardLayout></PrivateRoute>} />
          <Route path="/billing" element={<PrivateRoute><DashboardLayout><BillingPage /></DashboardLayout></PrivateRoute>} />
          <Route path="/settings" element={<PrivateRoute><DashboardLayout><SettingsPage /></DashboardLayout></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
