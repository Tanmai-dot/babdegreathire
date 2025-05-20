

const Header = () => (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600">
                GREAT<span className="text-gray-800">HIRE</span>
            </h1>
            <nav className="hidden md:flex items-center space-x-8">
                {['Home', 'Industries', 'Services', 'Projects', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href="#"
                        className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        {item}
                    </a>
                ))}
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

export default Header;
