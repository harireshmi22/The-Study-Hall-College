import React from 'react'

const Success = () => {
  return (
    <div>
         <section className="space-y-6 border border-gray-200 p-4 h-full">
        <header className="text-center space-y-3">
          <p className="text-responsive-xs uppercase tracking-[0.3em] text-slate-500">
            Success Stories
          </p>
          <h2 className="text-responsive-2xl font-semibold tracking-tight text-slate-900">
            Our Students Shine Bright
          </h2>
          <p className="text-responsive-base text-slate-600 max-w-2xl mx-auto">
            Discover the achievements and career paths of our talented alumni who are making waves globally.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
              <div className="text-responsive-xs text-slate-600">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button onClick={() => onNavigate?.('alumni')} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-blue-600 px-6 py-3 text-responsive-sm font-medium text-white shadow-lg shadow-red-500/30 transition hover:brightness-110">
            View Alumni Success Stories
            <span className="text-xs">↗</span>
          </button>
        </div>
      </section>
    </div>
  )
}

export default Success