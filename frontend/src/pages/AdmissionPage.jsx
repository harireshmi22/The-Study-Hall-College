import React from 'react'
import group from '../assets/group.jpeg'

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
    <div className="space-y-10 animate-fade-up">
      {/* Intro + visual card */}
      <section className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Admission
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            A calm, clear admission journey — no guesswork.
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl">
            We keep our admission process transparent and human. Fewer stress points, fewer
            surprises, and more time to understand whether The Study Hall College feels right
            for you and your family.
          </p>

          <div className="grid gap-4 sm:grid-cols-3 text-xs text-slate-600">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 space-y-1 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Guided support</p>
              <p>Dedicated admission mentors to answer questions at every step.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-3 space-y-1 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Holistic view</p>
              <p>We look at intent, effort, and fit — not just marks.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-3 space-y-1 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Clarity first</p>
              <p>Clear timelines, documentation lists, and fee details from day one.</p>
            </div>
          </div>
        </header>

        <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-900/70 via-slate-800/40 to-blue-900/70 mix-blend-multiply" />
          <img
            src={group}
            alt="Students and mentors in conversation about admissions"
            className="h-56 w-full object-cover md:h-64"
          />
          <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-[0.25em] text-slate-200">
                Admission guidance
              </p>
              <p className="text-sm font-semibold">
                Join small, focused information sessions in our study halls — not noisy fairs.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-100">
              <div>
                <p className="text-base font-semibold">1:1</p>
                <p>Conversations with faculty mentors instead of panels.</p>
              </div>
              <div>
                <p className="text-base font-semibold">7 days</p>
                <p>Quiet window to decide after you receive an offer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
        <ol className="relative space-y-5">
          <div className="absolute left-3 top-1 bottom-4 w-px bg-slate-200" />
          {steps.map((step, index) => (
            <li key={step.label} className="relative pl-10">
              <div
                className={`absolute left-0 top-1 h-6 w-6 rounded-full bg-gradient-to-br ${step.tone} flex items-center justify-center text-[10px] font-semibold text-white shadow-md shadow-red-500/30`}
              >
                {index + 1}
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-1.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <p className="text-base font-semibold text-slate-900">
                  {step.label}
                </p>
                <p className="text-sm text-slate-600">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
              Unique idea · Quiet Window
            </p>
            <h2 className="text-sm font-semibold text-slate-900">
              A dedicated &quot;Quiet Window&quot; for decisions.
            </h2>
            <p className="text-xs text-slate-600">
              For 7 days after you receive an offer, we block all non-essential
              communication so you can think, visit other campuses, and talk
              with your family without constant pings.
            </p>
            <ul className="space-y-1.5 text-[11px] text-slate-600">
              <li>• No marketing calls or emails during your window.</li>
              <li>• One optional faculty call if you request it.</li>
              <li>• Decision reminders only on Days 3 and 6.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 text-xs text-slate-600 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <p className="text-[11px] font-semibold text-slate-900">
              Key dates (example cycle)
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-red-500/40 bg-red-50 p-3 space-y-1">
                <p className="text-[11px] font-semibold text-red-200">
                  Applications open
                </p>
                <p>March 1</p>
              </div>
              <div className="rounded-xl border border-blue-500/40 bg-blue-50 p-3 space-y-1">
                <p className="text-[11px] font-semibold text-blue-200">
                  Early offers
                </p>
                <p>April 15</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 space-y-1">
                <p className="text-[11px] font-semibold text-slate-900">
                  Regular offers
                </p>
                <p>May 15</p>
              </div>
              <div className="rounded-xl border border-rose-500/40 bg-rose-50 p-3 space-y-1">
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

