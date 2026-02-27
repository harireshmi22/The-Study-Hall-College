import React, { useState } from 'react'
import Footer from '../Footer'

const BCA = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [hoveredCard, setHoveredCard] = useState(null)

  const curriculumData = {
    overview: {
      title: "Program Overview",
      content: "A transformative 3-year journey into the world of computer applications, where innovation meets practical expertise. Master cutting-edge technologies, develop problem-solving skills, and become a sought-after software professional in the digital era."
    },
    curriculum: [
      {
        semester: "Semester 1",
        courses: ["Programming Fundamentals with Python", "Digital Computer Fundamentals", "Mathematics for Computing", "Communication Skills", "Web Design Basics"],
        color: "from-blue-500 to-cyan-500"
      },
      {
        semester: "Semester 2",
        courses: ["Data Structures & Algorithms", "Object-Oriented Programming with Java", "Database Management Systems", "Computer Networks", "Environmental Studies"],
        color: "from-purple-500 to-pink-500"
      },
      {
        semester: "Semester 3",
        courses: ["Web Technologies", "Software Engineering", "Operating Systems", "Statistical Methods", "Value Education"],
        color: "from-green-500 to-emerald-500"
      },
      {
        semester: "Semester 4",
        courses: ["Mobile App Development", "Cloud Computing", "Artificial Intelligence Basics", "Project Management", "Entrepreneurship Development"],
        color: "from-orange-500 to-red-500"
      },
      {
        semester: "Semester 5",
        courses: ["Machine Learning", "Cybersecurity Fundamentals", "Big Data Analytics", "Software Testing", "Elective I"],
        color: "from-indigo-500 to-purple-500"
      },
      {
        semester: "Semester 6",
        courses: ["Full Stack Development", "DevOps Practices", "Industry Project", "Internship", "Elective II"],
        color: "from-teal-500 to-green-500"
      }
    ],
    skills: [
      { name: "Python Programming", level: 95, icon: "🐍" },
      { name: "Web Development", level: 90, icon: "🌐" },
      { name: "Database Design", level: 85, icon: "🗄️" },
      { name: "Mobile Development", level: 80, icon: "📱" },
      { name: "Cloud Computing", level: 75, icon: "☁️" },
      { name: "AI/ML", level: 70, icon: "🤖" }
    ],
    careerPaths: [
      {
        title: "Software Developer",
        description: "Design, develop, and maintain software applications for various platforms",
        salary: "₹8-15 LPA",
        companies: ["Google", "Microsoft", "Amazon", "TCS", "Infosys"],
        image: "https://picsum.photos/seed/software-developer/400/250.jpg"
      },
      {
        title: "Full Stack Engineer",
        description: "Build end-to-end web applications with modern frameworks and tools",
        salary: "₹12-20 LPA",
        companies: ["Meta", "Netflix", "Swiggy", "Zomato", "Ola"],
        image: "https://picsum.photos/seed/fullstack-engineer/400/250.jpg"
      },
      {
        title: "Data Scientist",
        description: "Analyze complex data and build machine learning models for insights",
        salary: "₹10-25 LPA",
        companies: ["IBM", "Wipro", "HCL", "Accenture", "Deloitte"],
        image: "https://picsum.photos/seed/data-scientist/400/250.jpg"
      },
      {
        title: "Cloud Architect",
        description: "Design and implement scalable cloud infrastructure solutions",
        salary: "₹15-30 LPA",
        companies: ["AWS", "Azure", "Google Cloud", "Oracle", "VMware"],
        image: "https://picsum.photos/seed/cloud-architect/400/250.jpg"
      }
    ],
    highlights: [
      {
        icon: "💻",
        title: "Coding Bootcamps",
        description: "Intensive 48-hour coding challenges every semester with industry mentors"
      },
      {
        icon: "🚀",
        title: "Startup Incubator",
        description: "Launch your own startup with our incubation program and seed funding"
      },
      {
        icon: "🤝",
        title: "Industry Partnerships",
        description: "Collaborate with tech giants for real-world project experience"
      },
      {
        icon: "🏆",
        title: "Hackathons",
        description: "Participate in national and international hackathons with prize pools"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-responsive-sm font-semibold text-blue-700">
                  <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                  Undergraduate Program
                </div>
                <h1 className="text-responsive-4xl font-bold tracking-tight text-slate-900 leading-tight">
                  Bachelor of
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Computer Applications
                  </span>
                </h1>
                <p className="text-responsive-lg text-slate-600 leading-relaxed">
                  {curriculumData.overview.content}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 shadow-lg border border-blue-100">
                  <span className="text-2xl">⏱️</span>
                  <div>
                    <p className="text-responsive-sm font-semibold text-slate-900">3 Years</p>
                    <p className="text-responsive-xs text-slate-500">Duration</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 shadow-lg border border-purple-100">
                  <span className="text-2xl">📚</span>
                  <div>
                    <p className="text-responsive-sm font-semibold text-slate-900">6 Semesters</p>
                    <p className="text-responsive-xs text-slate-500">Structure</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 shadow-lg border border-indigo-100">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="text-responsive-sm font-semibold text-slate-900">120 Credits</p>
                    <p className="text-responsive-xs text-slate-500">Complete</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl blur-xl animate-pulse" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white/10 backdrop-blur-sm">
                <img
                  src="https://picsum.photos/seed/bca-hero/600/400.jpg"
                  alt="BCA Program"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl bg-white/95 backdrop-blur p-4 shadow-xl">
                    <p className="text-responsive-sm font-semibold text-slate-900 mb-2">Industry Collaboration</p>
                    <div className="flex flex-wrap gap-2">
                      {["Microsoft", "Google", "IBM", "Amazon"].map((company, index) => (
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
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 animate-pulse" />
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
                  title: "Industry-Ready Curriculum",
                  description: "Designed with input from tech industry leaders to ensure relevance",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: "🛠️",
                  title: "Hands-On Learning",
                  description: "100+ practical projects and coding challenges throughout the program",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: "🌟",
                  title: "Expert Faculty",
                  description: "Learn from industry professionals and research scholars",
                  color: "from-green-500 to-emerald-500"
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
                    <div className="absolute inset-0 rounded-3xl border-2 border-blue-400/30 animate-pulse" />
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
                A comprehensive 6-semester journey covering all essential aspects of computer applications
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
                Develop in-demand technical skills that make you industry-ready
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
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
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
                          <span key={companyIndex} className="text-responsive-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
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
                Unique features that make our BCA program stand out
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

export default BCA
