"use client"
import { useState } from 'react';
import { Star } from 'lucide-react';

export default function Testimonial() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Cameron Williamson",
      rating: 3,
      text: "Medical is a field that deals with the study, diagnosis treatment diseases and injuries. It encompasses various branches such as cardiolog,the a neurology orthopedics, and more professionals work diligently",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      name: "Sarah Anderson",
      rating: 5,
      text: "Exceptional service and attention to detail. The team went above and beyond to ensure my vehicle was repaired to the highest standard. Highly recommend their services!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      name: "John Martinez",
      rating: 4,
      text: "Great experience from start to finish. Professional staff, fair pricing, and quality repairs. Will definitely return for future maintenance and repair needs.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    {
      name: "Emily Johnson",
      rating: 5,
      text: "Outstanding work and customer service. They took time to explain the repair process and answered all my questions. Very satisfied with the results!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    }
  ];

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="bg-gray-50 pt-20 px-6 relative overflow-hidden">
      {/* Decorative grid pattern */}
      <div className="absolute left-0 top-0 w-96 h-96 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {Array.from({ length: 10 }).map((_, row) =>
            Array.from({ length: 10 }).map((_, col) => (
              <line
                key={`h-${row}-${col}`}
                x1={col * 10}
                y1={row * 10}
                x2={(col + 1) * 10}
                y2={row * 10}
                stroke="currentColor"
                strokeWidth="0.5"
              />
            ))
          )}
        </svg>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Side - Image */}
          <div className="flex items-center justify-center">
            <div className="w-130 h-full  min-h-96  overflow-hidden ">
              <img
                src="testimonial.png"
                alt="Testimonial"
                className="w-full h-full "
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Header */}
            <p className="text-orange-500 text-sm font-semibold mb-6">Clients Testimonial</p>
            <h2 className="text-5xl font-bold text-gray-900 mb-12 leading-tight">
              Restoration experts at your the best service
            </h2>

            {/* Testimonial Content */}
            <div className="bg-white rounded-lg p-8 mb-8 relative">
              {/* Quote Mark */}
              <div className="absolute -top-6 right-8 text-6xl text-orange-500 opacity-20">
                "
              </div>

              {/* Client Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{currentTestimonial.name}</h3>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < currentTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed">
                {currentTestimonial.text}
              </p>
            </div>

            {/* Pagination Dots */}
            <div className="flex mb-4 items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial
                      ? 'bg-orange-500 w-8'
                      : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}