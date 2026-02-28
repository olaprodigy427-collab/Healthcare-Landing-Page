import { Award, Heart, Users, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Stats() {
  const stats = [
    {
      icon: <Users className="h-10 w-10" />,
      number: '50,000+',
      label: 'Patients Treated Annually',
    },
    {
      icon: <Heart className="h-10 w-10" />,
      number: '200+',
      label: 'Medical Specialists',
    },
    {
      icon: <Building2 className="h-10 w-10" />,
      number: '15',
      label: 'Specialized Departments',
    },
    {
      icon: <Award className="h-10 w-10" />,
      number: '98%',
      label: 'Patient Satisfaction',
    },
  ];

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"></div>
      
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
      ></motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Excellence in Healthcare
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Trusted by thousands, committed to your wellbeing
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-lg p-6 lg:p-8 rounded-2xl border border-white/20 hover:border-amber-400/50 transition-all duration-500 shadow-xl hover:shadow-2xl">
                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center mb-6"
                >
                  <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-4 rounded-2xl shadow-lg text-white group-hover:shadow-2xl transition-shadow">
                    {stat.icon}
                  </div>
                </motion.div>

                {/* Number */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="text-4xl lg:text-5xl font-bold text-white mb-3 text-center"
                >
                  {stat.number}
                </motion.div>

                {/* Label */}
                <div className="text-sm lg:text-base text-blue-200 text-center leading-snug">
                  {stat.label}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-blue-100 text-lg mb-6">
            Join thousands of satisfied patients who trust us with their health
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Become a Patient Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
