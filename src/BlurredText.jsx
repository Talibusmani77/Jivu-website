import React, { useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function BlurredText() {
  const text =
    "❝ Jivu Infosolution empowers business by upgrading technology , optimizing processes and enhancing user experiences to ensure they thrives in an ever - evolving digital landscape . ❞";
  const words = text.split(" ");

  const [visibleWords, setVisibleWords] = useState([]);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      words.forEach((_, index) => {
        setTimeout(() => {
          setVisibleWords((prev) => [...prev, index]);
        }, index * 300);
      });
    }
  }, [isInView]);

  return (
    <div 
      ref={cardRef}
      className="flex justify-center items-center min-h-[200px] p-4 bg-transparent-to-br from-gray-900 via-black to-purple-900"
    >
      <p className="text-white bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-tight text-center">
        {words.map((word, index) => (
          <span
            key={index}
            className={`inline-block transition-all mr-1 md:mr-2 duration-500 ${
              visibleWords.includes(index)
                ? "blur-none opacity-100"
                : "blur-md opacity-0"
            }`}
          >
            {word}
          </span>
        ))}
      </p>
    </div>
  );
}