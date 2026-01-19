"use client"
import { Users, Trophy, Briefcase, Star } from 'lucide-react';
import { useState } from 'react';

export default function Booking() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        comment: ''
    });

    const stats = [
        {
            icon: Users,
            number: "200 +",
            label: "Happy Clients"
        },
        {
            icon: Trophy,
            number: "20 +",
            label: "Winning award"
        },
        {
            icon: Briefcase,
            number: "10 K+",
            label: "Complete project"
        },
        {
            icon: Star,
            number: "900 +",
            label: "Client review"
        }
    ];

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', phone: '', comment: '' });
    };

    return (
        <section className="bg-gray-900 text-white py-20 px-6 relative ">
            {/* Stats Section */}
            <div className="container mb-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-4">
                                    <Icon className="text-orange-500" size={48} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                                <p className="text-gray-400 text-sm">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Contact & Image Section */}
            <div className="container relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                    {/* Contact Form */}
                    <div className="bg-white text-gray-900 p-8 top-40 lg:w-155 lg:h-190 lg:relative z-20">
                        {/* Header */}
                        <p className="text-orange-500 text-sm font-semibold mb-6">Book now</p>
                        <h2 className="text-4xl font-bold mb-8 leading-tight">
                            Restoring your peace of the mind
                        </h2>

                        {/* Form */}
                        <div className="space-y-8">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 placeholder-gray-500"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 placeholder-gray-500"
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 placeholder-gray-500"
                            />

                            <textarea
                                name="comment"
                                placeholder="Comment"
                                value={formData.comment}
                                onChange={handleChange}
                                
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 placeholder-gray-500 resize-none"
                            ></textarea>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2"
                            >
                                SEND MESSAGE <span>→</span>
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="absolute z-10 right-0 top-20  h-96 lg:h-220 lg:w-210 min-h-96 flex items-center justify-center">
                        <img
                            src="booking.png"
                            alt="Mechanic working on car"
                            className="w-full h-full object-cover rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}