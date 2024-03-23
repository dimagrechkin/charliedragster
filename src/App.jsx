import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer, Spinner } from './components'

const LandingPageWithMeteors = lazy(() => import('./HOC/MeteorBackgroundWrapper'))

const NotFound = lazy(() => import('./pages/NotFound'))
const Contacts = lazy(() => import('./pages/Contacts'))

export const App = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Router>
        <main className="flex-1">
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<LandingPageWithMeteors />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </div>
  )
}
