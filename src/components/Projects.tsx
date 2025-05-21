import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TABS = [
  { key: 'all', label: 'All Projects' },
  { key: 'it', label: 'IT & Software' },
  { key: 'healthcare', label: 'Healthcare' },
  { key: 'realestate', label: 'Real Estate' },
  { key: 'education', label: 'Education' },
];

const PROJECTS = [
  {
    category: 'AI & ML',
    date: 'May 2025',
    title: 'AI-Powered Analytics Platform',
    description: 'Advanced analytics platform using machine learning for predictive business intelligence.',
    image:
      'https://readdy.ai/api/search-image?query=Advanced%20AI%20visualization%20interface%20with%20neural%20networks%2C%20machine%20learning%20algorithms%20display%2C%20futuristic%20technology%20dashboard%20with%20blue%20glowing%20elements%2C%20professional%20AI%20system%20interface&width=400&height=300&seq=11&orientation=landscape',
    client: {
      name: 'Emily Chen',
      position: 'Data Science Director, TechCorp',
      avatar:
        'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20female%20tech%20executive%2C%20business%20attire%2C%20neutral%20background%2C%20confident%20expression%2C%20corporate%20portrait%20style&width=40&height=40&seq=12&orientation=squarish',
      testimonial: 'The AI platform revolutionized our data analysis capabilities.',
    },
    tagClass: 'bg-purple-100 text-purple-800',
  },
  {
    category: 'Healthcare',
    date: 'April 2025',
    title: 'Hospital Management System',
    description: 'An integrated system for patient management, scheduling, and medical records.',
    image:
      'https://readdy.ai/api/search-image?query=Modern%20hospital%20management%20system%20interface%2C%20patient%20records%20dashboard%2C%20medical%20scheduling%20application%2C%20healthcare%20software%20with%20clean%20design%2C%20professional%20medical%20interface%20with%20blue%20color%20scheme&width=400&height=300&seq=7&orientation=landscape',
    tagClass: 'bg-green-100 text-green-800',
  },
  {
    category: 'Real Estate',
    date: 'March 2025',
    title: 'Real Estate Platform',
    description: 'A property management and listing platform with virtual tour capabilities.',
    image:
      'https://readdy.ai/api/search-image?query=Modern%20real%20estate%20property%20listing%20platform%2C%20property%20management%20dashboard%2C%20real%20estate%20application%20with%20map%20integration%2C%20professional%20interface%20with%20blue%20color%20scheme%2C%20property%20booking%20system&width=400&height=300&seq=8&orientation=landscape',
    tagClass: 'bg-yellow-100 text-yellow-800',
  },
];

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();

  // Filter logic placeholder (currently not filtering)
  const filteredProjects = PROJECTS;

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
              key={project.title}
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
                  <span
                    className={`${project.tagClass} text-xs font-medium px-2.5 py-0.5 rounded`}
                  >
                    {project.category}
                  </span>
                  <span className="text-gray-500 text-sm">{project.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {/* Client/Testimonial (only for first project) */}
                {project.client && (
                  <div className="mb-4 border-t border-gray-100 pt-4">
                    <div className="flex items-center">
                      <img
                        src={project.client.avatar}
                        alt={project.client.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <div>
                        <p className="text-sm text-gray-800 font-medium">{project.client.name}</p>
                        <p className="text-xs text-gray-600">{project.client.position}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 italic mt-2">
                      &quot;{project.client.testimonial}&quot;
                    </p>
                  </div>
                )}
                <button className="text-blue-600 font-medium inline-flex items-center cursor-pointer">
                  View Project <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/all-projects')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 whitespace-nowrap cursor-pointer"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;