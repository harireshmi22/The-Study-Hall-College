import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const CampusDiary = () => {
  const diaryEntries = [
    {
      id: 1,
      title: "Annual Tech Fest 2024",
      date: "March 15-17, 2024",
      category: "Technology",
      image: "https://picsum.photos/seed/tech-fest-2024/600/400.jpg",
      description: "Three days of innovation, coding competitions, and tech talks featuring industry leaders from top tech companies.",
      highlights: ["Hackathon", "AI Workshop", "Startup Pitch", "Tech Exhibition"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Cultural Fusion Week",
      date: "February 5-10, 2024",
      category: "Culture",
      image: "https://picsum.photos/seed/cultural-week-2024/600/400.jpg",
      description: "A vibrant celebration of diversity with dance performances, music concerts, food festivals, and traditional art exhibitions.",
      highlights: ["Dance Competition", "Music Concert", "Food Festival", "Art Exhibition"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Sports Championship",
      date: "January 20-25, 2024",
      category: "Sports",
      image: "https://picsum.photos/seed/sports-championship-2024/600/400.jpg",
      description: "Inters college sports tournament featuring cricket, football, basketball, and athletics with participation from 12 colleges.",
      highlights: ["Cricket Finals", "Football League", "Basketball Tournament", "Athletics Meet"],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Research Symposium",
      date: "April 8-10, 2024",
      category: "Academic",
      image: "https://picsum.photos/seed/research-symposium-2024/600/400.jpg",
      description: "Academic excellence showcase featuring research presentations, paper publications, and guest lectures by renowned scholars.",
      highlights: ["Research Papers", "Guest Lectures", "Innovation Awards", "PhD Presentations"],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Alumni Meet 2024",
      date: "December 22-23, 2023",
      category: "Networking",
      image: "https://picsum.photos/seed/alumni-meet-2024/600/400.jpg",
      description: "Grand reunion of alumni spanning 15 batches, featuring success stories, networking sessions, and mentorship programs.",
      highlights: ["Success Stories", "Networking", "Mentorship Program", "Cultural Evening"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Environmental Drive",
      date: "November 5-11, 2023",
      category: "Social Impact",
      image: "https://picsum.photos/seed/environmental-drive-2023/600/400.jpg",
      description: "Week-long environmental awareness campaign with tree plantation, waste management workshops, and sustainability initiatives.",
      highlights: ["Tree Plantation", "Waste Management", "Sustainability Workshop", "Green Campus Initiative"],
      color: "from-teal-500 to-green-500"
    }
  ]

  return (
    <section className="space-y-8 animate-fade-up">
      {/* Header */}
      <header className="text-center space-y-4">
        <p className="text-responsive-xs uppercase tracking-[0.3em] text-slate-500">
          Campus Life
        </p>
        <h2 className="text-responsive-3xl font-semibold tracking-tight text-slate-900">
          Campus Diary
        </h2>
        <p className="text-responsive-base text-slate-600 max-w-3xl mx-auto">
          Relive the memorable moments, celebrations, and achievements that make life at Study Hall College extraordinary. 
          From tech fests to cultural extravaganzas, discover the vibrant campus experience.
        </p>
      </header>

      {/* Swiper Carousel */}
      <div className="relative max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={30}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="campus-diary-swiper"
        >
          {diaryEntries.map((entry) => (
            <SwiperSlide key={entry.id} className="campus-diary-slide">
              <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-slate-200">
                {/* Image with gradient overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${entry.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`} />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-responsive-xs font-medium text-slate-700">
                      {entry.category}
                    </span>
                  </div>
                  
                  {/* Date badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center rounded-full bg-black/50 backdrop-blur px-3 py-1 text-responsive-xs font-medium text-white">
                      {entry.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-responsive-lg font-semibold text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 group-hover:bg-clip-text transition-all duration-300">
                      {entry.title}
                    </h3>
                    <p className="text-responsive-sm text-slate-600 leading-relaxed">
                      {entry.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <p className="text-responsive-xs font-semibold text-slate-700 uppercase tracking-[0.1em]">
                      Event Highlights
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {entry.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className={`inline-flex items-center rounded-full bg-gradient-to-r ${entry.color} px-3 py-1 text-responsive-xs text-white font-medium shadow-sm group-hover:shadow-md transition-shadow duration-300`}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover focus indicator */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400/50 transition-all duration-300 pointer-events-none" />
                  
                  {/* Read more indicator */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-responsive-xs text-slate-500 group-hover:text-blue-600 transition-colors duration-300">
                      Click to explore
                    </span>
                    <svg 
                      className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Focus overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center text-slate-700 hover:bg-white hover:scale-110 transition-all duration-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-lg flex items-center justify-center text-slate-700 hover:bg-white hover:scale-110 transition-all duration-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-slate-100 to-slate-50 px-6 py-3 border border-slate-200">
          <span className="text-responsive-sm text-slate-600">
            Want to be part of our next campus story?
          </span>
          <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-rose-500 to-blue-500 px-4 py-2 font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-responsive-xs w-32">
            Join Events
            <span className="text-sm">→</span>
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .campus-diary-swiper {
          padding: 40px 0;
        }
        
        .campus-diary-slide {
          width: 350px !important;
        }
        
        .campus-diary-swiper .swiper-pagination-bullet {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        
        .campus-diary-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
        
        @media (max-width: 640px) {
          .campus-diary-slide {
            width: 280px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default CampusDiary
