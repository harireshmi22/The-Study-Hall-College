import React from 'react'

const ProgramsPage = () => {
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
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Programs
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
          Programs curated around how you actually study.
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl">
          Instead of offering everything, we chose programs that work best with
          our Study Hall model — longer focus bands, fewer parallel subjects,
          and plenty of time for practice.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {clusters.map(cluster => (
          <article
            key={cluster.name}
            className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-4"
          >
            <div
              className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${cluster.accent}`}
            />
            <div className="space-y-1">
              <h2 className="text-sm font-semibold text-slate-50">
                {cluster.name}
              </h2>
              <p className="text-xs text-slate-300">{cluster.idea}</p>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-200">
              {cluster.programs.map(program => (
                <li
                  key={program}
                  className="flex items-center justify-between gap-3"
                >
                  <span>{program}</span>
                  <span className="h-px w-8 bg-slate-700" />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            Unique idea · Study Studio
          </p>
          <h2 className="text-sm font-semibold text-slate-50">
            Studio slots instead of random lab hours.
          </h2>
          <p className="text-xs text-slate-300">
            Every applied program includes weekly &quot;Study Studio&quot;
            blocks — 3-hour, device-on sessions where you ship something small
            but real: a prototype, a mini report, a teaching video. Faculty act
            as mentors, not lecturers.
          </p>
          <div className="grid grid-cols-3 gap-3 text-[11px] text-slate-300">
            <div className="space-y-1">
              <p className="font-semibold text-slate-50">3 hours</p>
              <p>of uninterrupted making time each week.</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-slate-50">No grades</p>
              <p>Only feedback and portfolio-worthy work.</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-slate-50">Cross-year</p>
              <p>Studios often mix years within the same program.</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
            Sample combinations
          </p>
          <ul className="space-y-2 text-xs text-slate-200">
            <li className="flex items-center justify-between">
              <span>B.Sc. Computer Science + Data Storytelling minor</span>
              <span className="rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] text-red-300">
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
          <p className="text-[11px] text-slate-400">
            We help you choose combinations that stay light enough for deep
            work while still opening multiple career doors.
          </p>
        </div>
      </section>
    </div>
  )
}

export default ProgramsPage

