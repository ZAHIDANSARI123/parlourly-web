import React, { useState } from "react";

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 bg-gray-100">
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
                <span className="text-[#5D0F36] font-bold text-xl">
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
