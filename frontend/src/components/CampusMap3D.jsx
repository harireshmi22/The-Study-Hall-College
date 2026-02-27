import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

// Mapbox access token (you'll need to get your own from mapbox.com)
mapboxgl.accessToken = 'pk.eyJ1Ijoic3R1ZHlzaGFsbGNvbGxlZ2UiLCJhIjoiY2x6bnZjaXUxMWI1cTJsczR6cDZ0d2p6YSJ9.P8nH3O3rV8c5X9Z7X3J3A'

const CampusMap3D = () => {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedBuilding, setSelectedBuilding] = useState(null)

  // Campus building coordinates (Lucknow coordinates)
  const campusBuildings = [
    {
      id: 'main-building',
      name: 'Main Academic Building',
      coordinates: [80.9462, 26.8467],
      description: 'Primary academic facility with classrooms and labs',
      floors: 4,
      departments: ['Computer Science', 'Business', 'Commerce']
    },
    {
      id: 'library',
      name: 'Central Library',
      coordinates: [80.9452, 26.8457],
      description: 'Modern library with digital resources',
      floors: 3,
      departments: ['Library Services', 'Study Areas']
    },
    {
      id: 'auditorium',
      name: 'Auditorium',
      coordinates: [80.9472, 26.8477],
      description: '500-seat auditorium for events and presentations',
      floors: 2,
      departments: ['Events', 'Cultural Activities']
    },
    {
      id: 'sports-complex',
      name: 'Sports Complex',
      coordinates: [80.9442, 26.8447],
      description: 'Indoor and outdoor sports facilities',
      floors: 2,
      departments: ['Sports', 'Physical Education']
    },
    {
      id: 'hostel',
      name: 'Student Hostel',
      coordinates: [80.9482, 26.8487],
      description: 'Residential facility for students',
      floors: 5,
      departments: ['Accommodation', 'Student Services']
    }
  ]

  useEffect(() => {
    if (!mapContainer.current || map.current) return

    const initializeMap = () => {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/satellite-streets-v12',
        center: [80.9462, 26.8467], // Campus center
        zoom: 17,
        pitch: 45, // 3D angle
        bearing: -17,
        antialias: true
      })

      map.current.on('load', () => {
        setIsLoading(false)

        // Add 3D building layer
        map.current.addLayer({
          'id': '3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
            'fill-extrusion-color': [
              'interpolate',
              ['linear'],
              ['get', 'height'],
              0, '#4A90E2',
              10, '#7B68EE',
              20, '#9370DB'
            ],
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['get', 'height'],
              0, 0,
              10, 10,
              20, 20
            ],
            'fill-extrusion-base': ['get', 'min_height'],
            'fill-extrusion-opacity': 0.8
          }
        })

        // Add custom campus building markers
        campusBuildings.forEach(building => {
          const el = document.createElement('div')
          el.className = 'campus-marker'
          el.innerHTML = `
            <div class="marker-content">
              <div class="marker-icon">🏛️</div>
              <div class="marker-label">${building.name}</div>
            </div>
          `
          el.style.cssText = `
            background: rgba(255, 255, 255, 0.9);
            border: 2px solid #4A90E2;
            border-radius: 8px;
            padding: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          `

          new mapboxgl.Marker(el)
            .setLngLat(building.coordinates)
            .addTo(map.current)

          el.addEventListener('click', () => {
            setSelectedBuilding(building)
            map.current.flyTo({
              center: building.coordinates,
              zoom: 18,
              pitch: 45,
              bearing: -17,
              duration: 2000
            })
          })

          el.addEventListener('mouseenter', () => {
            el.style.transform = 'scale(1.1)'
            el.style.boxShadow = '0 4px 12px rgba(0,0,0,0.4)'
          })

          el.addEventListener('mouseleave', () => {
            el.style.transform = 'scale(1)'
            el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)'
          })
        })

        // Add navigation controls
        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')

        // Add scale control
        map.current.addControl(new mapboxgl.ScaleControl({
          maxWidth: 80,
          unit: 'metric'
        }), 'bottom-left')

        // Add geolocate control
        map.current.addControl(new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true
        }), 'top-right')
      })

      // Handle map rotation with mouse
      map.current.on('mousedown', () => {
        map.current.dragPan.disable()
        map.current.dragRotate.enable()
      })

      map.current.on('mouseup', () => {
        map.current.dragPan.enable()
        map.current.dragRotate.disable()
      })
    }

    initializeMap()

    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [])

  const handleBuildingTour = () => {
    if (!map.current) return

    let currentIndex = 0
    const tourInterval = setInterval(() => {
      if (currentIndex >= campusBuildings.length) {
        clearInterval(tourInterval)
        return
      }

      const building = campusBuildings[currentIndex]
      setSelectedBuilding(building)
      
      map.current.flyTo({
        center: building.coordinates,
        zoom: 18,
        pitch: 45,
        bearing: -17,
        duration: 3000
      })

      currentIndex++
    }, 4000)
  }

  const resetView = () => {
    if (!map.current) return
    
    map.current.flyTo({
      center: [80.9462, 26.8467],
      zoom: 17,
      pitch: 45,
      bearing: -17,
      duration: 2000
    })
    setSelectedBuilding(null)
  }

  return (
    <div className="relative w-full h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl">
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center z-10">
          <div className="text-center space-y-4">
            <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
            <p className="text-responsive-base font-semibold text-blue-700">Loading 3D Campus Map...</p>
          </div>
        </div>
      )}

      {/* Map Container */}
      <div ref={mapContainer} className="w-full h-full" />

      {/* Building Info Panel */}
      {selectedBuilding && (
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-xl p-4 shadow-xl max-w-sm z-20">
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <h3 className="text-responsive-lg font-bold text-slate-900">{selectedBuilding.name}</h3>
              <button
                onClick={() => setSelectedBuilding(null)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-responsive-sm text-slate-600">{selectedBuilding.description}</p>
            <div className="grid grid-cols-2 gap-3 text-responsive-xs">
              <div className="bg-blue-50 p-2 rounded-lg">
                <p className="font-semibold text-blue-700">Floors</p>
                <p className="text-blue-600">{selectedBuilding.floors}</p>
              </div>
              <div className="bg-indigo-50 p-2 rounded-lg">
                <p className="font-semibold text-indigo-700">Departments</p>
                <p className="text-indigo-600">{selectedBuilding.departments.length}</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-responsive-xs font-semibold text-slate-700">Departments:</p>
              <div className="flex flex-wrap gap-1">
                {selectedBuilding.departments.map((dept, index) => (
                  <span key={index} className="text-responsive-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                    {dept}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Control Panel */}
      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur rounded-xl p-3 shadow-xl z-20">
        <div className="flex gap-2">
          <button
            onClick={handleBuildingTour}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-responsive-sm font-medium rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg"
          >
            🎯 Campus Tour
          </button>
          <button
            onClick={resetView}
            className="px-4 py-2 bg-white border border-slate-300 text-slate-700 text-responsive-sm font-medium rounded-lg hover:bg-slate-50 transition-all duration-300 shadow-lg"
          >
            🔄 Reset View
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur rounded-xl p-3 shadow-xl z-20">
        <div className="space-y-2 text-responsive-xs text-slate-600">
          <p className="font-semibold text-slate-700">🗺️ Controls:</p>
          <p>• Click buildings for details</p>
          <p>• Drag to rotate view</p>
          <p>• Scroll to zoom</p>
          <p>• Use controls for navigation</p>
        </div>
      </div>

      {/* Campus Legend */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-xl p-3 shadow-xl z-20">
        <div className="space-y-2">
          <p className="text-responsive-xs font-semibold text-slate-700">🏛️ Campus Buildings</p>
          <div className="grid grid-cols-2 gap-2 text-responsive-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span>Academic</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-indigo-500 rounded"></div>
              <span>Facilities</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-purple-500 rounded"></div>
              <span>Student Life</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span>Sports</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampusMap3D
