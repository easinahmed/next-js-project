import { Wrench, Car, Zap } from 'lucide-react';
import Image from 'next/image';
import service_image from '../public/service-1.png'

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Rapid Repair Garage",
      description: "Customer satisfaction is crucial for amohlodi business as it leads to customer",
      image: service_image
    },
    {
      icon: Car,
      title: "Auto Tech Services",
      description: "Customer satisfaction is crucial for amohlodi business as it leads to customer",
      image: service_image
    },
    {
      icon: Zap,
      title: "Roadside Auto Repair",
      description: "Customer satisfaction is crucial for amohlodi business as it leads to customer",
      image: service_image
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-semibold mb-4">Our Services</p>
          <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
            Trust us with your repair needs
          </h2>
          <p className="text-4xl font-bold text-gray-900">
            Repairing with care
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className='p-8 '>
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <Icon className="text-orange-500" size={48} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Read More Link */}
                  <div className="text-center">
                    <a href="#" className="text-gray-900 font-bold text-sm hover:text-orange-500 transition-colors flex items-center justify-center gap-2">
                      READ MORE <span>→</span>
                    </a>
                  </div>
                </div>

                <div className='w-full overflow-hidden mt-4'>
                  <Image 
                    src={service.image}
                    alt="service_image"
                    className='w-full'
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}

