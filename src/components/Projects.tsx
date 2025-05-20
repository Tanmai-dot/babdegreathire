import React, { useState } from 'react';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('all');
    const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    };
  return (
    <>
    
{/* Featured Projects */}
<section className="py-20 bg-white">
<div className="container mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
<p className="text-gray-600 max-w-3xl mx-auto">Explore our portfolio of successful projects across various industries.</p>
</div>
<div className="flex justify-center mb-10">
<div className="inline-flex bg-gray-100 rounded-lg p-1">
<button
onClick={() => handleTabChange('all')}
className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
>
All Projects
</button>
<button
onClick={() => handleTabChange('it')}
className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${activeTab === 'it' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
>
IT & Software
</button>
<button
onClick={() => handleTabChange('healthcare')}
className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${activeTab === 'healthcare' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
>
Healthcare
</button>
<button
onClick={() => handleTabChange('realestate')}
className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${activeTab === 'realestate' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
>
Real Estate
</button>
<button
onClick={() => handleTabChange('education')}
className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${activeTab === 'education' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
>
Education
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Project 1 - AI Solution */}
<div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
<div className="h-56 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Advanced%20AI%20visualization%20interface%20with%20neural%20networks%2C%20machine%20learning%20algorithms%20display%2C%20futuristic%20technology%20dashboard%20with%20blue%20glowing%20elements%2C%20professional%20AI%20system%20interface&width=400&height=300&seq=11&orientation=landscape"
alt="AI-Powered Analytics Platform"
className="w-full h-full object-cover object-top"
/>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">AI & ML</span>
<span className="text-gray-500 text-sm">May 2025</span>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-2">AI-Powered Analytics Platform</h3>
<p className="text-gray-600 mb-4">Advanced analytics platform using machine learning for predictive business intelligence.</p>
<div className="mb-4 border-t border-gray-100 pt-4">
<div className="flex items-center">
<img
src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20female%20tech%20executive%2C%20business%20attire%2C%20neutral%20background%2C%20confident%20expression%2C%20corporate%20portrait%20style&width=40&height=40&seq=12&orientation=squarish"
alt="Client"
className="w-8 h-8 rounded-full mr-2"
/>
<div className="flex-1">
<p className="text-sm text-gray-800 font-medium">Emily Chen</p>
<p className="text-xs text-gray-600">Data Science Director, TechCorp</p>
</div>
</div>
<p className="text-sm text-gray-600 italic mt-2">"The AI platform revolutionized our data analysis capabilities."</p>
</div>
<button className="text-blue-600 font-medium inline-flex items-center cursor-pointer">
View Project <i className="fas fa-arrow-right ml-2"></i>
</button>
</div>
</div>
{/* Project 2 */}
<div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
<div className="h-56 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Modern%20hospital%20management%20system%20interface%2C%20patient%20records%20dashboard%2C%20medical%20scheduling%20application%2C%20healthcare%20software%20with%20clean%20design%2C%20professional%20medical%20interface%20with%20blue%20color%20scheme&width=400&height=300&seq=7&orientation=landscape"
alt="Hospital Management System"
className="w-full h-full object-cover object-top"
/>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Healthcare</span>
<span className="text-gray-500 text-sm">April 2025</span>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-2">Hospital Management System</h3>
<p className="text-gray-600 mb-4">An integrated system for patient management, scheduling, and medical records.</p>
<button className="text-blue-600 font-medium inline-flex items-center cursor-pointer">
View Project <i className="fas fa-arrow-right ml-2"></i>
</button>
</div>
</div>
{/* Project 3 */}
<div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
<div className="h-56 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Modern%20real%20estate%20property%20listing%20platform%2C%20property%20management%20dashboard%2C%20real%20estate%20application%20with%20map%20integration%2C%20professional%20interface%20with%20blue%20color%20scheme%2C%20property%20booking%20system&width=400&height=300&seq=8&orientation=landscape"
alt="Real Estate Platform"
className="w-full h-full object-cover object-top"
/>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Real Estate</span>
<span className="text-gray-500 text-sm">March 2025</span>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-2">Real Estate Platform</h3>
<p className="text-gray-600 mb-4">A property management and listing platform with virtual tour capabilities.</p>
<button className="text-blue-600 font-medium inline-flex items-center cursor-pointer">
View Project <i className="fas fa-arrow-right ml-2"></i>
</button>
</div>
</div>
</div>
<div className="text-center mt-12 space-y-4">
<a href="https://readdy.ai/home/e7c8e58b-0acf-4121-ad2b-5db1637a88f0/2c62704b-f8e4-4175-92fa-5ead90039b5d" data-readdy="true">
<button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
View All Projects
</button>
</a>
</div>
</div>
</section>

    </>
  )
}

export default Projects