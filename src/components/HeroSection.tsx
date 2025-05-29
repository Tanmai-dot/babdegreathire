

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const isMobile = window.innerWidth < 768;
    const targetId = isMobile && id === 'contact' ? 'mobile-contact-end' : id;
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="pt-24 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://graphicsfamily.com/wp-content/uploads/edd/2024/10/Background-Professional-3D-Minimalist-Office-Logo-Mockup-on-Room-Wall-scaled.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "600px",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent" />
      <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
        <div className="max-w-2xl mt-30 text-white">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            GREATHIRE BY BABDE PVT.LTD
          </h1>
          <p className="text-xl mb-8">
            Transforming businesses across industries with cutting-edge
            technology solutions and digital expertise.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("services")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 !rounded-button whitespace-nowrap cursor-pointer"
            >
              Explore Our Services
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