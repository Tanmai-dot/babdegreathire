import React from 'react';

const services = [
    {
        icon: 'fas fa-code',
        title: 'Web Development',
        description:
            'Custom websites and web applications built with the latest technologies and best practices.',
        features: [
            'Frontend Development',
            'Backend Development',
            'Full Stack Solutions',
        ],
        link: '#',
    },
    {
        icon: 'fas fa-mobile-alt',
        title: 'Mobile App Development',
        description:
            'Native and cross-platform mobile applications for iOS and Android devices.',
        features: [
            'iOS Development',
            'Android Development',
            'React Native & Flutter',
        ],
        link: '#',
    },
    {
        icon: 'fas fa-cloud',
        title: 'Cloud & AI Solutions',
        description:
            'Advanced cloud infrastructure and AI-powered solutions for modern businesses.',
        features: [
            'AWS Cloud Architecture',
            'Machine Learning Models',
            'AI Integration Services',
            'Cloud Security & DevOps',
        ],
        link: '#',
        expert: {
            img: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20male%20cloud%20architect%2C%20tech%20professional%20appearance%2C%20neutral%20background%2C%20confident%20smile%2C%20corporate%20portrait&width=40&height=40&seq=13&orientation=squarish',
            name: 'Alex Thompson',
            role: 'Cloud Solutions Architect',
            quote:
                '"We deliver scalable cloud solutions that grow with your business."',
        },
    },
];

const Services = () => (
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    We offer comprehensive digital solutions tailored to your business needs, from development to marketing.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                    <div
                        key={service.title}
                        className="bg-white rounded-xl shadow p-8 transition-all duration-300 hover:shadow-lg"
                    >
                        <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                            <i className={`${service.icon} text-blue-600 text-2xl`} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <ul className="text-gray-600 space-y-2 mb-6">
                            {service.features.map((feature) => (
                                <li key={feature} className="flex items-center">
                                    <i className="fas fa-check text-green-500 mr-2" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        {service.expert && (
                            <div className="mb-6 pt-4 border-t border-gray-100">
                                <div className="flex items-center mb-3">
                                    <img
                                        src={service.expert.img}
                                        alt={service.expert.name}
                                        className="w-8 h-8 rounded-full mr-2"
                                    />
                                    <div>
                                        <p className="text-sm text-gray-800 font-medium">{service.expert.name}</p>
                                        <p className="text-xs text-gray-600">{service.expert.role}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 italic">{service.expert.quote}</p>
                            </div>
                        )}
                        <a href={service.link} className="text-blue-600 font-medium inline-flex items-center">
                            Learn more <i className="fas fa-arrow-right ml-2" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Services;
