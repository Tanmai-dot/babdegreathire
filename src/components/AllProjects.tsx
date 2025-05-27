import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const AllProjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();
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
const projects = [
  {
    title: 'AI-Powered Analytics Platform',
    description: 'Advanced analytics platform using machine learning for predictive business intelligence.',
    category: 'it',
    date: 'May 2025',
    image: 'https://readdy.ai/api/search-image?query=Advanced%2520AI%2520visualization%2520interface%2520with%2520neural%2520networks%252C%2520machine%2520learning%2520algorithms%2520display%252C%2520futuristic%2520technology%2520dashboard%2520with%2520blue%2520glowing%2520elements%252C%2520professional%2520AI%2520system%2520interface&width=600&height=400&seq=11&orientation=landscape',

  },
  {
    title: 'Hospital Management System',
    description: 'An integrated system for patient management, scheduling, and medical records.',
    category: 'healthcare',
    date: 'April 2025',
    image: 'https://readdy.ai/api/search-image?query=Modern%2520hospital%2520management%2520system%2520interface%252C%2520patient%2520records%2520dashboard%252C%2520medical%2520scheduling%2520application%252C%2520healthcare%2520software%2520with%2520clean%2520design%252C%2520professional%2520medical%2520interface%2520with%2520blue%2520color%2520scheme&width=600&height=400&seq=7&orientation=landscape',

  },
  {
    title: 'Real Estate Platform',
    description: 'A property management and listing platform with virtual tour capabilities.',
    category: 'realestate',
    date: 'March 2025',
    image: 'https://readdy.ai/api/search-image?query=Modern%2520real%2520estate%2520property%2520listing%2520platform%252C%2520property%2520management%2520dashboard%252C%2520real%2520estate%2520application%2520with%2520map%2520integration%252C%2520professional%2520interface%2520with%2520blue%2520color%2520scheme%252C%2520property%2520booking%2520system&width=600&height=400&seq=8&orientation=landscape',
  },
  {
    title: 'E-Learning Management System',
    description: 'Comprehensive learning platform for educational institutions with course management.',
    category: 'education',
    date: 'February 2025',
    image: 'https://readdy.ai/api/search-image?query=Modern%2520e-learning%2520platform%2520interface%2520with%2520course%2520modules%252C%2520educational%2520content%2520dashboard%252C%2520online%2520learning%2520system%2520with%2520clean%2520design%252C%2520professional%2520education%2520interface%2520with%2520blue%2520accent%2520colors&width=600&height=400&seq=30&orientation=landscape',

  },
  {
    title: 'Cloud Migration & DevOps',
    description: 'Enterprise-level cloud migration with continuous integration and deployment pipelines.',
    category: 'it',
    date: 'January 2025',
    image: 'https://readdy.ai/api/search-image?query=Cloud%2520infrastructure%2520visualization%252C%2520DevOps%2520pipeline%2520dashboard%252C%2520cloud%2520architecture%2520diagram%2520with%2520modern%2520interface%252C%2520professional%2520cloud%2520computing%2520system%2520with%2520blue%2520and%2520white%2520design%2520elements&width=600&height=400&seq=32&orientation=landscape',
  },
  {
    title: 'Telemedicine Application',
    description: 'Secure video consultation platform connecting patients with healthcare providers.',
    category: 'healthcare',
    date: 'December 2024',
    image: 'https://readdy.ai/api/search-image?query=Telemedicine%2520application%2520interface%2520showing%2520doctor%2520video%2520consultation%252C%2520medical%2520appointment%2520dashboard%252C%2520healthcare%2520video%2520call%2520system%2520with%2520clean%2520professional%2520design%252C%2520blue%2520medical%2520themed%2520interface&width=600&height=400&seq=33&orientation=landscape',
  },
  {
    title: 'Property Investment Analytics',
    description: 'Data-driven platform for real estate investment analysis and portfolio management.',
    category: 'realestate',
    date: 'November 2024',
    image: 'https://readdy.ai/api/search-image?query=Real%2520estate%2520investment%2520analytics%2520dashboard%2520with%2520property%2520value%2520charts%252C%2520investment%2520portfolio%2520visualization%252C%2520property%2520market%2520analysis%2520interface%2520with%2520professional%2520design%252C%2520blue%2520accent%2520colors&width=600&height=400&seq=34&orientation=landscape',

  },
  {
    title: 'Student Success Tracking System',
    description: 'Analytics platform to monitor student performance and provide early intervention.',
    category: 'education',
    date: 'October 2024',
    image: 'https://readdy.ai/api/search-image?query=Student%2520performance%2520analytics%2520dashboard%2520with%2520academic%2520progress%2520charts%252C%2520educational%2520tracking%2520system%252C%2520student%2520success%2520interface%2520with%2520clean%2520professional%2520design%252C%2520blue%2520education%2520themed%2520elements&width=600&height=400&seq=36&orientation=landscape',
  },
  {
    title: 'Blockchain Supply Chain Solution',
    description: 'Transparent supply chain management system using blockchain technology.',
    category: 'it',
    date: 'September 2024',
    image: 'https://readdy.ai/api/search-image?query=Blockchain%2520supply%2520chain%2520visualization%2520interface%252C%2520distributed%2520ledger%2520dashboard%2520for%2520logistics%252C%2520supply%2520tracking%2520system%2520with%2520modern%2520design%252C%2520blue%2520blockchain%2520network%2520visualization&width=600&height=400&seq=37&orientation=landscape',
  },
  {
    title: 'Medical Research Database',
    description: 'Comprehensive database system for medical research data collection and analysis.',
    category: 'healthcare',
    date: 'August 2024',
    image: 'https://readdy.ai/api/search-image?query=Medical%2520research%2520database%2520interface%2520with%2520clinical%2520data%2520visualization%252C%2520healthcare%2520analytics%2520dashboard%252C%2520medical%2520research%2520platform%2520with%2520professional%2520clean%2520design%252C%2520blue%2520medical%2520themed%2520elements&width=600&height=400&seq=38&orientation=landscape',

  },
  {
    title: 'Smart Home Real Estate App',
    description: 'Property management application with IoT integration for smart home features.',
    category: 'realestate',
    date: 'July 2024',
    image: 'https://readdy.ai/api/search-image?query=Smart%2520home%2520control%2520interface%2520for%2520real%2520estate%252C%2520property%2520management%2520with%2520IoT%2520integration%252C%2520home%2520automation%2520dashboard%2520with%2520modern%2520clean%2520design%252C%2520blue%2520smart%2520home%2520themed%2520elements&width=600&height=400&seq=40&orientation=landscape',
  },
  {
    title: 'Virtual Campus Tour Platform',
    description: 'Interactive 3D virtual tour platform for educational institutions.',
    category: 'education',
    date: 'June 2024',
    image: 'https://readdy.ai/api/search-image?query=Virtual%2520campus%2520tour%2520interface%2520with%25203D%2520university%2520visualization%252C%2520interactive%2520educational%2520facility%2520exploration%252C%2520virtual%2520tour%2520platform%2520with%2520clean%2520professional%2520design%252C%2520blue%2520education%2520themed%2520elements&width=600&height=400&seq=41&orientation=landscape',

  },
  {
    title: 'Cybersecurity Monitoring System',
    description: 'Advanced threat detection and monitoring system for enterprise networks.',
    category: 'it',
    date: 'May 2024',
    image: 'https://readdy.ai/api/search-image?query=Cybersecurity%2520monitoring%2520dashboard%2520with%2520network%2520threat%2520visualization%252C%2520security%2520operations%2520center%2520interface%252C%2520threat%2520detection%2520system%2520with%2520modern%2520professional%2520design%252C%2520blue%2520security%2520themed%2520elements&width=600&height=400&seq=43&orientation=landscape',
  },
  {
    title: 'Patient Engagement Platform',
    description: 'Mobile application for patient engagement, appointment scheduling, and health tracking.',
    category: 'healthcare',
    date: 'April 2024',
    image: 'https://readdy.ai/api/search-image?query=Patient%2520engagement%2520mobile%2520app%2520interface%2520with%2520health%2520tracking%2520features%252C%2520medical%2520appointment%2520scheduling%2520system%252C%2520healthcare%2520platform%2520with%2520clean%2520professional%2520design%252C%2520blue%2520medical%2520themed%2520elements&width=600&height=400&seq=44&orientation=landscape',
  },
  {
    title: 'Commercial Real Estate Analytics',
    description: 'Market analysis and forecasting platform for commercial real estate investors.',
    category: 'realestate',
    date: 'March 2024',
    image: 'https://readdy.ai/api/search-image?query=Commercial%2520real%2520estate%2520analytics%2520dashboard%2520with%2520market%2520trend%2520visualization%252C%2520property%2520investment%2520forecasting%2520interface%252C%2520real%2520estate%2520platform%2520with%2520professional%2520design%252C%2520blue%2520business%2520themed%2520elements&width=600&height=400&seq=45&orientation=landscape',
  },
  {
    title: 'Adaptive Learning Platform',
    description: 'AI-powered adaptive learning system that personalizes educational content.',
    category: 'education',
    date: 'February 2024',
    image: 'https://readdy.ai/api/search-image?query=Adaptive%2520learning%2520platform%2520interface%2520with%2520personalized%2520education%2520content%252C%2520AI%2520learning%2520path%2520visualization%252C%2520educational%2520system%2520with%2520clean%2520professional%2520design%252C%2520blue%2520education%2520themed%2520elements&width=600&height=400&seq=46&orientation=landscape',
  },
   {
    title: 'SEO Optimization Platform',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex.',
    category: 'digitalmarketing',
    date: 'May 2025',
    image: 'https://cdn.pixabay.com/photo/2019/04/07/23/11/search-engine-optimization-4111000_960_720.jpg',

  },
  {
    title: 'Social Media Campaign Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex.',
    category: 'digitalmarketing',
    date: 'April 2025',
    image: 'https://cdn.pixabay.com/photo/2019/05/26/06/04/digital-marketing-4229635_1280.jpg',

  },
  {
    title: 'Email Marketing Automation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex.',
    category: 'digitalmarketing',
    date: 'March 2025',
    image: 'https://cdn.pixabay.com/photo/2024/11/12/01/38/email-9191069_1280.png',

  },
  {
    title: 'Digital Marketing Analytics',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex.',
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

      {/* Filtering System */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40 border-y border-gray-200 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <div className="inline-flex bg-white rounded-lg shadow-sm p-1">
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
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const cat = getCategoryStyles(project.category);
              return (
                <div
                key={index}
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
                    <p className="text-gray-600 mb-4">{project.description}</p>


                  </div>
                </div>
              );
            })}
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
        </div>
      </section>

      <Footer />

  </>
  );
};

export default AllProjects;
