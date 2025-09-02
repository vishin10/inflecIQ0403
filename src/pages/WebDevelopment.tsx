import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Code, 
  Smartphone, 
  Zap, 
  Shield, 
  Search,
  CheckCircle,
  ArrowRight,
  Palette,
  Database,
  Cloud,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WebDevelopment() {
  const technologies = [
    { name: 'React', logo: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg' },
    { name: 'Next.js', logo: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg' },
    { name: 'Node.js', logo: 'https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg' },
    { name: 'TypeScript', logo: 'https://images.pexels.com/photos/11035364/pexels-photo-11035364.jpeg' },
    { name: 'Tailwind CSS', logo: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg' },
    { name: 'MongoDB', logo: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg' },
    { name:'Java',logo:'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg'}
  ];

  const services = [
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: 'Custom Website Development',
      description: 'Tailored websites built from scratch to match your unique business needs and brand identity.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First']
    },
    {
      icon: <Smartphone className="h-8 w-8 text-teal-600" />,
      title: 'Progressive Web Apps',
      description: 'Modern web applications that work like native mobile apps with offline capabilities.',
      features: ['Offline Support', 'Push Notifications', 'App-like Experience', 'Cross-Platform']
    },
    {
      icon: <Code className="h-8 w-8 text-purple-600" />,
      title: 'Frontend Development',
      description: 'Beautiful, interactive user interfaces using the latest frontend technologies.',
      features: ['React/Vue.js', 'Modern JavaScript', 'Component Libraries', 'State Management']
    },
    {
      icon: <Database className="h-8 w-8 text-green-600" />,
      title: 'Backend Development',
      description: 'Robust server-side solutions with APIs, databases, and cloud integration.',
      features: ['RESTful APIs', 'Database Design', 'Cloud Deployment', 'Security Implementation']
    },
    {
      icon: <Search className="h-8 w-8 text-orange-600" />,
      title: 'SEO & Performance',
      description: 'Optimized websites that rank well in search engines and load lightning fast.',
      features: ['Technical SEO', 'Core Web Vitals', 'Performance Optimization', 'Analytics Setup']
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: 'Security & Maintenance',
      description: 'Ongoing security updates, monitoring, and maintenance to keep your site secure.',
      features: ['Security Audits', 'Regular Updates', '24/7 Monitoring', 'Backup Solutions']
    }
  ];

  const clientNames = [
    'InflecIQ', 'BluePeak', 'NovaTech', 'QuantumData', 'Vertex AI', 
    'TechFlow', 'DataSync', 'CloudVault', 'NextGen Solutions', 'DigitalEdge',
    'InnovateLab', 'SmartSystems', 'FutureCode', 'WebCraft', 'DevStudio'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Professional
                <span className="text-teal-400"> Web Development</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                We create stunning, high-performance websites that drive business growth. 
                From custom designs to complex web applications, we deliver solutions that exceed expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#services"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors text-center"
                >
                  View Our Services
                </a>
              </div>
            </motion.div>

            {/* Animated Code Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 flex items-center justify-center">
                {/* Floating Code Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-8 right-8"
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-teal-400" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3.5,
                    repeat: Infinity,
                    delay: 1
                  }}
                  className="absolute bottom-8 left-8"
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
                    <Code className="h-8 w-8 text-blue-400" />
                  </div>
                </motion.div>

                {/* Central Element */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-32 h-32 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl"
                >
                  <Palette className="h-16 w-16 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Ticker */}
      <section className="py-8 bg-gray-50 overflow-hidden">
        <div className="mb-4 text-center">
          <p className="text-gray-600 font-medium">Trusted by Leading Companies</p>
        </div>
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of client names */}
            {clientNames.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 text-2xl font-bold text-gray-800"
              >
                {client}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clientNames.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 text-2xl font-bold text-gray-800"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge tools and frameworks for modern web development
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-16 h-16 mx-auto mb-4 rounded-lg object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-semibold text-gray-900">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology that ensures project success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: 'Discovery & Planning', 
                description: 'Understanding your requirements, goals, and target audience',
                icon: <Users className="h-8 w-8 text-blue-600" />
              },
              { 
                step: '02', 
                title: 'Design & Prototyping', 
                description: 'Creating wireframes, mockups, and interactive prototypes',
                icon: <Palette className="h-8 w-8 text-teal-600" />
              },
              { 
                step: '03', 
                title: 'Development & Testing', 
                description: 'Building your website with clean code and thorough testing',
                icon: <Code className="h-8 w-8 text-purple-600" />
              },
              { 
                step: '04', 
                title: 'Launch & Support', 
                description: 'Deploying your site and providing ongoing maintenance',
                icon: <Cloud className="h-8 w-8 text-green-600" />
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors">
                  {phase.icon}
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{phase.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's discuss your project and create a website that drives results for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Add custom CSS for the scrolling animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}