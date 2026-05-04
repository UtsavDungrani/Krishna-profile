import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiLinkedin } from 'react-icons/fi'

const logo = '/assets/logo.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-100 mt-16">
      <div className="container-custom py-12">
        {/* Footer top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Krishna Profile" className="h-20 w-auto" />
            </div>
            <p className="text-gray-400 text-sm">
              Manufacturing premium electrical poles and fabrication materials since 2021.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/workshop" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Workshop
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiPhone size={18} className="mt-0.5 text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91-9879917998</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMail size={18} className="mt-0.5 text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm break-all">krishnaprofile20@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin size={18} className="mt-0.5 text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Survey no 246/1, Plot no 8<br />
                  Bhavnagar Rajkot road, Opp. GIDC-1<br />
                  Sihor, Bhavnagar, Gujarat - 364240
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-semibold text-white mb-4">Business Hours</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Monday - Saturday: 8:00 AM - 8:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Krishna Profile. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
