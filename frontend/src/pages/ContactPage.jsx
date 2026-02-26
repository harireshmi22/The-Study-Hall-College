import React from 'react'

const ContactPage = () => {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Contact
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
          Reach The Study Hall College
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl">
          Whether you have questions about programs, admissions, or campus
          life, our team is happy to help.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
        <form className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
            Quick message
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="space-y-1 text-xs text-slate-200">
              <span>Full name</span>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-100 outline-none focus:border-red-500"
              />
            </label>
            <label className="space-y-1 text-xs text-slate-200">
              <span>Email address</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-100 outline-none focus:border-blue-500"
              />
            </label>
          </div>
          <label className="space-y-1 text-xs text-slate-200">
            <span>What would you like to know?</span>
            <select className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-100 outline-none focus:border-rose-500">
              <option>Programs & curriculum</option>
              <option>Admission process</option>
              <option>Scholarships & fees</option>
              <option>Campus & facilities</option>
              <option>Something else</option>
            </select>
          </label>
          <label className="space-y-1 text-xs text-slate-200">
            <span>Message</span>
            <textarea
              rows={4}
              placeholder="Share a few lines so we can respond clearly."
              className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-100 outline-none focus:border-blue-500"
            />
          </label>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-blue-600 px-5 py-2.5 text-xs font-medium text-white shadow-lg shadow-red-500/30 hover:brightness-110"
          >
            Send (demo only)
          </button>
          <p className="text-[11px] text-slate-500">
            This is a static demo form — connect it to your preferred email or
            form service when you go live.
          </p>
        </form>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-3 text-xs text-slate-300">
            <p className="text-[11px] font-semibold text-slate-100">
              Campus address
            </p>
            <p>
              The Study Hall College
              <br />
              123 Quiet Lane, Learning District
              <br />
              Your City, Your State
            </p>
            <p className="text-[11px] text-slate-500">
              Placeholder address — replace with your actual campus location.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2 text-xs text-slate-300">
            <p className="text-[11px] font-semibold text-slate-100">
              Contact details
            </p>
            <p>
              Admission: <span className="text-slate-100">+91-00000-00000</span>
              <br />
              General: <span className="text-slate-100">info@studyhallcollege.edu</span>
            </p>
            <p className="text-[11px] text-slate-500">
              Update these with your real numbers and email IDs.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-2 text-xs text-slate-300">
            <p className="text-[11px] font-semibold text-slate-100">
              Visiting hours
            </p>
            <p>
              Monday – Friday: 10:00 AM – 4:00 PM
              <br />
              Select Saturdays: Open house sessions
            </p>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default ContactPage

