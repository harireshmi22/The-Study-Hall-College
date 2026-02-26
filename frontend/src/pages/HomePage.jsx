import React from 'react'

const HomePage = ({ onNavigate }) => {
  return (
    <div className="space-y-12">
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Welcome to
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
            The Study Hall College
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl">
            A calm, focused campus for ambitious learners. We blend intensive
            academics with thoughtfully designed study spaces so you can do
            your best work without the noise.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate?.('programs')}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-red-500/30 transition hover:brightness-110"
            >
              Explore programs
              <span className="text-xs">↗</span>
            </button>
            <button
              onClick={() => onNavigate?.('admission')}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-2 text-xs sm:text-sm font-medium text-slate-100 hover:border-slate-500"
            >
              View admission journey
            </button>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-slate-400">
            <div className="space-y-1">
              <p className="font-semibold text-slate-100">18:1</p>
              <p>Student–faculty ratio</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-slate-100">24/7</p>
              <p>Access to study halls</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-slate-100">Top 5%</p>
              <p>Placements in core programs</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-red-500/10 via-rose-500/5 to-blue-500/10 blur-3xl" />
          <div className="relative rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 sm:p-6 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Focus Bands
            </p>
            <p className="text-sm text-slate-200">
              A day at Study Hall is structured into intentional focus bands so
              you always know what you&apos;re working toward.
            </p>
            <div className="space-y-3">
              {[
                {
                  label: 'Deep Work',
                  time: '08:00 – 11:00',
                  from: 'from-red-500',
                  to: 'to-rose-500',
                },
                {
                  label: 'Guided Practice',
                  time: '11:30 – 15:00',
                  from: 'from-blue-500',
                  to: 'to-sky-500',
                },
                {
                  label: 'Peer Studio',
                  time: '16:00 – 19:00',
                  from: 'from-rose-500',
                  to: 'to-blue-500',
                },
              ].map(band => (
                <div key={band.label} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>{band.label}</span>
                    <span className="text-slate-400">{band.time}</span>
                  </div>
                  <div
                    className={`h-2 w-full rounded-full bg-gradient-to-r ${band.from} ${band.to}`}
                  />
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-400">
              These bands run across all programs, creating a quiet, shared
              rhythm for the whole campus.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
            Programs
          </p>
          <h2 className="text-sm font-semibold text-slate-50">
            Curated for depth, not overload
          </h2>
          <p className="text-xs text-slate-300">
            From foundational degrees to focused specialisations, our programs
            are intentionally scoped so you can go deep instead of juggling
            noise.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            Spaces
          </p>
          <h2 className="text-sm font-semibold text-slate-50">
            Study halls built like libraries
          </h2>
          <p className="text-xs text-slate-300">
            Quiet zones, device-free rows, whiteboard corners and mentor pods
            — every hall is tuned for focus.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
            Support
          </p>
          <h2 className="text-sm font-semibold text-slate-50">
            People who study with you
          </h2>
          <p className="text-xs text-slate-300">
            Faculty mentors and alumni fellows host small, consistent circles so
            you are never preparing alone for the big milestones.
          </p>
        </div>
      </section>
    </div>
  )
}

export default HomePage
