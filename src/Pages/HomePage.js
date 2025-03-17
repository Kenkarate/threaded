import React from "react";
import fashion from '../Assets/video/fashion.mp4'

function HomePage() {
  return (
    <div>
      <div>
      <video autostart autoPlay src={fashion} type="video/mp4" />
      </div>
      <div className="grid grid-cols-2">
        <div className="bg-green-200 h-[10vh] p-[5%] ">section 1</div>
        <div className="bg-blue-200 h-[10vh] p-[5%] ">section 2</div>
      </div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-lg">
            We are a company dedicated to providing the best products and
            services.
          </p>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
            <p>Detail about feature 1.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
            <p>Detail about feature 2.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
            <p>Detail about feature 3.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
          <p className="text-lg">
            We offer a variety of services to help you achieve your goals.
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <form>
            <div className="flex flex-col items-center gap-4">
              <input
                type="text"
                className="w-1/2 p-4 border rounded-md"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="w-1/2 p-4 border rounded-md"
                placeholder="Your Email"
              />
              <textarea
                className="w-1/2 p-4 border rounded-md"
                rows="4"
                placeholder="Your Message"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
