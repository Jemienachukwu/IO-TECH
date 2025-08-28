"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, X, Globe } from "lucide-react";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("En");

  const mainNavItems = [
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Our Team", href: "/team" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ];

  const servicesItems = [
    [
      {
        name: "Legal Consultation Services",
        href: "/services/legal-consultation",
      },
      {
        name: "Foreign Investment Services",
        href: "/services/foreign-investment",
      },
      { name: "Contracts", href: "/services/contracts" },
      { name: "Notarization", href: "/services/notarization" },
      { name: "Insurance", href: "/services/insurance" },
    ],
    [
      { name: "_____ and Defense in All Cases", href: "/services/defense" },
      { name: "Banks and Financial Institutions", href: "/services/banks" },
      {
        name: "Corporate Governance Services",
        href: "/services/corporate-governance",
      },
      { name: "Companies Liquidation", href: "/services/liquidation" },
      {
        name: "Internal Regulations for Companies",
        href: "/services/internal-regulations",
      },
    ],
    [
      {
        name: "Services for Companies and Institutions",
        href: "/services/companies",
      },
      { name: "Arbitration", href: "/services/arbitration" },
      { name: "Intellectual Property", href: "/services/ip" },
      {
        name: "Corporate Restructuring and Reorganization",
        href: "/services/restructuring",
      },
    ],
    [
      {
        name: "Establishing National and Foreign Companies",
        href: "/services/establishing",
      },
      { name: "Commercial Agencies", href: "/services/commercial-agencies" },
      { name: "Supporting Vision 2030", href: "/services/vision-2030" },
      { name: "Estates", href: "/services/estates" },
    ],
  ];

  const languages = [
    { code: "En", name: "English" },
    { code: "ع", name: "العربية" },
  ];

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "En" ? "ع" : "En");
  };

  return (
    <header className="bg-[#4B2615] text-white relative">
      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Placeholder */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
              <div className="w-8 h-8 bg-[#4B2615] rounded">logo</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="flex items-center space-x-1">
                    <a
                      key={item.name}
                      href={item.href}
                      className="hover:text-amber-200 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                    <button onClick={() => setIsServicesOpen(!isServicesOpen)}>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="hover:text-amber-200 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center space-x-1 hover:text-amber-200 transition-colors duration-200"
              >
                <Globe className="w-4 h-4" />
                <span>{currentLanguage}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>

            {/* Book Appointment Button */}
            <button className="hidden lg:block bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-amber-900 transition-colors duration-200">
              Book Appointment
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Services Dropdown - Desktop */}
      {isServicesOpen && (
        <div className="absolute top-full left-0 w-full bg-[#4B2615]  z-50 hidden lg:block">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-4 gap-8">
              {servicesItems.map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-4">
                  {column.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block text-sm hover:text-amber-200 transition-colors duration-200 leading-relaxed"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 ">
              <button className="text-amber-200 hover:text-white transition-colors duration-200">
                Read more
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#4B2615]  z-50 lg:hidden">
          <div className="container mx-auto px-4 py-6">
            <nav className="space-y-4">
              {mainNavItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <div className="flex items-center justify-between w-full py-2 hover:text-amber-200 transition-colors duration-200">
                        <a
                          key={item.name}
                          href={item.href}
                          className="hover:text-amber-200 transition-colors duration-200"
                        >
                          {item.name}
                        </a>
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                      {isServicesOpen && (
                        <div className="pl-4 mt-2 space-y-3 border-l border-amber-700">
                          {servicesItems.flat().map((service) => (
                            <a
                              key={service.name}
                              href={service.href}
                              className="block text-sm text-amber-200 hover:text-white transition-colors duration-200 py-1"
                            >
                              {service.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-2 hover:text-amber-200 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>
            <div className="pt-4  mt-6">
              <button className="w-full bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-amber-900 transition-colors duration-200">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Overlay for mobile menu */}
      {(isMobileMenuOpen || isServicesOpen) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsServicesOpen(false);
          }}
        />
      )}
    </header>
  );
};

export default Header;
