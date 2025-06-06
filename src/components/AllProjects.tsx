import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

// import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const AllProjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
 //const navigate= useNavigate
  const [isLoading, setIsLoading] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(9);
  
// Helper function to get category styles
const getCategoryStyles = (category: string) => {
  switch (category) {
    case 'it':
      return { bg: 'bg-purple-100', text: 'text-purple-800', label: 'IT & Software' };
    case 'healthcare':
      return { bg: 'bg-green-100', text: 'text-green-800', label: 'Healthcare' };
    case 'realestate':
      return { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Real Estate' };
    case 'education':
      return { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Education' };
    case 'digitalmarketing':
      return { bg: 'bg-pink-100', text: 'text-pink-800', label: 'Digital Marketing' };
    default:
      return { bg: 'bg-gray-100', text: 'text-gray-800', label: 'Other' };
  }
};

// Project data
const projects = 
[
  {
    title: 'AI-Powered Analytics Platform',
    description: `A robust analytics platform using advanced machine learning for predictive insights. Features real-time dashboards, anomaly detection, and seamless integration, empowering organizations to make faster, data-driven decisions securely.

The platform supports automated data cleaning, customizable reporting, and is designed for scalability and security, supporting both cloud and on-premise deployments.`,
    category: 'it',
    date: 'May 2025',
    image: 'https://cdn.bfldr.com/FM3YDCO2/at/kxfrppcv2t9sn8p956r3mc3/iStock-1317706226.jpg?auto=webp&format=PNG&crop=2400:1254%2Csmart&width=2400&height=1254',
  },
  {
    title: 'Hospital Management System',
    description: `Integrated hospital system for patient management, scheduling, billing, and telemedicine. Automates appointments, secures data, and provides analytics for administrators, improving efficiency and patient care across departments.

The system also features role-based access, inventory management, and a user-friendly interface for both staff and patients.`,
    category: 'healthcare',
    date: 'April 2025',
    image: 'https://hatiintl.com/wp-content/uploads/2017/01/The-integrations-that-matter-for-a-Hospital-Management-System-1024x483.jpg',
  },
  {
    title: 'Real Estate Platform',
    description: `Property management and listing platform with 3D virtual tours, advanced search, agent dashboards, and secure transactions. Supports analytics, lead management, and automated notifications for buyers and sellers.

The platform integrates payment gateways, document management, and provides immersive experiences for property seekers.`,
    category: 'realestate',
    date: 'March 2025',
    image: 'https://mymagnet.io/blog/wp-content/uploads/2024/07/Untitled-design-11.png',
  },
  {
    title: 'E-Learning Management System',
    description: 'Learning platform for schools with interactive lessons, quizzes, analytics, and video conferencing. Enables teachers to manage content, track progress, and communicate with students on any device. Features blended learning, integration with content providers, and mobile accessibility for students and educators.',
    category: 'education',
    date: 'February 2025',
    image: 'https://i0.wp.com/fortaze.com/wp-content/uploads/2023/01/Digital-Education-in-India.png?fit=800%2C450&ssl=1',
  },
  {
    title: 'Cloud Migration & DevOps',
    description: `Migrated legacy systems to cloud with CI/CD pipelines, automated deployments, and monitoring. Ensured high availability, security, cost optimization, and trained teams on DevOps best practices.

The project included disaster recovery planning and infrastructure monitoring for mission-critical applications.`,
    category: 'it',
    date: 'January 2025',
    image: 'https://connect.geant.org/wp-content/uploads/2023/02/OCRE-Policy-Brief.jpg',
  },
  {
    title: 'Telemedicine Application',
    description: 'HIPAA-compliant video consultation app for patients and doctors. Features appointment scheduling, e-prescriptions, secure messaging, payment integration, and real-time notifications on any device. Supports patient history, multi-device access, and secure communication for healthcare providers.',
    category: 'healthcare',
    date: 'December 2024',
    image: 'https://www.appikr.com/blog/wp-content/uploads/2022/12/How-To-Build-a-Medical-Startup-1536x1024.jpg',
  },
  {
    title: 'Property Investment Analytics',
    description: 'Real estate investment platform with valuation tools, risk assessment, ROI calculators, and market analytics. Tracks portfolios, sends alerts, and integrates external data for investors. Generates detailed reports and provides up-to-date market information for smarter investments.',
    category: 'realestate',
    date: 'November 2024',
    image: 'https://eu-images.contentstack.com/v3/assets/bltabaa95ef14172c61/bltb7c078361dbea158/6734ac9b976053275ad1c482/real-estate-portfolio_0.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale',
  },
  {
    title: 'Student Success Tracking System',
    description: 'Analytics platform for monitoring student performance, attendance, and behavior. Provides dashboards, automated alerts for at-risk students, and communication tools for teachers and parents. Enables early intervention and supports academic improvement initiatives.',
    category: 'education',
    date: 'October 2024',
    image: 'https://th.bing.com/th/id/OIP.XpIj2gcuK46qYiOy9UoFqgHaET?rs=1&pid=ImgDetMain',
  },
  {
    title: 'Blockchain Supply Chain Solution',
    description: 'Blockchain-based supply chain system for traceability, fraud reduction, and efficiency. Features distributed ledger tracking, smart contracts, real-time monitoring, and IoT integration for logistics. Designed for scalability and enhanced data accuracy in logistics.',
    category: 'it',
    date: 'September 2024',
    image: 'https://www.retaillogisticsinternational.com/wp-content/uploads/2022/11/steve-Mapping_SupplyChain_Trucks.jpg',
  },
  {
    title: 'Medical Research Database',
    description: 'Secure database for medical research data collection, analysis, and collaboration. Supports advanced search, statistical tools, visualization, and compliance for large-scale, multi-institutional studies. Enables research teams to work efficiently and securely.',
    category: 'healthcare',
    date: 'August 2024',
    image: 'https://media.istockphoto.com/id/1354838510/photo/female-scientist-and-data-on-pharmaceutics-research.jpg?b=1&s=170667a&w=0&k=20&c=pAqRK-O481zMQn1gl-raMJsGxEVG_JwL2na5QQnALZ8=',
  },
  {
    title: 'Smart Home Real Estate App',
    description: 'IoT-enabled property management app for smart homes. Users control lighting, security, climate, and monitor energy. Supports tenant management, maintenance, and real-time alerts for owners. Integrates with smart devices for seamless automation.',
    category: 'realestate',
    date: 'July 2024',
    image: 'https://xtreemsolution.com/assets/uploads/files/real-estate-mobile-app.jpg',
  },
  {
    title: 'Virtual Campus Tour Platform',
    description: '3D virtual tour platform for schools and colleges. Prospective students and parents explore campuses, view facilities, access multimedia, and chat live with admissions from anywhere. Supports guided tours and integration with application portals.',
    category: 'education',
    date: 'June 2024',
    image: 'https://rextheme.com/wp-content/uploads/2022/09/Hotspot-Frontend.png',
  },
  {
    title: 'Cybersecurity Monitoring System',
    description: 'AI-powered threat detection and monitoring for enterprise networks. Automates incident response, provides real-time alerts, compliance reporting, and integrates with existing security infrastructure. Customizable dashboards and advanced analytics for security teams.',
    category: 'it',
    date: 'May 2024',
    image: 'https://cdn.prod.website-files.com/63a71c562e3ccbc6f6a40f0f/67b98625472de816d0951c58_65bcbb02d38aec8f6ce1f1ab_L%2526D_Cyber%2526ITSecurity_Hero.png',
  },
  {
    title: 'Patient Engagement Platform',
    description: 'Mobile app for patient engagement, appointment booking, and health tracking. Integrates with wearables, sends reminders, and supports secure messaging with healthcare providers. Enhances patient experience and improves health outcomes.',
    category: 'healthcare',
    date: 'April 2024',
    image: 'https://wp.prototypr.io/wp-content/uploads/2020/06/1-wsGPomavMyR_wB2qGcnAaw.png',
  },
  {
    title: 'Commercial Real Estate Analytics',
    description: 'Analytics platform for commercial real estate investors. Visualizes market trends, forecasts property values, analyzes opportunities, and generates custom reports for portfolio tracking. Provides automated alerts and performance tracking.',
    category: 'realestate',
    date: 'March 2024',
    image: 'https://cdn.prod.website-files.com/603dfae5ed7c980420ff37e4/644bb69563b0936005e93668_real%20estate%20market.webp',
  },
  {
    title: 'Adaptive Learning Platform',
    description: 'AI-driven adaptive learning system personalizes content for students. Analyzes learning patterns, adjusts difficulty, and provides feedback. Supports video, quizzes, and analytics for teachers. Enhances student engagement and outcomes.',
    category: 'education',
    date: 'February 2024',
    image: 'https://aitechtrend.com/wp-content/uploads/2023/07/Model-Evaluation-Techniques-Every-Machine-Learning-Enthusiast.png ',
  },
  {
    title: 'SEO Optimization Platform',
    description: 'SEO platform for improving website rankings. Offers keyword research, site audits, backlink analysis, competitor tracking, and actionable recommendations with detailed analytics. Helps businesses increase online visibility and traffic.',
    category: 'digitalmarketing',
    date: 'May 2025',
    image: 'https://cdn.pixabay.com/photo/2019/04/07/23/11/search-engine-optimization-4111000_960_720.jpg',
  },
  {
    title: 'Social Media Campaign Manager',
    description: 'Centralized platform for managing social media campaigns. Features content scheduling, automated posting, analytics, and audience engagement tracking for marketing teams. Provides real-time insights and collaboration tools.',
    category: 'digitalmarketing',
    date: 'April 2025',
    image: 'https://cdn.pixabay.com/photo/2019/05/26/06/04/digital-marketing-4229635_1280.jpg',
  },
  {
    title: 'Email Marketing Automation',
    description: 'Automated email marketing platform with templates, segmentation, A/B testing, and analytics. Integrates with CRM and sends follow-ups based on user behavior. Improves campaign effectiveness and customer engagement.',
    category: 'digitalmarketing',
    date: 'March 2025',
    image: 'https://cdn.pixabay.com/photo/2024/11/12/01/38/email-9191069_1280.png',
  },
  {
    title: 'Digital Marketing Analytics',
    description: 'Analytics platform for digital marketing. Consolidates data, tracks campaign performance, analyzes ROI, visualizes funnels, and provides dashboards for strategy optimization. Helps marketers maximize return on investment.',
    category: 'digitalmarketing',
    date: 'March 2025',
    image: 'https://readdy.ai/api/search-image?query=Real%2520estate%2520investment%2520analytics%2520dashboard%2520with%2520property%2520value%2520charts%252C%2520investment%2520portfolio%2520visualization%252C%2520property%2520market%2520analysis%2520interface%2520with%2520professional%2520design%252C%2520blue%2520accent%2520colors&width=600&height=400&seq=34&orientation=landscape',
  },
]; 

const TABS = [
  { key: 'all', label: 'All Projects' },
  { key: 'it', label: 'IT & Software' },
  { key: 'healthcare', label: 'Healthcare' },
  { key: 'realestate', label: 'Real Estate' },
  { key: 'education', label: 'Education' },
  { key: 'digitalmarketing', label: 'Digital Marketing' },
];


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setVisibleProjects(9);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const loadMoreProjects = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleProjects((prev) => prev + 6);
      setIsLoading(false);
    }, 800);
  };

  const filteredProjects = projects
    .filter((project) => activeTab === 'all' || project.category === activeTab)
    .slice(0, visibleProjects);

  const totalFiltered = projects.filter(
    (p) => activeTab === 'all' || p.category === activeTab
  ).length;

  return (
<>

      <Header />



      {/* Page Title */}
      <section className="pt-12 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold pt-10 text-gray-800 mb-4">
              Our Projects Portfolio
            </h1>
            <p className="text-xl text-gray-600">
              Explore our diverse range of successful projects across various industries, showcasing our expertise in delivering innovative digital solutions.
            </p>
          </div>
        </div>
      </section>
      {/* Filtering System (Responsive) */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40 border-y border-gray-200 shadow-sm">
        <div className="container mx-auto pl-61 pr-61 ">
          <div className="flex justify-center bg-gray-200 rounded-lg ">
        <div className="w-full max-w-3xl ">
          {/* Desktop Tabs */}
          <div className="hidden sm:flex justify-center ">
           <div className="flex flex-row w-full gap-2 justify-center">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${
            activeTab === tab.key
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
            </div>
          </div>
          {/* Mobile Dropdown */}
          <div className="sm:hidden">
            <label htmlFor="project-category-select" className="sr-only">
              Select project category
            </label>
            <select
          id="project-category-select"
          aria-label="Select project category"
          value={activeTab}
          onChange={(e) => handleTabChange(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
          {TABS.map((tab) => (
            <option key={tab.key} value={tab.key}>
              {tab.label}
            </option>
          ))}
            </select>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
<motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <AnimatePresence mode="wait">
    {filteredProjects.map((project, index) => {
      const cat = getCategoryStyles(project.category);
      return (
        <motion.div
          layout
          key={project.title || index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
        >
          <div className="h-64 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className={`${cat.bg} ${cat.text} text-xs font-medium px-2.5 py-0.5 rounded`}>
                {cat.label}
              </span>
              <span className="text-gray-500 text-sm">{project.date}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
            {project.description.split('\n\n').map((para, i) => (
              <p className="text-gray-600 mb-4" key={i}>{para}</p>
            ))}
          </div>
        </motion.div>
      );
    })}
  </AnimatePresence>
</motion.div>

          </div>

          {/* Load More Button */}
          {filteredProjects.length < totalFiltered && (
            <div className="text-center mt-12">
              <button
                onClick={loadMoreProjects}
                disabled={isLoading}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
                >
                {isLoading ? (
                  <>
                    <i className="fas fa-circle-notch fa-spin mr-2"></i>
                    Loading...
                  </>
                ) : (
                  'Load More Projects'
                )}
              </button>
            </div>
          )}
        {/* </div> */}
      </section>

      <Footer />

  </>
  );
};

export default AllProjects;
