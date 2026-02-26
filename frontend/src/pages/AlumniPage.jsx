import React from 'react'

const stories = [
  {
    name: 'Aisha Verma',
    grad: 'B.Sc. Computer Science · 2022',
    role: 'Product Engineer, early-stage startup',
    highlight:
      'Used Study Studio hours to build a portfolio of small tools that led directly to her job offer.',
  },
  {
    name: 'Karan Singh',
    grad: 'B.Com. · 2021',
    role: 'Analyst, global consulting firm',
    highlight:
      'Says the biggest advantage was learning to present complex ideas clearly in small study circles.',
  },
  {
    name: 'Meera Iyer',
    grad: 'B.A. Humanities · 2020',
    role: 'Policy Research Fellow',
    highlight:
      'Turned term papers into published essays with guidance from faculty mentors and alumni reviewers.',
  },
]

const AlumniPage = () => {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Alumni
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
          A quiet campus, a loud impact.
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl">
          Our alumni carry the Study Hall rhythm into the world — focused,
          thoughtful, and able to learn fast in any environment.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
        <div className="space-y-4">
          {stories.map(story => (
            <article
              key={story.name}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2"
            >
              <p className="text-sm font-semibold text-slate-50">
                {story.name}
              </p>
              <p className="text-[11px] text-slate-400">{story.grad}</p>
              <p className="text-xs text-blue-200">{story.role}</p>
              <p className="text-xs text-slate-300 mt-2">{story.highlight}</p>
            </article>
          ))}
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Unique idea · Alumni Tables
            </p>
            <h2 className="text-sm font-semibold text-slate-50">
              Monthly &quot;Alumni Tables&quot; in the study hall.
            </h2>
            <p className="text-xs text-slate-300">
              Once a month, alumni quietly take over a few tables in the main
              hall. They simply work from campus, letting students see how they
              plan, read, and think in real time — and answer questions during
              breaks.
            </p>
            <ul className="space-y-1.5 text-[11px] text-slate-300">
              <li>• No formal talks, no slides — just real work.</li>
              <li>• Faculty host small breakout chats around those tables.</li>
              <li>• Open to all years and programs.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-3 text-xs text-slate-300">
            <p className="text-[11px] font-semibold text-slate-100">
              Where our alumni go
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <p className="text-lg font-semibold text-slate-50">40%</p>
                <p className="text-[11px] text-slate-400">Higher studies</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-50">35%</p>
                <p className="text-[11px] text-slate-400">Industry roles</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-50">25%</p>
                <p className="text-[11px] text-slate-400">
                  Entrepreneurial / fellowships
                </p>
              </div>
            </div>
            <p className="text-[11px] text-slate-500">
              Sample distribution for a recent graduating batch. Exact numbers
              change each year.
            </p>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default AlumniPage

