import React from 'react';

const industries = [
    {
        title: 'Information Technology',
        icon: 'fas fa-laptop-code',
        image:
            'https://readdy.ai/api/search-image?query=Modern%20IT%20workspace%20with%20developers%20working%20on%20code%2C%20multiple%20computer%20screens%20displaying%20programming%20interfaces%2C%20clean%20modern%20office%20environment%20with%20blue%20accent%20lighting%2C%20professional%20tech%20atmosphere&width=400&height=200&seq=2&orientation=landscape',
        alt: 'Information Technology',
        description:
            'Custom software solutions, system integration, and IT consulting for businesses of all sizes.',
    },
    {
        title: 'Healthcare',
        icon: 'fas fa-hospital',
        image:
            'https://readdy.ai/api/search-image?query=Modern%20hospital%20reception%20area%20with%20digital%20displays%2C%20clean%20medical%20environment%2C%20healthcare%20professionals%20using%20technology%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20medical%20setting%20with%20technological%20elements&width=400&height=200&seq=3&orientation=landscape',
        alt: 'Healthcare',
        description:
            'Hospital management systems, patient portals, and medical practice websites with HIPAA compliance.',
    },
    {
        title: 'Real Estate',
        icon: 'fas fa-building',
        image:
            'https://readdy.ai/api/search-image?query=Modern%20real%20estate%20office%20with%20digital%20property%20displays%2C%20agents%20using%20technology%20to%20showcase%20listings%2C%20clean%20professional%20environment%20with%20blue%20accent%20lighting%2C%20contemporary%20workspace%20with%20property%20models&width=400&height=200&seq=4&orientation=landscape',
        alt: 'Real Estate',
        description:
            'Property management platforms, listing websites, and virtual tour integration for real estate businesses.',
    },
    {
        title: 'Education',
        icon: 'fas fa-graduation-cap',
        image:
            'https://readdy.ai/api/search-image?query=Modern%20educational%20facility%20with%20digital%20learning%20environment%2C%20students%20using%20technology%2C%20clean%20campus%20setting%20with%20blue%20accent%20lighting%2C%20contemporary%20learning%20space%20with%20technological%20elements&width=400&height=200&seq=5&orientation=landscape',
        alt: 'Education',
        description:
            'Hostel management systems, campus solutions, and educational institution websites.',
    },
];

const Industries: React.FC = () => (
    <section id='industries' className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Industry Expertise
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    We deliver exceptional digital solutions across multiple industries, tailoring our approach to meet the unique challenges and opportunities of each sector.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {industries.map(({ title, icon, image, alt, description }) => (
                    <div
                        key={title}
                        className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src={image}
                                alt={alt}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <div className="p-6">
                            <div className="text-blue-600 mb-2">
                                <i className={`${icon} text-2xl`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                            <p className="text-gray-600 mb-4">{description}</p>
                            <a
                                href="#"
                                className="text-blue-600 font-medium inline-flex items-center"
                            >
                                Learn more <i className="fas fa-arrow-right ml-2" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Industries;
