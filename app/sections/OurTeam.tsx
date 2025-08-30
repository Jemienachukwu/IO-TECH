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
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.56189 19C1.48742 19 1.4137 18.9852 1.34499 18.9565C1.27627 18.9278 1.21392 18.8857 1.16153 18.8328C1.02058 18.6896 0.966603 18.4826 1.02058 18.2884L2.15118 14.1802C1.44257 12.875 1.07145 11.4133 1.07157 9.92802C1.07232 6.29893 3.16107 3.16021 6.51988 1.73632C9.92593 0.293677 13.7016 1.00225 16.3759 3.58685C16.4216 3.63109 16.4584 3.68133 16.4861 3.73682C18.9865 6.31467 19.683 9.97301 18.299 13.3232C16.8895 16.7356 13.7218 18.8553 10.0324 18.8553C9.89219 18.8418 9.79847 18.838 9.68151 18.8313C8.99626 18.7938 7.598 18.7166 5.94634 17.8753L1.70434 18.982C1.65779 18.9939 1.60994 18.9999 1.56189 19ZM6.01456 16.7138C6.10678 16.7138 6.199 16.7363 6.28147 16.7813C7.79743 17.6009 9.06373 17.6706 9.74299 17.7081C9.89219 17.7163 10.0129 17.7238 10.1021 17.7351C13.257 17.7306 16.0258 15.877 17.2583 12.8935C18.4864 9.92127 17.8416 6.67308 15.5767 4.4169C15.5392 4.37852 15.507 4.33542 15.4807 4.28868C13.1445 2.11047 9.89369 1.52787 6.95923 2.77181C4.02177 4.01725 2.19692 6.75856 2.19542 9.92727C2.19542 11.2957 2.55679 12.6438 3.2413 13.824C3.27872 13.8886 3.30284 13.96 3.31224 14.0341C3.32164 14.1081 3.31613 14.1833 3.29603 14.2552L2.36261 17.6473L5.87286 16.7326C5.91905 16.72 5.96671 16.7137 6.01456 16.7138Z"
                          fill="black"
                          stroke="black"
                          stroke-width="0.4"
                        />
                      </svg>

                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.29346 11.6998C10.0974 13.2935 11.4398 14.579 13.1021 15.3467C13.2247 15.4024 13.3603 15.4265 13.4956 15.4167C13.6308 15.4068 13.7611 15.3633 13.8735 15.2904L16.3149 13.7248C16.4228 13.6546 16.5474 13.6117 16.6772 13.6002C16.807 13.5887 16.9377 13.609 17.0571 13.6592L21.6274 15.5435C21.7836 15.6059 21.9141 15.7159 21.9988 15.8565C22.0835 15.9971 22.1177 16.1606 22.0962 16.3217C21.9513 17.407 21.3995 18.4046 20.5439 19.1276C19.6883 19.8506 18.5876 20.2495 17.4478 20.2498C13.9253 20.2498 10.5472 18.9065 8.05649 16.5154C5.56577 14.1243 4.1665 10.8813 4.1665 7.49979C4.16676 6.40553 4.58234 5.34886 5.33547 4.5275C6.08861 3.70613 7.1277 3.17635 8.2583 3.03729C8.42611 3.01659 8.59636 3.04943 8.74282 3.13074C8.88928 3.21206 9.00384 3.33733 9.06885 3.48729L11.0317 7.88416C11.0828 7.99699 11.1041 8.12013 11.0939 8.24275C11.0837 8.36537 11.0422 8.48369 10.9731 8.58729L9.34229 10.9685C9.26968 11.0762 9.22706 11.2 9.21852 11.328C9.20997 11.4561 9.23577 11.5841 9.29346 11.6998Z"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.8286 3.75C17.1538 4.09141 18.362 4.76142 19.3322 5.69279C20.3024 6.62416 21.0003 7.78412 21.356 9.05625"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.0146 6.64697C15.8116 6.85017 16.5385 7.25202 17.1216 7.81179C17.7047 8.37156 18.1233 9.06936 18.335 9.83447"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <svg
                        width="21"
                        height="16"
                        viewBox="0 0 21 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1H19.75V13.75C19.75 13.9489 19.6677 14.1397 19.5212 14.2803C19.3747 14.421 19.1759 14.5 18.9687 14.5H1.78125C1.57405 14.5 1.37534 14.421 1.22882 14.2803C1.08231 14.1397 1 13.9489 1 13.75V1Z"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.75 1L10.375 9.25L1 1"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
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
