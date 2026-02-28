import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer id="contact" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-gray-700">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg">
                <svg className="h-7 w-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold text-white">ZulaykhCare Health</div>
                <div className="text-xs text-amber-400">Excellence in Healthcare</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Providing compassionate, high-quality healthcare services to our community for over 25 years. Your health and wellbeing are our top priorities.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Departments', 'About Us', 'Careers', 'News & Events'].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                    className="text-sm hover:text-amber-400 transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    <span className="ml-2">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Emergency Care',
                'Surgical Services',
                'Laboratory',
                'Pediatric Care',
                'Cardiology',
                'Pharmacy'
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm hover:text-amber-400 transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    <span className="ml-2">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-amber-400" />
                <span className="text-sm group-hover:text-amber-400 transition-colors">
                  12 Ileji Healthcare Ave, Ado-Odo, Ogun State, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 flex-shrink-0 text-amber-4 00" />
                <div>
                  <a href="tel:911" className="text-sm hover:text-amber-400 transition-colors block">
                    Emergency: 911
                  </a>
                  <a href="tel:5551234567" className="text-sm hover:text-amber-400 transition-colors block">
                    Main: (+234) 0813-6089-655
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 flex-shrink-0 text-amber-400" />
                <a href="mailto:info@carehealth.com" className="text-sm group-hover:text-amber-400 transition-colors">
                  info@carehealth.com
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0 text-amber-400" />
                <div className="text-sm">
                  <div className="group-hover:text-amber-400 transition-colors">Mon-Fri: 8AM - 8PM</div>
                  <div className="group-hover:text-amber-400 transition-colors">Emergency: 24/7</div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
        >
          <p className="text-gray-400">
            © 2026 CareHealth Hospital. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-gray-400">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Accessibility</a>
          </div>
        </motion.div>

        {/* Certifications Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 pt-8 border-t border-gray-700 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-900/50 to-amber-900/50 rounded-full border border-amber-600/30">
            <span className="text-amber-400 text-sm font-semibold">🏆 JCI Accredited</span>
            <span className="text-gray-400">|</span>
            <span className="text-blue-400 text-sm font-semibold">ISO 9001 Certified</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
