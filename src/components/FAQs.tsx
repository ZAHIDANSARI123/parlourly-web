import React, { useState } from "react";

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
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, UPI, credit/debit cards, and most popular digital wallets.",
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
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, UPI, credit/debit cards, and most popular digital wallets.",
    },
  ];

  const faqs = gender === 'female' ? femaleFaqs : maleFaqs;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className={`py-16 ${gender === 'female' ? 'bg-gray-100' : 'bg-blue-50'}`}>
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#5D0F36]">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span className={`font-bold text-xl ${gender === 'female' ? 'text-[#5D0F36]' : 'text-blue-600'}`}>
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
