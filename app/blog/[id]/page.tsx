"use client"

import CommonBanner from "@/components/CommonBanner"
import { useState } from 'react';
import {  Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import Image from "next/image";

const page =  ({params}:any) => {
    const {id} = params
 const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Comment submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const categories = [
    "Repair Genius",
    "Ultimate Repair",
    "Perfect Restore",
    "Trusty Repairs",
    "Expert Fixers"
  ];

  const recentPosts = [
    {
      image: "https://images.pexels.com/photos/474/black-and-white-car-vehicle-vintage.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "A PICTURE IS WORTH STANDARD AND STAND US RETURN",
      author: "admin",
      category: "Category"
    },
    {
      image: "https://images.pexels.com/photos/474/black-and-white-car-vehicle-vintage.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "A PICTURE IS WORTH STANDARD AND STAND US RETURN",
      author: "admin",
      category: "Category"
    },
    {
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=150&h=120&fit=crop",
      title: "A PICTURE IS WORTH STANDARD AND STAND US RETURN",
      author: "admin",
      category: "Category"
    }
  ];

  const allTags = [
    "All Project", "Fixit Now", "RepairGenius",
    "FixMaster", "RapidRepair", "RestorePro"
  ];

  const bottomTags = ["All Project", "RepairGenius", "ProRestorers"];

  const benefits = [
    "BRINGING BACK THE FUNCTIONALITY YOU",
    "RELIABLE REPAIRS FOR A SEAMLESS EXPERIENCE",
    "REPAIRING WITH CARE, EXCEEDING EXPECTATIONS",
    "REPAIR MADE EASY, HASSLE-FREE SOLUTIONS",
    "TRUST US WITH YOUR REPAIR NEEDS"
  ];
    return (
    <div>
        <CommonBanner heading="Blog Details" pageName="blog_details"/>
        <div className="bg-white min-h-screen py-16 px-6">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Image */}
            <Image
              src="https://images.pexels.com/photos/474/black-and-white-car-vehicle-vintage.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Blog post featured"
              className="w-full h-96 object-cover rounded-lg mb-6 shadow-lg"
              height={384}
              width={600}
            />

            {/* Post Meta */}
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
              <span className="flex items-center gap-1">
                👤 By admin
              </span>
              <span className="flex items-center gap-1">
                📁 Category
              </span>
              <span className="flex items-center gap-1">
                💬 Comments (05)
              </span>
            </div>

            {/* Post Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Repairing With Care, Exceeding Expectations
            </h1>

            {/* Post Content */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition It involves diagnosing issues replacing faulty parts and ensuring optimal functionality. Rep services are maintaining the longevity of various infrastructure
            </p>

            {/* Two Column Content with Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-3">
                {benefits.slice(0, 2).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                      ✓
                    </div>
                    <span className="text-gray-900 font-semibold text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {benefits.slice(2, 4).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                      ✓
                    </div>
                    <span className="text-gray-900 font-semibold text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <div className="flex gap-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
                  alt="Haque Saml"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Haque Saml</h3>
                  <p className="text-orange-500 text-sm mb-4">Assistant Manager</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum is simply dummy text of the printing and type setting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled them
                  </p>
                </div>
              </div>
            </div>

            {/* Large Content Image */}
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&h=500&fit=crop"
              alt="Blog content"
              className="w-full h-96 object-cover rounded-lg mb-8 shadow-lg"
            />

            {/* More Content */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              Aliquam eros justo, possem lobortis viverra sorbet matti ullamcorper posuere viverra. Aliquam erojusto, posuere lobortis, viverra sorbet matti ullamcorper viverra sorbet matti ullamcorper posuere viverra
            </p>

            {/* Benefits Checklist */}
            <div className="bg-white border-l-4 border-orange-500 pl-6 py-4 mb-8 space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                    ✓
                  </div>
                  <span className="text-gray-900 font-semibold text-sm uppercase">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Final Content */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              Aliquam eros justo, possem lobortis viverra sorbet matti ullamcorper posuere viverra. Aliquam erojusto, posuere lobortis, viverra sorbet matti ullamcorper posuere lobortis viverra sorbet matti ullamcorper posuere viverra
            </p>

            {/* Tags */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <p className="text-gray-900 font-bold text-sm mb-4">Tags: 
                {bottomTags.map((tag, index) => (
                  <span key={index} className="ml-2 inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-orange-500 hover:text-white cursor-pointer transition-colors">
                    {tag}
                  </span>
                ))}
              </p>
            </div>

            {/* Previous & Next Post */}
            <div className="flex justify-between items-center mb-12">
              <button className="flex items-center gap-2 text-gray-900 font-bold hover:text-orange-500 transition-colors">
                <ChevronLeft size={16} />
                PREVIOUS POST
              </button>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
              <button className="flex items-center gap-2 text-gray-900 font-bold hover:text-orange-500 transition-colors">
                NEXT POST
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Comments Section */}
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Write Your Comment</h2>

              <div className="space-y-6 mb-8">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />

                <textarea
                  name="message"
                  placeholder="Write your Message here"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full text-gray-500 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 resize-none"
                ></textarea>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold py-3 rounded-lg"
                >
                  POST COMMENT
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-4 text-gray-500 py-3 border-b border-gray-300 focus:outline-none focus:border-orange-500"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500" size={20} />
              </div>
            </div>

            {/* Categories */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Category</h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700 group-hover:text-orange-500 transition-colors">
                      {category}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Post</h3>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <div key={index} className="pb-4 border-b border-gray-200 last:border-b-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-24 object-cover rounded-lg mb-3"
                    />
                    <p className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 hover:text-orange-500 cursor-pointer transition-colors">
                      {post.title}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>👤 By {post.author}</span>
                      <span>📁 {post.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page