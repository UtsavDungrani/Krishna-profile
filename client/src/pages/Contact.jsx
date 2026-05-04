import { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiCheck, FiAlertCircle } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null) // 'success', 'error', or null
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    setErrorMessage('')

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus('error')
      setErrorMessage('Please fill in all fields.')
      setLoading(false)
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address.')
      setLoading(false)
      return
    }

    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      setStatus('error')
      setErrorMessage('Please enter a valid 10-digit phone number.')
      setLoading(false)
      return
    }

    try {
      if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
        throw new Error('Email service is not configured. Add EmailJS environment variables and rebuild the app.')
      }

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        title: `New Contact Form Submission from ${formData.name}`,
      }

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)

      // Optional customer auto-reply. Set VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID to enable.
      if (EMAILJS_AUTOREPLY_TEMPLATE_ID) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_AUTOREPLY_TEMPLATE_ID,
          {
            name: formData.name,
            email: formData.email,
            title: `New Contact Form Submission from ${formData.name}`,
          },
          EMAILJS_PUBLIC_KEY,
        )
      }

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      // Clear success message after 5 seconds
      setTimeout(() => setStatus(null), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
      setErrorMessage(
        error?.message ||
        'Failed to send message. Please try again later.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-300 text-lg">
            We're ready to discuss your project and provide solutions
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Contact Information</h2>
          <p className="section-subtitle">Multiple ways to reach us</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="card text-center">
              <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiPhone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-3">+91-9879917998</p>
              <a href="tel:+919879917998" className="text-primary font-medium text-sm hover:underline">
                Call Now
              </a>
            </div>

            {/* Email */}
            <div className="card text-center">
              <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-3">krishnaprofile20@gmail.com</p>
              <a
                href="mailto:krishnaprofile20@gmail.com"
                className="text-primary font-medium text-sm hover:underline"
              >
                Send Email
              </a>
            </div>

            {/* Address */}
            <div className="card text-center">
              <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600 text-sm">
                Survey no 246/1, Plot no 8<br />
                Bhavnagar Rajkot road, Opp. GIDC-1<br />
                Sihor, Bhavnagar, Gujarat - 364240
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Business Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700">Monday - Saturday</p>
                <p className="text-gray-600">8:00 AM - 8:00 PM IST</p>
              </div>
              <div>
                <p className="text-gray-700">Sunday</p>
                <p className="text-gray-600">Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-900">Message sent successfully!</p>
                    <p className="text-sm text-green-700">
                      We'll get back to you shortly.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <FiAlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-red-900">Error</p>
                    <p className="text-sm text-red-700">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Your name"
                    disabled={loading}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="your@email.com"
                    disabled={loading}
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="+91-9879917998"
                    disabled={loading}
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                    placeholder="Tell us about your project..."
                    disabled={loading}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-2.5 rounded-lg font-medium transition-colors ${
                    loading
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'btn-primary w-full'
                  }`}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  We typically respond within 24 business hours.
                </p>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Location</h2>

              {/* Map Placeholder */}
              <div className="bg-gray-300 rounded-lg h-80 mb-6 flex items-center justify-center overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src="https://www.google.com/maps?q=21.731875,71.970605&z=17&hl=en&output=embed"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Krishna Profile Location"
                />
              </div>

              {/* Address Details */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">Factory Location</h3>
                <div className="space-y-4">
                  <div>
                    <a
                      href="https://www.google.com/maps?q=21.731875,71.970605&z=17&hl=en"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary inline-block"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Address</p>
                    <p className="text-gray-900">
                      Survey no 246/1, Plot no 8<br />
                      Bhavnagar Rajkot road, Opp. GIDC-1<br />
                      Sihor, Bhavnagar, Gujarat - 364240
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: 'What is the minimum order quantity?',
                a: 'We accept orders starting from 50 units. Custom orders may have different MOQs.'
              },
              {
                q: 'Do you offer custom fabrication?',
                a: 'Yes, we specialize in custom designs. Contact our sales team for details.'
              },
              {
                q: 'What is the typical delivery time?',
                a: 'Standard orders are delivered within 15-30 days. Express options available.'
              },
              {
                q: 'Do you provide installation support?',
                a: 'We offer technical guidance. Installation is typically handled by clients.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'Bank transfer, DD, credit cards, and net terms for established clients.'
              },
              {
                q: 'Are warranties offered?',
                a: 'Yes, all products come with standard warranty. Details available upon request.'
              },
            ].map((faq, idx) => (
              <div key={idx} className="card">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
