import React from "react";

const WhyUs: React.FC = () => {
  const reasons = [
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

  return (
    <section id="why-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#5D0F36]">
          Why Choose Parlourly?
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-pink-50 shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-[#5D0F36]">
                {reason.title}
              </h3>
              <p className="mt-2 text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

