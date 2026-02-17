import { Routes, Route } from 'react-router-dom'
import Layout from './components/common/Layout'
import ProtectedRoute from './components/common/ProtectedRoute'

import HomePage from './pages/public/HomePage'
import AboutPage from './pages/public/AboutPage'
import ResearchPage from './pages/public/ResearchPage'
import DataPage from './pages/public/DataPage'
// import ParticipatePage from './pages/public/ParticipatePage'  // Hidden until IRB approval
import SupportPage from './pages/public/SupportPage'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import PendingApprovalPage from './pages/auth/PendingApprovalPage'
import DashboardHome from './pages/dashboard/DashboardHome'
import VariantsPage from './pages/dashboard/VariantsPage'
import ReportsPage from './pages/dashboard/ReportsPage'
import ResearchersPage from './pages/dashboard/ResearchersPage'
import ProfilePage from './pages/dashboard/ProfilePage'
import MembersPage from './pages/dashboard/MembersPage'

export default function App() {
  return (
    <Layout>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/data" element={<DataPage />} />
        {/* <Route path="/participate" element={<ParticipatePage />} /> */}{/* Hidden until IRB approval */}
        <Route path="/support" element={<SupportPage />} />

        {/* Auth routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/pending" element={<ProtectedRoute><PendingApprovalPage /></ProtectedRoute>} />

        {/* Protected dashboard routes */}
        <Route path="/dashboard" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
        <Route path="/dashboard/variants" element={<ProtectedRoute><VariantsPage /></ProtectedRoute>} />
        <Route path="/dashboard/reports" element={<ProtectedRoute><ReportsPage /></ProtectedRoute>} />
        <Route path="/dashboard/researchers" element={<ProtectedRoute><ResearchersPage /></ProtectedRoute>} />
        <Route path="/dashboard/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="/dashboard/members" element={<ProtectedRoute allowedRoles={['admin']}><MembersPage /></ProtectedRoute>} />
      </Routes>
    </Layout>
  )
}
