import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { FadeDown, FadeUp } from "./Animation.js";

interface BreadcrumbProps {
  title: string;
  currentPage: string;
  backgroundImage?: string;
}

function Breadcrumb({ title, currentPage, backgroundImage }: BreadcrumbProps) {
  return (
    <div className="relative h-[400px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-65" />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full pt-16 pb-12">
          {/* Breadcrumb Navigation */}
          <FadeDown className="mb-6">
            <nav className="flex items-center space-x-2 text-sm font-medium text-blue-100/80">
              <Link
                to="/"
                className="flex items-center text-base hover:text-white transition-colors"
              >
                <Home className="h-5 w-5 mr-1" />
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-blue-100/60" />
              <span className="text-white">{currentPage}</span>
            </nav>
          </FadeDown>

          {/* Page Title */}
          <FadeUp delay={0.1}>
            <h1 className="text-4xl md:text-[42px] lg:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
          </FadeUp>

          {/* Page Description */}
          <FadeUp delay={0.2} className="max-w-3xl">
            <p className="text-base md:text-lg text-blue-100/90 leading-relaxed">
              Discover our journey of innovation, commitment to quality, and
              dedication to sustainable chemical solutions that shape the future
              of industry.
            </p>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
