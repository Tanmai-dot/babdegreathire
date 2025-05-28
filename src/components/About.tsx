
import { useState, useEffect, useRef } from 'react';
import video1 from '../assets/about/3251737-uhd_3840_2160_25fps.mp4';
import video2 from '../assets/about/3255275-uhd_3840_2160_25fps.mp4';


const stats = [
    { value: '200+', label: 'Projects Completed' },
    { value: '50+', label: 'Team Members' },
    { value: '15+', label: 'Industries Served' },
    { value: '98%', label: 'Client Satisfaction' },
];

const About = () => {
 const [activeVideo, setActiveVideo] = useState(0); // 0 for video1, 1 for video2
 const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];

 useEffect(() => {
 const currentVideoRef = videoRefs[activeVideo].current;
 if (currentVideoRef) {
      // Start playback and set a timer to switch
      currentVideoRef.currentTime = 0; // Start from the beginning
 currentVideoRef.play();

 const timer = setTimeout(() => {
        setActiveVideo((prev) => (prev === 0 ? 1 : 0)); // Switch to the next video
 }, 10000); // 10 seconds

 return () => clearTimeout(timer); // Clean up the timer
 }
 }, [activeVideo]); // Rerun effect when activeVideo changes

 return (
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
                <div className="relative overflow-hidden rounded-xl shadow-lg w-full h-96">
 {/* Adjust height as needed */}
                    <video
 ref={videoRefs[0]}
 src={video1}
 muted
 className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${activeVideo === 0 ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <video
 ref={videoRefs[1]}
 src={video2}
 muted
 className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${activeVideo === 1 ? 'opacity-100' : 'opacity-0'}`}
                    />
                </div>
                {/* End Right Content */}
            </div>
        </div>
    </section>
 );
};

export default About;