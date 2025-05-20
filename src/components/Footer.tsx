import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-6">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & Social */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">
                            GREAT<span className="text-blue-400">HIRE</span>
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Transforming businesses with cutting-edge technology solutions and digital expertise.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                                aria-label="Facebook"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                                aria-label="Twitter"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                                aria-label="LinkedIn"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
                                aria-label="Instagram"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    {/* Industries */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Industries</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                                    Information Technology
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                                    Healthcare
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                                    Real Estate
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                                    Education
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                                    E-commerce
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Services</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                                    Web Development
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                                    Mobile App Development
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                                    Digital Marketing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                                    UI/UX Design
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                                    Cloud Solutions
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <i className="fas fa-map-marker-alt text-blue-400 mr-3 mt-1"></i>
                                <span className="text-gray-400">
                                    123 Tech Park, Silicon Valley, CA 94025, USA
                                </span>
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

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-500">© 2025 GREATHIRE. All rights reserved.</p>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a
                            href="#"
                            className="text-gray-500 hover:text-gray-400 transition duration-300 text-sm cursor-pointer"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-gray-400 transition duration-300 text-sm cursor-pointer"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-gray-400 transition duration-300 text-sm cursor-pointer"
                        >
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;