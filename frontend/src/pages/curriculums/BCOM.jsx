import React, { useState } from 'react'
import Footer from '../Footer'

const BCOM = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [hoveredCard, setHoveredCard] = useState(null)

  const curriculumData = {
    overview: {
      title: "Program Overview",
      content: "A comprehensive 3-year journey into commerce and financial excellence. Master accounting principles, financial management, and business laws to become a skilled commerce professional ready for the dynamic world of finance, banking, and corporate management."
    },
    curriculum: [
      {
        semester: "Semester 1",
        courses: ["Financial Accounting", "Business Mathematics", "Business Economics", "Business Communication", "Principles of Management"],
        color: "from-green-500 to-emerald-500"
      },
      {
        semester: "Semester 2",
        courses: ["Corporate Accounting", "Business Statistics", "Business Law", "Cost Accounting", "Environmental Studies"],
        color: "from-blue-500 to-cyan-500"
      },
      {
        semester: "Semester 3",
        courses: ["Income Tax Law", "Financial Management", "Company Law", "Banking & Insurance", "Value Education"],
        color: "from-purple-500 to-pink-500"
      },
      {
        semester: "Semester 4",
        courses: ["Auditing", "Corporate Finance", "Business Ethics", "E-Commerce", "Entrepreneurship Development"],
        color: "from-orange-500 to-red-500"
      },
      {
        semester: "Semester 5",
        courses: ["International Business", "Financial Markets", "Management Accounting", "GST & Taxation", "Elective I"],
        color: "from-indigo-500 to-purple-500"
      },
      {
        semester: "Semester 6",
        courses: ["Strategic Financial Management", "Investment Analysis", "Corporate Governance", "Industry Project", "Elective II"],
        color: "from-teal-500 to-green-500"
      }
    ],
    skills: [
      { name: "Financial Accounting", level: 95, icon: "📊" },
      { name: "Taxation", level: 90, icon: "💰" },
      { name: "Auditing", level: 88, icon: "🔍" },
      { name: "Financial Analysis", level: 85, icon: "📈" },
      { name: "Business Law", level: 82, icon: "⚖️" },
      { name: "Investment Planning", level: 78, icon: "🎯" }
    ],
    careerPaths: [
      {
        title: "Chartered Accountant",
        description: "Provide expert financial advice, audit services, and strategic financial planning to organizations",
        salary: "₹8-25 LPA",
        companies: ["Big 4", "EY", "PwC", "Deloitte", "KPMG"],
        image: "https://picsum.photos/seed/chartered-accountant/400/250.jpg"
      },
      {
        title: "Financial Analyst",
        description: "Analyze financial data, create reports, and provide investment recommendations",
        salary: "₹6-15 LPA",
        companies: ["Goldman Sachs", "JPMorgan", "Morgan Stanley", "Bank of America", "Citibank"],
        image: "https://picsum.photos/seed/financial-analyst/400/250.jpg"
      },
      {
        title: "Tax Consultant",
        description: "Advise clients on tax planning, compliance, and optimization strategies",
        salary: "₹5-12 LPA",
        companies: ["Income Tax Dept", "Ernst & Young", "BDO", "Grant Thornton", "RSM"],
        image: "https://picsum.photos/seed/tax-consultant/400/250.jpg"
      },
      {
        title: "Investment Banker",
        description: "Manage mergers, acquisitions, and capital raising for corporate clients",
        salary: "₹12-40 LPA",
        companies: ["Morgan Stanley", "Goldman Sachs", "Credit Suisse", "Barclays", "HSBC"],
        image: "https://picsum.photos/seed/investment-banker/400/250.jpg"
      }
    ],
    highlights: [
      {
        icon: "🏦",
        title: "Banking Partnerships",
        description: "Collaboration with leading banks for practical training and internships"
      },
      {
        icon: "📈",
        title: "Stock Market Lab",
        description: "Live trading simulation and investment portfolio management experience"
      },
      {
        icon: "🎓",
        title: "CA Foundation Support",
        description: "Integrated coaching for CA foundation and intermediate examinations"
      },
      {
        icon: "🌍",
        title: "Global Finance",
        description: "International finance standards and global market exposure"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-emerald-600/10 to-teal-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-responsive-sm font-semibold text-green-700">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  Undergraduate Program
                </div>
                <h1 className="text-responsive-4xl font-bold tracking-tight text-slate-900 leading-tight">
                  Bachelor of
                  <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Commerce
                  </span>
                </h1>
                <p className="text-responsive-lg text-slate-600 leading-relaxed">
                  {curriculumData.overview.content}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 shadow-lg border border-green-100">
                  <span className="text-2xl">⏱️</span>
                  <div>
                    <p className="text-responsive-sm font-semibold text-slate-900">3 Years</p>
                    <p className="text-responsive-xs text-slate-500">Duration</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 shadow-lg border border-blue-100">
                  <span className="text-2xl">📚</span>
                  <div>
                    <p className="text-responsive-sm font-semibold text-slate-900">6 Semesters</p>
                    <p className="text-responsive-xs text-slate-500">Structure</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 shadow-lg border border-emerald-100">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="text-responsive-sm font-semibold text-slate-900">120 Credits</p>
                    <p className="text-responsive-xs text-slate-500">Complete</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl animate-pulse" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white/10 backdrop-blur-sm">
                <img
                  src="https://picsum.photos/seed/bcom-hero/600/400.jpg"
                  alt="B.Com Program"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl bg-white/95 backdrop-blur p-4 shadow-xl">
                    <p className="text-responsive-sm font-semibold text-slate-900 mb-2">Industry Collaboration</p>
                    <div className="flex flex-wrap gap-2">
                      {["SBI", "HDFC", "ICICI", "Axis Bank"].map((company, index) => (
                        <span key={index} className="text-responsive-xs bg-slate-100 px-3 py-1 rounded-full text-slate-700">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-20 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto py-4">
            {['overview', 'curriculum', 'skills', 'careers', 'highlights'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-3 text-responsive-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 opacity-20 animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <div className="space-y-12 animate-fade-up">
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  icon: "🎯",
                  title: "Financial Expertise",
                  description: "Comprehensive training in accounting, taxation, and financial management",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: "🛠️",
                  title: "Practical Training",
                  description: "Hands-on experience with accounting software and financial tools",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: "🌟",
                  title: "Industry Integration",
                  description: "Strong connections with banking and financial institutions",
                  color: "from-purple-500 to-pink-500"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className="relative z-10 space-y-4">
                    <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-responsive-lg font-bold text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-responsive-sm text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  {hoveredCard === index && (
                    <div className="absolute inset-0 rounded-3xl border-2 border-green-400/30 animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Curriculum Section */}
        {activeTab === 'curriculum' && (
          <div className="space-y-8 animate-fade-up">
            <div className="text-center space-y-4">
              <h2 className="text-responsive-3xl font-bold text-slate-900">Semester-wise Curriculum</h2>
              <p className="text-responsive-base text-slate-600 max-w-3xl mx-auto">
                A comprehensive 6-semester journey covering all essential aspects of commerce and finance
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {curriculumData.curriculum.map((semester, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-slate-100"
                >
                  <div className={`h-2 bg-gradient-to-r ${semester.color}`} />
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-responsive-lg font-bold text-slate-900">{semester.semester}</h3>
                      <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${semester.color} flex items-center justify-center text-white text-responsive-xs font-bold`}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="space-y-2">
                      {semester.courses.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200"
                        >
                          <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${semester.color}`} />
                          <span className="text-responsive-sm text-slate-700">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeTab === 'skills' && (
          <div className="space-y-8 animate-fade-up">
            <div className="text-center space-y-4">
              <h2 className="text-responsive-3xl font-bold text-slate-900">Skills You'll Master</h2>
              <p className="text-responsive-base text-slate-600 max-w-3xl mx-auto">
                Develop essential commerce and finance skills for career success
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {curriculumData.skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{skill.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-responsive-lg font-bold text-slate-900">{skill.name}</h3>
                        <div className="mt-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-responsive-xs text-slate-500">Proficiency</span>
                            <span className="text-responsive-xs font-semibold text-slate-700">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Career Paths Section */}
        {activeTab === 'careers' && (
          <div className="space-y-8 animate-fade-up">
            <div className="text-center space-y-4">
              <h2 className="text-responsive-3xl font-bold text-slate-900">Career Opportunities</h2>
              <p className="text-responsive-base text-slate-600 max-w-3xl mx-auto">
                Explore diverse career paths with excellent growth potential and salaries
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {curriculumData.careerPaths.map((career, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={career.image}
                      alt={career.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-responsive-lg font-bold text-white">{career.title}</h3>
                      <p className="text-responsive-sm text-white/90">{career.salary}</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-responsive-sm text-slate-600">{career.description}</p>
                    <div className="space-y-2">
                      <p className="text-responsive-xs font-semibold text-slate-700">Top Companies:</p>
                      <div className="flex flex-wrap gap-2">
                        {career.companies.map((company, companyIndex) => (
                          <span key={companyIndex} className="text-responsive-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Highlights Section */}
        {activeTab === 'highlights' && (
          <div className="space-y-8 animate-fade-up">
            <div className="text-center space-y-4">
              <h2 className="text-responsive-3xl font-bold text-slate-900">Program Highlights</h2>
              <p className="text-responsive-base text-slate-600 max-w-3xl mx-auto">
                Unique features that make our B.Com program stand out
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {curriculumData.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-responsive-xl font-bold text-slate-900">{highlight.title}</h3>
                      <p className="text-responsive-sm text-slate-600 leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default BCOM
