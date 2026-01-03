"use client"
import CommonBanner from '@/components/CommonBanner';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState, ChangeEvent, MouseEvent } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ email: '', phone: '', address: '', message: '' });
  };

  return (
    <section className="bg-white ">
        <CommonBanner heading='Contact' pageName='Contact'/>
      <div className="container py-20">
        {/* Header */}
          <div className='max-w-143'>
              <p className="text-orange-500 text-sm font-semibold mb-4">Get Quote</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-12 leading-tight">
              Repairing your pro restoring your peace of mind
            </h2>
          </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-16">
          
          {/* Left Side - Contact Form */}
          <div>
            

            {/* Form */}
            <div className="space-y-8">
              {/* Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Your Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 text-gray-700 bg-gray-50 border-0 focus:outline-none focus:ring-0 placeholder-gray-500 text-sm rounded-lg"
                    />
                    <Mail className="absolute right-4 top-4 text-gray-400" size={20} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Your Phone</label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 text-gray-700 py-4 bg-gray-50 border-0 focus:outline-none focus:ring-0 placeholder-gray-500 text-sm rounded-lg"
                    />
                    <Phone className="absolute right-4 top-4 text-gray-400" size={20} />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Your Address</label>
                <div className="relative">
                  <input
                    type="text"
                    name="address"
                    placeholder="Your Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-4 text-gray-700 bg-gray-50 border-0 focus:outline-none focus:ring-0 placeholder-gray-500 text-sm rounded-lg"
                  />
                  <MapPin className="absolute right-4 top-4 text-gray-400" size={20} />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Message</label>
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Write Message.."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full text-gray-700 px-4 py-4 bg-gray-50 border-0 focus:outline-none focus:ring-0 placeholder-gray-500 text-sm resize-none rounded-lg"
                  ></textarea>
                  <Mail className="absolute right-4 bottom-4 text-gray-400" size={20} />
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold py-4 rounded-lg text-center"
              >
                SEND MESSAGE
              </button>
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="space-y-8">
            {/* Call Us Card */}
            <div className="bg-gray-50 p-8 rounded-lg flex gap-6 items-start">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                <Phone className="text-orange-500" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call us</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Mobile: +5623 - 080 - 59632  Hotline: +1234 - 853 - 365
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-gray-50 p-8 rounded-lg flex gap-6 items-start">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                <Mail className="text-orange-500" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  info@exampleyourmail.com  info@example.com
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-gray-50 p-8 rounded-lg flex gap-6 items-start">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="text-orange-500" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dhaka 102, utl 1216, road 45 stert linehouse street
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}