import React from "react";

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
    <section id="why-us" className={`py-16 ${gender === 'female' ? 'bg-white' : 'bg-blue-50'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#5D0F36]">
          Why Choose Parlourly?
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition ${gender === 'female' ? 'bg-pink-50' : 'bg-blue-100'}`}
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

