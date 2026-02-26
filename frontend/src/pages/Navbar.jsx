import React from 'react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'programs', label: 'Programs' },
  { id: 'admission', label: 'Admission' },
  { id: 'alumni', label: 'Alumni' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

const Navbar = ({ currentPage, onNavigate }) => {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-red-500 via-rose-500 to-blue-500 flex items-center justify-center text-xs font-semibold tracking-tight shadow-lg shadow-red-500/30">
            SH
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-sm sm:text-base tracking-tight">
              The Study Hall College
            </div>
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-slate-400">
              Redefining focused learning
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`relative py-1 transition-colors ${
                currentPage === link.id
                  ? 'text-slate-50'
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {link.label}
              {currentPage === link.id && (
                <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-red-500 via-rose-500 to-blue-500" />
              )}
            </button>
          ))}
        </nav>

        <div className="md:hidden flex items-center gap-2 text-[11px] font-medium text-slate-400">
          <span className="h-1 w-1 rounded-full bg-gradient-to-r from-red-500 to-blue-500" />
          Minimal navigation for demo
        </div>
      </div>
    </header>
  )
}

export default Navbar