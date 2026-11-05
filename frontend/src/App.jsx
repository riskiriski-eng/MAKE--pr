import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Toaster, ToastProvider } from './components/ui/Toaster'

// Layout
import MainLayout from './components/layout/MainLayout'

// Lazy load pages - code splitting for performance
const LandingPage = lazy(() => import('./pages/LandingPage'))
const TemplateGalleryPage = lazy(() => import('./pages/TemplateGalleryPage'))
const CVBuilderPage = lazy(() => import('./pages/CVBuilderPage'))
const DashboardPage = lazy(() => import('./pages/DashboardPage'))
const SettingsPage = lazy(() => import('./pages/SettingsPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const ComponentShowcasePage = lazy(() => import('./pages/ComponentShowcasePage'))

// Loading fallback
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bg-light">
      <div className="text-center">
        <div className="w-10 h-10 rounded-full border-2 border-cyan border-t-transparent animate-spin mx-auto mb-4" />
        <p className="text-body text-text-muted font-body">Loading...</p>
      </div>
    </div>
  )
}

/**
 * App - Root component with routing
 *
 * Routes:
 *   /             - Landing page
 *   /templates    - Template gallery
 *   /builder/:id  - CV builder
 *   /dashboard    - My projects
 *   /settings     - Settings
 *   /components   - Component Showcase
 */
function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Toaster />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route element={<MainLayout />}>
              <Route path="/templates" element={<TemplateGalleryPage />} />
              <Route path="/builder/:id" element={<CVBuilderPage />} />
              <Route path="/builder" element={<Navigate to="/templates" replace />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/components" element={<ComponentShowcasePage />} />
              <Route path="/storybook" element={<Navigate to="/components" replace />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ToastProvider>
  )
}

export default App