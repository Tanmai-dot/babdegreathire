import React, { useState, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardBgImg from '../assets/wall.jpg'; // Adjust path if needed
import WhiteElegantImg from '../assets/white Elegant.png'; // Import the new image

interface Review {
    text: string;
    author: string;
}

interface TestimonialsProps {
    reviews: Review[];
    title: string;
}

const TestimonialsCarousel: React.FC<TestimonialsProps> = ({ reviews, title }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Start/stop auto-transition based on isPaused
    React.useEffect(() => {
        if (!isPaused) {
            startAutoTransition();
        } else {
            stopAutoTransition();
        }
        return () => stopAutoTransition();
    }, [reviews.length, isPaused]);

    const startAutoTransition = () => {
        stopAutoTransition();
        intervalRef.current = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 4000); // 4 seconds
    };

    const stopAutoTransition = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="mb-20 relative">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">{title}</h3>
            <div className="flex justify-center items-center relative h-[400px] overflow-visible group">
                {/* Left Arrow */}
                <button
                    className="absolute left-[-2%] top-1/2 transform -translate-y-1/2 rounded-full p-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    onClick={handlePrev}
                >
                    <i className="fas fa-chevron-left text-black opacity-70 text-4xl"></i>
                </button>

                {/* Cards */}
                <div
                    className="relative w-full max-w-5xl flex justify-center items-center"
                    style={{ minHeight: 350 }} // decreased height
                >
                    {reviews.map((review, index) => {
                        const isActive = index === activeIndex;
                        const isLeft = index === (activeIndex - 1 + reviews.length) % reviews.length;
                        const isRight = index === (activeIndex + 1) % reviews.length;

                        if (!(isActive || isLeft || isRight)) return null;

                        // Check for Lavanya S. and render image instead
                        const isLavanya = review.author === "Lavanya S.";

                        return (
                            <div
                                key={index}
                                className={`
                                    absolute
                                    transition-all duration-[3000ms] ease-in-out
                                    ${isActive
                                        ? "z-20 scale-105 bg-white opacity-100 left-1/2 -translate-x-1/2 cursor-pointer"
                                        : isLeft
                                        ? "z-10 scale-90 bg-gray-100 opacity-60 blur-sm left-1/4 -translate-x-1/2"
                                        : isRight
                                        ? "z-10 scale-90 bg-gray-100 opacity-60 blur-sm left-3/4 -translate-x-1/2"
                                        : "hidden"}
                                    rounded-xl shadow-md
                                `}
                                style={{
                                    width: isActive ? "350px" : "260px",
                                    height: isActive ? "350px" : "260px",
                                    pointerEvents: isActive ? "auto" : "none",
                                    backgroundImage: `url(${CardBgImg})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                                onMouseEnter={isActive ? () => setIsPaused(true) : undefined}
                                onMouseLeave={isActive ? () => setIsPaused(false) : undefined}
                            >
                                <div className="w-full h-full rounded-xl p-6 flex flex-col justify-between">
                                    {isLavanya ? (
                                        <img
                                            src={WhiteElegantImg}
                                            alt="Elegant White"
                                            className="w-full h-full object-contain rounded-xl"
                                        />
                                    ) : (
                                        <>
                                            <div>
                                                <div className="text-blue-500 text-xl opacity-30 mb-2">
                                                    <i className="fas fa-quote-left"></i>
                                                </div>
                                                <div className="flex justify-start mb-4">
                                                    {[...Array(5)].map((_, i) => (
                                                        <i
                                                            key={i}
                                                            className="fas fa-star text-yellow-400 mr-1"
                                                        ></i>
                                                    ))}
                                                </div>
                                                <p className="text-gray-600 italic text-sm text-justify">
                                                    "{review.text}"
                                                </p>
                                            </div>
                                            <div className="mt-2 text-right">
                                                <h4 className="font-medium text-gray-800 text-sm">
                                                    {review.author}
                                                </h4>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Right Arrow */}
                <button
                    className="absolute right-[-2%] top-1/2 transform -translate-y-1/2 rounded-full p-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    onClick={handleNext}
                >
                    <i className="fas fa-chevron-right text-black opacity-70 text-4xl"></i>
                </button>
            </div>
        </div>
    );
};

const reviews: Review[] = [
    {
        text: "The team delivered a tailor-made solution that streamlined our operations and improved our customer experience significantly. Their ability to understand our business needs and translate them into a functional application was impressive.",
        author: "Sarah Mitchell, Operations Director",
    },
    {
        text: "Since partnering with them, our software uptime has consistently remained above 99.9%. Their proactive monitoring and quick response times are a game-changer.",
        author: "Anita Desai, Systems Lead",
    },
    {
        text: "Thanks to Great Hire’s deep understanding of AI and cloud technologies, we were able to scale our software development team quickly and cost-effectively.",
        author: "VP of Engineering, Healthcare Software Company",
    },
    {
        text: "Their recruitment team understands both the tech and the culture fit. Our AI R&D center wouldn’t be where it is today without their support.",
        author: "Ananth, Director of Innovation",
    },
    {
        text: "From DevOps engineers to AI product managers, Great Hire delivered high-caliber professionals that matched our specific needs across multiple continents.",
        author: "Kushal, Hiring Manager",
    },
    {
        text: "We needed a hybrid team of cloud engineers and AI researchers for a confidential innovation project. Great Hire ensured fast, discreet, and top-quality placements.",
        author: "Sarath, CEO/Director",
    },
    {
        text: "We were looking for developers experienced in large language models and generative AI — Great Hire delivered outstanding talent in record time.",
        author: "SHIVU - Head of Product",
    },
    {
        text: "As a fast-growing fintech, we needed full-stack developers with experience in AI-driven risk modeling. Great Hire exceeded our expectations.",
        author: "KIRAN - Hiring Manager",
    },
    {
        text: "Their team understood the nuances of our tech stack, culture, and urgency. We hired six exceptional software engineers in one quarter.",
        author: "Satish - Engineering Manager, IoT Software Company",
    },
    {
        text: "The digital ad campaigns and local SEO optimizations helped us reach more patients in our area. Appointments doubled in just six weeks. We were amazed by the professionalism and data-driven approach.",
        author: "Dr. Robert Patel, Director",
    },
    {
        text: "Partnering with GreatHire for our digital marketing talent was a game-changer. The professionals they placed helped us double our ROI on paid ads within three months. They truly understand the digital landscape and our business goals.",
        author: "Sarah T., Marketing Director",
    },
    {
        text: "The digital marketing team we’ve built through GreatHire has completely transformed our online visibility. SEO, paid campaigns, content—every area has improved with their talent onboard.",
        author: "Laura J., CMO",
    },
    {
        text: "GreatHire helped us find a digital ad specialist who restructured our entire PPC campaign. Within 60 days, we saw a 45% decrease in cost-per-lead. They made hiring efficient and stress-free.",
        author: "Elena V., VP of Growth",
    },
    {
        text: "GreatHire quickly connected us with a skilled digital strategist who reshaped our online campaigns. We saw better engagement within the first month. Our website traffic doubled in 90 days thanks to the SEO specialist we hired through GreatHire.",
        author: "Nitish., CEO",
    },
    {
        text: "The content strategist GreatHire connected us with brought a fresh voice to our brand. Blog traffic and newsletter engagement have soared since she joined. Their recruitment process was seamless and fast. We launched our eCommerce site with a full marketing team from GreatHire.",
        author: "Raj., P-Hiring Manager",
    },
];

const teamStories: Review[] = [
    {
        text: "Joining GREATHIRE gave me the opportunity to work on cutting-edge AI projects with top-tier clients. The leadership truly understands tech talent and matches us with roles that challenge and grow our skills.",
        author: "Priya N., Machine Learning Engineer",
    },
    {
        text: "As a full-stack developer placed by GREATHIRE, I’ve had consistent support, career guidance, and access to high-impact SaaS companies. They’re more than recruiters — they're career partners.",
        author: "Jake L., Software Developer",
    },
    {
        text: "Working on GREATHIRE’s internal chatbot to streamline recruitment queries taught me practical NLP integration. The team encouraged experimentation, and I gained hands-on experience with Python, Transformers, and real user feedback.",
        author: "Priya M.",
    },
    {
        text: "Interning at GreatHire has been a turning point for me. I worked on a full-stack web application using React and Node.js, and received daily mentoring that helped me level up my coding and problem-solving skills. The tech leads really care about helping us grow.",
        author: "Ayesha M., B.Tech Student",
    },
    {
        text: "My project involved building REST APIs and integrating third-party services into a CRM platform. The team followed Agile methodology, and I learned how professional software development works from planning to deployment.",
        author: "Sneha T., Final Year CSE Student",
    },
    {
        text: "As a software developer intern at GreatHire, I've had the opportunity to work on real-world projects from day one. The mentorship here is amazing — my skills in React and Python have grown tremendously in just a few months.",
        author: "Priya R., Summer Intern",
    },
    {
        text: "GreatHire doesn't treat you like just an intern. I was part of client meetings, sprint planning, and code reviews. I've learned more here than in any classroom.",
        author: "David M., Backend Developer Intern",
    },
    {
        text: "The team culture at GreatHire is collaborative and empowering. My input was valued, and I even led a module implementation for one of our internal tools. This experience gave me the confidence to pursue full-time roles after graduation.",
        author: "Sara T., Full-Stack Developer",
    },
    {
        text: "The exposure to modern tools like GitHub Actions, Docker, and AWS was a game-changer. I now feel industry-ready thanks to GreatHire's hands-on approach.",
        author: "Jayden L.",
    },
    {
        text: "I joined with a basic understanding of web development, and now I'm proficient in REST APIs, Git workflows, and even containerization with Docker. GreatHire's structured mentorship and live projects accelerated my learning beyond expectations.",
        author: "Lavanya S.",
    },
    {
        text: "Grateful to Tanmai Ma'am for her guidance and support throughout my internship at GreatHire. Thanks to Sanket Babde Sir for fostering an innovative learning environment. This experience has strengthened my skills in AI and software development — I'm excited to apply what I've learned as I grow in my career!",
        author: "Nazir",
    },
    {
        text: "GreatHire didn’t just give me an internship—they gave me a career path. The real-world exposure, resume-building support, and mock interviews made all the difference. I’m now working at a top-tier firm with a great salary, all thanks to the wonderful team at GreatHire!",
        author: "Sai Kiran, Marketing Analyst",
    },
];

const TestimonialsPage: React.FC = () => {
    return (
        <section className="py-20 bg-blue-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Hear from our satisfied clients about their experience working with GREATHIRE.
                    </p>
                </div>

                {/* Client Reviews Carousel */}
                <TestimonialsCarousel reviews={reviews} title="Client Reviews" />

                {/* Team Stories Carousel below */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Our Team Stories</h2>
                    <TestimonialsCarousel reviews={teamStories} title="" />
                </div>
            </div>
        </section>
    );
};

export default TestimonialsPage;