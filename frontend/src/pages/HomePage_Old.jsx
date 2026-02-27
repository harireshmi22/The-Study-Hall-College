import Hero from '../components/Hero'
import Video from '../components/Video'
import CampusDiary from '../components/CampusDiary'
import CampusMap3D from '../components/CampusMap3D'
import ImageSlider from '../components/ImageSlider'
import image from "../assets/image.jpeg"
import image2 from "../assets/image2.jpeg"
import library from "../assets/library.jpeg"
import group from "../assets/group.jpeg"

import { 
  AnimatedSection, 
  AnimatedCard, 
  AnimatedText, 
  AnimatedStats, 
  AnimatedButton,
  StaggeredContainer,
  StaggeredItem,
  AnimatedGradient
} from '../components/AnimatedComponents'

const HomePage = ({ onNavigate }) => {
  const sliderImages = [
    image,
    image2,
    library,
    group
  ]

  const projects = [
    {
      title: "Modern Library & Study Centers",
      description: "State-of-the-art library with digital resources, collaborative spaces, and 24/7 access for students",
      image: "https://picsum.photos/seed/library/800/600.jpg"
    },
    {
      title: "Advanced Computer Labs", 
      description: "Fully equipped labs with latest technology, high-speed internet, and technical support",
      image: "https://picsum.photos/seed/labs/800/600.jpg"
    },
    {
      title: "Sports Complex",
      description: "Indoor and outdoor sports facilities with professional coaching and modern equipment",
      image: "https://picsum.photos/seed/sports/800/600.jpg"
    },
    {
      title: "Smart Classrooms",
      description: "Technology-enabled classrooms with interactive learning tools and comfortable study environment",
      image: "https://picsum.photos/seed/classroom/800/600.jpg"
    }
  ]

  const stats = [
    { number: "18:1", label: "Student–faculty ratio" },
    { number: "24/7", label: "Access to study halls" },
    { number: "Top 5%", label: "Placements in core programs" },
    { number: "5000+", label: "Alumni Network" }
  ]


  return (
    <div className="space-y-14">
      {/* New animated hero */}
      <Hero onNavigate={onNavigate} />

      {/* Campus Image Slider */}
      <AnimatedSection delay={0.3}>
        <div className="text-center space-y-6">
          <AnimatedText delay={0.4}>
            <h2 className="text-responsive-3xl font-bold tracking-tight text-slate-900">
              Explore Our Beautiful Campus
            </h2>
            <p className="text-responsive-base text-slate-600 max-w-3xl mx-auto">
              Take a virtual tour through our modern facilities and vibrant student life
            </p>
          </AnimatedText>
          
          <ImageSlider 
            images={sliderImages}
            autoplay={true}
            delay={4000}
            loop={true}
          />
        </div>
      </AnimatedSection>

      {/* Projects Showcase */}
      {/* <AnimatedSection delay={0.5}>
        <div className="text-center space-y-6">
          <AnimatedText delay={0.6}>
            <h2 className="text-responsive-3xl font-bold tracking-tight text-slate-900">
              Our Projects & Initiatives
            </h2>
            <p className="text-responsive-base text-slate-600 max-w-3xl mx-auto">
              Discover our innovative projects and student-led initiatives that make us stand out
            </p>
          </AnimatedText>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, index) => (
              <AnimatedCard key={index} delay={0.7 + index * 0.1} className="group">
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = `https://picsum.photos/seed/project-${index}/800/600.jpg`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-responsive-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-responsive-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection> */}

      {/* Interactive Stats Section */}
      <AnimatedSection delay={0.2}>
        <div className="text-center space-y-6">
          <AnimatedText delay={0.3}>
            <h2 className="text-responsive-2xl font-bold tracking-tight text-slate-900">
              Why Choose Study Hall College?
            </h2>
            <p className="text-responsive-base text-slate-600 max-w-3xl mx-auto">
              Experience excellence in education with our student-centered approach and world-class facilities
            </p>
          </AnimatedText>
          
          <AnimatedStats 
            stats={stats} 
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto"
          />
        </div>
      </AnimatedSection>

      {/* Campus Life Section */}
      <section className="space-y-6 border border-gray-200 rounded-3xl p-6 md:p-8 bg-white animate-fade-up">
        <header className="text-center space-y-3">
          <p className="text-responsive-lg uppercase tracking-[0.3em] text-slate-500 underline ">
            Campus Life
          </p>
          <h2 className="text-responsive-xl font-semibold tracking-tight text-slate-900">
            Experience Vibrant Student Life
          </h2>
          <p className="text-responsive-base text-slate-600 max-w-2xl mx-auto">
            Beyond academics, discover a thriving community with clubs, events, and activities that shape your college experience.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-responsive-sm font-bold text-white">
              🎨
            </div>
            <h3 className="text-responsive-base font-semibold text-slate-900">Creative Arts</h3>
            <p className="text-responsive-sm text-slate-600">
              Express yourself through drama, music, dance, and visual arts clubs with regular performances and exhibitions.
            </p>
            <button onClick={() => onNavigate?.('about')} className="text-responsive-sm text-purple-600 hover:text-purple-800 font-medium">
              Explore Arts →
            </button>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-responsive-sm font-bold text-white">
              ⚽
            </div>
            <h3 className="text-responsive-base font-semibold text-slate-900">Sports & Fitness</h3>
            <p className="text-responsive-sm text-slate-600">
              Stay active with cricket, basketball, badminton, and fitness programs. Professional coaching and tournaments.
            </p>
            <button onClick={() => onNavigate?.('about')} className="text-responsive-sm text-green-600 hover:text-green-800 font-medium">
              View Sports →
            </button>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-responsive-sm font-bold text-white">
              🚀
            </div>
            <h3 className="text-responsive-base font-semibold text-slate-900">Tech Innovation</h3>
            <p className="text-responsive-sm text-slate-600">
              Join coding clubs, hackathons, robotics workshops, and innovation labs to build cutting-edge skills.
            </p>
            <button onClick={() => onNavigate?.('programs')} className="text-responsive-sm text-blue-600 hover:text-blue-800 font-medium">
              Tech Programs →
            </button>
          </div>
        </div>
      </section>

      {/* Student Achievements Section */}
      <section className="space-y-6 flex flex-col items-center justify-center border border-gray-200 rounded-3xl bg-white p-6 md:p-8">
        <header className="text-center space-y-3">
          <p className="text-responsive-xl uppercase tracking-[0.3em] text-slate-500 underline">
            Success Stories
          </p>
          <h2 className="text-responsive-2xl font-semibold tracking-tight text-slate-900">
            Our Students Shine Bright
          </h2>
          <p className="text-responsive-base text-slate-600 max-w-2xl mx-auto">
            Discover the achievements and career paths of our talented alumni who are making waves globally.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-full">
          {[
            { number: '95%', label: 'Placement Rate', detail: 'Students placed within 6 months' },
            { number: '200+', label: 'Alumni Network', detail: 'Working at top companies' },
            { number: '50+', label: 'Awards Won', detail: 'Academic and sports achievements' },
            { number: '15+', label: 'Startup Founders', detail: 'Entrepreneurial ventures launched' }
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-responsive-3xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-responsive-sm font-semibold text-slate-900">
                {stat.label}
              </div>
              <div className="text-responsive-sm  text-slate-600">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button onClick={() => onNavigate?.('alumni')} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-blue-600 px-6 py-3 text-responsive-sm font-medium text-white shadow-lg shadow-red-500/30 transition hover:brightness-110 hover:-translate-y-0.5">
            View Alumni Success Stories
            <span className="text-xs">↗</span>
          </button>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="space-y-6 border border-gray-200 rounded-3xl bg-white p-6 md:p-8">
        <header className="text-center space-y-3">
          <p className="text-responsive-xl uppercase tracking-[0.3em] text-slate-500 underline">
            Infrastructure
          </p>
          <h2 className="text-responsive-2xl font-semibold tracking-tight text-slate-900">
            World-Class Facilities
          </h2>
          {/* <p className="text-responsive-base text-slate-600 max-w-2xl mx-auto">
            Modern infrastructure designed to support your learning journey with cutting-edge technology and comfortable spaces.
          </p> */}
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">

            <div className="h-64 bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-slate-600 flex items-center justify-center w-full h-full object-cover">
                {/* Library image visually handled in hero; keep this as a soft gradient card */}
                <span className="text-responsive-lg font-medium">
                  Quiet, sunlit knowledge spaces
                </span>
              </div>
            </div>

            <div className="p-5 space-y-3">
              <h3 className="text-responsive-xl font-semibold text-slate-900">Knowledge Centers</h3>
              <p className="text-responsive-sm text-slate-600">
                Digital library with 50,000+ resources, quiet study zones, collaborative spaces, and 24/7 access for students.
              </p>
              <ul className="space-y-2 text-responsive-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Digital catalog and e-resources
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Individual and group study areas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Research assistance and support
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="h-64 bg-linear-to-br from-green-100 to-emerald-100 flex items-center justify-center">
              <div className="text-responsive-lg font-medium text-slate-600">💻 Tech Labs & Innovation</div>
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-responsive-base font-semibold text-slate-900">Technology Hubs</h3>
              <p className="text-responsive-sm text-slate-600">
                State-of-the-art computer labs, innovation centers, and maker spaces equipped with latest technology and software.
              </p>
              <ul className="space-y-2 text-responsive-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  High-speed internet and modern hardware
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Software development and testing labs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  AI and machine learning facilities
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="h-10 w-10 rounded-full bg-linear-to-br from-orange-500 to-red-500 flex items-center justify-center text-responsive-sm font-bold text-white">
              🏃
            </div>
            <h3 className="text-responsive-xl font-semibold text-slate-900">Sports Complex</h3>
            <p className="text-responsive-sm text-slate-600">
              Indoor and outdoor sports facilities with professional coaching and equipment.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="h-10 w-10 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-responsive-sm font-bold text-white">
              🎭
            </div>
            <h3 className="text-responsive-xl font-semibold text-slate-900">Auditorium</h3>
            <p className="text-responsive-sm text-slate-600">
              500-seat auditorium for events, performances, and guest lectures with modern AV systems.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="h-10 w-10 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-responsive-sm font-bold text-white">
              🍽️
            </div>
            <h3 className="text-responsive-xl font-semibold text-slate-900">Cafeteria</h3>
            <p className="text-responsive-sm text-slate-600">
              Multi-cuisine food court serving nutritious meals and snacks in a comfortable dining environment.
            </p>
          </div>
        </div>
      </section>

      {/* Video tour */}
      <section className="animate-fade-up">
        <Video />
      </section>

      {/* Campus Diary Section */}
      <section className="animate-fade-up">
        <CampusDiary />
      </section>

      {/* Events & Activities Section */}
      <section className="space-y-6 border border-gray-200 rounded-3xl bg-white p-6 md:p-8">
        <header className="text-center space-y-3">
          <p className="text-responsive-xl uppercase tracking-[0.3em] text-slate-500 underline">
            Campus Events
          </p>
          <h2 className="text-responsive-2xl font-semibold tracking-tight text-slate-900">
            Year-Round Activities
          </h2>
          <p className="text-responsive-base text-slate-600 max-w-2xl mx-auto">
            From cultural festivals to academic conferences, experience a vibrant calendar of events throughout the year.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: 'Annual Cultural Fest',
              date: 'March 15-17, 2024',
              description: 'Three-day celebration of music, dance, drama, and art with participants from colleges across the region.',
              type: 'Cultural',
              color: 'from-purple-500 to-pink-500'
            },
            {
              title: 'Tech Summit 2024',
              date: 'April 8-10, 2024',
              description: 'Technology conference featuring industry leaders, workshops, and hackathon competitions.',
              type: 'Technical',
              color: 'from-blue-500 to-cyan-500'
            },
            {
              title: 'Sports Meet',
              date: 'February 5-7, 2024',
              description: 'Inter-college sports tournament with competitions in cricket, basketball, badminton, and athletics.',
              type: 'Sports',
              color: 'from-green-500 to-emerald-500'
            },
            {
              title: 'Research Symposium',
              date: 'May 20-21, 2024',
              description: 'Academic conference showcasing student research projects and innovations across various disciplines.',
              type: 'Academic',
              color: 'from-orange-500 to-red-500'
            }
          ].map((event, index) => (
            <div key={index} className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-responsive-xs font-medium text-white bg-linear-to-r ${event.color}`}>
                      {event.type}
                    </span>
                    <span className="text-responsive-xs text-slate-500">{event.date}</span>
                  </div>
                  <h3 className="text-responsive-xl font-semibold text-slate-900">{event.title}</h3>
                  <p className="text-responsive-sm text-slate-600">{event.description}</p>
                </div>
                <button onClick={() => onNavigate?.('about')} className="text-responsive-sm text-slate-600 hover:text-slate-900">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="space-y-6">
        <div className="rounded-3xl bg-linear-to-br from-red-800 to-red-300 text-white p-8 md:p-12 text-center space-y-6">
          <h2 className="text-responsive-2xl md:text-responsive-3xl font-semibold tracking-tight">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-responsive-base md:text-responsive-lg text-slate-300 max-w-2xl mx-auto">
            Join a community of focused learners and achievers. Take the first step towards a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => onNavigate?.('admission')} className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 text-responsive-sm font-medium shadow-lg hover:shadow-xl transition-all">
              Apply Now
              <span className="text-xs">→</span>
            </button>
            <button onClick={() => onNavigate?.('contact')} className="inline-flex items-center gap-2 rounded-full border border-slate-600 text-white px-6 py-3 text-responsive-sm font-medium hover:bg-slate-800 transition-colors">
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
