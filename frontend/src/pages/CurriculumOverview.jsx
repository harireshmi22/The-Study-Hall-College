import React from 'react'

const CurriculumOverview = ({ onNavigate }) => {
  const curriculumPrograms = [
    {
      id: 'bba',
      title: 'Bachelor of Business Administration',
      subtitle: 'Business Leadership & Management',
      description: 'Develop strategic thinking, leadership skills, and business acumen for the corporate world.',
      duration: '3 Years',
      seats: '60 Seats',
      image: 'https://picsum.photos/seed/bba-business/400/250.jpg',
      color: 'from-blue-500 to-cyan-500',
      highlights: ['Business Strategy', 'Financial Management', 'Marketing', 'Entrepreneurship']
    },
    {
      id: 'bca',
      title: 'Bachelor of Computer Applications',
      subtitle: 'Software Development & Technology',
      description: 'Master programming languages, web development, and cutting-edge technologies for the digital age.',
      duration: '3 Years',
      seats: '60 Seats',
      image: 'https://picsum.photos/seed/bca-technology/400/250.jpg',
      color: 'from-purple-500 to-pink-500',
      highlights: ['Programming', 'Web Development', 'Cloud Computing', 'AI/ML Basics']
    },
    {
      id: 'bcom',
      title: 'Bachelor of Commerce',
      subtitle: 'Commerce & Financial Expertise',
      description: 'Build strong foundation in accounting, taxation, and financial management for commerce careers.',
      duration: '3 Years',
      seats: '60 Seats',
      image: 'https://picsum.photos/seed/bcom-commerce/400/250.jpg',
      color: 'from-green-500 to-emerald-500',
      highlights: ['Accounting', 'Taxation', 'Banking', 'Financial Analysis']
    },
    {
      id: 'bajmc',
      title: 'Bachelor of Journalism & Mass Communication',
      subtitle: 'Media & Communication Excellence',
      description: 'Explore journalism, digital media, and content creation for the dynamic media industry.',
      duration: '3 Years',
      seats: '60 Seats',
      image: 'https://picsum.photos/seed/bajmc-media/400/250.jpg',
      color: 'from-orange-500 to-red-500',
      highlights: ['Journalism', 'Digital Media', 'Content Creation', 'Public Relations']
    }
  ]

  return (
    <div className="space-y-12 animate-fade-up">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="space-y-4">
          <p className="text-responsive-xs uppercase tracking-[0.3em] text-slate-500">
            Academic Programs
          </p>
          <h1 className="text-responsive-3xl font-semibold tracking-tight text-slate-900">
            Discover Your Path to Success
          </h1>
          <p className="text-responsive-base text-slate-600 max-w-3xl mx-auto">
            Choose from our specialized undergraduate programs designed to build expertise, 
            practical skills, and career readiness in today's competitive landscape.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="space-y-8">
        <div className="grid gap-8 md:grid-cols-2">
          {curriculumPrograms.map((program) => (
            <article
              key={program.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-20`}></div>
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-responsive-xs font-medium text-white bg-gradient-to-r ${program.color}`}>
                    {program.duration}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-responsive-xs font-medium text-white bg-slate-900/80">
                    {program.seats}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-responsive-xl font-semibold text-slate-900">
                    {program.title}
                  </h3>
                  <p className="text-responsive-sm font-medium text-slate-600">
                    {program.subtitle}
                  </p>
                  <p className="text-responsive-sm text-slate-600">
                    {program.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <p className="text-responsive-xs font-semibold text-slate-700 uppercase tracking-[0.1em]">
                    Key Focus Areas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {program.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-lg text-responsive-xs bg-slate-100 text-slate-700"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate?.(program.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-responsive-sm font-medium text-white bg-gradient-to-r ${program.color} hover:shadow-lg transition-all duration-200`}
                  >
                    View Curriculum Details
                    <span className="text-xs">→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-responsive-2xl font-semibold text-slate-900">
            Why Choose Our Programs?
          </h2>
          <p className="text-responsive-base text-slate-600 max-w-2xl mx-auto">
            Our curriculum is designed with industry input, practical learning, and career growth in mind.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              icon: '🎯',
              title: 'Industry Focused',
              description: 'Curriculum designed with industry experts'
            },
            {
              icon: '💼',
              title: 'Practical Learning',
              description: 'Hands-on projects and internships'
            },
            {
              icon: '👥',
              title: 'Small Class Sizes',
              description: 'Personalized attention and mentoring'
            },
            {
              icon: '🚀',
              title: 'Career Support',
              description: 'Placement assistance and career guidance'
            }
          ].map((feature, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="text-responsive-base font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="text-responsive-xs text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6">
        <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 border border-slate-200">
          <h2 className="text-responsive-xl font-semibold text-slate-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-responsive-base text-slate-600 mb-6 max-w-2xl mx-auto">
            Take the first step towards a rewarding career. Explore our programs and find the perfect fit for your aspirations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate?.('admission')}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-blue-600 px-6 py-3 text-responsive-sm font-medium text-white shadow-lg shadow-red-500/30 transition hover:brightness-110"
            >
              Apply Now
              <span className="text-xs">→</span>
            </button>
            <button
              onClick={() => onNavigate?.('contact')}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-responsive-sm font-medium text-slate-900 hover:border-slate-400 transition-colors"
            >
              Get More Information
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CurriculumOverview
