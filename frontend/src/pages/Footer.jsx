import React from 'react'

const Footer = ({ onNavigate }) => {
  return (
    <footer className="mt-10 bg-slate-900 text-slate-100 pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-red-500 via-rose-500 to-blue-500 flex items-center justify-center text-responsive-xs font-semibold tracking-tight shadow-lg shadow-red-500/40">
                SH
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-tight">
                  Study Hall College
                </p>
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-300">
                  Lucknow · U.P.
                </p>
              </div>
            </div>
            <div className="space-y-2 text-responsive-xs text-slate-300">
              <p>
                <span className="font-semibold text-red-300 text-responsive-sm">Phone:</span>{' '}
                +91 84000 78621
              </p>
              <p>
                <span className="font-semibold text-red-300 text-responsive-sm">Address:</span>{' '}
                Piparsand · Kanpur Road, Lucknow (U.P.)
              </p>
              <p>
                <span className="font-semibold text-red-300 text-responsive-sm">Email:</span>{' '}
                info@studyhallcollege.org
              </p>
            </div>
          </div>

          <div className="space-y-3 text-responsive-xs">
            <p className="font-semibold text-slate-100 uppercase tracking-[0.2em]">
              Quick Links
            </p>
            <ul className="space-y-1.5 text-slate-300 text-responsive-sm">
              <li><button onClick={() => onNavigate?.('home')} className="hover:text-white transition-colors text-left">Home</button></li>
              <li><button onClick={() => onNavigate?.('about')} className="hover:text-white transition-colors text-left">About</button></li>
              <li><button onClick={() => onNavigate?.('programs')} className="hover:text-white transition-colors text-left">Vision & Mission</button></li>
              <li><button onClick={() => onNavigate?.('programs')} className="hover:text-white transition-colors text-left">Faculty</button></li>
              <li><button onClick={() => onNavigate?.('about')} className="hover:text-white transition-colors text-left">Founder</button></li>
              <li><button onClick={() => onNavigate?.('admission')} className="hover:text-white transition-colors text-left">Admission Process</button></li>
            </ul>
          </div>

          <div className="space-y-3 text-responsive-xs">
            <p className="font-semibold text-slate-100 uppercase tracking-[0.2em]">
              Our Campus
            </p>
            <ul className="space-y-1.5 text-slate-300 text-responsive-sm">
              <li><button onClick={() => onNavigate?.('admission')} className="hover:text-white transition-colors text-left">Fee Structure</button></li>
              <li><button onClick={() => onNavigate?.('alumni')} className="hover:text-white transition-colors text-left">Placements</button></li>
              <li><button onClick={() => onNavigate?.('about')} className="hover:text-white transition-colors text-left">Gallery</button></li>
              <li><button onClick={() => onNavigate?.('about')} className="hover:text-white transition-colors text-left">Campus Tour</button></li>
              <li><button onClick={() => onNavigate?.('about')} className="hover:text-white transition-colors text-left">Clubs</button></li>
            </ul>
          </div>

          <div className="space-y-3 text-responsive-xs">
            <p className="font-semibold text-slate-100 uppercase tracking-[0.2em]">
              All Programs
            </p>
            <ul className="space-y-1.5 text-slate-300 text-responsive-sm">
              <li><button onClick={() => onNavigate?.('bba')} className="hover:text-white transition-colors text-left">BBA</button></li>
              <li><button onClick={() => onNavigate?.('bca')} className="hover:text-white transition-colors text-left">BCA</button></li>
              <li><button onClick={() => onNavigate?.('bajmc')} className="hover:text-white transition-colors text-left">BAJMC</button></li>
              <li><button onClick={() => onNavigate?.('bcom')} className="hover:text-white transition-colors text-left">BCOM</button></li>
            </ul>
            <div className="mt-3">
              <p className="text-responsive-xs font-semibold text-slate-200 mb-1">
                Visit Us
              </p>
              <div className="h-24 w-full rounded-xl border border-blue-400/40 bg-slate-100 overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-blue-100 via-slate-100 to-red-100 flex items-center justify-center text-responsive-xs font-medium text-slate-500">
                  Map placeholder · embed your campus map here
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800 pt-4 text-responsive-xs text-slate-400">
          <span>
            © {new Date().getFullYear()} Study Hall College. All Rights 
            Reserved.
          </span>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Follow us</span>
            <div className="flex items-center gap-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="h-7 w-7 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center text-responsive-xs font-semibold hover:bg-slate-200 transition-colors">
                f
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-7 w-7 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center text-responsive-xs font-semibold hover:bg-slate-200 transition-colors">
                in
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-7 w-7 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center text-responsive-xs font-semibold hover:bg-slate-200 transition-colors">
                IG
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="h-7 w-7 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center text-responsive-xs font-semibold hover:bg-slate-200 transition-colors">
                ▶
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
