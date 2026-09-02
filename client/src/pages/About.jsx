import { Link } from 'react-router-dom'
import { FiAward, FiTarget, FiUsers } from 'react-icons/fi'
import SEO from '../components/SEO'

export default function About() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://krishnaprofile.com/about#webpage',
    'url': 'https://krishnaprofile.com/about',
    'name': 'About Krishna Profile - Electrical Pole Manufacturing Excellence',
    'description': 'Krishna Profile was founded in 2021 as a premier Indian manufacturer of Octagonal Steel Poles, Swaged Tubular Steel Poles, and Power Transmission Line Hardware in Sihor, Bhavnagar, Gujarat.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Krishna Profile',
      'url': 'https://krishnaprofile.com'
    }
  }

  return (
    <div>
      <SEO
        title="About Krishna Profile | Electrical Pole & Fabrication Industry Leaders"
        description="Learn about Krishna Profile's manufacturing capabilities, ISO standards, and leadership in producing Octagonal Poles, Swaged Tubular Poles, and transmission hardware in Gujarat."
        keywords="About Krishna Profile, Krishna Profile company history, Krishna Profile steel pole manufacturer, octagonal pole plant Gujarat, electrical infrastructure fabricator India"
        canonical="https://krishnaprofile.com/about"
        schema={aboutSchema}
      />
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Krishna Profile</h1>
          <p className="text-gray-300 text-lg">
            Manufacturing excellence with integrity and innovation
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2021, Krishna Profile began with a vision to revolutionize the 
                electrical pole manufacturing industry in India. What started as a modest operation 
                with basic machinery has evolved into a state-of-the-art manufacturing facility.
              </p>
              <p className="text-gray-600 mb-4">
                We serve electrical utilities, construction companies, and infrastructure developers 
                across India with uncompromising quality and reliability. Our products support power 
                distribution networks that reach millions of homes and businesses.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be one of the most trusted names in pole fabrication, trusted 
                by leading companies for critical infrastructure projects.
              </p>
            </div>
            <div className="bg-gray-100 h-80 rounded-lg overflow-hidden shadow-md">
              <img
                src="/assets/Workshop-3.jpeg"
                alt="Krishna Profile workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="card border-l-4 border-primary">
              <div className="mb-4">
                <FiTarget className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To manufacture world-class electrical poles and fabrication materials that 
                contribute to India's power infrastructure with unwavering commitment to 
                quality, safety, and customer satisfaction.
              </p>
            </div>

            {/* Vision */}
            <div className="card border-l-4 border-primary">
              <div className="mb-4">
                <FiAward className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the most preferred and innovative pole manufacturing company in Asia, 
                recognized for excellence, sustainability, and partnership with our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Core Values</h2>
          <p className="section-subtitle">These principles guide everything we do</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Quality First',
                description: 'Every product meets rigorous standards. No compromises.'
              },
              {
                title: 'Customer Focus',
                description: 'Your success is our success. We prioritize your needs.'
              },
              {
                title: 'Integrity',
                description: 'Honest dealings and transparent communication always.'
              },
              {
                title: 'Innovation',
                description: 'Continuous improvement in processes and products.'
              },
              {
                title: 'Safety',
                description: 'Zero accidents through proactive safety culture.'
              },
              {
                title: 'Sustainability',
                description: 'Environmentally responsible manufacturing practices.'
              },
              {
                title: 'Teamwork',
                description: 'Collaborative spirit driving collective success.'
              },
              {
                title: 'Reliability',
                description: 'On-time delivery and consistent performance.'
              },
            ].map((value, idx) => (
              <div key={idx} className="card">
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Experience & Expertise</h2>
          <p className="section-subtitle">Over a decade of manufacturing excellence</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { number: '5+', label: 'Years of Experience' },
              { number: '200K+', label: 'Poles item Manufactured' },
              { number: '25+', label: 'Team Members' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 text-center border border-gray-200">
                <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="font-semibold text-xl text-gray-900 mb-4 flex items-center gap-2">
              <FiUsers className="text-primary" />
              Our Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Engineering & Production</h4>
                <p className="text-gray-600 text-sm">
                  Our production team includes certified technicians, experienced machinists, 
                  and quality inspectors trained on the latest manufacturing standards.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Sales & Customer Support</h4>
                <p className="text-gray-600 text-sm">
                  Dedicated professionals ensure smooth order processing, timely delivery, 
                  and responsive customer service throughout your project lifecycle.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Quality Assurance</h4>
                <p className="text-gray-600 text-sm">
                  Our QA team conducts systematic testing at every production stage to ensure 
                  every product meets international standards.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Logistics & Delivery</h4>
                <p className="text-gray-600 text-sm">
                  Experienced logistics coordinators manage supply chain efficiently to guarantee 
                  on-time delivery across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-blue-100 mb-8">
            Discover how we can support your infrastructure projects with premium products.
          </p>
          <Link to="/contact" className="btn-outline-light">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}
