import React from 'react'

const Video = () => {
  return (
    <div>
              {/* Video Showcase Section */}
      <section className="border border-gray-200 w-full p-4">
        <header className="text-center mb-6">
          <p className="text-responsive-xl uppercase tracking-[0.3em] text-slate-500">
            Experience Our Campus
          </p>
        </header>

        <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
          <div className="relative aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/raJ7ifa16MA"
              title="Study Hall College Campus Tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Video