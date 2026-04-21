import { useEffect, useState } from 'react'
import { FiCheckCircle, FiZap, FiTrendingUp } from 'react-icons/fi'
import ImageLightbox from '../components/ImageLightbox'

export default function Workshop() {
  const [workshopImages, setWorkshopImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const images = []
    for (let i = 1; i <= 7; i++) {
      images.push({
        id: i,
        src: `/assets/Workshop-${i}.jpeg`,
        alt: `Workshop ${i}`
      })
    }
    setWorkshopImages(images)
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Workshop & Manufacturing</h1>
          <p className="text-gray-300 text-lg">
            State-of-the-art facility equipped with modern machinery and technology
          </p>
        </div>
      </section>

      {/* Workshop Gallery */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title mb-12">Manufacturing Facility</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {workshopImages.map((img) => (
              <div
                key={img.id}
                className="rounded-lg overflow-hidden shadow-md h-64 group cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  onClick={() => setSelectedImage(img)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Description below gallery */}
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-gray-700 leading-relaxed">
              Our manufacturing facility spans over 2 acres with dedicated areas for raw material 
              storage, fabrication, quality testing, and finished goods warehouse. The workshop is 
              organized to ensure efficient workflow and minimal production delays.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Manufacturing Process</h2>
          <p className="section-subtitle">From raw material to finished product</p>

          <div className="space-y-8">
            {[
              {
                step: 1,
                title: 'Raw Material Inspection',
                description: 'All incoming materials undergo rigorous testing to verify specifications, dimensions, and quality standards.'
              },
              {
                step: 2,
                title: 'Cutting & Preparation',
                description: 'Materials are cut to precise dimensions using CNC machines. Edges are prepared and deburred for further processing.'
              },
              {
                step: 3,
                title: 'Fabrication & Assembly',
                description: 'Components are welded, formed, and assembled according to design specifications using automated and manual processes.'
              },
              {
                step: 4,
                title: 'Surface Treatment',
                description: 'Products undergo hot-dip galvanization or coating to ensure corrosion resistance and longevity.'
              },
              {
                step: 5,
                title: 'Quality Assurance Testing',
                description: 'Load testing, dimension verification, and coating thickness checks ensure compliance with standards.'
              },
              {
                step: 6,
                title: 'Packaging & Dispatch',
                description: 'Products are carefully packaged, labeled, and loaded for shipment to customer destinations.'
              },
            ].map((process) => (
              <div key={process.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white font-bold">
                    {process.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Machinery */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Equipment & Technology</h2>
          <p className="section-subtitle">Advanced machinery for precision manufacturing</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FiZap,
                title: 'CNC Fabrication Systems',
                description: 'Multi-axis CNC machines for precise cutting, drilling, and shaping.'
              },
              {
                icon: FiTrendingUp,
                title: 'Automated Welding',
                description: 'Robotic welding systems ensuring consistent quality and strength.'
              },
              {
                icon: FiCheckCircle,
                title: 'Testing Equipment',
                description: 'Load testers, dimension gauges, and coating thickness meters.'
              },
              {
                icon: FiCheckCircle,
                title: 'Hot-Dip Galvanizing Plant',
                description: 'In-house galvanizing facility for superior corrosion protection.'
              },
              {
                icon: FiTrendingUp,
                title: 'Hydraulic Presses',
                description: 'Heavy-duty presses for forming and shaping metal components.'
              },
              {
                icon: FiZap,
                title: 'Quality Monitoring',
                description: 'Automated inspection systems for real-time quality assurance.'
              },
            ].map((equipment, idx) => {
              const Icon = equipment.icon
              return (
                <div key={idx} className="card">
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{equipment.title}</h3>
                  <p className="text-gray-600 text-sm">{equipment.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Capacity & Production */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Production Capacity</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: '5000+',
                label: 'Poles/Month',
                description: 'Monthly production capacity across all types'
              },
              {
                metric: '24/7',
                label: 'Operation',
                description: 'Multi-shift production schedule when needed'
              },
              {
                metric: '2 Acres',
                label: 'Facility',
                description: 'Spacious workshop with dedicated sections'
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 text-center border border-gray-200">
                <p className="text-4xl font-bold text-primary mb-2">{item.metric}</p>
                <p className="font-semibold text-gray-900 mb-2">{item.label}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Quality Standards & Testing</h2>
          <p className="section-subtitle">Rigorous testing at every stage of production</p>

          <div className="max-w-3xl mx-auto">
            <div className="card">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Testing Procedures</h3>
              <ul className="space-y-3">
                {[
                  'Tensile strength testing',
                  'Dimensional verification (CMM)',
                  'Coating thickness measurement',
                  'Bend and ductility tests',
                  'Visual inspection',
                  'Load bearing capacity tests',
                  'Corrosion resistance testing',
                  'Chemical composition analysis',
                ].map((test, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <FiCheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{test}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Environment */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Safety & Environmental Commitment</h2>
          <p className="section-subtitle">Operating with responsibility and care</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Workplace Safety</h3>
              <p className="text-gray-600 mb-4">
                We maintain a comprehensive safety program with regular training, proper PPE provision, 
                and accident prevention measures.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-gray-700">Monthly safety audits</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-gray-700">Employee training programs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-gray-700">Safety equipment & PPE</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Environmental Responsibility</h3>
              <p className="text-gray-600 mb-4">
                Our facility incorporates environmentally conscious practices to minimize impact 
                and promote sustainability.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-gray-700">Waste segregation & recycling</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-gray-700">Water treatment systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-gray-700">Emission control measures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Schedule a Factory Tour</h2>
          <p className="text-lg text-blue-100 mb-8">
            Visit our facility to experience our manufacturing excellence firsthand.
          </p>
            <a href="/contact" className="btn-outline-light">
            Contact Us
          </a>
        </div>
      </section>

      <ImageLightbox
        image={selectedImage}
        isOpen={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  )
}
