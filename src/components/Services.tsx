import React from 'react';

type Service = {
    icon: string;
    title: string;
    description: string;
    features: string[];
    link: string;
    expert?: {
        img: string;
        name: string;
        role: string;
        quote: string;
    };
};

const services: Service[] = [
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
        // Uncomment and fill if you want to show expert for this service
        // expert: {
        //     img: 'path/to/image.jpg',
        //     name: 'Jane Doe',
        //     role: 'Lead Web Developer',
        //     quote: 'We build scalable and robust web solutions.',
        // },
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
    },
    {
        icon: 'fas fa-laptop',
        title: 'Digital Marketing',
        description:
            'Data-driven digital marketing solutions to help businesses grow their online presence, generate leads, and drive sales through innovative strategies.',
        features: [
            'Content Marketing & Blogging',
            'Influencer & Affiliate Marketing',
            'SEO (Search Engine Optimization',
            'Email Campaign Automation',
        ],
        link: '#',
    },
];

const Services = () => (
    <section id='services' className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    We offer comprehensive digital solutions tailored to your business needs, from development to marketing.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
