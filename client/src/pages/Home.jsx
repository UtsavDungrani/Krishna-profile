import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiCheckCircle, FiTrendingUp, FiAward } from 'react-icons/fi'
import ImageSlider from '../components/ImageSlider'
import ProductCard from '../components/ProductCard'
import ImageLightbox from '../components/ImageLightbox'
import SEO from '../components/SEO'

export default function Home() {
  const [heroImages, setHeroImages] = useState([])
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [workshopImages, setWorkshopImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  // Load images from public assets folder
  useEffect(() => {
    const coreProducts = [
      {
        title: 'GUY SET',
        description: 'Reliable guy set for stable support and long-term line performance.',
      },
      {
        title: 'V-CROSS ARM SET',
        description: 'Durable V-cross arm set designed for secure electrical line mounting.',
      },
      {
        title: 'GUY SET',
        description: 'High-quality GUY SET built for corrosion resistance and dependable performance.',
      },
      {
        title: 'V-CROSS ARM SET',
        description: 'Precision tepping angle for fabrication and structural support applications.',
      },
    ]

    // Load hero images (products 1-4)
    const heroImgs = []
    for (let i = 4; i >= 1; i--) {
      heroImgs.push({
        src: `/assets/product-${i}.jpeg`,
        alt: `Krishna Profile Electrical Pole & Line Hardware Product ${i}`
      })
    }
    setHeroImages(heroImgs)

    // Load featured products
    const products = []
    for (let i = 1; i <= 4; i++) {
      products.push({
        id: i,
        src: `/assets/product-${i}.jpeg`,
        title: coreProducts[i - 1].title,
        description: coreProducts[i - 1].description,
      })
    }
    setFeaturedProducts(products)

    // Load workshop images
    const workshops = []
    for (let i = 1; i <= 3; i++) {
      workshops.push({
        src: `/assets/Workshop-${i}.jpeg`,
        alt: `Krishna Profile Manufacturing Workshop Facility Sihor ${i}`
      })
    }
    setWorkshopImages(workshops)
  }, [])

  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://krishnaprofile.com/#website',
        'url': 'https://krishnaprofile.com',
        'name': 'Krishna Profile',
        'description': 'Leading Manufacturer of Electrical Poles & Transmission Line Hardware in India',
        'publisher': { '@id': 'https://krishnaprofile.com/#organization' }
      },
      {
        '@type': 'Organization',
        '@id': 'https://krishnaprofile.com/#organization',
        'name': 'Krishna Profile',
        'alternateName': ['Krishna Profile Electrical Pole', 'Krishna Profile Steel Fabrication'],
        'url': 'https://krishnaprofile.com',
        'logo': 'https://krishnaprofile.com/assets/icon-logo.png',
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+919879917998',
          'contactType': 'sales',
          'areaServed': 'IN',
          'availableLanguage': ['English', 'Hindi', 'Gujarati']
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://krishnaprofile.com/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What products does Krishna Profile manufacture?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Krishna Profile manufactures Octagonal Steel Poles, Swaged Tubular Steel Poles, High Mast Lighting Towers, Solar Mounting Structure Poles, V-Cross Arm Sets, Guy Sets, GI Pins, and electrical power line distribution hardware.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Where is Krishna Profile located?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Krishna Profile is located at Survey no 246/1, Plot no 8, Bhavnagar Rajkot Road, Opp. GIDC-1, Sihor, Bhavnagar, Gujarat - 364240, India.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How can I contact Krishna Profile for electrical pole inquiries?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Contact Krishna Profile by phone at +91-9879917998, email at krishnaprofile20@gmail.com, or through their official website contact page.'
            }
          }
        ]
      }
    ]
  }

  return (
    <div>
      <SEO
        title="Krishna Profile | Octagonal Poles, Swaged Tubular Poles & Electrical Hardware Manufacturer"
        description="Krishna Profile is an Indian manufacturer of Octagonal Steel Poles, Swaged Tubular Poles, High Mast Lighting Towers, V-Cross Arm Sets, Guy Sets, and Power Transmission Line Hardware."
        keywords="Krishna Profile, Krishna Profile electrical poles, Octagonal Pole Manufacturer, Swaged Tubular Pole, High Mast Lighting Tower, V-Cross Arm Set, Guy Set, Steel Fabrication Gujarat, Sihor Bhavnagar"
        canonical="https://krishnaprofile.com/"
        schema={homeSchema}
      />
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Image Slider */}
            <div className="h-80 rounded-lg overflow-hidden shadow-lg">
              {heroImages.length > 0 && (
                <ImageSlider
                  images={heroImages}
                  autoScroll={true}
                  interval={5000}
                  onImageClick={(image) => setSelectedImage(image)}
                />
              )}
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Premium Transmission lines Hardware & Fabrication
              </h1>
              <p className="text-gray-300 text-lg mb-6">
                Industry-leading manufacturer of electrical poles, hardware, and fabrication materials. 
                Serving energy and infrastructure projects with uncompromising quality since 2021.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn-primary inline-block text-center">
                  Explore Products
                </Link>
                <Link to="/contact" className="btn-outline-light inline-block text-center">
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">Delivering excellence across every project</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card">
              <div className="mb-4">
                <FiCheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Premium Quality Materials</h3>
              <p className="text-gray-600">
                Sourced from verified suppliers with rigorous testing protocols to ensure durability 
                and compliance with international standards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card">
              <div className="mb-4">
                <FiTrendingUp className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Skilled Workforce</h3>
              <p className="text-gray-600">
                Our team of experienced engineers and technicians brings decades of combined 
                expertise in fabrication and manufacturing.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card">
              <div className="mb-4">
                <FiAward className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">On-Time Delivery</h3>
              <p className="text-gray-600">
                Committed to meeting project deadlines with efficient logistics and supply chain 
                management backed by proven track record.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Browse our premium product range</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.src}
                title={product.title}
                description={product.description}
                detailsLink="/products"
                onImageClick={() =>
                  setSelectedImage({
                    src: product.src,
                    alt: product.title,
                  })
                }
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="section-title">State-of-the-Art Manufacturing</h2>
              <p className="text-gray-600 mb-6">
                Our workshop is equipped with modern machinery and automation technologies that 
                enable precision manufacturing at scale.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">CNC-controlled fabrication systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Quality assurance at every stage</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Environmentally responsible processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Capable of custom designs</span>
                </li>
              </ul>
              <Link to="/workshop" className="btn-primary">
                Learn More
              </Link>
            </div>

            {/* Right: Images */}
            <div className="grid grid-cols-2 gap-4">
              {workshopImages.slice(0, 4).map((img, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden shadow-md h-40">
                  <img
                    src={img.src}
                    alt={img.alt}
                    onClick={() => setSelectedImage(img)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact our sales team today to discuss your project requirements and get a competitive quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-outline-light">
              Get in Touch
            </Link>
            <a href="tel:+919879917998" className="btn-secondary bg-white text-primary hover:bg-blue-50">
              Call Now
            </a>
          </div>
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
