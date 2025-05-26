import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


// Tabs (keys must match the 'category' in your projects array)
const TABS = [
  { key: 'all', label: 'All Projects' },
  { key: 'it', label: 'IT & Software' },
  { key: 'healthcare', label: 'Healthcare' },
  { key: 'realestate', label: 'Real Estate' },
  { key: 'education', label: 'Education' },
  { key: 'digitalmarketing', label: 'Digital Marketing' }, // <-- Added here
];

// Full project list from paste.txt, with correct category keys
const PROJECTS = [
  {
    title: 'AI-Powered Analytics Platform',
    description: 'Advanced analytics platform using machine learning for predictive business intelligence.',
    category: 'it',
    date: 'May 2025',
    image: 'https://readdy.ai/api/search-image?query=Advanced%2520AI%2520visualization%2520interface%2520with%2520neural%2520networks%252C%2520machine%2520learning%2520algorithms%2520display%252C%2520futuristic%2520technology%2520dashboard%2520with%2520blue%2520glowing%2520elements%252C%2520professional%2520AI%2520system%2520interface&width=600&height=400&seq=11&orientation=landscape',
    testimonial: {
      name: 'Emily Chen',
      position: 'Data Science Director, TechCorp',
      image: 'https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520a%2520female%2520tech%2520executive%252C%2520business%2520attire%252C%2520neutral%2520background%252C%2520confident%2520expression%252C%2520corporate%2520portrait%2520style&width=40&height=40&seq=12&orientation=squarish',
      quote: 'The AI platform revolutionized our data analysis capabilities.',
    },
  },
  {
    title: 'Hospital Management System',
    description: 'An integrated system for patient management, scheduling, and medical records.',
    category: 'healthcare',
    date: 'April 2025',
    image: 'https://readdy.ai/api/search-image?query=Modern%2520hospital%2520management%2520system%2520interface%252C%2520patient%2520records%2520dashboard%252C%2520medical%2520scheduling%2520application%252C%2520healthcare%2520software%2520with%2520clean%2520design%252C%2520professional%2520medical%2520interface%2520with%2520blue%2520color%2520scheme&width=600&height=400&seq=7&orientation=landscape',
    testimonial: {
      name: 'Dr. James Wilson',
      position: 'Medical Director, City Hospital',
      image: 'https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520male%2520doctor%252C%2520medical%2520attire%252C%2520warm%2520smile%252C%2520hospital%2520background%252C%2520healthcare%2520professional%2520portrait&width=40&height=40&seq=21&orientation=squarish',
      quote: 'This system has streamlined our operations significantly.',
    },
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
    testimonial: {
      name: 'Prof. Sarah Miller',
      position: 'Dean of Digital Learning, State University',
      image: 'https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520female%2520professor%252C%2520academic%2520attire%252C%2520friendly%2520expression%252C%2520university%2520office%2520background%252C%2520education%2520professional%2520portrait&width=40&height=40&seq=31&orientation=squarish',
      quote: 'The platform has transformed how we deliver education to our students.',
    },
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
    testimonial: {
      name: 'Robert Thompson',
      position: 'Investment Director, RealtyInvest',
      image: 'https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520male%2520investment%2520executive%252C%2520business%2520formal%2520attire%252C%2520confident%2520expression%252C%2520office%2520background%252C%2520corporate%2520portrait&width=40&height=40&seq=35&orientation=squarish',
      quote: 'This platform has given us unprecedented insights into market opportunities.',
    },
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
    testimonial: {
      name: 'Dr. Lisa Wang',
      position: 'Research Director, Medical Research Institute',
      image: 'https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520female%2520medical%2520researcher%252C%2520lab%2520coat%252C%2520confident%2520expression%252C%2520research%2520facility%2520background%252C%2520healthcare%2520professional%2520portrait&width=40&height=40&seq=39&orientation=squarish',
      quote: 'The database has accelerated our research capabilities tremendously.',
    },
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
    testimonial: {
      name: 'Michael Johnson',
      position: 'Director of Admissions, Tech University',
      image: 'https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520male%2520university%2520administrator%252C%2520business%2520casual%2520attire%252C%2520friendly%2520expression%252C%2520campus%2520office%2520background%252C%2520education%2520professional%2520portrait&width=40&height=40&seq=42&orientation=squarish',
      quote: 'Prospective students love exploring our campus virtually before visiting.',
    },
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
];

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [visibleCount, setVisibleCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  // Reset tab to 'all' when not on /all-projects
  useEffect(() => {
    if (location.pathname !== '/all-projects' && activeTab !== 'all') {
      setActiveTab('all');
    }
  }, [location.pathname]);

  // Update visibleCount when tab changes
  useEffect(() => {
    if (activeTab === 'all') {
      setVisibleCount(3);
    } else {
      setVisibleCount(
        PROJECTS.filter(project => project.category === activeTab).length
      );
    }
  }, [activeTab]);

  // Filtering logic
  const filteredProjects =
    activeTab === 'all'
      ? PROJECTS.slice(0, visibleCount)
      : PROJECTS.filter(project => project.category === activeTab).slice(0, 3);

  return (
    <section id='projects' className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects across various industries.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                  activeTab === tab.key
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.title + idx}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-100 text-gray-800">
                    {project.category}
                  </span>
                  <span className="text-gray-500 text-sm">{project.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {project.testimonial && (
                  <div className="mb-4 border-t border-gray-100 pt-4">
                    <div className="flex items-center">
                      <img
                        src={project.testimonial.image}
                        alt={project.testimonial.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <div>
                        <p className="text-sm text-gray-800 font-medium">{project.testimonial.name}</p>
                        <p className="text-xs text-gray-600">{project.testimonial.position}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 italic mt-2">
                      "{project.testimonial.quote}"
                    </p>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        {location.pathname !== '/all-projects' && (
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/all-projects')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 whitespace-nowrap cursor-pointer"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
