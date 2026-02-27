import React, { useState } from 'react'
import bbaImage from '../assets/study.jpeg'
import bcaImage from '../assets/library.jpeg'
import bcomImage from '../assets/about1.jpg'
import bajmcImage from '../assets/about2.jpg'

const FeeStructurePage = () => {
  const [selectedCourse, setSelectedCourse] = useState('bba')

  const courses = [
    {
      id: 'bba',
      name: 'Bachelor of Business Administration',
      shortName: 'BBA',
      description: 'Comprehensive business management program focusing on leadership, marketing, finance, and entrepreneurship skills.',
      image: bbaImage,
      color: 'from-blue-500 to-cyan-500',
      eligibility: [
        '10+2 with minimum 50% marks (45% for SC/ST)',
        'Any stream: Science, Commerce, or Arts',
        'Valid Intermediate certificate required',
        'Age limit: 17-25 years as on admission date'
      ],
      futureProspects: [
        'Business Manager',
        'Marketing Executive', 
        'HR Manager',
        'Financial Analyst',
        'Operations Manager',
        'Business Consultant',
        'Entrepreneur'
      ],
      feeStructure: [
        { type: 'Admission Form Fee', amount: 1000, note: 'One-time payment' },
        { type: 'Enrollment Fee', amount: 1000, note: 'One-time payment' },
        { type: 'Annual Fee', amount: 32000, note: 'Payable yearly' }
      ],
      duration: '3 Years (6 Semesters)',
      seats: 60,
      accreditation: 'University of Lucknow'
    },
    {
      id: 'bca',
      name: 'Bachelor of Computer Applications',
      shortName: 'BCA',
      description: 'Advanced computer science program covering programming, database management, and software development.',
      image: bcaImage,
      color: 'from-purple-500 to-pink-500',
      eligibility: [
        '10+2 with minimum 50% marks (45% for SC/ST)',
        'Mathematics/Computer Science compulsory in 10+2',
        'Valid Intermediate certificate required',
        'Age limit: 17-25 years as on admission date'
      ],
      futureProspects: [
        'Software Engineer',
        'Programmer',
        'Project Leader',
        'Internet Expert',
        'Software Tester',
        'SEO Expert',
        'Network Designer',
        'Software Developer',
        'System Analyzer',
        'Network Engineer'
      ],
      feeStructure: [
        { type: 'Admission Form Fee', amount: 1000, note: 'One-time payment' },
        { type: 'Enrollment Fee', amount: 1000, note: 'One-time payment' },
        { type: 'Annual Fee', amount: 45000, note: 'Payable yearly' }
      ],
      duration: '3 Years (6 Semesters)',
      seats: 60,
      accreditation: 'University of Lucknow'
    },
    {
      id: 'bcom',
      name: 'Bachelor of Commerce',
      shortName: 'B.Com',
      description: 'Comprehensive commerce program covering accounting, finance, taxation, and business law.',
      image: bcomImage,
      color: 'from-green-500 to-emerald-500',
      eligibility: [
        '10+2 with minimum 50% marks (45% for SC/ST)',
        'Commerce stream preferred, others can apply',
        'Valid Intermediate certificate required',
        'Age limit: 17-25 years as on admission date'
      ],
      futureProspects: [
        'Accountant',
        'Financial Advisor',
        'Tax Consultant',
        'Auditor',
        'Bank Manager',
        'Investment Analyst',
        'Business Analyst'
      ],
      feeStructure: [
        { type: 'Admission Form Fee', amount: 1000, note: 'One-time payment' },
        { type: 'Enrollment Fee', amount: 1000, note: 'One-time payment' },
        { type: 'Annual Fee', amount: 20000, note: 'Payable yearly' }
      ],
      duration: '3 Years (6 Semesters)',
      seats: 60,
      accreditation: 'University of Lucknow'
    },
    {
      id: 'bajmc',
      name: 'Bachelor of Arts in Journalism & Mass Communication',
      shortName: 'BAJMC',
      description: 'Dynamic media program covering journalism, content creation, and mass communication skills.',
      image: bajmcImage,
      color: 'from-orange-500 to-red-500',
      eligibility: [
        '10+2 with minimum 50% marks (45% for SC/ST)',
        'Any stream: Science, Commerce, or Arts',
        'Valid Intermediate certificate required',
        'Age limit: 17-25 years as on admission date'
      ],
      futureProspects: [
        'Journalist',
        'News Reporter',
        'Content Writer',
        'Media Planner',
        'Public Relations Officer',
        'Camera Operator',
        'Video Editor',
        'Assistant Producer',
        'Producer',
        'Documentary Filmmaker'
      ],
      feeStructure: [
        { type: 'Admission Form Fee', amount: 1000, note: 'One-time payment' },
        { type: 'Enrollment Fee', amount: 1000, note: 'One-time payment' },
        { type: 'Annual Fee', amount: 26000, note: 'Payable yearly' }
      ],
      duration: '3 Years (6 Semesters)',
      seats: 60,
      accreditation: 'University of Lucknow'
    }
  ]

  const selectedCourseData = courses.find(course => course.id === selectedCourse)

  const calculateTotal = (feeStructure) => {
    return feeStructure.reduce((total, fee) => total + fee.amount, 0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-2 text-sm font-semibold">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Academic Year 2025-26
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Fee Structure
              <span className="block text-2xl md:text-4xl text-blue-100 mt-2">
                Invest in Your Future
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Transparent pricing with no hidden costs. Quality education that delivers value.
            </p>
          </div>
        </div>
      </section>

      {/* Course Selection */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 sm:py-6">
            {courses.map((course) => (
              <button
                key={course.id}
                onClick={() => setSelectedCourse(course.id)}
                className={`relative flex flex-col items-center px-3 sm:px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 whitespace-nowrap min-w-[100px] sm:min-w-[140px] ${
                  selectedCourse === course.id
                    ? 'bg-gradient-to-r ' + course.color + ' text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                <span className="text-xs sm:text-sm font-medium mb-1">{course.shortName}</span>
                <span className="text-xs opacity-80 hidden sm:block">{course.duration}</span>
                {selectedCourse === course.id && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-1 bg-white rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Course Info */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            {/* Course Header */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden">
              <div className="relative h-48 sm:h-64 md:h-80">
                <img
                  src={selectedCourseData.image}
                  alt={selectedCourseData.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://picsum.photos/seed/${selectedCourseData.id}/800/400.jpg`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-2 py-1 text-xs font-semibold mb-2 sm:mb-3">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="hidden sm:inline">{selectedCourseData.seats} Seats Available</span>
                    <span className="sm:hidden">{selectedCourseData.seats} Seats</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
                    {selectedCourseData.name}
                  </h2>
                  <p className="text-sm sm:text-base sm:text-lg text-white/90 leading-relaxed">
                    {selectedCourseData.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Fee Breakdown */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-4 sm:gap-0">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Fee Breakdown</h3>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Total Investment</p>
                  <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ₹{calculateTotal(selectedCourseData.feeStructure).toLocaleString()}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {selectedCourseData.feeStructure.map((fee, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-colors gap-2 sm:gap-0">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">{fee.type}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{fee.note}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg sm:text-xl font-bold text-gray-900">₹{fee.amount.toLocaleString()}</p>
                      {fee.note === 'One-time payment' && (
                        <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                          One-time
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Section */}
              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl border border-blue-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0">
                  <div>
                    <p className="text-sm text-gray-600">Total Course Fee</p>
                    <p className="text-base sm:text-lg font-semibold text-gray-900">
                      {selectedCourseData.duration} • {selectedCourseData.accreditation}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl sm:text-3xl font-bold text-blue-600">
                      ₹{calculateTotal(selectedCourseData.feeStructure).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">All fees included</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Eligibility & Duration */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <svg className="w-4 sm:w-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Eligibility</h3>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {selectedCourseData.eligibility.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <svg className="w-4 sm:w-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Program Details</h3>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between p-2 sm:p-3 bg-purple-50 rounded-lg sm:rounded-xl">
                    <span className="text-sm sm:text-base text-gray-600">Duration</span>
                    <span className="font-semibold text-sm sm:text-base text-gray-900">{selectedCourseData.duration}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 sm:p-3 bg-purple-50 rounded-lg sm:rounded-xl">
                    <span className="text-sm sm:text-base text-gray-600">Total Seats</span>
                    <span className="font-semibold text-sm sm:text-base text-gray-900">{selectedCourseData.seats}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 sm:p-3 bg-purple-50 rounded-lg sm:rounded-xl">
                    <span className="text-sm sm:text-base text-gray-600">Accreditation</span>
                    <span className="font-semibold text-sm sm:text-base text-gray-900">{selectedCourseData.accreditation}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Career Prospects */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 sticky top-24 lg:top-32">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <svg className="w-4 sm:w-5 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Career Opportunities</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {selectedCourseData.futureProspects.map((prospect, index) => (
                  <div key={index} className="p-2 sm:p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg sm:rounded-xl border border-orange-200 hover:shadow-md transition-shadow">
                    <span className="text-xs sm:text-sm font-medium text-gray-800 leading-relaxed">{prospect}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg sm:rounded-2xl text-white">
                <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">Placement Support</h4>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                  95%+ placement rate with top companies. Dedicated placement cell with resume building, interview preparation, and career counseling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeeStructurePage
