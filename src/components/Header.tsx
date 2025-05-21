import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';

const Header = () => {
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
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={() => handleNavClick('home')}>
                    GREAT<span className="text-gray-800">HIRE</span>
                </h1>
                <nav className="hidden md:flex items-center space-x-8">
                    <button onClick={() => handleNavClick('home')} className="text-gray-700 hover:text-blue-600 font-medium">Home</button>
                    <button onClick={() => handleNavClick('industries')} className="text-gray-700 hover:text-blue-600 font-medium">Industries</button>
                    <button onClick={() => handleNavClick('services')} className="text-gray-700 hover:text-blue-600 font-medium">Services</button>
                    <button onClick={() => handleNavClick('projects')} className="text-gray-700 hover:text-blue-600 font-medium">Projects</button>
                    <button onClick={() => handleNavClick('about')} className="text-gray-700 hover:text-blue-600 font-medium">About</button>
                    <button onClick={() => handleNavClick('contact')} className="text-gray-700 hover:text-blue-600 font-medium">Contact</button>
                </nav>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 whitespace-nowrap cursor-pointer">
                    Get a Quote
                </button>
                <button
                    className="md:hidden text-gray-700 focus:outline-none cursor-pointer"
                    aria-label="Open navigation menu"
                >
                    <i className="fas fa-bars text-xl"></i>
                </button>
            </div>
        </header>
    );
};

export default Header;
