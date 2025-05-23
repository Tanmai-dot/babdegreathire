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
        title: 'Digital Marketing',
        icon: 'fas fa-bullhorn',
        image:
            'https://cdn.pixabay.com/photo/2021/10/18/19/34/social-media-6721926_1280.png',
        alt: 'Healthcare',
        description:
            'Hospital management systems, patient portals, and medical practice websites with HIPAA compliance.',
    },
    {
        title: 'Real Estate',
        icon: 'fas fa-building',
        image:
            'https://cdn.pixabay.com/photo/2023/10/06/18/33/ai-generated-8298890_1280.jpg',
        alt: 'Real Estate',
        description:
            'Property management platforms, listing websites, and virtual tour integration for real estate businesses.',
    },
    {
        title: 'Cyber Security',
        icon: 'fas fa-shield-alt',
        image:
            'https://cdn.pixabay.com/photo/2020/05/21/05/28/security-5199236_1280.jpg',
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
