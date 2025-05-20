import React from 'react';

const companies = [
    {
        icon: 'fab fa-microsoft text-blue-600',
        name: 'Microsoft',
    },
    {
        icon: 'fab fa-apple text-gray-800',
        name: 'Apple',
    },
    {
        icon: 'fas fa-hospital text-blue-600',
        name: 'City Hospital',
    },
    {
        icon: 'fas fa-clinic-medical text-red-600',
        name: 'MediCare Plus',
    },
    {
        icon: 'fas fa-building text-blue-800',
        name: 'RealtyTech Pro',
    },
    {
        icon: 'fas fa-home text-green-600',
        name: 'SmartHomes',
    },
    {
        icon: 'fas fa-university text-purple-600',
        name: 'EduTech Global',
    },
    {
        icon: 'fas fa-graduation-cap text-indigo-600',
        name: 'LearnSmart',
    },
];

const paymentIcons = [
    'fab fa-cc-visa text-blue-900',
    'fab fa-cc-mastercard text-red-600',
    'fab fa-cc-paypal text-blue-600',
    'fab fa-cc-amex text-blue-800',
];

const Companies = () => (
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Trusted by Industry Leaders
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    We're proud to work with leading companies across various industries.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {companies.map((company) => (
                    <div
                        key={company.name}
                        className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center"
                    >
                        <i className={`${company.icon} text-4xl mb-2`} />
                        <span className="text-gray-700 font-medium">{company.name}</span>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <p className="text-gray-600">
                    Join over 500+ satisfied clients who trust GREATHIRE
                </p>
                <div className="flex justify-center items-center gap-4 mt-4">
                    {paymentIcons.map((icon, idx) => (
                        <i key={idx} className={`${icon} text-4xl`} />
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Companies;