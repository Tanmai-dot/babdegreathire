import React from 'react';

const stats = [
    { value: '200+', label: 'Projects Completed' },
    { value: '50+', label: 'Team Members' },
    { value: '15+', label: 'Industries Served' },
    { value: '98%', label: 'Client Satisfaction' },
];

const About = () => (
    <section id='about' className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        About GREATHIRE
                    </h2>
                    <p className="text-gray-600 mb-6">
                        GREATHIRE is a leading digital solutions provider specializing in AI-powered software development, cloud architecture, web and mobile applications, and comprehensive digital marketing services across multiple industries.
                    </p>
                    <p className="text-gray-600 mb-6">
                        Founded in 2017, we've grown to become a trusted partner for businesses looking to leverage cutting-edge technology for growth and innovation. Our team of experienced AI engineers, cloud architects, full-stack developers, and digital strategists work collaboratively to deliver exceptional results powered by the latest technologies including AWS and artificial intelligence.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mb-8">
                        {stats.map(({ value, label }) => (
                            <div className="flex flex-col" key={label}>
                                <span className="text-3xl font-bold text-blue-600">{value}</span>
                                <span className="text-gray-600">{label}</span>
                            </div>
                        ))}
                    </div>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 whitespace-nowrap cursor-pointer">
                        Learn More About Us
                    </button>
                </div>
                {/* Right Content */}
                <div className="relative">
                    <img
                        src="https://readdy.ai/api/search-image?query=Professional%20diverse%20team%20working%20in%20modern%20tech%20office%2C%20collaborative%20workspace%20with%20developers%20and%20designers%2C%20team%20meeting%20with%20digital%20displays%2C%20clean%20contemporary%20office%20with%20blue%20accent%20lighting&width=600&height=500&seq=9&orientation=landscape"
                        alt="GREATHIRE Team"
                        className="rounded-xl shadow-lg w-full"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 max-w-xs">
                        <div className="flex items-center mb-4">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 fill-current"
                                        viewBox="0 0 20 20"
                                    >
                                        <polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,18.99 10,15.27 4.18,18.99 6,12.14 0.49,7.64 7.41,7.36" />
                                    </svg>
                                ))}
                            </div>
                            <span className="ml-2 text-gray-600">5.0 Rating</span>
                        </div>
                        <p className="text-gray-700 italic">
                            "GREATHIRE transformed our business with their innovative solutions and exceptional service."
                        </p>
                        <div className="mt-4 flex items-center">
                            
                         <div>
                                <p className="font-medium text-gray-800">Sarah Johnson</p>
                                <p className="text-sm text-gray-600">CEO, TechVision Inc.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Right Content */}
            </div>
        </div>
    </section>
);

export default About;