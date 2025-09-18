import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

const Parlourly: React.FC = () => {
  return (
    <main className="bg-white text-gray-900 font-sans overflow-hidden">
      {/* Hero Section */}
<section
  id="parlourly"
  className="relative py-24 overflow-hidden bg-white"
>
  {/* Gradient Overlay (for depth on white) */}
  <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50/30 to-white pointer-events-none"></div>

  <div className="container mx-auto px-4 text-center relative z-10">
    {/* Heading */}
    <motion.h1
      className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      INDIA'S FIRST{" "}
      <motion.span
        className="text-[#E91E63] italic inline-block"
        initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
      >
        QUICK
      </motion.span>{" "}
      SERVICE APP
    </motion.h1>

    {/* Subheading */}
    <motion.p
      className="text-lg sm:text-xl text-gray-600 mb-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      On-demand home services to empower <br /> urban households
    </motion.p>

    {/* Store Buttons */}
    <motion.div
      className="flex justify-center gap-4 mb-12"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
    >
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
    </motion.div>

    {/* Floating Decorative Stars */}
    <motion.div
      className="absolute top-8 left-8 text-[#E91E63] text-2xl drop-shadow-lg"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      ✦
    </motion.div>
    <motion.div
      className="absolute top-12 right-12 text-[#E91E63] text-3xl drop-shadow-lg"
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      ✦
    </motion.div>
    <motion.div
      className="absolute bottom-16 left-20 text-[#E91E63] text-xl drop-shadow-lg"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
    >
      ✦
    </motion.div>
  </div>

  {/* Background 3D Spline with radial glow */}
  <motion.div
    className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-30"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.3 }}
    transition={{ duration: 1.5, delay: 1 }}
  >
    <div className="absolute w-[600px] h-[600px] rounded-full bg-pink-200/20 blur-3xl"></div>
    <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
  </motion.div>
</section>



      {/* Women's Parlour Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Women's Parlour Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💇‍♀️",
                title: "Hair Styling",
                desc: "Professional haircuts, coloring, styling, and treatments.",
              },
              {
                icon: "🧴",
                title: "Facial Treatments",
                desc: "Rejuvenating facials, cleanses, and skin masks.",
              },
              {
                icon: "💅",
                title: "Manicure & Pedicure",
                desc: "Nail care, shaping, polishing & spa treatments.",
              },
              {
                icon: "💄",
                title: "Makeup Services",
                desc: "Bridal & party makeup for every occasion.",
              },
              {
                icon: "🧖‍♀️",
                title: "Body Treatments",
                desc: "Waxing, threading, body scrubs, and massages.",
              },
              {
                icon: "✨",
                title: "Special Packages",
                desc: "Custom bridal, party & self-care packages.",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl text-center hover:scale-105 transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              >
                <div className="text-[#E91E63] text-4xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            How It Works
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-10 relative">
            {[
              {
                title: "Choose Service",
                desc: "Browse & select your preferred beauty service.",
              },
              {
                title: "Book Appointment",
                desc: "Pick a time slot that fits your schedule.",
              },
              {
                title: "Get Service",
                desc: "Our expert arrives at your doorstep hassle-free.",
              },
              {
                title: "Pay Securely",
                desc: "Complete your payment online safely & easily.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="relative p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition transform"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                {/* Step Number Badge */}
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r from-[#E91E63] to-pink-400 text-white text-xl font-bold shadow-lg mb-6">
                  {i + 1}
                </div>

                {/* Step Content */}
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>

                {/* Connector Line (desktop only) */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-12 right-[-35px] w-[70px] h-1 bg-gradient-to-r from-[#E91E63] to-pink-200"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
<section className="py-20 bg-gray-50 relative overflow-hidden">
  <div className="container mx-auto px-4 text-center">
    <motion.h2
      className="text-2xl sm:text-3xl font-bold mb-12"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      What Users Say
    </motion.h2>

   <div className="grid md:grid-cols-3 gap-8 relative z-10">
  {[
    {
      text: "“Super quick and easy booking. The beautician was professional and polite.”",
      name: "Priya S.",
      img: "/images/priya.jpg",
    },
    {
      text: "“Loved the convenience. Highly recommended for busy people.”",
      name: "Ritu K.",
      img: "/images/ritu.jpg",
    },
    {
      text: "“Best experience ever! Parlourly saved me so much time.”",
      name: "Neha M.",
      img: "/images/neha.jpg",
    },
  ].map((t, i) => (
    <motion.div
      key={i}
      className="p-8 rounded-2xl bg-white/70 backdrop-blur-md border border-pink-100 shadow-lg hover:shadow-2xl transition transform relative overflow-hidden"
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.8, delay: i * 0.2, type: 'spring' }}
    >
      <div className="text-[#E91E63] text-4xl mb-4">❝</div>

      <p className="italic text-gray-700 relative z-10">{t.text}</p>

      <div className="mt-6 flex items-center gap-4 relative z-10">
        <img
          src={t.img}
          alt={t.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-[#E91E63]"
        />
        <h4 className="font-semibold text-gray-900">{t.name}</h4>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#E91E63] via-pink-400 to-[#E91E63]"></div>
    </motion.div>
  ))}
</div>


  </div>

  {/* Floating background icons */}
  <motion.div
    className="absolute top-20 left-10 text-5xl text-pink-200"
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  >
    ❝
  </motion.div>
  <motion.div
    className="absolute bottom-20 right-10 text-5xl text-pink-200"
    animate={{ y: [0, 15, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  >
    ❞
  </motion.div>
</section>


      {/* CTA Section */}
      <section className="py-16 bg-[#E91E63] text-white text-center overflow-hidden">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Experience Parlourly?
        </motion.h2>

        <motion.p
          className="mb-8 text-pink-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Download the app today and book your first service!
        </motion.p>

        {/* Store Buttons */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="hover:drop-shadow-lg"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12"
            />
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="hover:drop-shadow-lg"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-12"
            />
          </motion.a>
        </motion.div>

        {/* Floating Decorative Element */}
        <motion.div
          className="absolute top-10 right-10 text-white text-3xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ✦
        </motion.div>
      </section>
    </main>
  );
};

export default Parlourly;
