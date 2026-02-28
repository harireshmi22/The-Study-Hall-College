import React, { useState } from 'react'
import group from '../assets/group.jpeg'
import library from '../assets/library.jpeg'
import study from '../assets/study.jpeg'
import about1 from '../assets/about1.jpg'

const AdmissionPage = () => {
  const [activeTab, setActiveTab] = useState('undergraduate')

  const programs = [
    {
      id: 'undergraduate',
      name: 'Undergraduate Programs',
      courses: ['BBA', 'BCA', 'BJMC', 'BCom'],
      duration: '3 Years',
      eligibility: '10+2 with 50% marks'
    },
    {
      id: 'postgraduate',
      name: 'Postgraduate Programs',
      courses: ['MBA', 'MCA', 'MJMC', 'MCom'],
      duration: '2 Years',
      eligibility: 'Graduation with 50% marks'
    }
  ]

  const admissionSteps = [
    {
      number: '01',
      title: 'Choose Your Program',
      description: 'Explore our diverse range of programs and select the one that aligns with your career goals.',
      icon: '🎯'
    },
    {
      number: '02',
      title: 'Fill Application Form',
      description: 'Complete the online application form with your personal and academic details.',
      icon: '📝'
    },
    {
      number: '03',
      title: 'Submit Documents',
      description: 'Upload required documents including mark sheets, certificates, and photographs.',
      icon: '📄'
    },
    {
      number: '04',
      title: 'Pay Application Fee',
      description: 'Pay the non-refundable application fee of ₹1000 through secure online payment.',
      icon: '💳'
    },
    {
      number: '05',
      title: 'Personal Interview',
      description: 'Attend a personal interview with our faculty to discuss your aspirations.',
      icon: '👥'
    },
    {
      number: '06',
      title: 'Receive Admission',
      description: 'Get your admission offer and complete the enrollment process.',
      icon: '🎓'
    }
  ]

  const importantDates = [
    { event: 'Application Start', date: 'March 1, 2025', status: 'upcoming' },
    { event: 'Application Deadline', date: 'May 31, 2025', status: 'upcoming' },
    { event: 'Entrance Exam', date: 'June 15, 2025', status: 'upcoming' },
    { event: 'Result Declaration', date: 'June 30, 2025', status: 'upcoming' },
    { event: 'Academic Session', date: 'July 20, 2025', status: 'upcoming' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-2 text-sm font-semibold">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Admissions Open 2025-26
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Start Your
                <span className="block text-2xl md:text-4xl text-blue-100 mt-2">
                  Journey to Excellence
                </span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
                Join a community of learners and leaders. Transform your future with quality education and endless opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                  Apply Now
                </button>
                <button className="px-6 py-3 bg-white/20 backdrop-blur border border-white/30 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={group}
                alt="Students"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Selection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Choose Your Program</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select from our wide range of undergraduate and postgraduate programs
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl bg-gray-100 p-1">
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => setActiveTab(program.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === program.id
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {program.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.find(p => p.id === activeTab)?.courses.map((course, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-700">{course}</span>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">{course}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{programs.find(p => p.id === activeTab)?.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Eligibility:</span>
                    <span className="font-semibold">{programs.find(p => p.id === activeTab)?.eligibility}</span>
                  </div>
                </div>
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Admission Process */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Admission Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple 6-step process to secure your admission
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {admissionSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{step.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-bold text-blue-600">{step.number}</span>
                        <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Important Dates</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with key admission dates
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {importantDates.map((item, index) => (
              <div key={index} className="text-center p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="text-sm text-gray-600 mb-2">{item.event}</div>
                <div className="text-lg font-bold text-gray-900">{item.date}</div>
                <div className="mt-2">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Life at Campus</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience vibrant campus life with modern facilities
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img src={library} alt="Library" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Library</h3>
                <p className="text-gray-600">Access to thousands of books, journals, and digital resources in our state-of-the-art library.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img src={study} alt="Study Area" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Classrooms</h3>
                <p className="text-gray-600">Interactive learning spaces equipped with modern technology for enhanced education.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img src={about1} alt="Campus" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sports Complex</h3>
                <p className="text-gray-600">Comprehensive sports facilities for physical fitness and recreational activities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help?</h2>
          <p className="text-xl mb-8 text-blue-100">Our admission team is here to assist you</p>
          
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-lg font-bold mb-2">Call Us</h3>
              <p className="text-blue-100">+91 98765 43210</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="text-lg font-bold mb-2">Email Us</h3>
              <p className="text-blue-100">admissions@studyhall.edu</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-lg font-bold mb-2">Visit Us</h3>
              <p className="text-blue-100">Lucknow, Uttar Pradesh</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdmissionPage

