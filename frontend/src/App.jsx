import { useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import HomePage from './pages/HomePage'
import ProgramsPage from './pages/ProgramsPage'
import AdmissionPage from './pages/AdmissionPage'
import AlumniPage from './pages/AlumniPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  let PageComponent
  switch (currentPage) {
    case 'programs':
      PageComponent = <ProgramsPage />
      break
    case 'admission':
      PageComponent = <AdmissionPage />
      break
    case 'alumni':
      PageComponent = <AlumniPage />
      break
    case 'about':
      PageComponent = <AboutPage />
      break
    case 'contact':
      PageComponent = <ContactPage />
      break
    case 'home':
    default:
      PageComponent = <HomePage onNavigate={setCurrentPage} />
      break
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {PageComponent}
      </main>

      <footer className="border-t border-slate-800 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} The Study Hall College. All rights reserved.</span>
          <span className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-gradient-to-r from-red-500 to-blue-500" />
            Designed for focused, modern learners.
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
