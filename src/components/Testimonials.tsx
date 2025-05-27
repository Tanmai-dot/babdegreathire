
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome

import CityBg from '../assets/wallpaper.jpg'; // Adjust path if needed
import TestimonialsCarousel from './TestimonialsCarousel';
interface Review {
    text: string;
    name: string;
    title: string;
}

const reviews: Review[] = [
    {
        text: "The team delivered a tailor-made solution that streamlined our operations and improved our customer experience significantly. Their ability to understand our business needs and translate them into a functional application was impressive.",
        name: "Sarah Mitchell",
        title: "Operations Director",
    },
    {
        text: "Since partnering with them, our software uptime has consistently remained above 99.9%. Their proactive monitoring and quick response times are a game-changer.",
        name: "Anita Desai",
        title: "Systems Lead",
    },
    {
        text: "Thanks to Great Hire’s deep understanding of AI and cloud technologies, we were able to scale our software development team quickly and cost-effectively.",
        name: "VP of Engineering",
        title: "Healthcare Software Company",
    },
    {
        text: "Their recruitment team understands both the tech and the culture fit. Our AI R&D center wouldn’t be where it is today without their support.",
        name: "Ananth",
        title: "Director of Innovation",
    },
    {
        text: "From DevOps engineers to AI product managers, Great Hire delivered high-caliber professionals that matched our specific needs across multiple continents.",
        name: "Kushal",
        title: "Hiring Manager",
    },
    {
        text: "We needed a hybrid team of cloud engineers and AI researchers for a confidential innovation project. Great Hire ensured fast, discreet, and top-quality placements.",
        name: "Sarath",
        title: "CEO/Director",
    },
    {
        text: "We were looking for developers experienced in large language models and generative AI — Great Hire delivered outstanding talent in record time.",
        name: "SHIVU",
        title: "Head of Product",
    },
    {
        text: "As a fast-growing fintech, we needed full-stack developers with experience in AI-driven risk modeling. Great Hire exceeded our expectations.",
        name: "KIRAN",
        title: "Hiring Manager",
    },
    {
        text: "Their team understood the nuances of our tech stack, culture, and urgency. We hired six exceptional software engineers in one quarter.",
        name: "Satish",
        title: "Engineering Manager, IoT Software Company",
    },
    {
        text: "The digital ad campaigns and local SEO optimizations helped us reach more patients in our area. Appointments doubled in just six weeks. We were amazed by the professionalism and data-driven approach.",
        name: "Dr. Robert Patel",
        title: "Director",
    },
    {
        text: "Partnering with GreatHire for our digital marketing talent was a game-changer. The professionals they placed helped us double our ROI on paid ads within three months. They truly understand the digital landscape and our business goals.",
        name: "Sarah T.",
        title: "Marketing Director",
    },
    {
        text: "The digital marketing team we’ve built through GreatHire has completely transformed our online visibility. SEO, paid campaigns, content—every area has improved with their talent onboard.",
        name: "Laura J.",
        title: "CMO",
    },
    {
        text: "GreatHire helped us find a digital ad specialist who restructured our entire PPC campaign. Within 60 days, we saw a 45% decrease in cost-per-lead. They made hiring efficient and stress-free.",
        name: "Elena V.",
        title: "VP of Growth",
    },
    {
        text: "GreatHire quickly connected us with a skilled digital strategist who reshaped our online campaigns. We saw better engagement within the first month. Our website traffic doubled in 90 days thanks to the SEO specialist we hired through GreatHire.",
        name: "Nitish.",
        title: "CEO",
    },
    {
        text: "The content strategist GreatHire connected us with brought a fresh voice to our brand. Blog traffic and newsletter engagement have soared since she joined. Their recruitment process was seamless and fast. We launched our eCommerce site with a full marketing team from GreatHire.",
        name: "Raj.",
        title: "P-Hiring Manager",
    },
];

const teamStories: Review[] = [
    {
        text: "Joining GREATHIRE gave me the opportunity to work on cutting-edge AI projects with top-tier clients. The leadership truly understands tech talent and matches us with roles that challenge and grow our skills.",
        name: "Priya N.",
        title: "Machine Learning Engineer",
    },
    {
        text: "As a full-stack developer placed by GREATHIRE, I’ve had consistent support, career guidance, and access to high-impact SaaS companies. They’re more than recruiters — they're career partners.",
        name: "Jake L.",
        title: "Software Developer",
    },
    {
        text: "Working on GREATHIRE’s internal chatbot to streamline recruitment queries taught me practical NLP integration. The team encouraged experimentation, and I gained hands-on experience with Python, Transformers, and real user feedback.",
        name: "Priya M.",
        title: "",
    },
    {
        text: "Interning at GreatHire has been a turning point for me. I worked on a full-stack web application using React and Node.js, and received daily mentoring that helped me level up my coding and problem-solving skills. The tech leads really care about helping us grow.",
        name: "Ayesha M.",
        title: "B.Tech Student",
    },
    {
        text: "My project involved building REST APIs and integrating third-party services into a CRM platform. The team followed Agile methodology, and I learned how professional software development works from planning to deployment.",
        name: "Sneha T.",
        title: "Final Year CSE Student",
    },
    {
        text: "As a software developer intern at GreatHire, I've had the opportunity to work on real-world projects from day one. The mentorship here is amazing — my skills in React and Python have grown tremendously in just a few months.",
        name: "Priya R.",
        title: "Summer Intern",
    },
    {
        text: "GreatHire doesn't treat you like just an intern. I was part of client meetings, sprint planning, and code reviews. I've learned more here than in any classroom.",
        name: "David M.",
        title: "Backend Developer Intern",
    },
    {
        text: "The team culture at GreatHire is collaborative and empowering. My input was valued, and I even led a module implementation for one of our internal tools. This experience gave me the confidence to pursue full-time roles after graduation.",
        name: "Sara T.",
        title: "Full-Stack Developer",
    },
    {
        text: "The exposure to modern tools like GitHub Actions, Docker, and AWS was a game-changer. I now feel industry-ready thanks to GreatHire's hands-on approach.",
        name: "Jayden L.",
        title: "",
    },
    {
        text: "I joined with a basic understanding of web development, and now I'm proficient in REST APIs, Git workflows, and even containerization with Docker. GreatHire's structured mentorship and live projects accelerated my learning beyond expectations.",
        name: "Lavanya S.",
        title: "",
    },
    {
        text: "Grateful to Tanmai Ma'am for her guidance and support throughout my internship at GreatHire. Thanks to Sanket Babde Sir for fostering an innovative learning environment. This experience has strengthened my skills in AI and software development — I'm excited to apply what I've learned as I grow in my career!",
        name: "Nazir",
        title: "",
    },
    {
        text: "GreatHire didn’t just give me an internship—they gave me a career path. The real-world exposure, resume-building support, and mock interviews made all the difference. I’m now working at a top-tier firm with a great salary, all thanks to the wonderful team at GreatHire!",
        name: "Sai Kiran",
        title: "Marketing Analyst",
    },
];

const TestimonialsPage: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-tl bg-gradient-to-r from-gray-800 via-blue-700 to-gray-900 relative overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full z-0"
                style={{
                    backgroundImage: `url(${CityBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.3, // Adjust opacity as needed
                }}
            />
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-blue-50 mb-4">What Our Clients Say</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        {/* You probably want to show reviews here */}
                    </p>
                </div>
                <TestimonialsCarousel reviews={reviews}/>
                <div className="mt-20">
                    <h2 className="text-4xl pb-10 font-bold text-blue-50 mb-6 text-center">Our Team Stories</h2>
                        <TestimonialsCarousel reviews={teamStories}/>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsPage;