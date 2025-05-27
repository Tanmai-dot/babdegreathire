import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// const navLinks = [
//     { id: 'home', label: 'Home' },
//     { id: 'industries', label: 'Industries' },
//     { id: 'services', label: 'Services' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'about', label: 'About' },
//     { id: 'contact', label: 'Contact' },
// ];

const socialLinks = [
    {
        href: 'https://www.linkedin.com/company/greathire/',
        label: 'LinkedIn',
        icon: 'fab fa-linkedin-in',
    },
    {
        href: 'https://www.instagram.com/great_hire?igsh=MW9tYmg3bjdvOXVtYw==',
        label: 'Instagram',
        icon: 'fab fa-instagram',
    },
    {
        href: 'https://youtube.com/@greathire-t6m?si=PNBQhMeEicw9iDz3',
        label: 'YouTube',
        icon: 'fab fa-youtube',
    },
];

const industries = [
    'Staffing & Recruitment',
    'Information Technology',
    'Digital Marketing',
    'Real Estate',
    'Cyber Security',
];

const services = [
    'Staffing & Recruitment',
    'Web Development',
    'Mobile App Development',
    'Digital Marketing',
    'Cloud Solutions',
    'AI Solutions & Voice Agents',
];

const contactInfo = [
    {
        icon: 'fas fa-map-marker-alt',
        text: '5th Floor,Doc,Vasantha Bhavana Rd,Whitefields Kondapur,Hyderabad Telangana 500006',
        isAddress: true,
    },
    {
        icon: 'fas fa-phone-alt',
        text: '+91-8328192093',
    },
    {
        icon: 'fas fa-envelope',
        text: 'hr@babde.tech',
    },
    {
        icon: 'fas fa-clock',
        text: 'Monday-Saturday: 24/7',
    },
];

const footerLinks = [
    { href: '#', text: 'Privacy Policy' },
    { href: '#', text: 'Terms of Service' },

];

const Footer: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (sectionId: string) => {
        if (location.pathname === '/') {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(`/#${sectionId}`);
        }
    };

    return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-6">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                {/* Brand & Social */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">
                        GREAT<span className="text-blue-700">HIRE</span>
                    </h2>
                    <p className="text-gray-400 mb-6">
                        Transforming businesses with cutting-edge technology solutions and digital expertise.
                    </p>
                    <div className="flex space-x-4">
                        {socialLinks.map(({ href, label, icon }) => (
                            <a
                                key={label}
                                href={href}
                                className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                                aria-label={label}
                            >
                                <i className={icon}></i>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Industries */}
                <div>
                    <h3 className="text-lg font-semibold mb-6">Industries</h3>
                    <ul className="space-y-3">
                        {industries.map((industry) => (
                            <li key={industry}>
                                <a
                                    onClick={() => handleNavClick('industries')}
                                    href="#industries"
                                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                                >
                                    {industry}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                    <h3 className="text-lg font-semibold mb-6">Services</h3>
                    <ul className="space-y-3">
                        {services.map((service) => (
                            <li key={service}>
                                <a
                                    onClick={() => handleNavClick('services')}
                                    href="#services"
                                    className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                                >
                                    {service}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-6">Contact</h3>
                    <ul className="space-y-3">
                        {contactInfo.map(({ icon, text, isAddress }) => (
                            <li
                                key={icon + text}
                                className={`flex items-${isAddress ? 'start' : 'center'}`}
                            >
                                <i className={`${icon} text-blue-400 mr-3${isAddress ? ' mt-1' : ''}`}></i>
                                <span className="text-gray-400">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="pt-8 border-t border-gray-800 text-center">
                <p className="text-gray-500">© 2025 GREATHIRE. All rights reserved.</p>
                <div className="flex justify-center space-x-6 mt-4">
                    {footerLinks.map(({ text }) => (
                        <a
                            key={text}
                            href={'https://greathire.in/policy/privacy-policy'}
                            className="text-gray-500 hover:text-gray-400 transition duration-300 text-sm cursor-pointer"
                        >
                            {text}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
);
};
export default Footer;
