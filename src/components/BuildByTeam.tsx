import React from 'react';

const BuildByTeam: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Build By Team</h1>

        {/* CEO Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Meet Our CEO</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <img
                  src="https://via.placeholder.com/300x300?text=CEO+Photo"
                  alt="CEO"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Rostam Asad</h3>
                <p className="text-gray-700 mb-4">
                  Rostam Asad is the visionary CEO of Parlourly, India's first quick service app for on-demand home services.
                  With over 10 years of experience in the beauty and wellness industry, John has been instrumental in
                  revolutionizing how urban households access professional salon services from the comfort of their homes.
                </p>
                <p className="text-gray-700">
                  Under his leadership, Parlourly has grown to serve thousands of satisfied customers across major cities,
                  empowering households with convenient, high-quality beauty services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Development Team</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <img
                  src="https://via.placeholder.com/300x300?text=Developer+Photo"
                  alt="Lead Developer"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Shaikh Zahid</h3>
                <p className="text-gray-700 mb-4">
                  Shaikh Zahid is our lead developer, bringing expertise in full-stack development and a passion for creating
                  seamless user experiences. With a background in computer science and years of experience in mobile and web
                  app development, Jane has played a key role in building the robust technology behind Parlourly.
                </p>
                <p className="text-gray-700">
                  Her innovative approach to coding and commitment to quality have ensured that Parlourly's app is not only
                  functional but also intuitive and reliable for our users.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BuildByTeam;
