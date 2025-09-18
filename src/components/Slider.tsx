// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const cards = [
//   {
//     step: "STEP 1",
//     title: "PARLOURLY YOUR WAY",
//     color: "text-pink-600",
//     circleColor: "bg-pink-100 text-pink-600",
//     icon: "💄",
//     text: "Need beauty services now? Get a Parlourly expert at your doorstep in just 10 minutes. Prefer a later time? Schedule what works best for you.",
//     actions: [
//       { label: "Book Now", style: "bg-pink-500 text-white hover:bg-pink-600" },
//       { label: "Prebook", style: "border border-gray-300 text-gray-600 hover:bg-gray-100" },
//     ],
//   },
//   {
//     step: "STEP 2",
//     title: "ON THE WAY",
//     color: "text-pink-600",
//     circleColor: "bg-pink-100 text-pink-600",
//     icon: "🚗",
//     text: "Once booked, our beauty expert is on the way. You can track their arrival in real-time and be prepared when they arrive.",
//     actions: [{ label: "Track Now", style: "bg-pink-500 text-white hover:bg-pink-600" }],
//   },
//   {
//     step: "STEP 3",
//     title: "BEAUTY DONE",
//     color: "text-pink-600",
//     circleColor: "bg-pink-100 text-pink-600",
//     icon: "✅",
//     text: "After the service is complete, rate your experience and pay securely through the app.",
//     actions: [{ label: "Finish", style: "bg-pink-500 text-white hover:bg-pink-600" }],
//   },
// ];

// export default function ScrollSlider() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // Define transforms for each card
//   const step = 1 / cards.length;
//   const opacity0 = useTransform(
//     scrollYProgress,
//     [0, step / 2, step],
//     [0, 1, 0]
//   );
//   const y0 = useTransform(
//     scrollYProgress,
//     [0, step / 2, step],
//     [50, 0, -50]
//   );
//   const opacity1 = useTransform(
//     scrollYProgress,
//     [step, step + step / 2, 2 * step],
//     [0, 1, 0]
//   );
//   const y1 = useTransform(
//     scrollYProgress,
//     [step, step + step / 2, 2 * step],
//     [50, 0, -50]
//   );
//   const opacity2 = useTransform(
//     scrollYProgress,
//     [2 * step, 2 * step + step / 2, 3 * step],
//     [0, 1, 0]
//   );
//   const y2 = useTransform(
//     scrollYProgress,
//     [2 * step, 2 * step + step / 2, 3 * step],
//     [50, 0, -50]
//   );

//   // Transform for decreasing height of sticky container
//   const containerHeight = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["100vh", "60vh"]
//   );

//   return (
//     <section ref={containerRef} className="relative h-[300vh] bg-gray-50">
//       {/* Sticky container */}
//       <motion.div
//         className="sticky top-0 flex items-center justify-center"
//         style={{ height: containerHeight }}
//       >
//         {cards.map((card, i) => (
//           <motion.div
//             key={i}
//             style={{ opacity: [opacity0, opacity1, opacity2][i], y: [y0, y1, y2][i] }}
//             className="absolute w-full max-w-[500px] md:max-w-[600px] bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col items-center"
//           >
//             <div
//               className={`${card.circleColor} w-20 h-20 rounded-full flex items-center justify-center font-bold mb-4 text-2xl`}
//             >
//               {card.icon}
//             </div>
//             <h2 className="text-lg font-semibold">{card.step}</h2>
//             <h3 className={`text-xl font-bold mb-2 ${card.color}`}>
//               {card.title}
//             </h3>
//             <p className="text-gray-600 text-center">{card.text}</p>
//             <div className="flex gap-3 mt-6 flex-wrap justify-center">
//               {card.actions.map((a, idx) => (
//                 <button
//                   key={idx}
//                   className={`${a.style} px-4 py-2 rounded-lg font-semibold shadow transition`}
//                 >
//                   {a.label}
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }
