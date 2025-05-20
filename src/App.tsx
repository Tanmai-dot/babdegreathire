import React, { useState } from 'react';
import './App.css';
const App: React.FC = () => {
const [activeTab, setActiveTab] = useState('all');
const handleTabChange = (tab: string) => {
setActiveTab(tab);
};

  return (
    <>
     // The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.


<div className="min-h-screen bg-gray-50">
{/* Header */}
<header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
<div className="container mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center">
<h1 className="text-2xl font-bold text-blue-600">GREAT<span className="text-gray-800">HIRE</span></h1>
</div>
<nav className="hidden md:flex items-center space-x-8">
<a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
<a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Industries</a>
<a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
<a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Projects</a>
<a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
</nav>
<button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
Get a Quote
</button>
<button
  className="md:hidden text-gray-700 focus:outline-none cursor-pointer"
  aria-label="Open navigation menu"
>
  <i className="fas fa-bars text-xl"></i>
</button>
</div>
</header>
<section className="pt-24 relative overflow-hidden hero-section">
<div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent"></div>
<div className="container mx-auto px-6 relative z-10 h-full flex items-center">
<div className="max-w-2xl text-white">
<h1 className="text-5xl font-bold mb-4 leading-tight">Your Digital Success Partner</h1>
<p className="text-xl mb-8">Transforming businesses across industries with cutting-edge technology solutions and digital expertise.</p>
<div className="flex flex-wrap gap-4">
<button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
Explore Our Work
</button>
<button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
Contact Us
</button>
</div>
</div>
</div>
</section>
{/* Industry Categories Section */}
<section className="py-20 bg-white">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-gray-800 mb-4">Industry Expertise</h2>
<p className="text-gray-600 max-w-3xl mx-auto">We deliver exceptional digital solutions across multiple industries, tailoring our approach to meet the unique challenges and opportunities of each sector.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{/* Information Technology */}
<div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
<div className="h-48 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Modern%20IT%20workspace%20with%20developers%20working%20on%20code%2C%20multiple%20computer%20screens%20displaying%20programming%20interfaces%2C%20clean%20modern%20office%20environment%20with%20blue%20accent%20lighting%2C%20professional%20tech%20atmosphere&width=400&height=200&seq=2&orientation=landscape"
alt="Information Technology"
className="w-full h-full object-cover object-top"
/>
</div>
<div className="p-6">
<div className="text-blue-600 mb-2">
<i className="fas fa-laptop-code text-2xl"></i>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-2">Information Technology</h3>
<p className="text-gray-600 mb-4">Custom software solutions, system integration, and IT consulting for businesses of all sizes.</p>
<a href="#" className="text-blue-600 font-medium inline-flex items-center">
Learn more <i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
</div>
{/* Healthcare */}
<div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
<div className="h-48 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Modern%20hospital%20reception%20area%20with%20digital%20displays%2C%20clean%20medical%20environment%2C%20healthcare%20professionals%20using%20technology%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20medical%20setting%20with%20technological%20elements&width=400&height=200&seq=3&orientation=landscape"
alt="Healthcare"
className="w-full h-full object-cover object-top"
/>
</div>
<div className="p-6">
<div className="text-blue-600 mb-2">
<i className="fas fa-hospital text-2xl"></i>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-2">Healthcare</h3>
<p className="text-gray-600 mb-4">Hospital management systems, patient portals, and medical practice websites with HIPAA compliance.</p>
<a href="#" className="text-blue-600 font-medium inline-flex items-center">
Learn more <i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
</div>
{/* Real Estate */}
<div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
<div className="h-48 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Modern%20real%20estate%20office%20with%20digital%20property%20displays%2C%20agents%20using%20technology%20to%20showcase%20listings%2C%20clean%20professional%20environment%20with%20blue%20accent%20lighting%2C%20contemporary%20workspace%20with%20property%20models&width=400&height=200&seq=4&orientation=landscape"
alt="Real Estate"
className="w-full h-full object-cover object-top"
/>
</div>
<div className="p-6">
<div className="text-blue-600 mb-2">
<i className="fas fa-building text-2xl"></i>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-2">Real Estate</h3>
<p className="text-gray-600 mb-4">Property management platforms, listing websites, and virtual tour integration for real estate businesses.</p>
<a href="#" className="text-blue-600 font-medium inline-flex items-center">
Learn more <i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
</div>
{/* Education */}
<div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
<div className="h-48 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Modern%20educational%20facility%20with%20digital%20learning%20environment%2C%20students%20using%20technology%2C%20clean%20campus%20setting%20with%20blue%20accent%20lighting%2C%20contemporary%20learning%20space%20with%20technological%20elements&width=400&height=200&seq=5&orientation=landscape"
alt="Education"
className="w-full h-full object-cover object-top"
/>
</div>
<div className="p-6">
<div className="text-blue-600 mb-2">
<i className="fas fa-graduation-cap text-2xl"></i>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-2">Education</h3>
<p className="text-gray-600 mb-4">Hostel management systems, campus solutions, and educational institution websites.</p>
<a href="#" className="text-blue-600 font-medium inline-flex items-center">
Learn more <i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
</div>
</div>
</div>
</section>
{/* Services Section */}
<section className="py-20 bg-gray-50">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
<p className="text-gray-600 max-w-3xl mx-auto">We offer comprehensive digital solutions tailored to your business needs, from development to marketing.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Web Development */}
<div className="bg-white rounded-xl shadow p-8 transition-all duration-300 hover:shadow-lg">
<div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
<i className="fas fa-code text-blue-600 text-2xl"></i>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-3">Web Development</h3>
<p className="text-gray-600 mb-4">Custom websites and web applications built with the latest technologies and best practices.</p>
<ul className="text-gray-600 space-y-2 mb-6">
<li className="flex items-center">
<i className="fas fa-check text-green-500 mr-2"></i>
Frontend Development
</li>
<li className="flex items-center">
<i className="fas fa-check text-green-500 mr-2"></i>
Backend Development
</li>
<li className="flex items-center">
<i className="fas fa-check text-green-500 mr-2"></i>
Full Stack Solutions
</li>
</ul>
<a href="#" className="text-blue-600 font-medium inline-flex items-center">
Learn more <i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
{/* Mobile App Development */}
<div className="bg-white rounded-xl shadow p-8 transition-all duration-300 hover:shadow-lg">
<div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
<i className="fas fa-mobile-alt text-blue-600 text-2xl"></i>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-3">Mobile App Development</h3>
<p className="text-gray-600 mb-4">Native and cross-platform mobile applications for iOS and Android devices.</p>
<ul className="text-gray-600 space-y-2 mb-6">
<li className="flex items-center">
<i className="fas fa-check text-green-500 mr-2"></i>
iOS Development
</li>
<li className="flex items-center">
<i className="fas fa-check text-green-500 mr-2"></i>
Android Development
</li>
<li className="flex items-center">
<i className="fas fa-check text-green-500 mr-2"></i>
React Native & Flutter
</li>
</ul>
<a href="#" className="text-blue-600 font-medium inline-flex items-center">
Learn more <i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
{/* Cloud & AI Solutions */}
<div className="bg-white rounded-xl shadow p-8 transition-all duration-300 hover:shadow-lg">
<div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
<i className="fas fa-cloud text-blue-600 text-2xl"></i>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-3">Cloud & AI Solutions</h3>
<p className="text-gray-600 mb-4">Advanced cloud infrastructure and AI-powered solutions for modern businesses.</p>
<ul className="text-gray-600 space-y-2 mb-6">
<li className="flex items-center">
<i className="fas fa-check text-green-500 mr-2"></i>
AWS Cloud Architecture
</li>
<li className="flex items-center">
<i className="fas fa-check text-green-500 mr-2"></i>
Machine Learning Models
</li>
<li className="flex items-center">
<i className="fas fa-check text-green-500 mr-2"></i>
AI Integration Services
</li>
<li className="flex items-center">
<i className="fas fa-check text-green-500 mr-2"></i>
Cloud Security & DevOps
</li>
</ul>
<div className="mb-6 pt-4 border-t border-gray-100">
<div className="flex items-center mb-3">
<img
src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20male%20cloud%20architect%2C%20tech%20professional%20appearance%2C%20neutral%20background%2C%20confident%20smile%2C%20corporate%20portrait&width=40&height=40&seq=13&orientation=squarish"
alt="Cloud Expert"
className="w-8 h-8 rounded-full mr-2"
/>
<div>
<p className="text-sm text-gray-800 font-medium">Alex Thompson</p>
<p className="text-xs text-gray-600">Cloud Solutions Architect</p>
</div>
</div>
<p className="text-sm text-gray-600 italic">"We deliver scalable cloud solutions that grow with your business."</p>
</div>
<a href="#" className="text-blue-600 font-medium inline-flex items-center">
Learn more <i className="fas fa-arrow-right ml-2"></i>
</a>
</div>
</div>
</div>
</section>
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
<button
onClick={() => {
const projects = document.querySelectorAll('.grid-cols-3 > div');
projects.forEach(project => {
const projectBtn = project.querySelector('button');
if (projectBtn) {
projectBtn.click();
}
});
}}
className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer flex items-center justify-center mx-auto gap-2"
>
<i className="fas fa-paper-plane"></i>
Send All Projects
</button>
</div>
</div>
</section>

{/* Client Companies Section */}
<section className="py-16 bg-gray-50">
<div className="container mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-gray-800 mb-4">Trusted by Industry Leaders</h2>
<p className="text-gray-600 max-w-3xl mx-auto">We're proud to work with leading companies across various industries.</p>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
{/* Tech Companies */}
<div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
<i className="fab fa-microsoft text-4xl text-blue-600 mb-2"></i>
<span className="text-gray-700 font-medium">Microsoft</span>
</div>

<div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
<i className="fab fa-apple text-4xl text-gray-800 mb-2"></i>
<span className="text-gray-700 font-medium">Apple</span>
</div>

{/* Healthcare Companies */}
<div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
<i className="fas fa-hospital text-4xl text-blue-600 mb-2"></i>
<span className="text-gray-700 font-medium">City Hospital</span>
</div>

<div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
<i className="fas fa-clinic-medical text-4xl text-red-600 mb-2"></i>
<span className="text-gray-700 font-medium">MediCare Plus</span>
</div>

{/* Real Estate Companies */}
<div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
<i className="fas fa-building text-4xl text-blue-800 mb-2"></i>
<span className="text-gray-700 font-medium">RealtyTech Pro</span>
</div>

<div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
<i className="fas fa-home text-4xl text-green-600 mb-2"></i>
<span className="text-gray-700 font-medium">SmartHomes</span>
</div>

{/* Education Institutions */}
<div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
<i className="fas fa-university text-4xl text-purple-600 mb-2"></i>
<span className="text-gray-700 font-medium">EduTech Global</span>
</div>

<div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
<i className="fas fa-graduation-cap text-4xl text-indigo-600 mb-2"></i>
<span className="text-gray-700 font-medium">LearnSmart</span>
</div>
</div>

<div className="mt-12 text-center">
<p className="text-gray-600">Join over 500+ satisfied clients who trust GREATHIRE</p>
<div className="flex justify-center items-center gap-4 mt-4">
<i className="fab fa-cc-visa text-4xl text-blue-900"></i>
<i className="fab fa-cc-mastercard text-4xl text-red-600"></i>
<i className="fab fa-cc-paypal text-4xl text-blue-600"></i>
<i className="fab fa-cc-amex text-4xl text-blue-800"></i>
</div>
</div>
</div>
</section>

{/* Testimonials Section */}
<section className="py-20 bg-blue-50">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
<p className="text-gray-600 max-w-3xl mx-auto">Hear from our satisfied clients about their experience working with GREATHIRE.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Client Testimonial 1 */}
<div className="bg-white rounded-xl p-8 shadow-lg relative">
<div className="absolute -top-4 right-8 text-blue-500 text-5xl opacity-20">
<i className="fas fa-quote-right"></i>
</div>
<div className="mb-6">
<div className="flex mb-4">
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
</div>
<p className="text-gray-600 italic">"GREATHIRE's AI solutions have transformed our data analysis capabilities. Their team's expertise in machine learning and cloud architecture is exceptional."</p>
</div>
<div className="flex items-center">
<img
src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20female%20tech%20executive%2C%20business%20attire%2C%20confident%20expression%2C%20neutral%20background%2C%20corporate%20portrait&width=60&height=60&seq=20&orientation=squarish"
alt="Sarah Chen"
className="w-12 h-12 rounded-full mr-4"
/>
<div>
<h4 className="font-medium text-gray-800">Sarah Chen</h4>
<p className="text-sm text-gray-600">CTO, DataTech Solutions</p>
</div>
</div>
</div>
{/* Client Testimonial 2 */}
<div className="bg-white rounded-xl p-8 shadow-lg relative">
<div className="absolute -top-4 right-8 text-blue-500 text-5xl opacity-20">
<i className="fas fa-quote-right"></i>
</div>
<div className="mb-6">
<div className="flex mb-4">
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
</div>
<p className="text-gray-600 italic">"The hospital management system developed by GREATHIRE has streamlined our operations significantly. Their healthcare expertise is unmatched."</p>
</div>
<div className="flex items-center">
<img
src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20male%20doctor%2C%20medical%20attire%2C%20warm%20smile%2C%20hospital%20background%2C%20healthcare%20professional%20portrait&width=60&height=60&seq=21&orientation=squarish"
alt="Dr. James Wilson"
className="w-12 h-12 rounded-full mr-4"
/>
<div>
<h4 className="font-medium text-gray-800">Dr. James Wilson</h4>
<p className="text-sm text-gray-600">Medical Director, City Hospital</p>
</div>
</div>
</div>
{/* Client Testimonial 3 */}
<div className="bg-white rounded-xl p-8 shadow-lg relative">
<div className="absolute -top-4 right-8 text-blue-500 text-5xl opacity-20">
<i className="fas fa-quote-right"></i>
</div>
<div className="mb-6">
<div className="flex mb-4">
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
</div>
<p className="text-gray-600 italic">"Their AWS cloud expertise and real estate platform development have given us a competitive edge in the market. Highly recommended!"</p>
</div>
<div className="flex items-center">
<img
src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20real%20estate%20executive%2C%20business%20formal%20attire%2C%20confident%20pose%2C%20modern%20office%20background%2C%20corporate%20portrait&width=60&height=60&seq=22&orientation=squarish"
alt="Michael Thompson"
className="w-12 h-12 rounded-full mr-4"
/>
<div>
<h4 className="font-medium text-gray-800">Michael Thompson</h4>
<p className="text-sm text-gray-600">CEO, RealtyTech Pro</p>
</div>
</div>
</div>
</div>
{/* Employee Testimonials */}
<div className="mt-16">
<h3 className="text-2xl font-bold text-gray-800 text-center mb-12">Our Team Stories</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{/* Employee Testimonial 1 */}
<div className="bg-white rounded-xl p-8 shadow-lg flex items-start">
<img
src="https://readdy.ai/api/search-image?query=Professional%20software%20developer%20portrait%2C%20casual%20tech%20company%20attire%2C%20friendly%20smile%2C%20modern%20office%20background%2C%20tech%20professional%20headshot&width=80&height=80&seq=23&orientation=squarish"
alt="David Kumar"
className="w-16 h-16 rounded-full mr-6"
/>
<div>
<h4 className="font-medium text-gray-800 mb-2">David Kumar</h4>
<p className="text-sm text-gray-600 mb-4">Senior Full Stack Developer</p>
<p className="text-gray-600">"Working at GREATHIRE has been an incredible journey. The culture of innovation and continuous learning keeps me excited about coming to work every day."</p>
</div>
</div>
{/* Employee Testimonial 2 */}
<div className="bg-white rounded-xl p-8 shadow-lg flex items-start">
<img
src="https://readdy.ai/api/search-image?query=Professional%20AI%20engineer%20portrait%2C%20smart%20casual%20attire%2C%20engaging%20smile%2C%20tech%20office%20background%2C%20female%20tech%20professional%20headshot&width=80&height=80&seq=24&orientation=squarish"
alt="Emily Zhang"
className="w-16 h-16 rounded-full mr-6"
/>
<div>
<h4 className="font-medium text-gray-800 mb-2">Emily Zhang</h4>
<p className="text-sm text-gray-600 mb-4">AI Solutions Architect</p>
<p className="text-gray-600">"Leading AI projects at GREATHIRE allows me to push the boundaries of what's possible with machine learning and cloud technologies."</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* About Section */}
<section className="py-20 bg-gray-50">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-bold text-gray-800 mb-6">About GREATHIRE</h2>
<p className="text-gray-600 mb-6">GREATHIRE is a leading digital solutions provider specializing in AI-powered software development, cloud architecture, web and mobile applications, and comprehensive digital marketing services across multiple industries.</p>
<p className="text-gray-600 mb-6">Founded in 2020, we've grown to become a trusted partner for businesses looking to leverage cutting-edge technology for growth and innovation. Our team of experienced AI engineers, cloud architects, full-stack developers, and digital strategists work collaboratively to deliver exceptional results powered by the latest technologies including AWS and artificial intelligence.</p>
<div className="grid grid-cols-2 gap-6 mb-8">
<div className="flex flex-col">
<span className="text-3xl font-bold text-blue-600">200+</span>
<span className="text-gray-600">Projects Completed</span>
</div>
<div className="flex flex-col">
<span className="text-3xl font-bold text-blue-600">50+</span>
<span className="text-gray-600">Team Members</span>
</div>
<div className="flex flex-col">
<span className="text-3xl font-bold text-blue-600">15+</span>
<span className="text-gray-600">Industries Served</span>
</div>
<div className="flex flex-col">
<span className="text-3xl font-bold text-blue-600">98%</span>
<span className="text-gray-600">Client Satisfaction</span>
</div>
</div>
<button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
Learn More About Us
</button>
</div>
<div className="relative">
<img
src="https://readdy.ai/api/search-image?query=Professional%20diverse%20team%20working%20in%20modern%20tech%20office%2C%20collaborative%20workspace%20with%20developers%20and%20designers%2C%20team%20meeting%20with%20digital%20displays%2C%20clean%20contemporary%20office%20with%20blue%20accent%20lighting&width=600&height=500&seq=9&orientation=landscape"
alt="GREATHIRE Team"
className="rounded-xl shadow-lg w-full"
/>
<div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 max-w-xs">
<div className="flex items-center mb-4">
<div className="flex">
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
</div>
<span className="ml-2 text-gray-600">5.0 Rating</span>
</div>
<p className="text-gray-700 italic">"GREATHIRE transformed our business with their innovative solutions and exceptional service."</p>
<div className="mt-4 flex items-center">
<img
src="https://readdy.ai/api/search-image?query=Professional%20business%20portrait%20of%20a%20middle-aged%20executive%20with%20confident%20expression%2C%20neutral%20background%2C%20corporate%20headshot%20style%2C%20business%20attire%2C%20clean%20professional%20lighting&width=50&height=50&seq=10&orientation=squarish"
alt="Client"
className="w-10 h-10 rounded-full mr-3"
/>
<div>
<p className="font-medium text-gray-800">Sarah Johnson</p>
<p className="text-sm text-gray-600">CEO, TechVision Inc.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Contact Section */}
<section className="py-20 bg-white">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div>
<h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
<p className="text-gray-600 mb-8">Ready to start your next project? Contact us today for a free consultation and quote.</p>
<div className="space-y-6">
<div className="flex items-start">
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<i className="fas fa-map-marker-alt text-blue-600"></i>
</div>
<div>
<h3 className="text-lg font-medium text-gray-800 mb-1">Our Office</h3>
<p className="text-gray-600">123 Tech Park, Silicon Valley, CA 94025, USA</p>
</div>
</div>
<div className="flex items-start">
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<i className="fas fa-phone-alt text-blue-600"></i>
</div>
<div>
<h3 className="text-lg font-medium text-gray-800 mb-1">Phone</h3>
<p className="text-gray-600">+1 (555) 123-4567</p>
</div>
</div>
<div className="flex items-start">
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
<i className="fas fa-envelope text-blue-600"></i>
</div>
<div>
<h3 className="text-lg font-medium text-gray-800 mb-1">Email</h3>
<p className="text-gray-600">info@greathire.com</p>
</div>
</div>
</div>
<div className="mt-8">
<h3 className="text-lg font-medium text-gray-800 mb-4">Follow Us</h3>
<div className="flex space-x-4">
<a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300 cursor-pointer">
<i className="fab fa-facebook-f"></i>
</a>
<a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition duration-300 cursor-pointer">
<i className="fab fa-twitter"></i>
</a>
<a href="#" className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition duration-300 cursor-pointer">
<i className="fab fa-linkedin-in"></i>
</a>
<a href="#" className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition duration-300 cursor-pointer">
<i className="fab fa-youtube"></i>
</a>
</div>
</div>
</div>
<div className="bg-gray-50 rounded-xl p-8 shadow-lg">
<h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
<form>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div>
<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
<input
type="text"
id="name"
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
placeholder="John Doe"
/>
</div>
<div>
<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
<input
type="email"
id="email"
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
placeholder="john@example.com"
/>
</div>
</div>
<div className="mb-6">
<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
<input
type="text"
id="subject"
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
placeholder="Project Inquiry"
/>
</div>
<div className="mb-6">
<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
<textarea
id="message"
rows={4}
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
placeholder="Tell us about your project..."
></textarea>
</div>
<button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
Send Message
</button>
</form>
</div>
</div>
</div>
</section>
{/* Footer */}
<footer className="bg-gray-900 text-white pt-16 pb-6">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div>
<h2 className="text-2xl font-bold mb-6">GREAT<span className="text-blue-400">HIRE</span></h2>
<p className="text-gray-400 mb-6">Transforming businesses with cutting-edge technology solutions and digital expertise.</p>
<div className="flex space-x-4">
<a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
<i className="fab fa-facebook-f"></i>
</a>
<a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
<i className="fab fa-twitter"></i>
</a>
<a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
<i className="fab fa-linkedin-in"></i>
</a>
<a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
<i className="fab fa-instagram"></i>
</a>
</div>
</div>
<div>
<h3 className="text-lg font-semibold mb-6">Industries</h3>
<ul className="space-y-3">
<li><a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">Information Technology</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">Healthcare</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">Real Estate</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">Education</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">E-commerce</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold mb-6">Services</h3>
<ul className="space-y-3">
<li><a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">Web Development</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">Mobile App Development</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">Digital Marketing</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">UI/UX Design</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">Cloud Solutions</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold mb-6">Contact</h3>
<ul className="space-y-3">
<li className="flex items-start">
<i className="fas fa-map-marker-alt text-blue-400 mr-3 mt-1"></i>
<span className="text-gray-400">123 Tech Park, Silicon Valley, CA 94025, USA</span>
</li>
<li className="flex items-center">
<i className="fas fa-phone-alt text-blue-400 mr-3"></i>
<span className="text-gray-400">+1 (555) 123-4567</span>
</li>
<li className="flex items-center">
<i className="fas fa-envelope text-blue-400 mr-3"></i>
<span className="text-gray-400">info@greathire.com</span>
</li>
<li className="flex items-center">
<i className="fas fa-clock text-blue-400 mr-3"></i>
<span className="text-gray-400">Mon-Fri: 9AM - 6PM</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-800 text-center">
<p className="text-gray-500">© 2025 GREATHIRE. All rights reserved.</p>
<div className="flex justify-center space-x-6 mt-4">
<a href="#" className="text-gray-500 hover:text-gray-400 transition duration-300 text-sm cursor-pointer">Privacy Policy</a>
<a href="#" className="text-gray-500 hover:text-gray-400 transition duration-300 text-sm cursor-pointer">Terms of Service</a>
<a href="#" className="text-gray-500 hover:text-gray-400 transition duration-300 text-sm cursor-pointer">Sitemap</a>
</div>
</div>
</div>
</footer>
</div>

    </>
  )
}

export default App
