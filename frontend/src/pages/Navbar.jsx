import React, { useState } from 'react'
import studyLogo from "../assets/study.jpeg"

const links = [
  { id: 'home', label: 'Home' },
  { 
    id: 'programs', 
    label: 'Programs',
    dropdown: [
      { id: 'bca', label: 'BCA' },
      { id: 'bba', label: 'BBA' },
      { id: 'bcom', label: 'B.COM' },
      { id: 'bjmc', label: 'BJMC' }
    ]
  },
  { id: 'admission', label: 'Admission' },
  { id: 'fee-structure', label: 'Fee Structure' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'alumni', label: 'Alumni' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

const Navbar = ({ currentPage, onNavigate }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleProgramClick = (programId) => {
    setDropdownOpen(false)
    setMobileMenuOpen(false)
    onNavigate(`curriculum-${programId}`)
  }

  const handleLinkClick = (linkId) => {
    setDropdownOpen(false)
    setMobileMenuOpen(false)
    onNavigate(linkId)
  }

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex flex-col text-responsive-xs font-semibold tracking-tight">
            <div className='flex' onClick={() => onNavigate('home')}>
              <img src={studyLogo} alt="Study Hall College" className="h-20 w-auto" />
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-responsive-sm font-medium">
          {links.map(link => (
            <div key={link.id} className="relative">
              {link.dropdown ? (
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`relative py-1 transition-colors flex items-center gap-1 ${
                      currentPage === link.id || dropdownOpen
                        ? 'text-slate-900'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    {(currentPage === link.id || dropdownOpen) && (
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-red-500 via-rose-500 to-blue-500" />
                    )}
                  </button>
                  
                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden">
                      {link.dropdown.map(item => (
                        <button
                          key={item.id}
                          onClick={() => handleProgramClick(item.id)}
                          className="w-full text-left px-4 py-3 text-responsive-sm text-slate-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 hover:text-slate-900 transition-colors border-b border-slate-100 last:border-b-0"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 transition-colors ${
                    currentPage === link.id
                      ? 'text-slate-900'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {currentPage === link.id && (
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-red-500 via-rose-500 to-blue-500" />
                  )}
                </button>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            {links.map(link => (
              <div key={link.id} className="mb-2">
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full text-left px-4 py-3 text-responsive-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between"
                    >
                      {link.label}
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {dropdownOpen && (
                      <div className="mt-2 ml-4 space-y-1">
                        {link.dropdown.map(item => (
                          <button
                            key={item.id}
                            onClick={() => handleProgramClick(item.id)}
                            className="w-full text-left px-4 py-2 text-responsive-sm text-slate-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 hover:text-slate-900 rounded-lg transition-colors"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="w-full text-left px-4 py-3 text-responsive-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar