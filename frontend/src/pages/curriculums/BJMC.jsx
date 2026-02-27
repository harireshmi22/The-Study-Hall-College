import React, { useState } from 'react'
import Footer from '../Footer'

const BJMC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [hoveredCard, setHoveredCard] = useState(null)

  const curriculumData = {
    overview: {
      title: "Program Overview",
      content: "A dynamic 3-year journey into journalism and mass communication excellence. Master storytelling, media production, and digital communication to become a versatile media professional ready for the evolving landscape of news, entertainment, and digital content creation."
    },
    curriculum: [
      {
        semester: "Semester 1",
        courses: ["Introduction to Journalism", "Mass Communication Theories", "Reporting & Editing", "Media Ethics", "Communication Skills"],
        color: "from-orange-500 to-red-500"
      },
      {
        semester: "Semester 2",
        courses: ["News Writing", "Photojournalism", "Media Laws & Ethics", "Public Relations", "Environmental Studies"],
        color: "from-purple-500 to-pink-500"
      },
      {
        semester: "Semester 3",
        courses: ["Broadcast Journalism", "Digital Media", "Advertising Principles", "Feature Writing", "Value Education"],
        color: "from-blue-500 to-cyan-500"
      },
      {
        semester: "Semester 4",
        courses: ["Documentary Production", "Social Media Marketing", "Media Research", "Corporate Communication", "Entrepreneurship Development"],
        color: "from-green-500 to-emerald-500"
      },
      {
        semester: "Semester 5",
        courses: ["Investigative Journalism", "Film Studies", "Content Strategy", "Media Management", "Elective I"],
        color: "from-indigo-500 to-purple-500"
      },
      {
        semester: "Semester 6",
        courses: ["New Media Technologies", "Global Media Systems", "Media Project", "Internship", "Elective II"],
        color: "from-teal-500 to-green-500"
      }
    ],
    skills: [
      { name: "Content Creation", level: 95, icon: "📝" },
      { name: "Video Production", level: 90, icon: "🎥" },
      { name: "Digital Marketing", level: 88, icon: "📱" },
      { name: "Photography", level: 85, icon: "📸" },
      { name: "Public Speaking", level: 82, icon: "🎤" },
      { name: "Social Media", level: 90, icon: "🌐" }
    ],
    careerPaths: [
      {
        title: "Journalist",
        description: "Report news, investigate stories, and create compelling content for various media platforms",
        salary: "₹4-12 LPA",
        companies: ["Times of India", "NDTV", "India Today", "Hindustan Times", "The Hindu"],
        image: "https://picsum.photos/seed/journalist/400/250.jpg"
      },
      {
        title: "Content Creator",
        description: "Create engaging digital content for social media, YouTube, and digital platforms",
        salary: "₹5-15 LPA",
        companies: ["YouTube", "Instagram", "Netflix", "Amazon Prime", "Disney+ Hotstar"],
        image: "https://picsum.photos/seed/content-creator/400/250.jpg"
      },
      {
        title: "PR Specialist",
        description: "Manage public relations, brand communication, and media outreach for organizations",
        salary: "₹6-14 LPA",
        companies: ["Edelman", "Weber Shandwick", "BCW", "Fleishman", "Ketchum"],
        image: "https://picsum.photos/seed/pr-specialist/400/250.jpg"
      },
      {
        title: "Video Producer",
        description: "Produce, direct, and edit video content for news, entertainment, and corporate media",
        salary: "₹7-18 LPA",
        companies: ["Red Chillies", "YRF", "Dharma", "Balaji", "Viacom"],
        image: "https://picsum.photos/seed/video-producer/400/250.jpg"
      }
    ],
    highlights: [
      {
        icon: "🎬",
        title: "Media Production Lab",
        description: "State-of-the-art studio with cameras, editing suites, and broadcasting equipment"
      },
      {
        icon: "📰",
        title: "Campus Newspaper",
        description: "Run our own newspaper and digital news platform for hands-on journalism experience"
      },
      {
        icon: "🎙️",
        title: "Radio Station",
        description: "Operate campus radio station for broadcasting and audio production training"
      },
      {
        icon: "🏆",
        title: "Media Awards",
        description: "Participate in national media competitions and journalism awards"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-red-600/10 to-pink-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-responsive-sm font-semibold text-orange-700">
                  <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                  Undergraduate Program
                </div>
                <h1 className="text-responsive-4xl font-bold tracking-tight text-slate-900 leading-tight">
                  Bachelor of
                  <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                    Journalism & Mass Communication
                  </span>
                </h1>
                <p className="text-responsive-lg text-slate-600 leading-relaxed">
                  {curriculumData.overview.content}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 shadow-lg border border-orange-100">
                  <span className="text-2xl">⏱️</span>
                  <div>
                    <p className="text-responsive-sm font-semibold text-slate-900">3 Years</p>
                    <p className="text-responsive-xs text-slate-500">Duration</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 shadow-lg border border-red-100">
                  <span className="text-2xl">📚</span>
                  <div>
                    <p className="text-responsive-sm font-semibold text-slate-900">6 Semesters</p>
                    <p className="text-responsive-xs text-slate-500">Structure</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 shadow-lg border border-pink-100">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="text-responsive-sm font-semibold text-slate-900">120 Credits</p>
                    <p className="text-responsive-xs text-slate-500">Complete</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 rounded-3xl blur-xl animate-pulse" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white/10 backdrop-blur-sm">
                <img
                  src="https://picsum.photos/seed/bjmc-hero/600/400.jpg"
                  alt="BJMC Program"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl bg-white/95 backdrop-blur p-4 shadow-xl">
                    <p className="text-responsive-sm font-semibold text-slate-900 mb-2">Media Partners</p>
                    <div className="flex flex-wrap gap-2">
                      {["NDTV", "Times Now", "India Today", "HT"].map((company, index) => (
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
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-20 animate-pulse" />
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
                  title: "Practical Training",
                  description: "Hands-on experience with real media projects and industry-standard equipment",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: "🛠️",
                  title: "Industry Exposure",
                  description: "Internships with leading media houses and news organizations",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: "🌟",
                  title: "Expert Faculty",
                  description: "Learn from experienced journalists and media professionals",
                  color: "from-blue-500 to-cyan-500"
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
                    <div className="absolute inset-0 rounded-3xl border-2 border-orange-400/30 animate-pulse" />
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
                A comprehensive 6-semester journey covering all essential aspects of journalism and mass communication
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
                Develop essential media and communication skills for career success
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
                              className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000 ease-out"
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
                          <span key={companyIndex} className="text-responsive-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
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
                Unique features that make our BJMC program stand out
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

export default BJMC
