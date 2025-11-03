import React from "react";

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
    <section id="services" className={`py-16 ${gender === 'female' ? 'bg-pink-50' : 'bg-blue-50'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#5D0F36]">
          {gender === 'female' ? 'Women’s Parlour Services' : 'Men’s Grooming Services'}
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#5D0F36]">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
