"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample testimonials data - you can replace with your actual data
  const testimonials = [
    {
      id: 1,
      text: "With the help of the hospitable staff of Al Safar and Partners I was able to get my work done without any hassle. The help I received helped me a great deal to overcome the issues that I faced. I was always updated about my case and my queries never went unanswered.",
      name: "Mohammed Saif",
      position: "CEO/Company",
      image: "/avatar.png",
    },
    {
      id: 2,
      text: "Exceptional service and professional expertise. The team at Al Safar and Partners provided comprehensive legal support that exceeded our expectations. Their attention to detail and commitment to our success was remarkable.",
      name: "Sarah Ahmed",
      position: "Managing Director",
      image: "/avatar.png",
    },
    {
      id: 3,
      text: "Outstanding legal consultation services. The team's deep understanding of corporate law and their proactive approach helped us navigate complex business challenges with confidence and success.",
      name: "Omar Hassan",
      position: "Business Owner",
      image: "/avatar.png",
    },
    {
      id: 4,
      text: "Professional, reliable, and extremely knowledgeable. Al Safar and Partners delivered excellent results for our company's legal matters. I highly recommend their services to anyone seeking quality legal support.",
      name: "Fatima Al-Zahra",
      position: "Legal Manager",
      image: "/avatar.png",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-play functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-[#4B2615] text-white py-16 px-4 relative overflow-hidden">
      {/* Background Pattern (optional) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-6">
            What our clients are saying
          </h2>
          <p className="text-amber-100 max-w-2xl leading-relaxed">
            Our clients range from individual investors, to local, international
            as well as fortune 500 companies. Our clients range from individual
            investors, to local, international as well as fortune 500 companies.
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Client Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-amber-300 rounded-full opacity-40"></div>
            </div>
          </div>

          {/* Testimonial Text */}
          <div className="space-y-6">
            <div className="relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 text-6xl text-amber-200 opacity-50 font-serif">
                "
              </div>

              <blockquote className="text-lg md:text-xl leading-relaxed text-amber-50 relative z-10">
                {currentTestimonial.text}
              </blockquote>
            </div>

            <div className="border-l-4 border-amber-300 pl-6">
              <h4 className="text-xl font-bold text-white mb-1">
                {currentTestimonial.name}
              </h4>
              <p className="text-amber-200 text-sm uppercase tracking-wide">
                {currentTestimonial.position}
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-8">
              {/* Pagination Dots */}
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-white scale-125"
                        : "bg-amber-200 hover:bg-amber-100"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrow Controls */}
              <div className="flex space-x-4">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 bg-amber-800 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 bg-white text-amber-900 hover:bg-amber-50 rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar (optional) */}
        <div className="mt-12">
          <div className="w-full bg-amber-800 h-1 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-300 ease-out"
              style={{
                width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
