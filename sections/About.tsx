import { Wrench, Settings } from 'lucide-react';

export default function About() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Images */}
                    <div className=" h-screen lg:h-auto grid md:grid-cols-[auto_326px] gap-6 items-center justify-center">
                        
                        <div className='flex flex-col gap-6 justify-end items-end w-full h-full'>
                            <div className='md:self-end'>
                                <img src="about-1.png" alt="about image" />
                            </div>
                            <div className='md:self-end'>
                                <img src="about-2.png" alt="about image" />
                            </div>
                        </div>
                        <div className='w-full overflow-hidden'>
                            <img src="about-3.png" alt="about image" />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div>
                        {/* Subtitle */}
                        <p className="text-orange-500 text-sm font-semibold mb-4">About Us</p>

                        {/* Main Heading */}
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Repairing your worry restoring your peace of mind
                        </h2>

                        {/* Description with dot */}
                        <div className="flex gap-3 mb-8">
                            <div className="w-3 h-3 bg-orange-500 rounded-full shrink-0 mt-2"></div>
                            <p className="text-gray-600 leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur. Tortor sed vel ipsum id amet molestie the viverra diam velit elit viverra. Malesuada blandit in habitasse malesuada
                            </p>
                        </div>

                        {/* Features - Two columns */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                            {/* Feature 1 */}
                            <div className="border-l-4 border-orange-500 pl-6">
                                <div className="mb-3">
                                    <Wrench className="text-orange-500" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Repair Genius Fix Master</h3>
                                <p className="text-gray-600 text-sm">
                                    Lorem ipsum dolit amet consectetur. Proin viverra maec donec
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="border-l-4 border-orange-500 pl-6">
                                <div className="mb-3">
                                    <Settings className="text-orange-500" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Restore Pro Repair Techs</h3>
                                <p className="text-gray-600 text-sm">
                                    Lorem ipsum dolit amet consectetur. Proin viverra maec donec
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="bg-orange-500 hover:bg-orange-600 transition-colors px-8 py-4 font-bold text-white flex items-center gap-2">
                            READ MORE
                            <span>→</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}