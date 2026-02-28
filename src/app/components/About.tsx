import { Shield, Target, Users, Award, Heart, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';

export function About() {
    const values = [
        {
            icon: <Heart className="h-6 w-6 text-red-500" />,
            title: 'Compassion',
            description: 'We treat every patient with the utmost care, empathy, and respect they deserve.',
        },
        {
            icon: <Shield className="h-6 w-6 text-blue-500" />,
            title: 'Integrity',
            description: 'Honesty and ethical behavior are at the core of everything we do.',
        },
        {
            icon: <Target className="h-6 w-6 text-green-500" />,
            title: 'Excellence',
            description: 'We strive for the highest standards in medical care and patient service.',
        },
        {
            icon: <Users className="h-6 w-6 text-purple-500" />,
            title: 'Collaboration',
            description: 'Working together as a team to provide the best possible outcomes for our patients.',
        },
    ];

    const stats = [
        { label: 'Years of Excellence', value: '25+' },
        { label: 'Expert Doctors', value: '150+' },
        { label: 'Annual Patients', value: '100k+' },
        { label: 'Awards Won', value: '50+' },
    ];

    return (
        <section id="about" className="py-20 lg:py-28 overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Added About Us large title */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="mb-8"
                        >
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900/10 uppercase tracking-tighter absolute -top-12 left-0 z-0 hidden md:block">
                                About us
                            </h2>
                            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 relative z-10">
                                About us
                            </div>
                            <div className="w-20 h-2 bg-blue-600 rounded-full"></div>
                        </motion.div>

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2053"
                                alt="Modern Hospital Interior"
                                className="w-full h-full object-cover aspect-[4/3] scale-105 hover:scale-100 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                        </div>

                        {/* Floating Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="absolute -bottom-10 -right-6 md:-right-10 bg-white p-6 rounded-2xl shadow-xl border border-blue-50 max-w-[240px]"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                                    <Award className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">Top Rank</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider">National Hospital Ranking</div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600">Recognized for clinical excellence and patient safety for 10 consecutive years.</p>
                        </motion.div>

                        {/* Background elements */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-amber-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
                            <Activity className="h-4 w-4" />
                            About ZulaykhCare
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            Providing Exceptional Healthcare for Your <span className="text-blue-600">Peace of Mind</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            At ZulaykhCare, we believe that healthcare is more than just treating illnesses; it's about nurturing well-being. With over 25 years of experience, we've built a legacy of trust and excellence in the community.
                        </p>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Our state-of-the-art facility is equipped with the latest medical technology and staffed by world-class specialists dedicated to providing personalized care tailored to your unique needs.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-blue-100 group">
                                    <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform origin-left">{stat.value}</div>
                                    <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Values Section */}
                <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow group">
                                <CardContent className="pt-8 pb-6 px-6 text-center">
                                    <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gray-50 group-hover:bg-white group-hover:shadow-inner mb-6 transition-all duration-300 transform group-hover:-rotate-6">
                                        {value.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
