import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi'

const logo = '/assets/logo-bg.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileContactIndex, setMobileContactIndex] = useState(0)

  const contactItems = [
    {
      href: 'tel:+919876543210',
      label: '+91-9876543210',
      Icon: FiPhone,
    },
    {
      href: 'mailto:krishnaprofile20@gmail.com',
      label: 'krishnaprofile20@gmail.com',
      Icon: FiMail,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setMobileContactIndex((prev) => (prev + 1) % contactItems.length)
    }, 2500)

    return () => clearInterval(timer)
  }, [contactItems.length])

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Workshop', path: '/workshop' },
    { label: 'Contact Us', path: '/contact' },
  ]

  const activeContact = contactItems[mobileContactIndex]
  const ActiveContactIcon = activeContact.Icon

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top bar with contact info */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-custom py-3 text-sm sm:text-base">
          <div className="sm:hidden flex justify-center items-center min-h-6">
            <a href={activeContact.href} className="flex items-center gap-2 text-gray-700 hover:text-primary">
              <ActiveContactIcon size={16} />
              <span className="font-medium">{activeContact.label}</span>
            </a>
          </div>

          <div className="hidden sm:flex justify-end items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-700 hover:text-primary">
              <FiPhone size={16} />
              <span className="font-medium">+91-9876543210</span>
            </a>
            <a href="mailto:krishnaprofile20@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-primary">
              <FiMail size={16} />
              <span className="font-medium">krishnaprofile20@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container-custom">
        <div className="flex justify-between items-center py-1">
          {/* Logo */}
          <Link to="/" className="flex items-center leading-none">
            <img src={logo} alt="Krishna Profile" className="block h-20 sm:h-24 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `font-semibold text-base transition-colors ${
                    isActive
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 space-y-3 text-base">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block font-semibold py-2 transition-colors ${
                    isActive
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary block text-center">
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
