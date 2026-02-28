import { Brain, Heart, Eye, Bone, Baby, Pill } from 'lucide-react';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

export function Departments() {
  const departments = [
    {
      icon: <Heart className="h-7 w-7" />,
      name: 'Cardiology',
      description: 'Expert heart care and cardiovascular treatments with advanced diagnostic tools',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-600',
    },
    {
      icon: <Brain className="h-7 w-7" />,
      name: 'Neurology',
      description: 'Advanced neurological care and comprehensive brain treatments',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600',
    },
    {
      icon: <Eye className="h-7 w-7" />,
      name: 'Ophthalmology',
      description: 'Comprehensive eye care and cutting-edge vision services',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
    },
    {
      icon: <Bone className="h-7 w-7" />,
      name: 'Orthopedics',
      description: 'Musculoskeletal system treatment, surgery, and rehabilitation',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-600',
    },
    {
      icon: <Baby className="h-7 w-7" />,
      name: 'Obstetrics',
      description: 'Maternal, prenatal healthcare, and delivery services',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      textColor: 'text-pink-600',
    },
    {
      icon: <Pill className="h-7 w-7" />,
      name: 'Pharmacy',
      description: '24/7 medication services, consultation, and prescription filling',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-600',
    },
  ];

  return (
    <section id="departments" className="py-20 lg:py-28 bg-gradient-to-b from-blue-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-amber-100 text-blue-700 text-sm font-medium mb-6 shadow-md">
            <Heart className="h-4 w-4" />
            Specialized Care
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Medical Departments
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            State-of-the-art facilities across multiple specialties to provide you with the best care possible
          </p>
        </motion.div>

        {/* Departments Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className={`relative bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 border-2 ${dept.borderColor} hover:border-amber-300 h-full overflow-hidden`}>
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 rounded-2xl ${dept.bgColor} ${dept.textColor} mb-6 shadow-md group-hover:shadow-xl transition-shadow`}
                  >
                    {dept.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-amber-600 transition-all duration-300">
                    {dept.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {dept.description}
                  </p>

                  {/* Badge */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-block"
                  >
                    <Badge 
                      className={`${dept.bgColor} ${dept.textColor} border-0 px-4 py-2 text-sm font-medium cursor-pointer hover:shadow-md transition-shadow`}
                    >
                      View Details →
                    </Badge>
                  </motion.div>
                </div>

                {/* Decorative corner */}
                <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${dept.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Can't Find Your Specialty?
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              We offer many more specialized services. Contact us to learn about all our departments and find the perfect care for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                View All Departments
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
