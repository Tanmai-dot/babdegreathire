import React from 'react';

const stats = [
    { value: '200+', label: 'Projects Completed' },
    { value: '50+', label: 'Team Members' },
    { value: '15+', label: 'Industries Served' },
    { value: '98%', label: 'Client Satisfaction' },
];

const About = () => (
    <section id="about" className="py-20 bg-gray-50">
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
                    <a href="https://greathire.in/about">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 whitespace-nowrap cursor-pointer">
                            Learn More About Us
                        </button>
                    </a>
                </div>
                {/* Right Content */}
                <div className="relative">
                    <img
                        src="https://lh3.googleusercontent.com/p/AF1QipMR-CJa-HUn2WB8_8t_7z6_T5D-AmbIDWcbfN1i=s680-w680-h510-rw"
                        alt="GREATHIRE Team"
                        className="rounded-xl shadow-lg w-full"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-3 max-w-xs">
                        <div className="flex items-center">
                            <div className="flex text-yellow-400">
                                {Array.from({ length: 5 }).map((_, i) => (
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
                        <p className="text-gray-700 italic mt-2">
                            "GREATHIRE transformed our business with their innovative solutions and exceptional service."
                        </p>
                        <div className="mt-4">
                            <p className="font-medium text-gray-800">Sarah Johnson</p>
                            <p className="text-sm text-gray-600">CEO, TechVision Inc.</p>
                        </div>
                    </div>
                </div>
                {/* End Right Content */}
            </div>
        </div>
    </section>
);

export default About;
