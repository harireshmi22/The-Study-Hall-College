import React from 'react'
import img6 from '../assets/img6.jpg'

const ContactPage = () => {
  return (
    <div className="space-y-10 animate-fade-up">
      {/* Intro + visual card */}
      <section className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)] items-center">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Contact
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            Reach The Study Hall College
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl">
            Whether you have questions about programs, admissions, scholarships, or campus
            life, our team is happy to help you get clear, specific answers.
          </p>

          <div className="grid gap-4 sm:grid-cols-3 text-xs text-slate-600">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 space-y-1 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Admission queries</p>
              <p>Get guidance on eligibility, timelines, and documentation.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-3 space-y-1 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Campus visits</p>
              <p>Plan a quiet, focused visit to experience the study halls.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-3 space-y-1 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Collaboration</p>
              <p>Reach out for partnerships, talks, or alumni engagement.</p>
            </div>
          </div>
        </header>

        <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/70 via-slate-800/40 to-blue-900/70 mix-blend-multiply" />
          <img
            src={img6}
            alt="Campus view of The Study Hall College"
            className="h-56 w-full object-cover md:h-64"
          />
          <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-[0.25em] text-slate-200">
                Visit the campus
              </p>
              <p className="text-sm font-semibold">
                See the study halls, meet faculty, and experience how a calm campus feels.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-100">
              <div>
                <p className="text-base font-semibold">Mon–Fri</p>
                <p>Guided campus tours by prior appointment.</p>
              </div>
              <div>
                <p className="text-base font-semibold">Sat</p>
                <p>Open house sessions on select weekends.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start h-full">
        <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-[600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
            Quick message
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="space-y-1 text-xs text-slate-700">
              <span className='block mb-1 text-sm font-medium'>Full name</span>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-red-500"
              />
            </label>
            <label className="space-y-1 text-xs text-slate-700">
              <span className='block mb-1 text-sm font-medium'>Email address</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500"
              />
            </label>
          </div>

          <label className="space-y-1 text-xs text-slate-700">
            <span className='block mb-1 text-sm font-medium'>What would you like to know?</span>
            <select className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-rose-500">
              <option>Programs & curriculum</option>
              <option>Admission process</option>
              <option>Scholarships & fees</option>
              <option>Campus & facilities</option>
              <option>Something else</option>
            </select>
          </label>


          <label className="space-y-1 text-xs text-slate-700">
            <span className='block mb-1 text-sm font-medium mt-4'>Message</span>

            <textarea
              rows={10}
              placeholder="Share a few lines so we can respond clearly."
              className="w-full resize-none rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-blue-500"
            />
          </label>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-red-500/30 hover:brightness-110"
          >
            Send (demo only)
          </button>
          <p className="text-sm text-slate-500">
            This is a static demo form — connect it to your preferred email or
            form service when you go live.
          </p>
        </form>

        <aside className="space-y-4 ">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 text-xs text-slate-600 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-48">
            <p className="text-sm font-semibold text-slate-900">
              Campus address
            </p>
            <p className='text-sm'>
              The Study Hall College
              <br />
              123 Quiet Lane, Learning District
              <br />
              Your City, Your State
            </p>
            <p className="text-sm text-slate-500">
              Placeholder address — replace with your actual campus location.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 text-xs text-slate-600 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-48">
            <p className="text-sm font-semibold text-slate-900">
              Contact details
            </p>
            <p className='text-sm'>
              Admission: <span className="text-slate-900">+91-00000-00000</span>
              <br />
              General: <span className="text-slate-900">info@studyhallcollege.edu</span>
            </p>
            <p className="text-sm text-slate-500">
              Update these with your real numbers and email IDs.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 text-xs text-slate-600 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-48">
            <p className="text-sm font-semibold text-slate-900">
              Visiting hours
            </p>
            <p className='text-sm'>
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

