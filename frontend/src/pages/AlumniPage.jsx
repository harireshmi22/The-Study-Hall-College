import React, { useState } from 'react'
import alumni1 from '../assets/alumni1.jpg'
import alumni2 from '../assets/alumni2.jpg'
import alumni3 from '../assets/alumni3.jpg'
import alumni4 from '../assets/alumni4.jpg'
import alumni5 from '../assets/alumni5.jpg'
import alumni6 from '../assets/alumni6.jpg'

const AlumniPage = () => {
  const [selectedStory, setSelectedStory] = useState(null)

  const alumniStories = [
    {
      id: 1,
      name: "Priya Sharma",
      batch: "2018-2021",
      course: "BCA",
      currentRole: "Senior Software Engineer",
      company: "Microsoft",
      location: "Bangalore",
      story: "After graduating from Study Hall College, I joined Microsoft as a Software Engineer. The strong foundation in computer science and practical exposure to industry projects helped me excel in my career. The faculty's guidance and the college's placement support were instrumental in shaping my professional journey.",
      achievements: [
        "Led development of cloud-native applications",
        "Received Microsoft Excellence Award 2023",
        "Mentored 15+ junior engineers"
      ],
      photo: alumni1,
      companyLogo: "https://picsum.photos/seed/microsoft-logo/100/50.jpg"
    },
    {
      id: 2,
      name: "Rahul Verma",
      batch: "2017-2020",
      course: "BBA",
      currentRole: "Business Development Manager",
      company: "Amazon",
      location: "Mumbai",
      story: "Study Hall College provided me with the perfect blend of business education and practical skills. The case studies, industry interactions, and management fests prepared me for the corporate world. Today, I'm leading business development initiatives at Amazon, driving growth and innovation.",
      achievements: [
        "Increased business revenue by 40%",
        "Launched 3 new product categories",
        "Team lead for 12-member sales team"
      ],
      photo: alumni2,
      companyLogo: "https://picsum.photos/seed/amazon-logo/100/50.jpg"
    },
    {
      id: 3,
      name: "Anjali Gupta",
      batch: "2019-2022",
      course: "B.COM",
      currentRole: "Chartered Accountant",
      company: "Deloitte",
      location: "Delhi",
      story: "The comprehensive commerce program at Study Hall College laid the foundation for my CA journey. The college's focus on practical accounting, taxation, and financial management helped me clear my CA exams in the first attempt. Now I'm working with Deloitte, serving Fortune 500 clients.",
      achievements: [
        "Cleared CA in first attempt",
        "Managed audit for 5 multinational companies",
        "Published research on GST compliance"
      ],
      photo: alumni3,
      companyLogo: "https://picsum.photos/seed/deloitte-logo/100/50.jpg"
    },
    {
      id: 4,
      name: "Vikram Singh",
      batch: "2018-2021",
      course: "BJMC",
      currentRole: "Senior Journalist",
      company: "NDTV",
      location: "New Delhi",
      story: "The BJMC program at Study Hall College transformed my passion for storytelling into a profession. The practical training in journalism, media ethics, and digital content creation prepared me for the dynamic media industry. Today, I'm covering national news and making a difference through responsible journalism.",
      achievements: [
        "Awarded Best Young Journalist 2022",
        "Covered major national events",
        "Started a digital media startup"
      ],
      photo: alumni4,
      companyLogo: "https://picsum.photos/seed/ndtv-logo/100/50.jpg"
    },
    {
      id: 5,
      name: "Neha Patel",
      batch: "2016-2019",
      course: "BCA",
      currentRole: "Data Scientist",
      company: "Google",
      location: "Hyderabad",
      story: "Study Hall College's BCA program gave me the technical foundation needed to excel in data science. The practical projects, coding competitions, and industry mentorship helped me secure a position at Google. I'm now working on cutting-edge AI and machine learning projects.",
      achievements: [
        "Developed ML models for Google Search",
        "Published 3 research papers on AI",
        "Speaker at international tech conferences"
      ],
      photo: alumni5,
      companyLogo: "https://picsum.photos/seed/google-logo/100/50.jpg"
    },
    {
      id: 6,
      name: "Arjun Kumar",
      batch: "2017-2020",
      course: "BBA",
      currentRole: "Product Manager",
      company: "Meta",
      location: "California, USA",
      story: "The business education at Study Hall College equipped me with strategic thinking and leadership skills. The college's emphasis on innovation and entrepreneurship helped me transition into product management. Today, I'm leading product development at Meta, impacting billions of users worldwide.",
      achievements: [
        "Launched features used by 500M+ users",
        "Led cross-functional teams of 50+ people",
        "Mentored 20+ product managers"
      ],
      photo: alumni6,
      companyLogo: "https://picsum.photos/seed/meta-logo/100/50.jpg"
    }
  ]

  const stats = [
    { number: "5000+", label: "Alumni Network" },
    { number: "95%", label: "Placement Rate" },
    { number: "25+", label: "Countries" },
    { number: "100+", label: "Fortune 500 Companies" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-responsive-sm font-semibold text-blue-700">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Alumni Success Stories
            </div>
            <h1 className="text-responsive-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Our Alumni
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Making Us Proud
              </span>
            </h1>
            <p className="text-responsive-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Meet our successful alumni who are making significant contributions in their respective fields and inspiring the next generation of students.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12 ">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur rounded-2xl p-6 text-center shadow-lg border border-blue-100"
              >
                <div className="text-responsive-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-responsive-sm text-slate-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Stories Grid */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {alumniStories.map((alumni) => (
            <div
              key={alumni.id}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 cursor-pointer"
              onClick={() => setSelectedStory(alumni)}
            >
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
                {/* Image Section */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={alumni.photo}
                    alt={alumni.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur rounded-xl p-3 shadow-xl">
                      <img
                        src={alumni.companyLogo}
                        alt={alumni.company}
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-responsive-xl font-bold text-slate-900">{alumni.name}</h3>
                    <div className="flex items-center gap-2 text-responsive-sm text-slate-600">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                        {alumni.batch}
                      </span>
                      <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs font-medium">
                        {alumni.course}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                        {alumni.currentRole.charAt(0)}
                      </div>
                      <div>
                        <p className="text-responsive-base font-semibold text-slate-900">{alumni.currentRole}</p>
                        <p className="text-responsive-sm text-slate-600">{alumni.company} • {alumni.location}</p>
                      </div>
                    </div>

                    <p className="text-responsive-sm text-slate-600 leading-relaxed line-clamp-3">
                      {alumni.story}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {alumni.achievements.slice(0, 2).map((achievement, index) => (
                        <span
                          key={index}
                          className="text-responsive-xs bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200"
                        >
                          {achievement}
                        </span>
                      ))}
                      {alumni.achievements.length > 2 && (
                        <span className="text-responsive-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                          +{alumni.achievements.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-600 transition-colors duration-300 shadow-lg">
                    Read Full Story
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Modal */}
      {selectedStory && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedStory(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
              {/* Image Section */}
              <div className="relative h-96 lg:h-auto overflow-hidden">
                <img
                  src={selectedStory.photo}
                  alt={selectedStory.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedStory(null)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 hover:bg-white transition-colors shadow-lg"
                >
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl">
                    <img
                      src={selectedStory.companyLogo}
                      alt={selectedStory.company}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-responsive-3xl font-bold text-slate-900">{selectedStory.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {selectedStory.batch}
                    </span>
                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                      {selectedStory.course}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                      {selectedStory.currentRole.charAt(0)}
                    </div>
                    <div>
                      <p className="text-responsive-lg font-bold text-slate-900">{selectedStory.currentRole}</p>
                      <p className="text-responsive-base text-slate-600">{selectedStory.company} • {selectedStory.location}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-responsive-lg font-semibold text-slate-900 mb-2">Success Story</h4>
                      <p className="text-responsive-base text-slate-600 leading-relaxed">
                        {selectedStory.story}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-responsive-lg font-semibold text-slate-900 mb-3">Key Achievements</h4>
                      <div className="space-y-2">
                        {selectedStory.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                            <span className="text-responsive-sm text-slate-700">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      
    </div>
  )
}

export default AlumniPage

