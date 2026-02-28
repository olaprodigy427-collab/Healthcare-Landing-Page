import Slider from 'react-slick';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      rating: 5,
      text: 'The care I received at CareHealth was exceptional. The staff was attentive, professional, and genuinely cared about my recovery. I couldn\'t have asked for better treatment.',
    },
    {
      name: 'Michael Chen',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      rating: 5,
      text: 'From the moment I walked in, I felt welcomed and valued. The doctors took time to explain everything thoroughly. Truly a world-class medical facility.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Outstanding emergency care! The team responded quickly and professionally. They saved my life and I\'m forever grateful for their expertise and compassion.',
    },
    {
      name: 'David Thompson',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      rating: 5,
      text: 'The pediatric department is amazing! My children always feel comfortable here. The staff goes above and beyond to make healthcare a positive experience.',
    },
    {
      name: 'Lisa Anderson',
      role: 'Patient',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
      rating: 5,
      text: 'I\'ve been a patient for 5 years now. The consistency in quality care, modern facilities, and compassionate staff keep me coming back. Highly recommend!',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>

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
            <Star className="h-4 w-4" />
            Patient Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What Our Patients Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Read testimonials from our satisfied patients and learn why they trust us with their healthcare
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="testimonials-slider"
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-amber-200 h-full"
                >
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                      <Quote className="h-6 w-6 text-amber-400" fill="currentColor" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 leading-relaxed mb-6 min-h-[120px]">
                    "{testimonial.text}"
                  </p>

                  {/* Patient Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-blue-200">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Patient Rating', value: '4.9/5.0' },
            { label: 'Reviews', value: '10,000+' },
            { label: 'Certified', value: 'JCI Accredited' },
            { label: 'Awards', value: '25+ National' },
          ].map((badge, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent mb-2">
                {badge.value}
              </div>
              <div className="text-sm text-gray-600">{badge.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .testimonials-slider .slick-dots {
          bottom: -50px;
        }
        .testimonials-slider .slick-dots li button:before {
          font-size: 12px;
          color: #3b82f6;
        }
        .testimonials-slider .slick-dots li.slick-active button:before {
          color: #d97706;
        }
        .testimonials-slider .slick-prev,
        .testimonials-slider .slick-next {
          z-index: 1;
        }
        .testimonials-slider .slick-prev {
          left: -30px;
        }
        .testimonials-slider .slick-next {
          right: -30px;
        }
        .testimonials-slider .slick-prev:before,
        .testimonials-slider .slick-next:before {
          color: #3b82f6;
          font-size: 30px;
        }
        @media (max-width: 768px) {
          .testimonials-slider .slick-prev {
            left: -10px;
          }
          .testimonials-slider .slick-next {
            right: -10px;
          }
        }
      `}</style>
    </section>
  );
}
