"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  Mail,
} from "lucide-react";

const OurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Sample team data - you can replace with your actual data
  const teamMembers = [
    {
      id: 1,
      name: "Name Here",
      position: "POSITION HERE",
      image: "/avatar.png",
      phone: "+1234567890",
      whatsapp: "+1234567890",
      email: "name@company.com",
    },
    {
      id: 2,
      name: "Name Here",
      position: "POSITION HERE",
      image: "/avatar.png",
      phone: "+1234567890",
      whatsapp: "+1234567890",
      email: "name@company.com",
    },
    {
      id: 3,
      name: "Name Here",
      position: "POSITION HERE",
      image: "/avatar.png",
      phone: "+1234567890",
      whatsapp: "+1234567890",
      email: "name@company.com",
    },
    {
      id: 4,
      name: "Name Here",
      position: "POSITION HERE",
      image: "/avatar.png",
      phone: "+1234567890",
      whatsapp: "+1234567890",
      email: "name@company.com",
    },
    {
      id: 5,
      name: "Name Here",
      position: "POSITION HERE",
      image: "/avatar.png",
      phone: "+1234567890",
      whatsapp: "+1234567890",
      email: "name@company.com",
    },
    {
      id: 6,
      name: "Name Here",
      position: "POSITION HERE",
      image: "/avatar.png",
      phone: "+1234567890",
      whatsapp: "+1234567890",
      email: "name@company.com",
    },
  ];

  // Handle responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3); // Desktop: 3 items
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2); // Tablet: 2 items
      } else {
        setItemsPerPage(1); // Mobile: 1 item
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const getCurrentMembers = () => {
    const startIndex = currentIndex * itemsPerPage;
    return teamMembers.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Previous team members"
          >
            <ChevronLeft className="w-6 h-6 text-amber-900" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Next team members"
          >
            <ChevronRight className="w-6 h-6 text-amber-900" />
          </button>

          {/* Team Members Grid */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
              {getCurrentMembers().map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Colored Badge */}
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-500 text-sm uppercase tracking-wide mb-4">
                      {member.position}
                    </p>

                    {/* Contact Icons */}
                    <div className="flex justify-center space-x-4">
                      <a
                        href={`https://wa.me/${member.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors duration-200"
                        aria-label="WhatsApp"
                      >
                        <MessageCircle className="w-5 h-5" />
                      </a>
                      <a
                        href={`tel:${member.phone}`}
                        className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors duration-200"
                        aria-label="Phone"
                      >
                        <Phone className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors duration-200"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? "bg-amber-900"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
