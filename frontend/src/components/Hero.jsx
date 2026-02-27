import React from 'react'
import group from '../assets/group.jpeg'

const Hero = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-12 md:px-12 md:py-16 shadow-2xl animate-fade-up">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-grid" />
      </div>

      <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
        {/* Left content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-responsive-xs text-slate-200 backdrop-blur">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gradient-to-r from-red-400 via-rose-400 to-blue-400 animate-pulse" />
            Focused campus, future-ready outcomes
          </div>

          <div className="space-y-4">
            <p className="text-responsive-sm uppercase tracking-[0.35em] text-slate-400">
              Welcome to
            </p>
            <h1 className="text-responsive-4xl md:text-responsive-5xl font-semibold tracking-tight">
              The Study Hall{' '}
              <span className="bg-gradient-to-r from-rose-300 via-red-300 to-blue-300 bg-clip-text text-transparent">
                College
              </span>
            </h1>
            <p className="text-responsive-base text-slate-200 max-w-xl">
              A calm, design-led campus built for ambitious learners. Combine
              rigorous academics with thoughtfully crafted spaces so you can
              focus, grow, and do your best work.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate?.('curriculum')}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-rose-500 to-blue-500 px-6 py-2.5 text-responsive-sm font-semibold text-white shadow-lg shadow-red-500/40 hover:brightness-110 hover:-translate-y-0.5 transition-all"
            >
              Explore programs
              <span className="text-xs">↗</span>
            </button>
            <button
              onClick={() => onNavigate?.('admission')}
              className="inline-flex items-center gap-2 rounded-full border border-slate-600/60 bg-white/5 px-5 py-2.5 text-responsive-sm font-medium text-slate-100 hover:bg-white/10 hover:border-slate-400/80 transition-all"
            >
              View admission journey
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-md text-responsive-xs text-slate-300">
            <div className="space-y-1">
              <p className="font-semibold text-white text-responsive-base">18:1</p>
              <p>Student–faculty ratio</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white text-responsive-base">24/7</p>
              <p>Access to study halls</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white text-responsive-base">Top 5%</p>
              <p>Placements in core programs</p>
            </div>
          </div>
        </div>

        {/* Right visual cards */}
        <div className="relative max-w-xl mx-auto lg:mx-0">
          <div className="relative rounded-2xl bg-slate-900/40 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-md hero-card">
            <img
              src={group}
              alt="Students collaborating at The Study Hall College"
              className="h-60 w-full object-cover md:h-72"
            />

            <div className="p-4 md:p-5 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-responsive-xs uppercase tracking-[0.2em] text-slate-400">
                    Study Halls
                  </p>
                  <p className="text-responsive-base font-semibold">
                    Designed for deep focus
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full bg-emerald-500/15 text-emerald-300 px-3 py-1 text-responsive-xs font-medium">
                  24/7 Open
                </span>
              </div>

              <p className="text-responsive-xs text-slate-300">
                Sunlit spaces, quiet zones, and collaborative pods built to
                match how today&apos;s students actually learn.
              </p>

              <div className="grid grid-cols-3 gap-2 text-responsive-xs text-slate-200/80">
                <div className="rounded-xl bg-white/5 px-3 py-2 flex flex-col gap-1">
                  <span className="text-[0.65rem] text-slate-400">Study pods</span>
                  <span className="font-semibold">40+</span>
                </div>
                <div className="rounded-xl bg-white/5 px-3 py-2 flex flex-col gap-1">
                  <span className="text-[0.65rem] text-slate-400">Power & Wi‑Fi</span>
                  <span className="font-semibold">Every seat</span>
                </div>
                <div className="rounded-xl bg-white/5 px-3 py-2 flex flex-col gap-1">
                  <span className="text-[0.65rem] text-slate-400">Noise level</span>
                  <span className="font-semibold">Library‑quiet</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating mini cards */}
          <div className="pointer-events-none">
            <div className="hero-mini-card hero-mini-card-1">
              <p className="text-[0.65rem] text-slate-300">Placement offers</p>
              <p className="text-responsive-sm font-semibold text-white">Top companies</p>
            </div>
            <div className="hero-mini-card hero-mini-card-2">
              <p className="text-[0.65rem] text-slate-300">Campus events</p>
              <p className="text-responsive-sm font-semibold text-white">Year round</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero