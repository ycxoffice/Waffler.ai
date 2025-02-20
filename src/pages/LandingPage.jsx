import React, { useState, useEffect } from "react";
import {
  Bookmark,
  Mic,
  Rss,
  TrendingUp,
  Search,
  Menu,
  X,
  ArrowRight,
  Play,
  Plus,
  Heart,
  MessageSquare,
  Share2,
  Layers,
} from "lucide-react";

const WafflerAILanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("content");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabContent = {
    content: {
      title: "Content Database",
      description:
        "Track and analyze top-performing content across all media formats and platforms.",
      stats: ["2M+ Articles", "500K+ Videos", "10K+ Podcasts"],
      features: [
        "Content performance metrics",
        "Audience engagement analytics",
        "Topic trend identification",
        "Creator collaboration data",
      ],
    },
    publishing: {
      title: "Publishing Intelligence",
      description:
        "Discover winning publishing strategies, schedules, and distribution methods.",
      stats: ["50K+ Publishers", "Hourly Updates", "5+ Years of Data"],
      features: [
        "Publishing calendar analysis",
        "Platform-specific insights",
        "A/B testing results",
        "Distribution channel effectiveness",
      ],
    },
    media: {
      title: "Media Analytics",
      description:
        "Compare performance across different media types and consumption patterns.",
      stats: [
        "Cross-platform data",
        "User journey tracking",
        "Media mix modeling",
      ],
      features: [
        "Cross-format performance",
        "Audience migration patterns",
        "Content lifecycle analysis",
        "Format effectiveness by topic",
      ],
    },
    social: {
      title: "Social Intelligence",
      description:
        "Track engagement metrics, audience growth, and viral content patterns.",
      stats: ["15+ Platforms", "Realtime Monitoring", "Viral Prediction"],
      features: [
        "Engagement benchmarking",
        "Audience growth analysis",
        "Comment sentiment analysis",
        "Influencer collaboration data",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white font-sans">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                Waffler.ai
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#content"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Content
              </a>
              <a
                href="#publishing"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Publishing
              </a>
              <a
                href="#media"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Media
              </a>
              <a
                href="#social"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Social
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                Log in
              </button>
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90 transition-opacity">
                Try for free
              </button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="flex justify-between items-center p-6 border-b">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Waffler.ai
            </span>
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          <div className="p-6 flex flex-col space-y-4">
            <a
              href="#content"
              className="py-2 text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Content
            </a>
            <a
              href="#publishing"
              className="py-2 text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Publishing
            </a>
            <a
              href="#media"
              className="py-2 text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Media
            </a>
            <a
              href="#social"
              className="py-2 text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Social
            </a>
            <div className="pt-4 flex flex-col space-y-3">
              <button className="w-full py-3 rounded-full bg-gray-100 text-gray-700">
                Log in
              </button>
              <button className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                Try for free
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              The Ultimate Database for
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                Content Creators & Media Companies
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover what works in content, publishing, media, and social -
              all in one powerful, AI-driven database.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:shadow-lg transition-shadow">
                Start Free Trial
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                <Play className="h-4 w-4 mr-2" />
                Watch Demo
              </button>
            </div>
            <div className="mt-10 flex justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                No credit card required
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                14-day free trial
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                Cancel anytime
              </div>
            </div>
          </div>

          {/* Media Preview */}
          <div className="relative max-w-5xl mx-auto mt-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6">
              <div className="flex items-center mb-6">
                <div className="flex space-x-2 mr-auto">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex bg-gray-100 rounded-full px-3 py-1">
                  <button
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeTab === "content" ? "bg-white shadow-sm" : ""
                    }`}
                    onClick={() => setActiveTab("content")}
                  >
                    Content
                  </button>
                  <button
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeTab === "publishing" ? "bg-white shadow-sm" : ""
                    }`}
                    onClick={() => setActiveTab("publishing")}
                  >
                    Publishing
                  </button>
                  <button
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeTab === "media" ? "bg-white shadow-sm" : ""
                    }`}
                    onClick={() => setActiveTab("media")}
                  >
                    Media
                  </button>
                  <button
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeTab === "social" ? "bg-white shadow-sm" : ""
                    }`}
                    onClick={() => setActiveTab("social")}
                  >
                    Social
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-gray-50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {tabContent[activeTab].title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {tabContent[activeTab].description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {tabContent[activeTab].stats.map((stat, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tabContent[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="mt-1 mr-2 bg-purple-100 p-1 rounded-full">
                          <Plus className="h-3 w-3 text-purple-600" />
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="mb-4 flex justify-between items-center">
                    <h4 className="font-medium text-gray-700">Trending Now</h4>
                    <button className="text-purple-600 text-sm flex items-center">
                      View all
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </button>
                  </div>

                  {/* Content Cards */}
                  {[
                    {
                      type: "Article",
                      title: "How AI is Changing Content Creation",
                      engagement: "97% higher than average",
                    },
                    {
                      type: "Video",
                      title: "5-Minute Production Tips for TikTok",
                      engagement: "3.2x normal retention",
                    },
                    {
                      type: "Podcast",
                      title: "Media Monetization Strategies for 2025",
                      engagement: "Top 2% listener completion",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="mb-3 bg-white p-3 rounded-lg shadow-sm"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            item.type === "Article"
                              ? "bg-blue-100 text-blue-700"
                              : item.type === "Video"
                              ? "bg-red-100 text-red-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {item.type}
                        </span>
                        <button className="text-gray-400 hover:text-gray-600">
                          <Bookmark className="h-4 w-4" />
                        </button>
                      </div>
                      <h5 className="font-medium text-gray-800 mb-1">
                        {item.title}
                      </h5>
                      <div className="flex items-center text-green-600 text-xs font-medium">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {item.engagement}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Discover Content & Media Trends Before Your Competitors
            </h2>
            <p className="text-xl text-gray-600">
              Waffler.ai analyzes millions of content pieces daily to give you
              actionable insights on what works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Layers className="h-10 w-10 text-purple-600" />,
                title: "Content Database",
                description:
                  "Track trending topics, formats, and creators across all major platforms.",
              },
              {
                icon: <Rss className="h-10 w-10 text-purple-600" />,
                title: "Publishing Insights",
                description:
                  "Analyze the best publishing strategies, schedules, and distribution channels.",
              },
              {
                icon: <Mic className="h-10 w-10 text-purple-600" />,
                title: "Media Analytics",
                description:
                  "Compare performance across different media types from text to video to audio.",
              },
              {
                icon: <MessageSquare className="h-10 w-10 text-purple-600" />,
                title: "Social Intelligence",
                description:
                  "Track engagement patterns, audience growth tactics, and viral content formulas.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-purple-100 inline-flex p-3 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <a
                  href="#"
                  className="text-purple-600 font-medium flex items-center"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Demo */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Find Content That Resonates With Your Audience
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Search through millions of content pieces, filtered by format,
                  topic, performance, and audience demographics.
                </p>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 mb-6">
                    <Search className="h-5 w-5 text-gray-400 mr-3" />
                    <input
                      type="text"
                      placeholder="Search for content by keyword, topic, or creator..."
                      className="bg-transparent border-0 outline-none text-gray-800 flex-1"
                      defaultValue="sustainable fashion content"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">
                        Content Type
                      </label>
                      <select className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-700">
                        <option>All Types</option>
                        <option>Articles</option>
                        <option>Videos</option>
                        <option>Podcasts</option>
                        <option>Social Posts</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">
                        Time Period
                      </label>
                      <select className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-700">
                        <option>Last 30 days</option>
                        <option>Last 90 days</option>
                        <option>Last 6 months</option>
                        <option>Last year</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">
                        Platform
                      </label>
                      <select className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-700">
                        <option>All Platforms</option>
                        <option>Instagram</option>
                        <option>TikTok</option>
                        <option>YouTube</option>
                        <option>Medium</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">
                        Performance
                      </label>
                      <select className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-700">
                        <option>All Performance</option>
                        <option>Top 10%</option>
                        <option>Top 25%</option>
                        <option>Above Average</option>
                      </select>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 rounded-lg hover:opacity-90 transition-opacity">
                    Search Database
                  </button>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                    <h3 className="font-medium">Top Performing Content</h3>
                    <div className="flex space-x-2 text-sm">
                      <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                        Trending
                      </button>
                      <button className="px-3 py-1 text-gray-500 hover:bg-gray-100 rounded-full">
                        New
                      </button>
                    </div>
                  </div>

                  <div className="divide-y divide-gray-100">
                    {[
                      {
                        title:
                          "10 Sustainable Fashion Brands Making a Difference",
                        type: "Article",
                        publisher: "EcoStyle Magazine",
                        stats: {
                          views: "126K",
                          shares: "18.2K",
                          comments: "1.4K",
                        },
                      },
                      {
                        title: "How to Build a Sustainable Capsule Wardrobe",
                        type: "Video",
                        publisher: "EcoFashionista",
                        stats: {
                          views: "892K",
                          shares: "32.1K",
                          comments: "6.8K",
                        },
                      },
                      {
                        title: "The Future of Eco-Friendly Textiles",
                        type: "Podcast",
                        publisher: "Fashion Forward",
                        stats: {
                          views: "76K",
                          shares: "8.9K",
                          comments: "720",
                        },
                      },
                      {
                        title: "Thrifting Tips & Tricks for Sustainable Style",
                        type: "Social Thread",
                        publisher: "ThriftQueen",
                        stats: {
                          views: "2.1M",
                          shares: "89.5K",
                          comments: "12.3K",
                        },
                      },
                    ].map((item, index) => (
                      <div key={index} className="px-6 py-4 hover:bg-gray-50">
                        <div className="flex items-start">
                          <div
                            className={`flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center ${
                              item.type === "Article"
                                ? "bg-blue-100"
                                : item.type === "Video"
                                ? "bg-red-100"
                                : item.type === "Podcast"
                                ? "bg-green-100"
                                : "bg-yellow-100"
                            }`}
                          >
                            {item.type === "Article"
                              ? "A"
                              : item.type === "Video"
                              ? "V"
                              : item.type === "Podcast"
                              ? "P"
                              : "S"}
                          </div>
                          <div className="ml-4 flex-1">
                            <h4 className="font-medium text-gray-800">
                              {item.title}
                            </h4>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <span>{item.type}</span>
                              <span className="mx-2">•</span>
                              <span>{item.publisher}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center space-x-6 text-sm">
                          <div className="flex items-center text-gray-500">
                            <Search className="h-4 w-4 mr-1" />
                            {item.stats.views} views
                          </div>
                          <div className="flex items-center text-gray-500">
                            <Share2 className="h-4 w-4 mr-1" />
                            {item.stats.shares} shares
                          </div>
                          <div className="flex items-center text-gray-500">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            {item.stats.comments} comments
                          </div>
                          <button className="ml-auto text-purple-600">
                            <Bookmark className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="px-6 py-4 bg-gray-50 text-center">
                    <button className="text-purple-600 font-medium">
                      View all results
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your Content Strategy?
            </h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Join thousands of content creators, publishers, and media
              companies discovering what works before their competition.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white text-purple-700 rounded-full font-medium hover:shadow-lg transition-shadow">
                Start Your Free Trial
              </button>
              <button className="px-8 py-4 bg-transparent border border-white rounded-full font-medium hover:bg-white/10 transition-colors">
                Schedule a Demo
              </button>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { stat: "15M+", label: "Content Pieces" },
                { stat: "50K+", label: "Creators" },
                { stat: "120+", label: "Media Platforms" },
                { stat: "98%", label: "Customer Retention" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {item.stat}
                  </div>
                  <div className="text-sm opacity-80">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default WafflerAILanding;
