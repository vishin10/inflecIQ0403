import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Brain, 
  BarChart3, 
  Cloud, 
  Shield,
  Database,
  Code,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Focused', 'Mobile-First Approach'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      link: '/web-development'
    },
    {
      icon: <Smartphone className="h-12 w-12 text-teal-600" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['Native iOS/Android', 'React Native', 'Flutter', 'App Store Optimization'],
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
      link: '/contact'
    },
    {
      icon: <Brain className="h-12 w-12 text-purple-600" />,
      title: 'Data Science & AI',
      description: 'Intelligent solutions powered by machine learning and artificial intelligence',
      features: ['Machine Learning', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      link: '/contact'
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-green-600" />,
      title: 'Business Analytics',
      description: 'Transform your data into actionable insights with advanced analytics',
      features: ['Data Visualization', 'Business Intelligence', 'Performance Metrics', 'Custom Dashboards'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      link: '/contact'
    },
    {
      icon: <Cloud className="h-12 w-12 text-indigo-600" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      features: ['AWS/Azure/GCP', 'Cloud Migration', 'DevOps', 'Serverless Architecture'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      link: '/contact'
    },
    {
      icon: <Shield className="h-12 w-12 text-red-600" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
      link: '/contact'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth 
              and digital transformation journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 ml-4">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-20 bg-gray-50">
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
              { step: '01', title: 'Discovery', description: 'Understanding your requirements and goals', icon: <Database className="h-8 w-8 text-blue-600" /> },
              { step: '02', title: 'Planning', description: 'Creating detailed project roadmap and timeline', icon: <Code className="h-8 w-8 text-teal-600" /> },
              { step: '03', title: 'Development', description: 'Building your solution with agile methodology', icon: <Zap className="h-8 w-8 text-purple-600" /> },
              { step: '04', title: 'Deployment', description: 'Launching and providing ongoing support', icon: <Cloud className="h-8 w-8 text-green-600" /> }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {phase.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{phase.step}</div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's discuss your project requirements and create a custom solution for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}