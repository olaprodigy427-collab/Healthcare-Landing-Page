import { Button } from './ui/button';
import { Clock, MapPin, Shield, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1769147555720-71fc71bfc216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcyMjU0NDM5fDA&ixlib=rb-4.1.0&q=80&w=1080')`
            }}
          />
        </motion.div>
        {/* Gradient Overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent"></div>

        {/* Animated Shapes */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-20 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400/20 to-amber-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-300"
            >
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">Trusted Healthcare Provider Since 1999</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              Your Health is Our Utmost
              <span className="block bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                Priority
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-blue-100 max-w-xl leading-relaxed"
            >
              Experience world-class medical care with our team of dedicated healthcare professionals.
              We provide comprehensive services with state-of-the-art facilities and compassionate care.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                'Board-Certified Doctors',
                'Advanced Technology',
                'Personalized Care Plans',
                'Insurance Accepted'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="h-5 w-5 text-amber-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-base sm:text-lg px-8 py-6"
              >
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-blue-300 hover:bg-white hover:text-blue-900 shadow-lg transition-all duration-300 text-base sm:text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </motion.div>
          </div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:grid grid-cols-2 gap-6"
          >
            {[
              { icon: Clock, label: 'Open 24/7', value: 'Emergency', color: 'from-blue-500 to-blue-600' },
              { icon: MapPin, label: 'Locations', value: '15+', color: 'from-amber-500 to-amber-600' },
              { icon: Award, label: 'Experience', value: '25+ Years', color: 'from-blue-600 to-blue-700' },
              { icon: Shield, label: 'Satisfaction', value: '98%', color: 'from-amber-600 to-amber-700' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br ${stat.color} p-6 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20`}
              >
                <stat.icon className="h-10 w-10 text-white mb-4" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
        >
          {[
            { label: 'Open 24/7', value: 'Emergency' },
            { label: 'Locations', value: '15+' },
            { label: 'Experience', value: '25+ Years' },
            { label: 'Satisfaction', value: '98%' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-center"
            >
              <div className="text-2xl font-bold text-amber-400 mb-1">{stat.value}</div>
              <div className="text-xs text-blue-100">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
