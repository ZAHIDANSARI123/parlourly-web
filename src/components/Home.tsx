import React, { useState } from 'react';
import { FaStar, FaArrowRight, FaPlus, FaMinus } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Re-usable components for sections
const Section: React.FC<{ id: string; className?: string; children: React.ReactNode }> = ({ id, className, children }) => (
  <section id={id} className={`py-20 px-4 ${className}`}>
    <div className="container mx-auto max-w-6xl">{children}</div>
  </section>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">{children}</h2>
);

// Hero Section
const Hero: React.FC<{ gender: 'female' | 'male'; setGender: (gender: 'female' | 'male') => void }> = ({ gender, setGender }) => (
  <section id="hero" className={`${gender === 'female' ? 'bg-pink-50' : 'bg-blue-50'} text-center py-24 relative overflow-hidden transition-colors duration-500`}>
    <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50 to-white opacity-70"></div>
    <div className="container mx-auto px-4 relative z-10">
      {/* Gender Toggle */}
      <motion.div
        className="mb-8 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="relative flex items-center bg-white rounded-full shadow-md p-1">
          <button
            onClick={() => setGender('female')}
            className={`relative z-10 px-6 py-2 text-sm font-semibold rounded-full transition-colors ${gender === 'female' ? 'text-white' : 'text-gray-600'}`}
          >
            Female
          </button>
          <button
            onClick={() => setGender('male')}
            className={`relative z-10 px-6 py-2 text-sm font-semibold rounded-full transition-colors ${gender === 'male' ? 'text-white' : 'text-gray-600'}`}
          >
            Male
          </button>
          <motion.div
            className={`absolute top-1 left-1 h-10 w-24 rounded-full ${gender === 'female' ? 'bg-pink-600' : 'bg-blue-600'}`}
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            initial={false}
            animate={{ x: gender === 'female' ? 0 : '100%' }}
          />
        </div>
      </motion.div>

      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {gender === 'female' ? 'Beauty Services at Your Doorstep' : 'Grooming Services for Men'}
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {gender === 'female'
          ? "India's first quick service app for on-demand home salon services. Pamper yourself with professional beauty treatments without leaving your home."
          : 'Get top-notch grooming services, from haircuts to beard trims, right at your doorstep. Look sharp, feel confident.'}
      </motion.p>
      <motion.div
        className="flex justify-center gap-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a href="#" className={`${gender === 'female' ? 'bg-pink-600 hover:bg-pink-700' : 'bg-blue-600 hover:bg-blue-700'} text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center gap-2`}>
          Book Now <FaArrowRight />
        </a>
        <a href="#" className={`bg-white ${gender === 'female' ? 'text-pink-600' : 'text-blue-600'} font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105`}>
          Learn More
        </a>
      </motion.div>

      {/* Avatars */}
      {gender === 'female' && (
        <motion.img
          src="https://randomuser.me/api/portraits/women/10.jpg"
          alt="Female Avatar"
          className="absolute left-4 md:left-20 bottom-10 w-32 h-32 rounded-full shadow-lg object-cover"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
      )}
      {gender === 'male' && (
        <motion.img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="Male Avatar"
          className="absolute right-4 md:right-20 bottom-10 w-32 h-32 rounded-full shadow-lg object-cover"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
      )}
    </div>
  </section>
);

// Services Section
const Services: React.FC<{ gender: 'female' | 'male' }> = ({ gender }) => {
    const femaleServices = [
        {
          title: "Hair Styling & Coloring",
          description: "Trendy cuts, highlights, and styles that enhance your beauty.",
          icon: "💇‍♀️",
        },
        {
          title: "Facials & Skin Glow",
          description: "Premium facials and treatments for radiant, youthful skin.",
          icon: "🌸",
        },
        {
          title: "Bridal & Party Makeup",
          description: "Professional makeup to make you shine on your special day.",
          icon: "💄",
        },
        {
          title: "Manicure & Pedicure",
          description: "Nail care, polish, and spa treatments for perfect hands & feet.",
          icon: "💅",
        },
        {
          title: "Spa & Relaxation",
          description: "Soothing massages and aromatherapy to relieve stress.",
          icon: "🧖‍♀️",
        },
        {
          title: "Eyebrows & Threading",
          description: "Perfect shaping and grooming for a natural elegant look.",
          icon: "👁️",
        },
      ];

    const maleServices = [
      {
        title: "Haircut & Styling",
        description: "Modern and classic haircuts to suit your style.",
        icon: "💇‍♂️",
      },
      {
        title: "Shave & Beard Trim",
        description: "Precision shaves and beard grooming for a sharp look.",
        icon: "🧔",
      },
      {
        title: "Men's Facial",
        description: "Deep cleansing and rejuvenating facials for men.",
        icon: "💆‍♂️",
      },
      {
        title: "Head Massage",
        description: "Relaxing head massages to de-stress and unwind.",
        icon: "💆‍♂️",
      },
      {
        title: "Hair Color",
        description: "Subtle and bold hair coloring options.",
        icon: "🎨",
      },
      {
        title: "Grooming Packages",
        description: "Complete grooming packages for the modern man.",
        icon: "📦",
      },
    ];

    const services = gender === 'female' ? femaleServices : maleServices;

  return (
    <Section id="services" className="bg-white">
      <SectionTitle>Our Services</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`${gender === 'female' ? 'bg-pink-50' : 'bg-blue-50'} p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 text-center`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// How It Works Section
const HowItWorks: React.FC<{ gender: 'female' | 'male' }> = ({ gender }) => {
    const femaleSteps = [
        {
          step: "1",
          title: "Choose Service",
          description: "Browse our list of beauty & spa services and pick what you need.",
          icon: "💇‍♀️",
        },
        {
          step: "2",
          title: "Book Appointment",
          description: "Select a convenient time slot and book instantly online or by phone.",
          icon: "📅",
        },
        {
          step: "3",
          title: "Visit Parlour",
          description: "Arrive at our parlour and relax while our experts take care of you.",
          icon: "🏩",
        },
        {
          step: "4",
          title: "Enjoy Glow",
          description: "Leave feeling confident, refreshed, and beautiful.",
          icon: "✨",
        },
      ];

    const maleSteps = [
      {
        step: "1",
        title: "Select Grooming",
        description: "Choose from a range of men's grooming services.",
        icon: "✂️",
      },
      {
        step: "2",
        title: "Schedule Time",
        description: "Book an appointment at your preferred date and time.",
        icon: "🗓️",
      },
      {
        step: "3",
        title: "Expert Arrives",
        description: "Our professional barber will arrive at your location.",
        icon: "🚗",
      },
      {
        step: "4",
        title: "Look Sharp",
        description: "Enjoy your fresh look and feel confident.",
        icon: "😎",
      },
    ];

    const steps = gender === 'female' ? femaleSteps : maleSteps;

  return (
    <Section id="how-it-works" className={`${gender === 'female' ? 'bg-pink-50' : 'bg-blue-50'}`}>
      <SectionTitle>How It Works</SectionTitle>
      <div className="grid md:grid-cols-4 gap-8 text-center">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className={`${gender === 'female' ? 'bg-white' : 'bg-blue-100'} rounded-full p-6 shadow-lg mb-4`}>
                <div className="text-4xl">{step.icon}</div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// Why Us Section
const WhyUs: React.FC<{ gender: 'female' | 'male' }> = ({ gender }) => {
    const femaleReasons = [
        {
          title: "Experienced Beauticians",
          description: "Our skilled team ensures you get professional care every visit.",
          icon: "👩‍🎨",
        },
        {
          title: "Premium Products",
          description: "We use only high-quality, skin-safe, and branded beauty products.",
          icon: "🌸",
        },
        {
          title: "Relaxing Environment",
          description: "Enjoy a calm and hygienic parlour atmosphere designed for women.",
          icon: "🧖‍♀️",
        },
        {
          title: "Personalized Services",
          description: "Treatments tailored to your unique style, skin, and beauty goals.",
          icon: "💄",
        },
        {
          title: "Affordable Luxury",
          description: "Get premium services at prices that won’t break the bank.",
          icon: "💰",
        },
      ];

    const maleReasons = [
      {
        title: "Expert Barbers",
        description: "Our skilled barbers provide precision cuts and grooming.",
        icon: "👨‍🦱",
      },
      {
        title: "Quality Products",
        description: "We use premium grooming products for the best results.",
        icon: "🧴",
      },
      {
        title: "Comfortable Setting",
        description: "Relax in a modern and comfortable grooming environment.",
        icon: "💈",
      },
      {
        title: "Tailored Styles",
        description: "Customized haircuts and beard styles to match your preference.",
        icon: "✂️",
      },
      {
        title: "Great Value",
        description: "High-quality services at competitive prices.",
        icon: "💸",
      },
    ];

    const reasons = gender === 'female' ? femaleReasons : maleReasons;

  return (
    <Section id="why-us" className="bg-white">
      <SectionTitle>Why Choose Us?</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.slice(0, 3).map((reason, index) => (
          <div key={index} className={`${gender === 'female' ? 'bg-pink-50' : 'bg-blue-50'} p-6 rounded-lg`}>
            <div className="text-4xl mb-3">{reason.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{reason.title}</h3>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Parlourly is a game-changer! The convenience of having a professional beautician at home is unmatched. The service was excellent and very professional.",
      name: "Anjali Sharma",
      location: "Mumbai",
    },
    {
      quote: "I was hesitant at first, but the experience was fantastic. The beautician was punctual, skilled, and used high-quality products. Highly recommend!",
      name: "Priya Singh",
      location: "Delhi",
    },
    {
      quote: "As a busy working mom, Parlourly is a lifesaver. I can get my beauty treatments done without stepping out of the house. The app is so easy to use.",
      name: "Sunita Reddy",
      location: "Bangalore",
    },
  ];
  return (
    <Section id="testimonials" className="bg-pink-50">
      <SectionTitle>What Our Clients Say</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
            <div>
              <p className="font-bold text-gray-800">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// FAQs Section
const FAQs: React.FC<{ gender: 'female' | 'male' }> = ({ gender }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const femaleFaqs = [
        {
          question: "What services do you offer?",
          answer:
            "We provide hair styling, facials, skin treatments, bridal makeup, manicure, pedicure, waxing, and more tailored beauty services.",
        },
        {
          question: "Do I need to book an appointment?",
          answer:
            "Walk-ins are welcome, but we recommend booking in advance to secure your preferred time slot.",
        },
        {
          question: "Are the products safe for sensitive skin?",
          answer:
            "Yes! We only use premium, dermatologically tested products that are safe for all skin types.",
        },
        {
          question: "Do you provide home services?",
          answer:
            "Currently, we provide in-parlour services only, but we plan to introduce home service packages soon.",
        },
      ];

    const maleFaqs = [
      {
        question: "What grooming services are available?",
        answer:
          "We offer haircuts, shaves, beard trims, men's facials, head massages, and hair coloring.",
      },
      {
        question: "Can I book a barber for a specific time?",
        answer:
          "Yes, you can schedule appointments in advance through our app or by calling us.",
      },
      {
        question: "Are the grooming products suitable for all skin types?",
        answer:
          "Absolutely! We use high-quality, skin-friendly products suitable for various skin and hair types.",
      },
      {
        question: "Do you offer grooming packages?",
        answer:
          "Yes, we have a range of grooming packages designed for different needs and occasions.",
      },
    ];

    const faqs = gender === 'female' ? femaleFaqs : maleFaqs;

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <Section id="faqs" className="bg-white">
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
              <span className={`${gender === 'female' ? 'text-pink-600' : 'text-blue-600'} text-2xl`}>
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
            {openIndex === index && (
              <motion.div
                className="mt-4 text-gray-600"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

// CTA Section
const CTA = () => (
  <Section id="cta" className="bg-pink-600 text-white">
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4">Ready to Get Pampered?</h2>
      <p className="text-pink-100 max-w-2xl mx-auto mb-8">
        Download the Parlourly app now and book your first at-home salon service. Experience the ultimate convenience in beauty and wellness.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#" className="hover:scale-105 transition-transform">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-12"
          />
        </a>
        <a href="#" className="hover:scale-105 transition-transform">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="h-12"
          />
        </a>
      </div>
    </div>
  </Section>
);


const Home: React.FC<{ gender: 'female' | 'male'; setGender: (gender: 'female' | 'male') => void }> = ({ gender, setGender }) => {
  return (
    <div className="font-sans">
      <Hero gender={gender} setGender={setGender} />
      <Services gender={gender} />
      <HowItWorks gender={gender} />
      <WhyUs gender={gender} />
      <Testimonials />
      <FAQs gender={gender} />
      <CTA />
    </div>
  );
};

export default Home;
