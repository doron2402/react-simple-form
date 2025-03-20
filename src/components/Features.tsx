const Features = () => {
  return (
    <section className="features py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-card p-8 rounded-full bg-white/20 backdrop-blur-sm shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white text-center">Easy to Use</h3>
            <p className="text-white/80 text-center">Simple and intuitive interface that makes managing your tasks effortless.</p>
          </div>
          <div className="feature-card p-8 rounded-full bg-white/20 backdrop-blur-sm shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white text-center">Customizable</h3>
            <p className="text-white/80 text-center">Personalize your experience with custom categories and priorities.</p>
          </div>
          <div className="feature-card p-8 rounded-full bg-white/20 backdrop-blur-sm shadow-lg border border-white/20 hover:bg-white/30 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white text-center">Collaborative</h3>
            <p className="text-white/80 text-center">Work together with your team by sharing tasks and projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
