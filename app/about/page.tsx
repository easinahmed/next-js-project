import CommonBanner from '@/components/CommonBanner'
import Testimonial from '@/sections/Testimonial'
import { Briefcase, Check, Gauge, Lightbulb, Star, Trophy, Users, Wrench, Zap } from 'lucide-react';

const page = () => {
    const features = [
        "INSTALLING A MOTION SENSOR LIGHT",
        "FIXING A FLICKERING",
        "ELECTRICAL JUNCTION BOX"
    ];

    const stats = [
        {
            number: "200 +",
            icon: Users,
            label: "Happy Clients",
            hasIndicator: true
        },
        {
            number: "20 +",
            icon: Trophy,
            label: "Winning award",
            hasIndicator: false
        },
        {
            number: "10 K+",
            icon: Briefcase,
            label: "Complete project",
            hasIndicator: false
        },
        {
            number: "900 +",
            icon: Star,
            label: "Client review",
            hasIndicator: false
        }
    ];

    const skills = [
        {
            name: "Power outlet",
            percentage: 85
        },
        {
            name: "Light switch",
            percentage: 80
        },
        {
            name: "Faulty circuit",
            percentage: 90
        },
        {
            name: "Blown fuse",
            percentage: 85
        }
    ];

    const processes = [
    {
      icon: Lightbulb,
      title: "Replacing a light",
      description: "Lorem ipsum dolor sit amet designersi consectetur adipiscing here"
    },
    {
      icon: Zap,
      title: "Installing Repairing",
      description: "Lorem ipsum dolor sit amet designersi consectetur adipiscing here"
    },
    {
      icon: Wrench,
      title: "Replacing broken",
      description: "Lorem ipsum dolor sit amet designersi consectetur adipiscing here"
    },
    {
      icon: Gauge,
      title: "Fixing a faulty",
      description: "Lorem ipsum dolor sit amet designersi consectetur adipiscing here"
    }
  ];

    return (
        <div className='bg-white'>
            <CommonBanner heading='About US' pageName='About' />
            <div className="container">

                <section className="bg-white py-20 px-6">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                            {/* Left Side - Image with Orange Border */}
                            <div className="relative">
                                <div className="absolute -top-6  left-6 -right-6 -bottom-6 border-4 border-orange-500 rounded-lg -z-10"></div>
                                <div className="absolute inset-0 -rotate-6 border-8 border-orange-500  z-10"></div>

                                {/* Image */}
                                <img
                                    src="about-image.png"
                                    alt="Electrician working on electrical panel"
                                    className="w-full h-auto rounded-lg relative "
                                />

                                {/* Badge - Bottom Left */}
                                <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-xl z-20 max-w-xs">
                                    <div className="flex items-start gap-3 mb-3">
                                        <Zap className="text-orange-500 shrink-0" size={28} />
                                        <h3 className="font-bold text-gray-900 text-lg">Best Awarded Company</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                    </p>
                                </div>

                            </div>





                            {/* Right Side - Content */}
                            <div>
                                {/* Subtitle */}
                                <p className="text-orange-500 text-sm font-semibold mb-4">About Us</p>

                                {/* Main Heading */}
                                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Quality electric repair for a brighter future
                                </h2>

                                {/* Description */}
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    There are many variations of passages of but the majority have in some form, by injected humour or words which don't look even slightly believable of but the majority have suffered
                                </p>

                                {/* Features List */}
                                <div className="space-y-4 mb-8">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                                                <Check className="text-white" size={16} strokeWidth={3} />
                                            </div>
                                            <span className="text-gray-700 font-semibold text-sm">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold py-4 px-8 rounded-lg flex items-center gap-2">
                                    READ MORE <span>→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-20 px-6 ">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={index} className="text-center flex flex-col items-center">
                                        {/* Number */}
                                        <h3 className="text-5xl font-bold text-gray-900 mb-4">
                                            {stat.number}
                                        </h3>

                                        {/* Icon */}
                                        <div className="mb-4">
                                            <Icon className="text-orange-500" size={48} strokeWidth={1.5} />
                                        </div>

                                        {/* Label */}
                                        <p className="text-gray-900 font-semibold text-sm mb-3">
                                            {stat.label}
                                        </p>

                                    
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>


                <section className="bg-white py-20 px-6">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                            {/* Left Side - Skills Content */}
                            <div>
                               

                                {/* Subtitle */}
                                <p className="text-orange-500 text-sm font-semibold mb-4">Our Skills</p>

                                {/* Main Heading */}
                                <h2 className="text-5xl font-bold text-gray-900 mb-12 leading-tight">
                                    Experience the different enceour reliable AC repair
                                </h2>

                                {/* Skills List */}
                                <div className="space-y-8">
                                    {skills.map((skill, index) => (
                                        <div key={index}>
                                            {/* Skill Name & Percentage */}
                                            <div className="flex justify-between items-center mb-3">
                                                <h3 className="text-lg font-bold text-gray-900">
                                                    {skill.name}
                                                </h3>
                                                <span className="text-lg font-bold text-gray-900">
                                                    {skill.percentage}%
                                                </span>
                                            </div>

                                            {/* Progress Bar */}
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-orange-500 h-2 rounded-full transition-all duration-500"
                                                    style={{ width: `${skill.percentage}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side - Image */}
                            <div className="flex items-center justify-center">
                                <img
                                    src="about-image.png"
                                    alt="AC Repair Technician"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>


                 <section className="bg-white py-20 px-6">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-semibold mb-4">Work Process</p>
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            Bringing the power back<br />to your home wired
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <div key={index} className="text-center relative">
                {/* Icon Circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-orange-500 transition-colors">
                    <Icon className="text-orange-500" size={44} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Connecting Line */}
                {index < processes.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 text-gray-300 text-2xl">
                    →
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {process.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {process.description}
                </p>

               
              </div>
            );
          })}
        </div>
      </div>
    </section>



            </div>
            <Testimonial />
        </div>
    )
}

export default page