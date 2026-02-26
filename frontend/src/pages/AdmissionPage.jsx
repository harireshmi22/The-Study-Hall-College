import React from 'react'

const steps = [
  {
    label: 'Explore & shortlist',
    detail:
      'Attend an open house or a virtual walk-through of our study halls, then shortlist 1–2 programs.',
    tone: 'from-blue-500 to-sky-500',
  },
  {
    label: 'Apply with intention',
    detail:
      'Submit your academic records and a short intent note describing how you like to study.',
    tone: 'from-red-500 to-rose-500',
  },
  {
    label: 'Conversation, not panel',
    detail:
      'Have a 1:1 conversation with a faculty mentor focused on fit and learning style.',
    tone: 'from-rose-500 to-blue-500',
  },
  {
    label: 'Offer & onboarding',
    detail:
      'Receive your offer, confirm, and join our &quot;Week Zero&quot; orientation for schedules and tools.',
    tone: 'from-slate-500 to-blue-500',
  },
]

const AdmissionPage = () => {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Admission
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
          A calm, clear admission journey — no guesswork.
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl">
          We keep our admission process transparent and human. Fewer stress
          points, fewer surprises, more chances to understand if The Study Hall
          College feels right for you.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
        <ol className="relative space-y-5">
          <div className="absolute left-3 top-1 bottom-4 w-px bg-slate-800" />
          {steps.map((step, index) => (
            <li key={step.label} className="relative pl-10">
              <div
                className={`absolute left-0 top-1 h-6 w-6 rounded-full bg-gradient-to-br ${step.tone} flex items-center justify-center text-[10px] font-semibold text-white shadow-md shadow-red-500/30`}
              >
                {index + 1}
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-1.5">
                <p className="text-xs font-semibold text-slate-50">
                  {step.label}
                </p>
                <p className="text-xs text-slate-300">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
              Unique idea · Quiet Window
            </p>
            <h2 className="text-sm font-semibold text-slate-50">
              A dedicated &quot;Quiet Window&quot; for decisions.
            </h2>
            <p className="text-xs text-slate-300">
              For 7 days after you receive an offer, we block all non-essential
              communication so you can think, visit other campuses, and talk
              with your family without constant pings.
            </p>
            <ul className="space-y-1.5 text-[11px] text-slate-300">
              <li>• No marketing calls or emails during your window.</li>
              <li>• One optional faculty call if you request it.</li>
              <li>• Decision reminders only on Days 3 and 6.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2 text-xs text-slate-300">
            <p className="text-[11px] font-semibold text-slate-100">
              Key dates (example cycle)
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 space-y-1">
                <p className="text-[11px] font-semibold text-red-200">
                  Applications open
                </p>
                <p>March 1</p>
              </div>
              <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-3 space-y-1">
                <p className="text-[11px] font-semibold text-blue-200">
                  Early offers
                </p>
                <p>April 15</p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-3 space-y-1">
                <p className="text-[11px] font-semibold text-slate-100">
                  Regular offers
                </p>
                <p>May 15</p>
              </div>
              <div className="rounded-xl border border-rose-500/40 bg-rose-500/10 p-3 space-y-1">
                <p className="text-[11px] font-semibold text-rose-100">
                  Week Zero
                </p>
                <p>Late July</p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default AdmissionPage

