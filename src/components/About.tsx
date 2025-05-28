

const stats = [
    { value: '200+', label: 'Projects Completed' },
    { value: '50+', label: 'Team Members' },
    { value: '15+', label: 'Industries Served' },
    { value: '98%', label: 'Client Satisfaction' },
];

const About = () => (
    <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        About GREATHIRE
                    </h2>
                    <p className="text-gray-600 mb-6">
                        GREATHIRE is a leading digital solutions provider specializing in AI-powered software development, cloud architecture, web and mobile applications, and comprehensive digital marketing services across multiple industries.
                    </p>
                    <p className="text-gray-600 mb-6">
                        Founded in 2017, we've grown to become a trusted partner for businesses looking to leverage cutting-edge technology for growth and innovation. Our team of experienced AI engineers, cloud architects, full-stack developers, and digital strategists work collaboratively to deliver exceptional results powered by the latest technologies including AWS and artificial intelligence.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mb-8">
                        {stats.map(({ value, label }) => (
                            <div className="flex flex-col" key={label}>
                                <span className="text-3xl font-bold text-blue-600">{value}</span>
                                <span className="text-gray-600">{label}</span>
                            </div>
                        ))}
                    </div>
                    <a href="https://greathire.in/about">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 whitespace-nowrap cursor-pointer">
                            Learn More About Us
                        </button>
                    </a>
                </div>
                {/* Right Content */}
                <div className="relative">
                    <img
                        src="https://lh3.googleusercontent.com/p/AF1QipMR-CJa-HUn2WB8_8t_7z6_T5D-AmbIDWcbfN1i=s680-w680-h510-rw"
                        alt="GREATHIRE Team"
                        className="rounded-xl shadow-lg w-full transition-transform duration-700 ease-in-out hover:scale-105"
                    />
                </div>
                {/* End Right Content */}
            </div>
        </div>
    </section>
);

export default About;