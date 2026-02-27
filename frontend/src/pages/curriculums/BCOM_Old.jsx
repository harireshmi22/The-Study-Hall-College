import React from 'react'
import Footer from '../Footer'

const BCOM = () => {
  return (
    <div className="space-y-12 animate-fade-up">
      <header className="space-y-4">
        <p className="text-responsive-xs uppercase tracking-[0.3em] text-slate-500">
          Undergraduate Program
        </p>
        <h1 className="text-responsive-3xl font-semibold tracking-tight text-slate-900">
          Bachelor of Commerce (B.Com)
        </h1>
        <p className="text-responsive-base text-slate-600 max-w-3xl">
          A comprehensive 3-year program focusing on commerce, finance, and accounting principles. 
          Develop strong analytical skills and practical knowledge in financial management, taxation, 
          and business law to excel in the corporate world.
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
                <span className="text-green-500 mt-1">•</span>
                <span>Advanced accounting and financial management principles</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">•</span>
                <span>Taxation laws and practices (Direct & Indirect)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">•</span>
                <span>Business law and corporate governance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">•</span>
                <span>Banking and insurance operations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">•</span>
                <span>E-commerce and digital business management</span>
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
                  <li>• Financial Accounting</li>
                  <li>• Business Mathematics & Statistics</li>
                  <li>• Business Economics</li>
                  <li>• Business Organization & Management</li>
                  <li>• Business Law</li>
                  <li>• Environmental Studies</li>
                </ul>
              </div>
              <div>
                <h3 className="text-responsive-base font-semibold text-slate-800 mb-2">Year 2</h3>
                <ul className="space-y-2 text-responsive-sm text-slate-600">
                  <li>• Corporate Accounting</li>
                  <li>• Cost Accounting</li>
                  <li>• Income Tax Law & Practice</li>
                  <li>• Banking & Insurance</li>
                  <li>• Business Statistics</li>
                  <li>• Company Law</li>
                </ul>
              </div>
              <div>
                <h3 className="text-responsive-base font-semibold text-slate-800 mb-2">Year 3</h3>
                <ul className="space-y-2 text-responsive-sm text-slate-600">
                  <li>• Advanced Accounting</li>
                  <li>• Financial Management</li>
                  <li>• Auditing</li>
                  <li>• GST & Customs Law</li>
                  <li>• E-Commerce</li>
                  <li>• Project Work & Internship</li>
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
                  <li>• Chartered Accountant</li>
                  <li>• Financial Analyst</li>
                  <li>• Tax Consultant</li>
                  <li>• Auditor</li>
                  <li>• Investment Banker</li>
                  <li>• Finance Manager</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-responsive-sm font-semibold text-slate-800">Sectors</h3>
                <ul className="space-y-1 text-responsive-xs text-slate-600">
                  <li>• Banking & Finance</li>
                  <li>• Corporate Sector</li>
                  <li>• Government Services</li>
                  <li>• Insurance</li>
                  <li>• Consulting</li>
                  <li>• Startups</li>
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
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                  AP
                </div>
                <div>
                  <p className="text-responsive-sm font-semibold text-slate-900">Dr. Anita Patel</p>
                  <p className="text-responsive-xs text-slate-600">Professor, Commerce</p>
                </div>
              </div>
              <div className="space-y-2 text-responsive-xs text-slate-600">
                <p>📧 anita.patel@studyhallcollege.edu</p>
                <p>📱 +91-98765-43212</p>
                <p>📍 Room 102, Commerce Block</p>
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

export default BCOM; 