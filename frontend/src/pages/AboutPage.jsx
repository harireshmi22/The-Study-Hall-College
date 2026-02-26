import React from 'react'

const AboutPage = () => {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          About
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
          A college built around the idea of a study hall.
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl">
          We started with a simple question: what if the entire campus felt as
          calm and intentional as the best corner of a library? The Study Hall
          College is our answer.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
            Mission
          </p>
          <p className="text-xs text-slate-300">
            To create a quiet, rigorous environment where students can think
            deeply, learn consistently, and build lives of meaningful impact.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            Vision
          </p>
          <p className="text-xs text-slate-300">
            A new kind of college where calendars are lighter, classes are
            smaller, and serious study feels sustainable — not overwhelming.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
            Values
          </p>
          <p className="text-xs text-slate-300">
            Quiet confidence, honest effort, deep curiosity, and respect for
            other people&apos;s focus.
          </p>
        </article>
      </section>

      <section className="grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            How we are different
          </p>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              • Fewer subjects per term so you can go deeper into each one.
            </li>
            <li>• Long, uninterrupted focus bands built into the timetable.</li>
            <li>
              • Clear rules about device use inside different study zones
              (marked in red, blue and white).
            </li>
            <li>
              • Faculty mentoring that focuses on how you study, not just what
              you score.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
            Unique idea · Color Zones
          </p>
          <p className="text-xs text-slate-300">
            Our campus uses three simple color cues to keep focus easy:
          </p>
          <ul className="space-y-1.5 text-[11px] text-slate-300">
            <li>
              <span className="font-semibold text-red-300">Red</span> — Deep
              work zones (silent, devices on mute).
            </li>
            <li>
              <span className="font-semibold text-blue-300">Blue</span> — Quiet
              collaboration (low voices, paired work).
            </li>
            <li>
              <span className="font-semibold text-slate-100">White</span> —
              Open commons (discussion, breaks, quick calls).
            </li>
          </ul>
          <p className="text-[11px] text-slate-500">
            You will see this palette echoed across our website, schedules, and
            wayfinding signs on campus.
          </p>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

