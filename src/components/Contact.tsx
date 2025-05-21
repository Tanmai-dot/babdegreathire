import React from "react";

const Contact = () => (
    <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                    <p className="text-gray-600 mb-8">
                        Ready to start your next project? Contact us today for a free consultation and quote.
                    </p>
                    <div className="space-y-6">
                        {/* Office */}
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                <i className="fas fa-map-marker-alt text-blue-600"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 mb-1">Our Office</h3>
                                <p className="text-gray-600">123 Tech Park, Silicon Valley, CA 94025, USA</p>
                            </div>
                        </div>
                        {/* Phone */}
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                <i className="fas fa-phone-alt text-blue-600"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 mb-1">Phone</h3>
                                <p className="text-gray-600">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        {/* Email */}
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                <i className="fas fa-envelope text-blue-600"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 mb-1">Email</h3>
                                <p className="text-gray-600">info@greathire.com</p>
                            </div>
                        </div>
                    </div>
                    {/* Social Links */}
                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-gray-800 mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300 cursor-pointer"
                                aria-label="Facebook"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition duration-300 cursor-pointer"
                                aria-label="Twitter"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition duration-300 cursor-pointer"
                                aria-label="LinkedIn"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition duration-300 cursor-pointer"
                                aria-label="YouTube"
                            >
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Contact Form */}
                <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                                placeholder="Project Inquiry"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                                placeholder="Tell us about your project..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 whitespace-nowrap cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;