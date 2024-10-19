import React from 'react';
import Welcome from '../../assets/welcome.png';
const Home = () => {
  return (
    <div className="bg-gray-100">
      <section className="bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-12">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Welcome to Our Professional Service
            </h1>
            <p className="text-lg text-gray-600 mb-6  ">
              We offer top-notch solutions to help you grow your business and reach your goals. Our team of experts is here to support you every step of the way.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
            >
              Learn More
            </a>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src={Welcome}
              alt="Professional Services"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 md:px-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
             
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovative Solutions</h3>
              <p className="text-gray-600">
                We provide creative and effective solutions tailored to your needs.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our experienced team ensures high-quality service and customer satisfaction.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                We are here to assist you round-the-clock with any issues or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center">
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="hover:text-gray-400">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400">Terms of Service</a>
              <a href="#" className="hover:text-gray-400">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
