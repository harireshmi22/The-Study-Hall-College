import React, { useState } from 'react'

// Import local assets
import image from '../assets/image.jpeg'
import image2 from '../assets/image2.jpeg'
import library from '../assets/library.jpeg'
import study from '../assets/study.jpeg'
import group from '../assets/group.jpeg'
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import alumni1 from '../assets/alumni1.jpg'
import alumni2 from '../assets/alumni2.jpg'
import alumni3 from '../assets/alumni3.jpg'
import alumni4 from '../assets/alumni4.jpg'
import alumni5 from '../assets/alumni5.jpg'
import alumni6 from '../assets/alumni6.jpg'
import alumni7 from '../assets/alumni7.jpg'
import alumni8 from '../assets/alumni8.jpg'
import alumni9 from '../assets/alumni9.jpg'
import alumni10 from '../assets/alumni10.jpg'
import blogThumb1 from '../assets/Blog-Thumb-2025-26-12.jpg'
import blogThumb2 from '../assets/Blog-Thumb-2025-26-24.jpg'
import blogThumb3 from '../assets/Blog-Thumb-2025-26-26.jpg'
import img6 from '../assets/img6.jpg'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'campus', label: 'Campus Life' },
    { id: 'events', label: 'Events' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'students', label: 'Students' },
    { id: 'faculty', label: 'Faculty' }
  ]

  const galleryImages = [
    // Campus Life
    { id: 1, category: 'campus', title: 'Main Building', description: 'Beautiful campus architecture', url: image },
    { id: 2, category: 'campus', title: 'Library', description: 'Modern library facilities', url: library },
    { id: 3, category: 'campus', title: 'Study Area', description: 'Quiet study spaces for students', url: study },
    { id: 4, category: 'campus', title: 'Campus View', description: 'Scenic campus environment', url: image2 },
    { id: 5, category: 'campus', title: 'Group Activities', description: 'Student collaboration spaces', url: group },
    { id: 6, category: 'campus', title: 'College Campus', description: 'Beautiful campus grounds', url: about1 },
    
    // Events
    { id: 7, category: 'events', title: 'Annual Day', description: 'Annual cultural celebration', url: alumni1 },
    { id: 8, category: 'events', title: 'Tech Fest', description: 'Technical festival and competitions', url: alumni2 },
    { id: 9, category: 'events', title: 'Sports Meet', description: 'Annual sports competition', url: alumni3 },
    { id: 10, category: 'events', title: 'Guest Lecture', description: 'Industry expert sessions', url: alumni4 },
    { id: 11, category: 'events', title: 'Workshop', description: 'Hands-on learning workshops', url: alumni5 },
    { id: 12, category: 'events', title: 'Graduation', description: 'Graduation ceremony', url: alumni6 },
    
    // Facilities
    { id: 13, category: 'facilities', title: 'Auditorium', description: 'Modern auditorium for events', url: alumni7 },
    { id: 14, category: 'facilities', title: 'Cafeteria', description: 'Hygienic and spacious cafeteria', url: alumni8 },
    { id: 15, category: 'facilities', title: 'Hostel', description: 'Comfortable hostel facilities', url: alumni9 },
    { id: 16, category: 'facilities', title: 'Parking', description: 'Ample parking space', url: alumni10 },
    { id: 17, category: 'facilities', title: 'Medical Room', description: 'First aid and medical facilities', url: about2 },
    { id: 18, category: 'facilities', title: 'Gym', description: 'Fitness and gym facilities', url: img6 },
    
    // Students
    { id: 19, category: 'students', title: 'Study Group', description: 'Collaborative learning sessions', url: blogThumb1 },
    { id: 20, category: 'students', title: 'Project Work', description: 'Students working on projects', url: blogThumb2 },
    { id: 21, category: 'students', title: 'Presentation', description: 'Student presentations', url: blogThumb3 },
    { id: 22, category: 'students', title: 'Team Activity', description: 'Team building activities', url: image },
    { id: 23, category: 'students', title: 'Lab Work', description: 'Practical laboratory sessions', url: library },
    { id: 24, category: 'students', title: 'Discussion', description: 'Interactive classroom discussions', url: study },
    
    // Faculty
    { id: 25, category: 'faculty', title: 'Faculty Meeting', description: 'Faculty development programs', url: image2 },
    { id: 26, category: 'faculty', title: 'Teaching', description: 'Faculty in classroom', url: group },
    { id: 27, category: 'faculty', title: 'Research', description: 'Faculty research work', url: about1 },
    { id: 28, category: 'faculty', title: 'Training', description: 'Faculty training sessions', url: about2 },
    { id: 29, category: 'faculty', title: 'Conference', description: 'Faculty attending conferences', url: alumni1 },
    { id: 30, category: 'faculty', title: 'Mentoring', description: 'Faculty mentoring students', url: alumni2 }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-rose-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-responsive-sm font-semibold text-purple-700">
              <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
              Campus Gallery
            </div>
            <h1 className="text-responsive-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Explore Our
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                Campus Life
              </span>
            </h1>
            <p className="text-responsive-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover the vibrant campus life, modern facilities, and memorable moments that make Study Hall College a special place to learn and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto py-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`relative px-6 py-3 text-responsive-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {category.label}
                {selectedCategory === category.id && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-16 aspect-h-12 relative h-64 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-responsive-base font-bold text-white mb-1">{image.title}</h3>
                  <p className="text-responsive-sm text-white/90">{image.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur rounded-full p-2 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-96 md:h-[500px] overflow-hidden">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 hover:bg-white transition-colors shadow-lg"
              >
                <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-responsive-2xl font-bold text-slate-900">{selectedImage.title}</h3>
              <p className="text-responsive-base text-slate-600">{selectedImage.description}</p>
              <div className="flex items-center gap-4 text-responsive-sm text-slate-500">
                <span className="capitalize bg-slate-100 px-3 py-1 rounded-full">
                  {selectedImage.category}
                </span>
                <span>Photo ID: #{selectedImage.id}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
