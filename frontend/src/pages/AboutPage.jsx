import React from 'react'
import study from '../assets/study.jpeg'
import group from '../assets/group.jpeg'
import img6 from '../assets/img6.jpg'

const AboutPage = () => {
  return (
    <div className="space-y-14 animate-fade-up">
      {/* Section 1: About us + foundation card */}
      <section className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] items-center">
        {/* Logo / foundation card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-full h-30 rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center">
              <img
                src={study}
                alt="Study Hall Educational Foundation mark"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="text-center space-y-1">
              <p className="text-responsive-xs uppercase tracking-[0.35em] text-rose-500">
                Study Hall Educational Foundation
              </p>
              <p className="text-responsive-base font-semibold text-slate-900">
                A universe of care in education
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-responsive-xs text-slate-600 w-full pt-2">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3 space-y-1">
                <p className="text-responsive-lg font-semibold text-slate-900">
                  4+
                </p>
                <p>Decades of work in inclusive education.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3 space-y-1">
                <p className="text-responsive-lg font-semibold text-slate-900">
                  5M+
                </p>
                <p>Learners and community members reached.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3 space-y-1">
                <p className="text-responsive-lg font-semibold text-slate-900">
                  9
                </p>
                <p>Institutions and initiatives under the network.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text content aligned with screenshot */}
        <header className="space-y-5">
          <p className="text-responsive-xs uppercase tracking-[0.35em] text-rose-500 flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-50 text-rose-500 border border-rose-200">
              ⓘ
            </span>
            About us
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            SHC:{' '}
            <span className="text-slate-900">A Dynamic Unit In A</span>{' '}
            <span className="text-red-600">Universe Of Care</span>
          </h1>
          <p className="text-responsive-sm text-slate-600 max-w-2xl">
            Study Hall College is one of the educational institutions under the Study Hall
            Educational Foundation (SHEF), a non‑profit social enterprise that has worked
            for decades to redefine education. Through a network of schools and outreach
            initiatives, SHEF focuses on quality education for all children, especially
            girls and young people from marginalized communities.
          </p>
          <p className="text-responsive-sm text-slate-600 max-w-2xl">
            Using a holistic, inclusive, life‑outcomes‑based approach, SHEF and SHC have
            re‑imagined what college can feel like: academically rigorous, socially aware,
            and deeply caring about how every student learns and grows.
          </p>
        </header>
      </section>

      {/* Section 2: About Study Hall College */}
      <section className="space-y-8">
        <header className="space-y-2 text-center md:text-left">
          <p className="text-responsive-xs uppercase tracking-[0.3em] text-slate-500">
            About Study Hall College
          </p>
          <h2 className="text-responsive-2xl md:text-responsive-3xl font-semibold tracking-tight text-slate-900">
            About{' '}
            <span className="text-red-600">
              Study Hall College
            </span>
          </h2>
        </header>

        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.3fr)] items-start">
          <div className="space-y-4 text-responsive-sm text-slate-600">
            <p>
              Established in 2016, Study Hall College (SHC) is a high‑quality undergraduate
              degree college affiliated to the University of Lucknow — one of the region&apos;s
              most respected universities. SHC is known as a top choice in Lucknow for
              focused, career‑ready programs like BBA, BCA, B.Com and BAJMC.
            </p>
            <p>
              We extend SHEF&apos;s caring and holistic life‑outcomes approach into higher
              education. Our classrooms blend rigorous academics with critical social and
              political thinking, encouraging students to ask good questions and build
              lives of meaningful impact.
            </p>
            <p>
              Students at SHC come from a wide range of socio‑economic backgrounds across
              rural and urban regions. Our success is measured not just in grades, but in
              the confidence, empathy, and clarity our graduates carry into the world.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              {[
                'Bachelor of Business Administration (BBA)',
                'Bachelor of Commerce (B.Com)',
                'Bachelor of Computer Applications (BCA)',
                'Bachelor of Arts in Journalism and Mass Communication (BAJMC)',
              ].map(program => (
                <div
                  key={program}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
                >
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white text-responsive-xs">
                    🎓
                  </span>
                  <p className="text-responsive-xs sm:text-responsive-sm text-slate-800">
                    {program}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-lg">
              <img
                src={group}
                alt="Students engaged in class at Study Hall College"
                className="h-64 w-full object-cover md:h-72"
              />
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-2 text-responsive-xs text-slate-600 shadow-sm">
              <p className="font-semibold text-slate-900 text-responsive-sm">
                A typical day at SHC
              </p>
              <p>
                Long, uninterrupted study bands, interactive seminars, and quiet time in
                the halls — all balanced with clubs, projects, and community work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Achievements */}
      <section className="space-y-8">
        <header className="text-center space-y-2">
          <p className="text-responsive-xs uppercase tracking-[0.3em] text-slate-500">
            Our Achievements
          </p>
          <h2 className="text-responsive-2xl md:text-responsive-3xl font-semibold tracking-tight text-slate-900">
            Our <span className="text-blue-700">Achievements</span>
          </h2>
        </header>

        <div className="grid gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1.5fr)] items-center">
          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-lg">
            <img
              src={img6}
              alt="Students celebrating achievements at Study Hall College"
              className="h-64 w-full object-cover md:h-72"
            />
          </div>

          <div className="space-y-4 text-responsive-sm text-slate-600">
            <p>
              In just a few years, Study Hall College has shaped university toppers,
              scholarship winners, and young professionals across diverse fields, and is
              widely recognised among the best colleges in Lucknow.
            </p>
            <p>
              In partnership with organisations in India and abroad, SHC hosts programs
              that open global doors — from language and leadership initiatives to fully
              funded community‑college scholarships.
            </p>
            <p>
              Our alumni are placed at leading media houses, banks, technology firms, and
              development organisations. Many continue to work within the SHEF universe,
              mentoring younger students and building projects that push education forward.
            </p>
            <div className="grid gap-4 sm:grid-cols-3 pt-2 text-responsive-xs">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3">
                <p className="text-responsive-lg font-semibold text-slate-900">Top ranks</p>
                <p>University toppers and merit holders across programs.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3">
                <p className="text-responsive-lg font-semibold text-slate-900">Global links</p>
                <p>Opportunities with international partners and scholarships.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3">
                <p className="text-responsive-lg font-semibold text-slate-900">Strong careers</p>
                <p>Placements in respected media, IT, finance, and social sector roles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

