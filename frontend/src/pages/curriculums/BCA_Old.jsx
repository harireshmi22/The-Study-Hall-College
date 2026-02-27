import React from 'react'
import Footer from '../Footer'

const BCA = () => {
  return (
    <div className="space-y-12 animate-fade-up">
      <header className="space-y-4">
        <p className="text-responsive-xs uppercase tracking-[0.3em] text-slate-500">
          Undergraduate Program
        </p>
        <h1 className="text-responsive-3xl font-semibold tracking-tight text-slate-900">
          Bachelor of Computer Applications (BCA)
        </h1>
        <p className="text-responsive-base text-slate-600 max-w-3xl">
          A dynamic 3-year program focused on developing software professionals with strong programming 
          skills, database management expertise, and modern web development capabilities. Gain hands-on 
          experience through coding bootcamps and industry projects.
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
                <span className="text-blue-500 mt-1">•</span>
                <span>Core programming languages: Python, Java, C++, JavaScript</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Web development: React, Node.js, HTML5, CSS3</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Database management: SQL, MongoDB, Oracle</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Cloud computing and DevOps fundamentals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                <span>Machine Learning and AI basics</span>
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
                  <li>• Programming Fundamentals (C & Python)</li>
                  <li>• Digital Computer Fundamentals</li>
                  <li>• Mathematics for Computer Science</li>
                  <li>• Database Management Systems</li>
                  <li>• Web Development Basics</li>
                  <li>• Computer Organization & Architecture</li>
                </ul>
              </div>
              <div>
                <h3 className="text-responsive-base font-semibold text-slate-800 mb-2">Year 2</h3>
                <ul className="space-y-2 text-responsive-sm text-slate-600">
                  <li>• Data Structures & Algorithms</li>
                  <li>• Object Oriented Programming (Java)</li>
                  <li>• Software Engineering</li>
                  <li>• Computer Networks</li>
                  <li>• Advanced Web Development</li>
                  <li>• Operating Systems</li>
                </ul>
              </div>
              <div>
                <h3 className="text-responsive-base font-semibold text-slate-800 mb-2">Year 3</h3>
                <ul className="space-y-2 text-responsive-sm text-slate-600">
                  <li>• Artificial Intelligence & Machine Learning</li>
                  <li>• Cloud Computing & DevOps</li>
                  <li>• Mobile Application Development</li>
                  <li>• Cyber Security Fundamentals</li>
                  <li>• Project Management</li>
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
                  <li>• Software Developer</li>
                  <li>• Web Developer</li>
                  <li>• Database Administrator</li>
                  <li>• System Analyst</li>
                  <li>• DevOps Engineer</li>
                  <li>• QA Engineer</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-responsive-sm font-semibold text-slate-800">Technologies</h3>
                <ul className="space-y-1 text-responsive-xs text-slate-600">
                  <li>• Web Development</li>
                  <li>• Mobile Apps</li>
                  <li>• Cloud Services</li>
                  <li>• AI/ML Applications</li>
                  <li>• E-commerce</li>
                  <li>• FinTech</li>
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
                <a href="#labs" className="text-responsive-sm text-blue-600 hover:text-blue-800">
                  → Computer Labs
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
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                  RS
                </div>
                <div>
                  <p className="text-responsive-sm font-semibold text-slate-900">Dr. Raj Sharma</p>
                  <p className="text-responsive-xs text-slate-600">Professor, Computer Science</p>
                </div>
              </div>
              <div className="space-y-2 text-responsive-xs text-slate-600">
                <p>📧 raj.sharma@studyhallcollege.edu</p>
                <p>📱 +91-98765-43211</p>
                <p>📍 Room 305, Tech Block</p>
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
                <a href="/bajmc" className="block p-3 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
                  <p className="text-responsive-sm font-semibold text-slate-900">BAJMC</p>
                  <p className="text-responsive-xs text-slate-600">Bachelor of Journalism & Mass Communication</p>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default BCA