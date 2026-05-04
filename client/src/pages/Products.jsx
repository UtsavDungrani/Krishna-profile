import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'
import ProductCard from '../components/ProductCard'
import ImageLightbox from '../components/ImageLightbox'

export default function Products() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeProduct, setActiveProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

  const coreProductNames = [
    'GUY SET',
    'V-CROSS ARM SET',
    'GUY SET',
    'V-CROSS ARM SET',
    'GUY SET',
  ]

  // Load product images from public assets
  useEffect(() => {
    setIsLoading(true)
    const loadedProducts = []

    for (let i = 1; i <= 24; i++) {
      loadedProducts.push({
        id: i,
        src: `/assets/product-${i}.jpeg`,
        title: getProductTitle(i),
        description: getProductDescription(i),
        details: getProductDetails(i),
      })
    }

    setProducts(loadedProducts)
    setIsLoading(false)
  }, [])

  const getProductTitle = (index) => {
    if (index <= 5) return coreProductNames[index - 1]
    return 'FABRICATION STEEL ITEM'
  }

  const getProductDescription = (index) => {
    const coreDescriptions = [
      'Reliable GUY SET for stable support and long-term line performance.',
      'Durable V-cross arm set designed for secure electrical line mounting.',
      'High-quality GUY SET built for corrosion resistance and dependable performance.',
      'Precision V-Cross arm SET for fabrication and structural support applications.',
      'Strong GUY SET suitable for protective and reinforcement use.',
    ]

    if (index <= 5) return coreDescriptions[index - 1]

    return 'Fabrication-grade steel item manufactured for strength, durability, and consistent project quality.'
  }

  const getProductDetails = (index) => {
    if (index <= 5) {
      return [
        'Suitable for electrical and fabrication applications',
        'Manufactured from high-quality steel',
        'Available as per project requirement',
      ]
    }

    return ['Fabrication-grade steel construction', 'Bulk supply available for industrial projects', 'Custom sizing support on request']
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-300 text-lg">
            Core line hardware and fabrication steel items for industrial use
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="mb-6 text-sm text-gray-600">
            Showing <span className="font-semibold">{products.length}</span> products
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Loading products...</p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.src}
                  title={product.title}
                  description={product.description}
                  onViewDetails={() => setActiveProduct(product)}
                  onImageClick={() =>
                    setSelectedImage({
                      src: product.src,
                      alt: product.title,
                    })
                  }
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {activeProduct && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            onClick={() => setActiveProduct(null)}
            aria-label="Close product details"
          />

          <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
            <button
              type="button"
              onClick={() => setActiveProduct(null)}
              className="absolute top-4 right-4 p-1 text-gray-500 hover:text-gray-900"
              aria-label="Close"
            >
              <FiX size={20} />
            </button>

            <div className="flex flex-col sm:flex-row gap-5">
              <img
                src={activeProduct.src}
                alt={activeProduct.title}
                className="w-full sm:w-44 h-36 object-cover rounded-lg bg-gray-100"
              />

              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{activeProduct.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{activeProduct.description}</p>

                <ul className="space-y-2 mb-5">
                  {activeProduct.details.map((item) => (
                    <li key={item} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="btn-primary inline-block" onClick={() => setActiveProduct(null)}>
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Specifications Info */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Product Specifications</h2>
          <p className="section-subtitle">Key product groups and fabrication capabilities</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Core Products',
                specs: [
                  'GUY SET',
                  'V-CROSS ARM SET',
                  'S.S SET',
                  'TEPPING ANGLE',
                  'GUARDING ANGLE',
                ]
              },
              {
                title: 'Fabrication Steel Items',
                specs: [
                  'Wide range of fabrication steel items for industrial applications',
                  'Project-based material selection',
                  'Custom fabrication support',
                  'Consistent quality for industrial usage',
                  'Bulk order support available',
                ]
              },
            ].map((spec, idx) => (
              <div key={idx} className="card">
                <h3 className="font-semibold text-xl text-gray-900 mb-4">{spec.title}</h3>
                <ul className="space-y-3">
                  {spec.specs.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Solutions?</h2>
          <p className="text-lg text-blue-100 mb-8">
            We can customize products to meet your specific requirements.
          </p>
          <a href="/contact" className="btn-outline-light">
            Get in Touch
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
