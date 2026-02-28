import { Activity, Ambulance, Microscope, Stethoscope, Syringe, Users, Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export function Activities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activities = [
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: 'General Consultation',
      description: 'Comprehensive medical examinations by experienced physicians',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwYXRpZW50JTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc3MjI4NzExOXww&ixlib=rb-4.1.0&q=80&w=1080',
      stats: '1000+ Daily',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: 'Surgical Services',
      description: 'Advanced surgical procedures with cutting-edge technology',
      image: 'https://images.unsplash.com/photo-1757152962882-6bf8495b324d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3VyZ2VyeSUyMG9wZXJhdGluZyUyMHJvb218ZW58MXx8fHwxNzcyMjEzODEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: '50+ Procedures Daily',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: <Ambulance className="h-8 w-8" />,
      title: 'Emergency Care',
      description: '24/7 emergency services with rapid response team',
      image: 'https://images.unsplash.com/photo-1697952431905-9c8d169d9d2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGVtZXJnZW5jeSUyMGFtYnVsYW5jZXxlbnwxfHx8fDE3NzIyODcxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: '24/7 Available',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: 'Laboratory Services',
      description: 'Accurate diagnostic testing with quick turnaround',
      image: 'https://images.unsplash.com/photo-1599557835468-29bb0b3155cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMHRlc3Rpbmd8ZW58MXx8fHwxNzcyMjg3MTIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: '5000+ Tests Monthly',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Pediatric Care',
      description: 'Specialized healthcare for infants, children, and adolescents',
      image: 'https://images.unsplash.com/photo-1758691463331-2ac00e6f676f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjBjaGlsZCUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzcyMjg3MTIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: '500+ Kids Treated',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Syringe className="h-8 w-8" />,
      title: 'Vaccination Programs',
      description: 'Comprehensive immunization services for all ages',
      image: 'https://images.unsplash.com/photo-1587557983735-f05198060b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3RhZmYlMjB0ZWFtJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MjI4NzkzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      stats: 'All Ages Welcome',
      color: 'from-teal-500 to-teal-600',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-amber-100 text-blue-700 text-sm font-medium mb-6 shadow-md">
            <Activity className="h-4 w-4" />
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hospital Activities & Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive healthcare services designed to meet all your medical needs with excellence and compassion
          </p>
        </motion.div>

        {/* Health Talk Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-5xl mx-auto"
        >
          <Dialog>
            <DialogTrigger asChild>
              <Card className="overflow-hidden shadow-2xl border-2 border-amber-200 cursor-pointer group hover:border-amber-400 transition-colors">
                <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center bg-black/20 group-hover:bg-black/10 transition-colors">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl mb-6 transition-all duration-300"
                    >
                      <Play className="h-10 w-10 ml-1" fill="white" />
                    </motion.div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3">Weekly Health Talk</h3>
                    <p className="text-base sm:text-lg text-blue-50 max-w-2xl">
                      Join Dr. Sarah Johnson as she discusses "Understanding Heart Health and Prevention" - Watch our latest health education series
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                      New Episode Every Tuesday
                    </div>
                  </div>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl p-0 overflow-hidden bg-black border-none">
              <DialogHeader className="sr-only">
                <DialogTitle>Weekly Health Talk Video</DialogTitle>
              </DialogHeader>
              <div className="aspect-video w-full">
                <video
                  controls
                  autoPlay
                  className="w-full h-full"
                  src="/videos/heath.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-2 border-transparent hover:border-amber-300 h-full">
                <div className="relative h-56 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Icon Badge */}
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                    className={`absolute top-4 right-4 bg-gradient-to-br ${activity.color} p-3.5 rounded-xl shadow-2xl text-white`}
                  >
                    {activity.icon}
                  </motion.div>

                  {/* Stats Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <span className="text-sm font-semibold text-gray-900">{activity.stats}</span>
                  </div>
                </div>

                <CardHeader className="space-y-3">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {activity.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {activity.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-blue-600 hover:text-amber-600 font-medium transition-colors group"
                  >
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
