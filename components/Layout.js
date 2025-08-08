import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Info, Mail, Settings } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Info, label: 'About', href: '/about' },
    { icon: Mail, label: 'Contact', href: '/contact' },
    { icon: Settings, label: 'Settings', href: '/settings' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50">
        <div className="backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center"
              >
                <div className="text-white font-bold text-xl tracking-tight">
                  Glassmorphism
                </div>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:backdrop-blur-sm hover:bg-white/10 flex items-center gap-2"
                    >
                      <item.icon size={16} />
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleMenu}
                  className="text-white p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden backdrop-blur-md bg-white/10 border-t border-white/20"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-white/80 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-white/10 flex items-center gap-3"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon size={18} />
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-auto">
        <div className="backdrop-blur-md bg-white/5 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white/60 text-sm"
              >
                © 2024 Glassmorphism App. Built with Next.js & Tailwind CSS.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-4 flex justify-center space-x-6"
              >
                <a href="#" className="text-white/40 hover:text-white/80 transition-colors duration-200">
                  Privacy
                </a>
                <a href="#" className="text-white/40 hover:text-white/80 transition-colors duration-200">
                  Terms
                </a>
                <a href="#" className="text-white/40 hover:text-white/80 transition-colors duration-200">
                  Support
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;