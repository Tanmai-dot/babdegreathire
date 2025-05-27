

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="pt-24 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://readdy.ai/api/search-image?query=Modern%20tech%20office%20with%20gradient%20blue%20background%2C%20soft%20lighting%2C%20minimalist%20design%2C%20abstract%20digital%20elements%2C%20professional%20workspace%20atmosphere%2C%20high-tech%20environment%20with%20subtle%20technology%20elements%2C%20clean%20and%20professional%20aesthetic&width=1440&height=600&seq=1&orientation=landscape')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "600px",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent" />
      <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            GREATHIRE BY BABDE PVT.LTD
          </h1>
          <p className="text-xl mb-8">
            Transforming businesses across industries with cutting-edge
            technology solutions and digital expertise.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer"
            >
              Explore Our Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;