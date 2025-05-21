import React from 'react';

const Testimonials = () => (
    <section id='testimonials' className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    What Our Clients Say
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Hear from our satisfied clients about their experience working with GREATHIRE.
                </p>
            </div>

            {/* Client Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-white rounded-xl p-8 shadow-lg relative">
                    <div className="absolute -top-4 right-8 text-blue-500 text-5xl opacity-20">
                        <i className="fas fa-quote-right"></i>
                    </div>
                    <div className="mb-6">
                        <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => (
                                <i key={i} className="fas fa-star text-yellow-400"></i>
                            ))}
                        </div>
                        <p className="text-gray-600 italic">
                            "GREATHIRE's AI solutions have transformed our data analysis capabilities. Their team's expertise in machine learning and cloud architecture is exceptional."
                        </p>
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

                {/* Testimonial 2 */}
                <div className="bg-white rounded-xl p-8 shadow-lg relative">
                    <div className="absolute -top-4 right-8 text-blue-500 text-5xl opacity-20">
                        <i className="fas fa-quote-right"></i>
                    </div>
                    <div className="mb-6">
                        <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => (
                                <i key={i} className="fas fa-star text-yellow-400"></i>
                            ))}
                        </div>
                        <p className="text-gray-600 italic">
                            "The hospital management system developed by GREATHIRE has streamlined our operations significantly. Their healthcare expertise is unmatched."
                        </p>
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

                {/* Testimonial 3 */}
                <div className="bg-white rounded-xl p-8 shadow-lg relative">
                    <div className="absolute -top-4 right-8 text-blue-500 text-5xl opacity-20">
                        <i className="fas fa-quote-right"></i>
                    </div>
                    <div className="mb-6">
                        <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => (
                                <i key={i} className="fas fa-star text-yellow-400"></i>
                            ))}
                        </div>
                        <p className="text-gray-600 italic">
                            "Their AWS cloud expertise and real estate platform development have given us a competitive edge in the market. Highly recommended!"
                        </p>
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
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-12">
                    Our Team Stories
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Employee 1 */}
                    <div className="bg-white rounded-xl p-8 shadow-lg flex items-start">
                        <img
                            src="https://readdy.ai/api/search-image?query=Professional%20software%20developer%20portrait%2C%20casual%20tech%20company%20attire%2C%20friendly%20smile%2C%20modern%20office%20background%2C%20tech%20professional%20headshot&width=80&height=80&seq=23&orientation=squarish"
                            alt="David Kumar"
                            className="w-16 h-16 rounded-full mr-6"
                        />
                        <div>
                            <h4 className="font-medium text-gray-800 mb-2">David Kumar</h4>
                            <p className="text-sm text-gray-600 mb-4">Senior Full Stack Developer</p>
                            <p className="text-gray-600">
                                "Working at GREATHIRE has been an incredible journey. The culture of innovation and continuous learning keeps me excited about coming to work every day."
                            </p>
                        </div>
                    </div>
                    {/* Employee 2 */}
                    <div className="bg-white rounded-xl p-8 shadow-lg flex items-start">
                        <img
                            src="https://readdy.ai/api/search-image?query=Professional%20AI%20engineer%20portrait%2C%20smart%20casual%20attire%2C%20engaging%20smile%2C%20tech%20office%20background%2C%20female%20tech%20professional%20headshot&width=80&height=80&seq=24&orientation=squarish"
                            alt="Emily Zhang"
                            className="w-16 h-16 rounded-full mr-6"
                        />
                        <div>
                            <h4 className="font-medium text-gray-800 mb-2">Emily Zhang</h4>
                            <p className="text-sm text-gray-600 mb-4">AI Solutions Architect</p>
                            <p className="text-gray-600">
                                "Leading AI projects at GREATHIRE allows me to push the boundaries of what's possible with machine learning and cloud technologies."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Testimonials;