import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Brain, 
  BarChart3, 
  Users, 
  Target, 
  Zap, 
  Shield,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { useState } from 'react';
import Footer from '../components/layout/Footer';

export default function LandingPage() {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: "Website Development",
      description: "Custom, responsive websites built with modern technologies and optimized for performance.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
    },
    {
      icon: <Smartphone className="h-12 w-12 text-teal-600" />,
      title: "App Development", 
      description: "Native and cross-platform mobile and web applications that deliver exceptional user experiences.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg"
    },
    {
      icon: <Brain className="h-12 w-12 text-purple-600" />,
      title: "Data Science & AI",
      description: "Intelligent solutions powered by machine learning and artificial intelligence technologies.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-green-600" />,
      title: "Business Analytics",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
    }
  ];


const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});
const [isSubmitting, setIsSubmitting] = useState(false);


const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};



const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  try {
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    // Create email content
    const emailBody = `New Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
Sent from Contact Form`;

    // Create mailto link
    const subject = `New Contact Form Submission from ${formData.name}`;
    const mailtoLink = `mailto:hr@infleciq.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.open(mailtoLink, '_blank');

    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Your email client should open with a pre-filled message to hr@infleciq.org');

  } catch (error) {
    console.error('Error:', error);
    alert('Error submitting form. Please email hr@infleciq.org directly.');
  } finally {
    setIsSubmitting(false);
  }
};

  const whyChooseUs = [
    "Experienced Full-Stack Team",
    "Data-Driven Decision Making", 
    "Agile and Scalable Development",
    "E-Verified Company ✅",
    "Trusted by International Clients"
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative z-10 px-6 py-4 bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            {/* <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
              <Brain className="h-6 w-6 text-white" />
            </div> */}
            {/* <span className="text-xl font-bold text-gray-900">
              InflecIQ
            </span> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center space-x-6"
          >
            {/* <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a> */}
            <a 
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Let's Build Together
            </a>
          </motion.div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Empowering Innovation with
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  {" "}Tech, Data & AI
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We build scalable digital solutions to fuel your business growth. 
                From custom websites to AI-powered applications, we transform your ideas into reality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#contact"
                  className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  Let's Build Together
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-colors text-center"
                >
                  View Our Services
                </a>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-green-600 bg-green-50 px-4 py-2 rounded-lg inline-flex">
                <Shield className="h-4 w-4" />
                <span className="font-medium">E-Verified Company</span>
              </div>
            </motion.div>

            {/* Animated Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 flex items-center justify-center">
                {/* Main Tech Circle */}
                <motion.div
                  animate={{ 
                    rotate: 360
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute w-64 h-64 border-4 border-blue-200 rounded-full"
                />
                
                {/* Center Logo */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-32 h-32 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center shadow-2xl z-10"
                >
                  <Brain className="h-16 w-16 text-white" />
                </motion.div>

                {/* Floating Service Icons */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    delay: 0
                  }}
                  className="absolute top-8 right-8"
                >
                  <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <Globe className="h-8 w-8 text-blue-600" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 3.5,
                    repeat: Infinity,
                    delay: 1
                  }}
                  className="absolute bottom-8 left-8"
                >
                  <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <Smartphone className="h-8 w-8 text-teal-600" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    x: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 4.5,
                    repeat: Infinity,
                    delay: 0.5
                  }}
                  className="absolute top-8 left-8"
                >
                  <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <BarChart3 className="h-8 w-8 text-green-600" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 20, 0],
                    x: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: 1.5
                  }}
                  className="absolute bottom-8 right-8"
                >
                  <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <Brain className="h-8 w-8 text-purple-600" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver comprehensive technology solutions that drive innovation and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="w-full h-32 rounded-lg overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose InflecIQ?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine technical expertise with business acumen to deliver solutions that drive real results for your organization.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Professional team collaboration"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">Visit our headquarters in Dover, Delaware</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">InflecIQ</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">8 The Green #8931<br />Dover, DE 19901<br />United States</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (202) 743-4091</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
<a href="mailto:hr@infleciq.org" className="text-gray-600 hover:underline">
  hr@infleciq.org
</a>                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4!2d-75.5277!3d39.1612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7b8f8f8f8f8f8%3A0x1234567890abcdef!2s8%20The%20Green%2C%20Dover%2C%20DE%2019901%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="InflecIQ Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="px-6 py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">About InflecIQ</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              At InflecIQ, we are passionate about transforming businesses through innovative technology solutions. 
              Our experienced team of developers, data scientists, and AI specialists work collaboratively to deliver 
              scalable, cutting-edge solutions that drive growth and efficiency.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-blue-100 text-lg">
                <strong className="text-white">InflecIQ is officially E-Verified</strong> and authorized to hire 
                OPT, STEM OPT professionals in the United States. We welcome talented international professionals 
                to join our innovative team.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
     <section id="contact" className="px-6 py-20 bg-white">
  <div className="max-w-4xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
      <p className="text-xl text-gray-600">Need a custom solution? Contact us below.</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-gray-50 p-8 rounded-2xl shadow-lg"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? 'Opening Email...' : 'Send Message'}
        </button>
      </form>
    </motion.div>
  </div>
</section>

      {/* Footer */}
     
    </div>
  );
}