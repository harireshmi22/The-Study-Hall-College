import { useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import HomePage_Old from './pages/HomePage_Old'
import ProgramsPage from './pages/ProgramsPage'
import AdmissionPage from './pages/AdmissionPage'
import AlumniPage from './pages/AlumniPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Gallery from './pages/Gallery'
import Footer from './pages/Footer'
import BBA from './pages/curriculums/BBA'
import BCA from './pages/curriculums/BCA'
import BAJMC from './pages/curriculums/BJMC'
import BCOM from './pages/curriculums/BCOM'
import CurriculumOverview from './pages/CurriculumOverview'
import FeeStructurePage from './pages/FeeStructurePage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  let PageComponent
  switch (currentPage) {
    case 'programs':
      PageComponent = <ProgramsPage onNavigate={setCurrentPage} />
      break
    case 'curriculum':
      PageComponent = <CurriculumOverview onNavigate={setCurrentPage} />
      break
    case 'admission':
      PageComponent = <AdmissionPage />
      break
    case 'gallery':
      PageComponent = <Gallery />
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
    case 'curriculum-bca':
      PageComponent = <BCA />
      break
    case 'curriculum-bba':
      PageComponent = <BBA />
      break
    case 'curriculum-bjmc':
      PageComponent = <BAJMC />
      break
    case 'curriculum-bcom':
      PageComponent = <BCOM />
      break
    case 'fee-structure':
      PageComponent = <FeeStructurePage />
      break
    case 'home':
    default:
      PageComponent = <HomePage_Old onNavigate={setCurrentPage} />
      break
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

      <main className="flex-1">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {PageComponent}
        </div>
      </main>

      <Footer onNavigate={setCurrentPage} />

      <button
        type="button"
        className="fixed right-4 bottom-24 z-30 hidden sm:inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2.5 text-responsive-xs font-semibold text-white shadow-lg shadow-red-500/40 hover:translate-y-[-2px] transition-transform"
      >
        Admission Enquiry
      </button>

      <button
        type="button"
        className="fixed right-4 bottom-6 z-30 inline-flex items-center justify-center h-11 w-11 rounded-full bg-green-500 text-white text-lg font-semibold shadow-lg shadow-green-500/40 hover:translate-y-[-2px] transition-transform"
        aria-label="Chat on WhatsApp (demo)"
      >
        W
      </button>
    </div>
  )
}

export default App
