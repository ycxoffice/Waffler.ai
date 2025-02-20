import React, { useState, useEffect } from "react";
import {
  Search,
  LineChart,
  Database,
  Users,
  Globe,
  Bot,
  Zap,
  ArrowRight,
} from "lucide-react";

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">
                Waffler.ai
              </span>
            </div>
            <div className="hidden md:flex space-x-8 text-gray-600">
              <a href="#" className="hover:text-blue-600 transition-colors">
                Companies
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Analytics
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Integrations
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                API
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Search */}
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
              Your Gateway to
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                AI Company Intelligence
              </span>
            </h1>
            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search AI companies by domain, features, or industry..."
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Database />}
              title="Comprehensive Data"
              description="Access detailed information about AI companies, including funding, valuation, and key metrics."
            />
            <FeatureCard
              icon={<LineChart />}
              title="Market Intelligence"
              description="Track industry trends, competitor analysis, and market dynamics in real-time."
            />
            <FeatureCard
              icon={<Globe />}
              title="Domain Insights"
              description="Deep dive into company domains, tech stacks, and integration capabilities."
            />
          </div>
        </div>
      </div>

      {/* Company Categories */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryCard
              title="Sales Automation"
              count="150+ Companies"
              icon={<Zap />}
            />
            <CategoryCard
              title="Marketing AI"
              count="200+ Companies"
              icon={<Users />}
            />
            <CategoryCard
              title="Enterprise Solutions"
              count="100+ Companies"
              icon={<Database />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
    <div className="inline-block p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const CategoryCard = ({ title, count, icon }) => (
  <div className="group p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100">
    <div className="flex items-center justify-between">
      <div>
        <div className="inline-block p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-600">{count}</p>
      </div>
      <ArrowRight className="text-gray-400 group-hover:text-blue-600 transition-colors" />
    </div>
  </div>
);

export default LandingPage;
