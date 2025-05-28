import React from 'react';

const industries = [
    {
        title: 'Staffing & Recruitment',
        icon: 'fas fa-shield-alt',
        image: 'https://cdn.pixabay.com/photo/2019/04/16/11/15/job-4131482_1280.jpg',
        alt: 'Education',
        description: [
            'Tailored hiring services to connect businesses with top talent and streamline the recruitment process. In todays competitive market,finding the right talent quickly and efficiently is critical to business success.',
            'Our Staffing & Recruitment services are crafted to meet the unique needs of each client — whether you are scaling your team, filling a critical leadership role, or managing seasonal demands. We combine deep industry knowledge, proven hiring strategies +and innovative technology to deliver exceptional results.',
        ],
    },
    {
        title: 'Information Technology',
        icon: 'fas fa-laptop-code',
        image:
            'https://readdy.ai/api/search-image?query=Modern%20IT%20workspace%20with%20developers%20working%20on%20code%2C%20multiple%20computer%20screens%20displaying%20programming%20interfaces%2C%20clean%20modern%20office%20environment%20with%20blue%20accent%20lighting%2C%20professional%20tech%20atmosphere&width=400&height=200&seq=2&orientation=landscape',
        alt: 'Information Technology',
        description: [
            'In the modern digital era,technology is not just a support function — its a strategic advantage. We deliver end-to-end IT services to help businesses of all sizes harness the power of technology to increase efficiency, enhance user experiences, and gain a competitive edge.',
            'Our expert team collaborates with you to design,build,and maintain systems that are robust, secure, and scalable.Whether you are a startup looking to launch your first app or an enterprise undergoing digital transformation,we have got you covered.',
        ],
    },
    {
        title: 'Digital Marketing',
        icon: 'fas fa-bullhorn',
        image: 'https://cdn.pixabay.com/photo/2021/10/18/19/34/social-media-6721926_1280.png',
        alt: 'Healthcare',
        description: [
            'Grow your brand with effective marketing strategies.In the digital-first world, standing out is more challenging than ever. We help brands cut through the noise and connect with our ideal audience using powerful strategies across search, social, content, and more',
            'Whether you’re looking to build brand awareness, increase website traffic, or generate qualified leads, we tailor our digital marketing services to meet your goals.',
        ],
    },
    {
        title: 'Real Estate',
        icon: 'fas fa-building',
        image: 'https://cdn.pixabay.com/photo/2023/10/06/18/33/ai-generated-8298890_1280.jpg',
        alt: 'Real Estate',
        description: [
            'We build listing platforms, property management tools, and virtual tour integrations.Transform your real estate business with smart, scalable, and secure tech solutions.The real estate industry is rapidly evolving—and so are the expectations of modern buyers, sellers, and agents',
            'We help you navigate the complexities of the market and deliver exceptional customer experiences. We empower real estate professionals with digital platforms that streamline operations, enhance user experience, and drive more property sales.Whether you are an agency, developer, or property manager, our custom-built solutions are designed to meet your unique business goals',
        ],
    },
    {
        title: 'Cyber Security',
        icon: 'fas fa-shield-alt',
        image: 'https://cdn.pixabay.com/photo/2020/05/21/05/28/security-5199236_1280.jpg',
        alt: 'Cyber Security',
        description: [
            'Safeguard your digital systems, networks, and data In an age where cyberattacks are more sophisticated and frequent than ever, cybersecurity is no longer optional—its essential. Our cybersecurity services are designed to protect your organizations most valuable digital assets with a proactive, layered approach.',
            'Implement proactive threat prevention and defense strategies.From startups to enterprises, we help businesses identify vulnerabilities, mitigate risks, and stay ahead of evolving threats. Our team of cybersecurity experts works tirelessly to ensure your systems are secure, compliant, and resilient against attacks.',
        ],
    },
    {
        title: 'HVAC',
        icon: 'fas fa-snowflake',
        image: 'https://images.pexels.com/photos/2539462/pexels-photo-2539462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'HVAC',
        description: [
            'We specialize in comprehensive HVAC services—from project planning to execution—designed to maintain ideal temperature, ventilation, and air quality in every environment. Whether you are a homeowner, contractor, facility manager, or developer, we provide end-to-end HVAC solutions that combine innovation, engineering excellence, and sustainability. ',
            'We ensure comfortable and healthy environments through modern HVAC solutions. Our team of HVAC experts is dedicated to delivering high-quality services that meet the unique needs of each client. We leverage the latest technologies and best practices to design, install, and maintain HVAC systems that are efficient, reliable, and environmentally friendly.',
        ],
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {industries.map(({ title, icon, image, alt, description }) => (
                    <div
                        key={title}
                        className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                    >
                        <div className="h-70 overflow-hidden">
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
                            {description.map((para: string, idx: number) => (
                                <p key={idx} className="text-gray-600 mb-2">{para}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Industries;
