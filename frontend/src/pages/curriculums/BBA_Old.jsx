import React from 'react'
import Footer from '../Footer'

const BBA = () => {
  return (
    <div className="space-y-12 animate-fade-up">
      <header className="space-y-4">
        <p className="text-responsive-xs uppercase tracking-[0.3em] text-slate-500">
          Undergraduate Program
        </p>
        <h1 className="text-responsive-3xl font-semibold tracking-tight text-slate-900">
          Bachelor of Business Administration (BBA)
        </h1>
        <p className="text-responsive-base text-slate-600 max-w-3xl">
          A comprehensive 3-year program designed to develop business leaders with strong analytical, 
          managerial, and entrepreneurial skills. Learn from industry experts and gain practical experience 
          through internships and live projects.
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
                <span className="text-red-500 mt-1">•</span>
                <span>Core business fundamentals in Management, Marketing, Finance, and Operations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>Specializations in Digital Marketing, Financial Management, and HR Management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>Industry-integrated projects with leading companies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>Mandatory internships and live case studies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>Entrepreneurship development and startup incubation support</span>
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
                  <li>• Business Mathematics & Statistics</li>
                  <li>• Principles of Management</li>
                  <li>• Business Economics</li>
                  <li>• Financial Accounting</li>
                  <li>• Business Communication</li>
                  <li>• Computer Applications in Business</li>
                </ul>
              </div>
              <div>
                <h3 className="text-responsive-base font-semibold text-slate-800 mb-2">Year 2</h3>
                <ul className="space-y-2 text-responsive-sm text-slate-600">
                  <li>• Marketing Management</li>
                  <li>• Financial Management</li>
                  <li>• Human Resource Management</li>
                  <li>• Operations Management</li>
                  <li>• Business Law</li>
                  <li>• Research Methodology</li>
                </ul>
              </div>
              <div>
                <h3 className="text-responsive-base font-semibold text-slate-800 mb-2">Year 3</h3>
                <ul className="space-y-2 text-responsive-sm text-slate-600">
                  <li>• Strategic Management</li>
                  <li>• International Business</li>
                  <li>• Entrepreneurship Development</li>
                  <li>• Business Ethics & Corporate Governance</li>
                  <li>• Specialization Electives</li>
                  <li>• Internship Project</li>
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
                  <li>• Business Analyst</li>
                  <li>• Marketing Manager</li>
                  <li>• Financial Advisor</li>
                  <li>• HR Specialist</li>
                  <li>• Operations Manager</li>
                  <li>• Project Coordinator</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-responsive-sm font-semibold text-slate-800">Industries</h3>
                <ul className="space-y-1 text-responsive-xs text-slate-600">
                  <li>• Banking & Finance</li>
                  <li>• Consulting</li>
                  <li>• E-commerce</li>
                  <li>• Manufacturing</li>
                  <li>• Healthcare</li>
                  <li>• Technology</li>
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
                <a href="#faculty" className="text-responsive-sm text-blue-600 hover:text-blue-800">
                  → Faculty Directory
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
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                  JD
                </div>
                <div>
                  <p className="text-responsive-sm font-semibold text-slate-900">Dr. Jane Doe</p>
                  <p className="text-responsive-xs text-slate-600">Professor, Business Studies</p>
                </div>
              </div>
              <div className="space-y-2 text-responsive-xs text-slate-600">
                <p>📧 jane.doe@studyhallcollege.edu</p>
                <p>📱 +91-98765-43210</p>
                <p>📍 Room 204, Business Block</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-responsive-base font-semibold text-slate-900 mb-4">
              Related Programs
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/bca" className="block p-3 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
                  <p className="text-responsive-sm font-semibold text-slate-900">BCA</p>
                  <p className="text-responsive-xs text-slate-600">Bachelor of Computer Applications</p>
                </a>
              </li>
              <li>
                <a href="/bcom" className="block p-3 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
                  <p className="text-responsive-sm font-semibold text-slate-900">B.Com</p>
                  <p className="text-responsive-xs text-slate-600">Bachelor of Commerce</p>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default BBA