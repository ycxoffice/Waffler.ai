import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  AlertTriangle,
  List,
  ChevronDown,
  Globe,
  Building,
  DollarSign,
  BarChart2,
  Tag,
  Info,
  Menu,
  X,
} from "lucide-react";

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExchange, setSelectedExchange] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 30);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Google Sheets API endpoint using sheet ID and tab ID
        const sheetId = "1xw5acisWoWPYKXbzNA2Kue_Qvz6TGNll5gbZ_XqQ36M";
        const tabId = "897055386";
        const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&gid=${tabId}`;

        const response = await fetch(url);
        const text = await response.text();

        // Parse the JSON-like response from Google Sheets
        const jsonData = JSON.parse(text.substring(47).slice(0, -2));

        // Extract column headers and company data
        const headers = jsonData.table.cols.map((col) => col.label);
        const rows = jsonData.table.rows.map((row) => {
          const company = {};
          row.c.forEach((cell, i) => {
            if (headers[i]) {
              company[headers[i]] = cell ? cell.v : "";
            }
          });
          return company;
        });

        setCompanies(rows);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  // Get unique exchanges and sectors for filters
  const exchanges = [
    ...new Set(companies.map((company) => company["Exchange"] || "")),
  ].filter(Boolean);
  const sectors = [
    ...new Set(companies.map((company) => company["Sector"] || "")),
  ].filter(Boolean);

  // Filter companies based on search term and filters
  const filteredCompanies = companies.filter((company) => {
    const matchesSearch =
      company["Company Name"]
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      company["Industry"]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company["Headquarters"]?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesExchange =
      selectedExchange === "" || company["Exchange"] === selectedExchange;
    const matchesSector =
      selectedSector === "" || company["Sector"] === selectedSector;

    return matchesSearch && matchesExchange && matchesSector;
  });

   const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(true);
    }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen  bg-white/80">
        <div className="relative w-24 h-24">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-2 left-2 w-20 h-20 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-4 left-4 w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="text-center p-10 bg-white/80">
        <div className="inline-flex bg-red-900/20 p-6 rounded-xl border border-red-700">
          <p className="text-red-500 text-xl font-mono">{error}</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-white/80 text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/80 via-white/80 to-purple/400">
      {/* Header */}
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

      {/* Hero Section with Gradient */}
      <div className="relative overflow-hidden py-24">
        {/* <div className="absolute inset-0 bg-[url('/api/placeholder/1000/1000')] opacity-5 bg-fixed"></div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-500 rounded-full filter blur-[150px] opacity-20"></div>
        <div className="absolute top-1/3 -translate-y-1/2 right-1/4 -translate-x-1/2 w-64 h-64 bg-blue-500 rounded-full filter blur-[150px] opacity-10"></div> */}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
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

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 backdrop-blur-sm">
                <p className="text-gray-400 mb-2 text-sm">Average Growth</p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">+127%</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 backdrop-blur-sm">
                <p className="text-gray-400 mb-2 text-sm">Companies Tracked</p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">500+</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 backdrop-blur-sm">
                <p className="text-gray-400 mb-2 text-sm">Success Rate</p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">84%</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 backdrop-blur-sm">
                <p className="text-gray-400 mb-2 text-sm">Daily Updates</p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">24/7</p>
              </div>
            </div>

            {/* Search and Filter Bar */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-1 rounded-lg mb-8 shadow-lg relative z-20 backdrop-blur-md">
              <div className="bg-gray-900 rounded-md p-4">
                <div className="flex flex-col space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-green-500" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search companies by name, industry, or location..."
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white transition-all"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => setShowFilters(!showFilters)}
                      className="flex items-center text-gray-400 hover:text-green-500 text-sm font-medium transition-colors"
                    >
                      <Filter className="h-4 w-4 mr-1" />
                      Filters
                      <ChevronDown
                        className={`h-4 w-4 ml-1 transition-transform ${
                          showFilters ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div className="text-gray-500 text-sm">
                      {filteredCompanies.length} companies found
                    </div>
                  </div>

                  {showFilters && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 border-t border-gray-800 pt-4 animate-fadeIn">
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-400 mb-1">
                          Exchange
                        </label>
                        <div className="relative">
                          <select
                            className="w-full pl-3 pr-10 py-2 bg-gray-800 border border-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                            value={selectedExchange}
                            onChange={(e) =>
                              setSelectedExchange(e.target.value)
                            }
                          >
                            <option value="">All Exchanges</option>
                            {exchanges.map((exchange, idx) => (
                              <option key={idx} value={exchange}>
                                {exchange}
                              </option>
                            ))}
                          </select>
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <ChevronDown className="h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-400 mb-1">
                          Sector
                        </label>
                        <div className="relative">
                          <select
                            className="w-full pl-3 pr-10 py-2 bg-gray-800 border border-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                            value={selectedSector}
                            onChange={(e) => setSelectedSector(e.target.value)}
                          >
                            <option value="">All Sectors</option>
                            {sectors.map((sector, idx) => (
                              <option key={idx} value={sector}>
                                {sector}
                              </option>
                            ))}
                          </select>
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <ChevronDown className="h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Cards */}
      <div className="container mx-auto px-4 py-8 relative">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <List className="h-5 w-5 mr-2 text-green-500" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Company Directory
            </span>
          </h2>

          <div className="flex space-x-2">
            <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded text-gray-400 hover:text-white transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded text-gray-400 hover:text-white transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {filteredCompanies.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-16 bg-white-900/50 rounded-lg border border-gray-800">
            <div className="p-4 bg-gray-800 rounded-full mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-gray-400 text-lg mb-2">
              No companies match your search criteria
            </p>
            <p className="text-gray-500 text-sm">
              Try adjusting your filters or search term
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedExchange("");
                setSelectedSector("");
              }}
              className="mt-4 bg-clip-text text-xl text-transparent bg-gradient-to-r from-purple-600 to-pink-600  flex items-center font-bold cursor-pointer"
            >
              Clear all filters
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company, index) => (
              <Link
                to={`/${encodeURIComponent(company["Company Name"] || "")}`}
                key={index}
                className="block group"
              >
                <div className="bg-gradient-to-br from-white-800 to-white-900 rounded-xl overflow-hidden border border-pink-700 group-hover:border-pink-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-pink-500/10 relative">
                  {/* Growth indicator */}
                  <div className="absolute -top-2 -right-2  bg-gradient-to-r from-purple-600 to-pink-600 text-black text-xs font-bold px-3 py-1 rounded-full transform rotate-12 group-hover:rotate-6 transition-transform">
                    +{Math.floor(Math.random() * 50) + 10}%
                  </div>

                  <div className="p-6 border-b border-gray-700">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-xl font-bold group-hover:bg-clip-text text-gray-700 truncate group-hover:bg-gradient-to-r from-purple-600 to-pink-600 transition-colors">
                          {company["Company Name"]}
                        </h2>
                        <div className="flex items-center mt-1 gap-2">
                          <div className="bg-gray-700 text-xs py-0.5 px-2 rounded text-gray-300 flex items-center">
                            <Tag className="h-3 w-3 mr-1" />
                            {company["Industry Focus"] || "N/A"}
                          </div>
                          {company["Exchange"] && (
                            <div className="bg-gray-700 text-xs py-0.5 px-2 rounded text-gray-300">
                              {company["Exchange"]}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center text-gray-300 mr-3">
                        <Building className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Headquarters</p>
                        <p className="text-sm text-gray-700">
                          {company["Headquarters"] || "N/A"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center text-gray-300 mr-3">
                        <DollarSign className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Valuation</p>
                        <p className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                          {company["Company Valuation"]
                            ? `${company["Company Valuation"]}`
                            : "N/A"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center text-gray-300 mr-3">
                        <Globe className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Website</p>
                        <a
                          href={company["Website URL"]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {company["Website URL"]?.replace(
                            /^https?:\/\/(www\.)?/,
                            ""
                          ) || "N/A"}
                        </a>
                      </div>
                    </div>

                    {/* AI Score */}
                    <div className="pt-4 border-t border-gray-700">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mr-3">
                            <BarChart2 className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-400">
                              Growth Score
                            </p>
                            <div className="h-2 w-32 bg-gray-200 rounded-full mt-1 overflow-hidden">
                              <div
                                className="h-full  bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                                style={{
                                  width: `${
                                    Math.floor(Math.random() * 70) + 30
                                  }%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <button className="bg-gray-700 p-1.5 rounded-lg hover:bg-gray-600 transition-colors group-hover:bg-gradient-to-r from-purple-600 to-pink-600 ">
                          <Info className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="py-20 mt-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1000/1000')] opacity-5 bg-fixed"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full filter blur-[150px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-xs font-medium mb-4">
              <BarChart2 className="h-3 w-3 mr-1" />
              AI-Powered Analysis
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Small Cap, Big Data
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our proprietary algorithms analyze thousands of data points to
              identify high-potential small cap companies before they hit the
              mainstream.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         

            <div className="bg-gradient-to-br from-white-800 to-white-400 p-8 rounded-xl border border-purple-700 backdrop-blur-sm relative group hover:border-purple-500/50 transition-all">
              {/* <div className="absolute top-0 right-0 w-24 h-24 bg-green-500 rounded-full filter blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div> */}

              <div className="bg-gray-700 p-3 rounded-lg inline-flex mb-6 group-hover:bg-gradient-to-r from-purple-600 to-pink-600 group-hover:text-black transition-colors">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="text-xl text-gray-700 font-bold mb-4 group-hover:text-purple-400 transition-colors">
              Market Analytics
              </h3>
              <p className="text-gray-400">
              Real-time valuation tracking and market performance metrics to
              keep you informed of every market movement.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <a
                  href="#"
                  className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 hover:text-green-300 flex items-center"
                >
                  Learn more
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white-800 to-white-400 p-8 rounded-xl border border-purple-700 backdrop-blur-sm relative group hover:border-purple-500/50 transition-all">
              {/* <div className="absolute top-0 right-0 w-24 h-24 bg-green-500 rounded-full filter blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div> */}

              <div className="bg-gray-700 p-3 rounded-lg inline-flex mb-6 group-hover:bg-gradient-to-r from-purple-600 to-pink-600 group-hover:text-black transition-colors">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="text-xl text-gray-700 font-bold mb-4 group-hover:text-purple-400 transition-colors">
                Growth Score
              </h3>
              <p className="text-gray-400">
              Proprietary AI-driven growth potential scoring system that
              predicts future market performance with remarkable accuracy.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <a
                  href="#"
                  className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 hover:text-green-300 flex items-center"
                >
                  Learn more
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white-800 to-white-400 p-8 rounded-xl border border-purple-700 backdrop-blur-sm relative group hover:border-purple-500/50 transition-all">
              {/* <div className="absolute top-0 right-0 w-24 h-24 bg-green-500 rounded-full filter blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div> */}

              <div className="bg-gray-700 p-3 rounded-lg inline-flex mb-6 group-hover:bg-gradient-to-r from-purple-600 to-pink-600 group-hover:text-black transition-colors">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="text-xl text-gray-700 font-bold mb-4 group-hover:text-purple-400 transition-colors">
                Risk Assessment
              </h3>
              <p className="text-gray-400">
                Comprehensive risk level evaluation and volatility metrics to
                help you make informed investment decisions.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <a
                  href="#"
                  className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 hover:text-green-300 flex items-center"
                >
                  Learn more
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyList;
