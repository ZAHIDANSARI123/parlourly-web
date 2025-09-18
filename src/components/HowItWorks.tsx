import React from "react";

const HowItWorks: React.FC = () => {
  const steps = [
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

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#5D0F36]">
          How It Works
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-pink-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <span className="text-sm font-bold text-[#5D0F36] mb-2">
                Step {item.step}
              </span>
              <h3 className="text-xl font-semibold text-[#5D0F36]">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
