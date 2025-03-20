const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-pink-500 to-rose-500 text-white text-center overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] bg-gradient-to-br from-pink-300/30 via-rose-300/30 to-pink-200/30 backdrop-blur-3xl transform rotate-12"></div>
        <div className="absolute -inset-[10px] bg-gradient-to-tl from-rose-200/20 via-pink-300/20 to-pink-100/20 backdrop-blur-3xl transform -rotate-12"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
          Welcome to Our Landing Page
        </h1>
        <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
          The best place to showcase your product and connect with your audience.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#features"
            className="px-8 py-4 bg-white text-pink-600 rounded-full text-lg font-semibold hover:bg-pink-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-pink-700 text-white rounded-full text-lg font-semibold hover:bg-pink-800 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-pink-300/30"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;