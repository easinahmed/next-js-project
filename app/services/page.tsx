import CommonBanner from '@/components/CommonBanner';
import { Settings, Zap, Wind, Thermometer, BarChart3 } from 'lucide-react';


export default function ServicesPage() {
  return (
    <div>
      <CommonBanner heading='Service' pageName="Services"/>
      <ServicesContent />
    </div>
  );
}

const ServicesContent = () => {
  const services = [
    {
      icon: Wind,
      title: "Ductwork Repair",
      description: "Lorem ipsum dolor sit amet consectetur. Tortor sed vel ipsum id amet desi molestie Nonn nhii viverra diam velit elit viverra"
    },
    {
      icon: Zap,
      title: "Electrical Check",
      description: "Lorem ipsum dolor sit amet consectetur. Tortor sed vel ipsum id amet desi molestie Nonn nhii viverra diam velit elit viverra"
    },
    {
      icon: Settings,
      title: "Electrical Check",
      description: "Lorem ipsum dolor sit amet consectetur. Tortor sed vel ipsum id amet desi molestie Nonn nhii viverra diam velit elit viverra"
    },
    {
      icon: Thermometer,
      title: "Thermostat Replacement",
      description: "Lorem ipsum dolor sit amet consectetur. Tortor sed vel ipsum id amet desi molestie Nonn nhii viverra diam velit elit viverra"
    },
    {
      icon: BarChart3,
      title: "Performance Evaluation",
      description: "Lorem ipsum dolor sit amet consectetur. Tortor sed vel ipsum id amet desi molestie Nonn nhii viverra diam velit elit viverra"
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Info & Button */}
          <div className="flex flex-col justify-start">
            <p className="text-orange-500 text-sm font-semibold mb-6">Our Services</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
              When it comes to AC repair we've got you covered
            </h2>
            <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors px-6 py-3 font-bold w-fit">
              VIEW MORE <span className="ml-2">→</span>
            </button>
          </div>

          {/* Service Cards Grid */}
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow relative">
                {/* Orange Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500 rounded-t-lg"></div>

                {/* Icon Circle */}
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-orange-500" size={32} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Read More */}
                <a href="#" className="text-gray-900 font-bold text-sm hover:text-orange-500 transition-colors flex items-center gap-1">
                  READ MORE <span>→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
