import React from 'react'
import img6 from '../assets/img6.jpg'

const ProgramsPage = ({ onNavigate }) => {
  const clusters = [
    {
      name: 'Foundational Degrees',
      accent: 'from-red-500 to-rose-500',
      programs: ['B.A. in Humanities', 'B.Sc. in Physical Sciences', 'B.Com.'],
      idea: 'Strong academic core tuned for higher studies and research.',
    },
    {
      name: 'Applied & Professional',
      accent: 'from-blue-500 to-sky-500',
      programs: ['BBA', 'BCA', 'B.Sc. Computer Science'],
      idea: 'Industry-facing programs backed by labs and studio projects.',
    },
    {
      name: 'Honours Tracks',
      accent: 'from-rose-500 to-red-500',
      programs: ['Economics Honours', 'Mathematics Honours', 'English Honours'],
      idea: 'Selective, research-led cohorts with small class sizes.',
    },
  ]

  return (
    <div className="space-y-10 animate-fade-up">
      {/* Intro + visual card */}
      <section className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Programs
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            Programs curated around how you actually study.
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl">
            We designed every program to work with the Study Hall rhythm — fewer parallel
            subjects, longer focus bands, and time blocked specifically for practice and projects.
          </p>

          <div className="grid gap-4 sm:grid-cols-3 text-xs text-slate-600">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 space-y-1 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Small cohorts</p>
              <p>Smaller class sizes so mentors actually know how you learn.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-3 space-y-1 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Studio time</p>
              <p>Protected weekly slots for hands‑on work, not just lectures.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-3 space-y-1 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Career clarity</p>
              <p>Each track connects clearly to roles, exams, or higher studies.</p>
            </div>
          </div>
        </header>

        <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/70 via-slate-800/40 to-slate-900/70 mix-blend-multiply" />
          <img
            src={img6}
            alt="Students collaborating on academic projects"
            className="h-56 w-full object-cover md:h-64"
          />
          <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-[0.25em] text-slate-200">
                Academic pathways
              </p>
              <p className="text-sm font-semibold">
                Pick a track that matches how you like to learn — analytical, creative, or a mix.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-[11px] text-slate-100">
              <div>
                <p className="text-base font-semibold">3+</p>
                <p>Clusters that group related degrees.</p>
              </div>
              <div>
                <p className="text-base font-semibold">8+</p>
                <p>Core programs offered on campus.</p>
              </div>
              <div>
                <p className="text-base font-semibold">Many</p>
                <p>Electives that cut across disciplines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program clusters */}
      <section className="grid gap-6 md:grid-cols-3">
        {clusters.map(cluster => (
          <article
            key={cluster.name}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 space-y-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div
              className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${cluster.accent}`}
            />
            <div className="space-y-1">
              <h2 className="text-sm font-semibold text-slate-900">
                {cluster.name}
              </h2>
              <p className="text-xs text-slate-600">{cluster.idea}</p>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {cluster.programs.map(program => {
                const programKey = program.toLowerCase().replace(/\./g, '').replace(/\s+/g, '');
                const isClickable = ['bba', 'bca', 'bajmc', 'bcom'].includes(programKey);
                
                return (
                  <li
                    key={program}
                    className="flex items-center justify-between gap-3"
                  >
                    {isClickable ? (
                      <button
                        onClick={() => onNavigate?.(programKey)}
                        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                      >
                        {program}
                      </button>
                    ) : (
                      <span>{program}</span>
                    )}
                    <span className="h-px w-8 bg-slate-200" />
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </section>

      {/* Study Studio idea */}
      <section className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">
            Unique idea · Study Studio
          </p>
          <h2 className="text-sm font-semibold text-slate-900">
            Studio slots instead of random lab hours.
          </h2>
          <p className="text-xs text-slate-600">
            Every applied program includes weekly &quot;Study Studio&quot;
            blocks — 3-hour, device-on sessions where you ship something small
            but real: a prototype, a mini report, a teaching video. Faculty act
            as mentors, not lecturers.
          </p>
          <div className="grid grid-cols-3 gap-3 text-[11px] text-slate-600">
            <div className="space-y-1">
              <p className="font-semibold text-slate-900">3 hours</p>
              <p>of uninterrupted making time each week.</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-slate-900">No grades</p>
              <p>Only feedback and portfolio-worthy work.</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-slate-900">Cross-year</p>
              <p>Studios often mix years within the same program.</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
            Sample combinations
          </p>
          <ul className="space-y-2 text-xs text-slate-700">
            <li className="flex items-center justify-between">
              <span>B.Sc. Computer Science + Data Storytelling minor</span>
              <span className="rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] text-red-600">
                Recommended
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>B.Com. + Design for Business minor</span>
            </li>
            <li className="flex items-center justify-between">
              <span>B.A. Humanities + Public Policy minor</span>
            </li>
          </ul>
          <p className="text-[11px] text-slate-500">
            We help you choose combinations that stay light enough for deep
            work while still opening multiple career doors.
          </p>
        </div>
      </section>
    </div>
  )
}

export default ProgramsPage

