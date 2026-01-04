"use client"
import CommonBanner from "@/components/CommonBanner"
import { useState } from 'react';
import { Calendar, MessageCircle, Search, ChevronRight, ChevronLeft } from 'lucide-react';


const page = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const allBlogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1486262715619-3417ca375640?w=600&h=400&fit=crop",
      category: "Pixfx",
      date: "March 14, 2024",
      comments: "No Comments",
      title: "Repair work your vehicle comes with our lifetime workmanship warranty",
      excerpt: "Embark on a global exploration of logistics considerations for international shipping. Delve into customs, regulations, and the intricate web of challenges, and discover the art of selecting reliable international logistics partners. Realize success in the vast landscape of global logistics operations. Tosser airy-boggy much look at public school Elizabeth up the duff burgeoned chimaera [...] "
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=600&h=400&fit=crop",
      category: "Pixfx",
      date: "March 14, 2024",
      comments: "No Comments",
      title: "Expert electrician works in switchboard with an electrical connecting cable",
      excerpt: "Embark on a global exploration of logistics considerations for international shipping. Delve into customs, regulations, and the intricate web of challenges, and discover the art of selecting reliable international logistics partners. Realize success in the vast landscape of global logistics operations. Tosser airy-boggy much look at public school Elizabeth up the duff burgeoned chimaera [...] "
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
      category: "Pixfx",
      date: "March 14, 2024",
      comments: "No Comments",
      title: "Businesses Are Thriving, Societies Are Not. Time for Urgent Change",
      excerpt: "Embark on a global exploration of logistics considerations for international shipping. Delve into customs, regulations, and the intricate web of challenges, and discover the art of selecting reliable international logistics partners. Realize success in the vast landscape of global logistics operations. Tosser airy-boggy much look at public school Elizabeth up the duff burgeoned chimaera [...] "
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1486262715619-3417ca375640?w=600&h=400&fit=crop",
      category: "Pixfx",
      date: "March 15, 2024",
      comments: "No Comments",
      title: "Advanced Repair Techniques for Modern Vehicles",
      excerpt: "Discover the latest advancements in vehicle repair technology. Our expert technicians use cutting-edge tools and methods to ensure your vehicle receives the best possible care. Learn about the innovations that are transforming the repair industry [...] "
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=600&h=400&fit=crop",
      category: "Pixfx",
      date: "March 15, 2024",
      comments: "No Comments",
      title: "Understanding Electrical Safety in Home Repairs",
      excerpt: "Electrical safety is paramount when handling any repair work at home. This comprehensive guide covers essential safety practices, common hazards, and how to prevent accidents. Stay informed and protect yourself and your family [...] "
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
      category: "Pixfx",
      date: "March 15, 2024",
      comments: "No Comments",
      title: "Sustainable Business Practices in the Repair Industry",
      excerpt: "Explore how repair businesses are adopting sustainable practices to reduce waste and environmental impact. From eco-friendly materials to efficient processes, learn how innovation is creating positive change [...] "
    }
  ];

  const postsPerPage = 3;
  const totalPages = Math.ceil(allBlogPosts.length / postsPerPage);
  const blogPosts = allBlogPosts.slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page:any) => {
    setCurrentPage(page);
  };

  const recentPosts = [
    {
      image: "https://images.unsplash.com/photo-1486262715619-3417ca375640?w=150&h=120&fit=crop",
      title: "REPAIR WORN YOUR VEHICLE LOOKS",
      date: "March 14, 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=150&h=120&fit=crop",
      title: "EXPERT ELECTRICIAN WORKS IN SWITCHBOARD",
      date: "March 14, 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=150&h=120&fit=crop",
      title: "BUSINESSES ARE THRIVING, SOCIETIES ARE",
      date: "March 14, 2024"
    }
  ];

  const categories = [
    "Expert Fixers",
    "Perfect Restore",
    "Repair Genius",
    "Trusty Repairs",
    "Ultimate Repair"
  ];

  const tags = [
    "AC", "Car", "Dripping", "Electric",
    "Expert", "Fixers", "Genius",
    "Plumber", "Repair", "Trusty"
  ];
  return (
    <div className="bg-white">
        <CommonBanner heading="Blog" pageName="blog"/>
        <section>
        <div className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content - Left */}
          <div className="lg:col-span-2">
            {/* Blog Posts */}
            <div className="space-y-12">
              {blogPosts.map((post) => (
                <div key={post.id}>
                  {/* Featured Image */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-80 object-cover rounded-lg mb-6 shadow-lg"
                  />

                  {/* Post Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      📁 {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={16} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle size={16} /> {post.comments}
                    </span>
                  </div>

                  {/* Post Title */}
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-orange-500 cursor-pointer transition-colors">
                    {post.title}
                  </h2>

                  {/* Post Excerpt */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors px-6 py-2 font-bold text-sm flex items-center gap-2">
                    READ MORE <ChevronRight size={16} />
                  </button>

                  {/* Divider */}
                  <div className="border-t border-gray-200 mt-12"></div>
                </div>
              ))}
            </div>

            {/* Swiper-style Pagination */}
            <div className="flex gap-2 mt-12 items-center">
              {/* Previous Button */}
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className={`w-10 h-10 flex items-center justify-center rounded font-bold transition-colors ${
                  currentPage === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-900 hover:bg-orange-500 hover:text-white'
                }`}
              >
                <ChevronLeft size={16} />
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageClick(index)}
                  className={`w-10 h-10 flex items-center justify-center rounded font-bold transition-colors ${
                    currentPage === index
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages - 1}
                className={`w-10 h-10 flex items-center justify-center rounded font-bold transition-colors ${
                  currentPage === totalPages - 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-900 hover:bg-orange-500 hover:text-white'
                }`}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Sidebar - Right */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Search</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search here"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 text-gray-600 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            {/* Recent Posts */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Post</h3>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <div key={index} className="flex gap-4 cursor-pointer group">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-20 h-20 object-cover rounded-lg group-hover:shadow-lg transition-shadow"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900 group-hover:text-orange-500 transition-colors mb-1 line-clamp-2">
                        {post.title}
                      </p>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index} className="flex items-center gap-2 cursor-pointer group">
                    <ChevronRight className="text-orange-500 group-hover:translate-x-1 transition-transform" size={16} />
                    <span className="text-gray-600 group-hover:text-orange-500 transition-colors">
                      {category}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
        </section>
    </div>
  )
}

export default page