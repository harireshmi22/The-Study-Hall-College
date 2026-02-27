import React from 'react'
import Footer from '../Footer'

const BJMC = () => {
  return (
    <div className="space-y-12 animate-fade-up">
      <header className="space-y-4">
        <p className="text-responsive-xs uppercase tracking-[0.3em] text-slate-500">
          Undergraduate Program
        </p>
        <h1 className="text-responsive-3xl font-semibold tracking-tight text-slate-900">
          Bachelor of Journalism & Mass Communication (BAJMC)
        </h1>
        <p className="text-responsive-base text-slate-600 max-w-3xl">
          An exciting 3-year program designed to create media professionals with strong storytelling 
          abilities, digital media skills, and ethical journalism practices. Learn through practical 
          projects, internships, and hands-on media production experience.
        </p>
        <div className="flex flex-wrap gap-4 text-responsive-sm">
          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-medium">
            3 Years
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
            6 Semesters
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
            120 Credits
          </span>
        </div>
      </header>

      <section className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-responsive-lg font-semibold text-slate-900 mb-4">
              Program Highlights
            </h2>
            <ul className="space-y-3 text-responsive-base text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">•</span>
                <span>Print, broadcast, and digital journalism fundamentals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">•</span>
                <span>Content creation for social media and digital platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">•</span>
                <span>Media production: video editing, podcasting, photography</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">•</span>
                <span>Public relations and corporate communication</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">•</span>
                <span>Media law, ethics, and responsible journalism</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-responsive-lg font-semibold text-slate-900 mb-4">
              Curriculum Structure
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-responsive-base font-semibold text-slate-800 mb-2">Year 1</h3>
                <ul className="space-y-2 text-responsive-sm text-slate-600">
                  <li>• Fundamentals of Journalism</li>
                  <li>• Mass Communication Theories</li>
                  <li>• Reporting & Editing</li>
                  <li>• Media Writing Skills</li>
                  <li>• History of Indian Media</li>
                  <li>• Basic Photography</li>
                </ul>
              </div>
              <div>
                <h3 className="text-responsive-base font-semibold text-slate-800 mb-2">Year 2</h3>
                <ul className="space-y-2 text-responsive-sm text-slate-600">
                  <li>• Broadcast Journalism</li>
                  <li>• Digital Media & Content Creation</li>
                  <li>• Media Production & Technology</li>
                  <li>• Public Relations</li>
                  <li>• Advertising Principles</li>
                  <li>• Media Research Methods</li>
                </ul>
              </div>
              <div>
                <h3 className="text-responsive-base font-semibold text-slate-800 mb-2">Year 3</h3>
                <ul className="space-y-2 text-responsive-sm text-slate-600">
                  <li>• Advanced Journalism Practices</li>
                  <li>• Media Law & Ethics</li>
                  <li>• Corporate Communication</li>
                  <li>• Documentary Production</li>
                  <li>• Media Entrepreneurship</li>
                  <li>• Industry Internship Project</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-responsive-lg font-semibold text-slate-900 mb-4">
              Career Opportunities
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <h3 className="text-responsive-sm font-semibold text-slate-800">Job Roles</h3>
                <ul className="space-y-1 text-responsive-xs text-slate-600">
                  <li>• Journalist</li>
                  <li>• Content Creator</li>
                  <li>• News Anchor</li>
                  <li>• PR Executive</li>
                  <li>• Social Media Manager</li>
                  <li>• Video Producer</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-responsive-sm font-semibold text-slate-800">Media Platforms</h3>
                <ul className="space-y-1 text-responsive-xs text-slate-600">
                  <li>• News Channels</li>
                  <li>• Digital Media</li>
                  <li>• Print Media</li>
                  <li>• Radio Stations</li>
                  <li>• Corporate Communications</li>
                  <li>• Freelance Projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-responsive-base font-semibold text-slate-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#admission" className="text-responsive-sm text-blue-600 hover:text-blue-800">
                  → Admission Process
                </a>
              </li>
              <li>
                <a href="#fee" className="text-responsive-sm text-blue-600 hover:text-blue-800">
                  → Fee Structure
                </a>
              </li>
              <li>
                <a href="#studio" className="text-responsive-sm text-blue-600 hover:text-blue-800">
                  → Media Studio Tour
                </a>
              </li>
              <li>
                <a href="#placements" className="text-responsive-sm text-blue-600 hover:text-blue-800">
                  → Placement Records
                </a>
              </li>
              <li>
                <a href="#download" className="text-responsive-sm text-blue-600 hover:text-blue-800">
                  → Download Brochure
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-responsive-base font-semibold text-slate-900 mb-4">
              Program Coordinator
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-semibold">
                  MK
                </div>
                <div>
                  <p className="text-responsive-sm font-semibold text-slate-900">Dr. Meera Kumar</p>
                  <p className="text-responsive-xs text-slate-600">Professor, Journalism</p>
                </div>
              </div>
              <div className="space-y-2 text-responsive-xs text-slate-600">
                <p>📧 meera.kumar@studyhallcollege.edu</p>
                <p>📱 +91-98765-43213</p>
                <p>📍 Room 401, Media Block</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-responsive-base font-semibold text-slate-900 mb-4">
              Related Programs
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/bba" className="block p-3 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
                  <p className="text-responsive-sm font-semibold text-slate-900">BBA</p>
                  <p className="text-responsive-xs text-slate-600">Bachelor of Business Administration</p>
                </a>
              </li>
              <li>
                <a href="/bca" className="block p-3 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
                  <p className="text-responsive-sm font-semibold text-slate-900">BCA</p>
                  <p className="text-responsive-xs text-slate-600">Bachelor of Computer Applications</p>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default BJMC