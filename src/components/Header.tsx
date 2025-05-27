import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';

const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'industries', label: 'Industries' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
];

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
            <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">
                {/* Logo */}
                <h1
                    className="text-2xl font-bold text-gray-800 cursor-pointer"
                    onClick={() => handleNavClick('home')}
                >
                    GREAT<span className="text-blue-700">HIRE</span>
                </h1>

                {/* Navigation Links */}
                <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8">
                    {navLinks.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => handleNavClick(id)}
                            className="text-gray-700 hover:text-blue-600 font-medium"
                        >
                            {label}
                        </button>
                    ))}
                </nav>

                {/* Mobile Menu Icon */}
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
