import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  Linkedin, 
  Twitter, 
  Github,
  Brain,
  Shield,
  Globe,
  CheckCircle
} from 'lucide-react';

export default function About() {
  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/3777568/pexels-photo-3777568.jpeg',
      bio: '15+ years in technology leadership and business strategy'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3777569/pexels-photo-3777569.jpeg',
      bio: 'Expert in cloud architecture and software engineering'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Data Engineer',
      image: 'https://images.pexels.com/photos/3777570/pexels-photo-3777570.jpeg',
      bio: 'Specialist in big data solutions and machine learning'
    },
    {
      name: 'Emily Davis',
      role: 'Head of Business Analysis',
      image: 'https://images.pexels.com/photos/3777571/pexels-photo-3777571.jpeg',
      bio: 'Strategic consultant with expertise in digital transformation'
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions'
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners in their success'
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we deliver'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: 'Integrity',
      description: 'We build trust through transparency and honest communication'
    }
  ];

  const achievements = [
    { number: '50+', label: 'Projects Completed' },
    { number: '10+', label: 'Happy Clients' },
    { number: '5+', label: 'Team Members' },
    { number: '99%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">About InflecIQ</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We're a team of passionate technologists dedicated to transforming businesses 
                through innovative IT solutions and strategic digital transformation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-teal-400">3+</div>
                  <div className="text-blue-100">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-400">50+</div>
                  <div className="text-blue-100">Projects Delivered</div>
                </div>
              </div>
              
              {/* E-Verify Badge */}
              <div className="mt-8 flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm rounded-lg px-4 py-3 border border-green-400/30">
                <Shield className="h-6 w-6 text-green-400" />
                <span className="text-green-100 font-medium">✅ E-Verified Company</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Our team at work"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Our mission"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that technology should be an enabler, not a barrier. Our team works 
                tirelessly to understand your unique challenges and create tailored solutions 
                that deliver measurable results.
              </p>
              <div className="space-y-4">
                {[
                  'Client-focused approach',
                  'Cutting-edge technology',
                  'Measurable business impact',
                  'E-Verified and OPT,STEM OPT friendly'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Company Stats */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {achievements.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* E-Verify Section */}
      <section className="px-6 py-20 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-16 w-16 text-green-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">E-Verified Company</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              <strong>InflecIQ is officially E-Verified</strong> and authorized to hire 
              OPT ,STEM OPT professionals in the United States. We welcome talented international 
              professionals to join our innovative team and contribute to cutting-edge technology projects.
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-lg inline-block">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">E-Verify Compliant</div>
                  <div className="text-sm text-gray-600">Authorized to hire STEM OPT professionals</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}