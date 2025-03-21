import React from "react";
import fashion from "../Assets/video/fashion.mp4";
import Title from "antd/es/typography/Title";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

function HomePage() {
  return (
    <div>
      <div>
        <video autostart autoPlay src={fashion} type="video/mp4" />
      </div>
      <div className="grid grid-cols-4 gap-2 py-3 mx-2">
        <div className="bg-red-300 h-[20vh] p-[5%] rounded ">Section </div>
        <div className="bg-red-300 h-[20vh] p-[5%] rounded ">Section </div>
        <div className="bg-red-300 h-[20vh] p-[5%] rounded ">Section </div>
        <div className="bg-red-300 h-[20vh] p-[5%] rounded ">Section </div>
      </div>
      <section>
        <div className="h-[15vh] bg-slate-400">
          <div className="grid grid-cols-4 gap-3 w-full h-full">
            <div className="mx-auto my-auto">All india shipping</div>
            <div className="mx-auto my-auto">Order tracking</div>
            <div className="mx-auto my-auto">1000+ customers</div>
            <div className="mx-auto my-auto">Experienced Tailors</div>
          </div>
        </div>
      </section>
      <section className="py-[10vh]">
        <div>
          <Title className="text-center">Our Process</Title>
        </div>
        <div className="text-center">
          <ol>
            <li>1. Select your material</li>
            <li>Send us the product</li>
            <li>We'll stich and send it to you</li>
            <li>Check the fit and send us if alteration is required</li>
            <li>Send back to us and alter if necessary.</li>
          </ol>
        </div>

      </section>
      <section className="w-[100vw]">
        <div className="w-full py-10">
          <Title className="text-center">Must have Categories</Title>
        </div>
        <div className="grid grid-cols-5 gap-2 mx-[5%]">
          <div>
            {" "}
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
          <div>
            {" "}
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
          <div>
            {" "}
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
          <div>
            {" "}
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
          <div>
            {" "}
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
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
      <section className="bg-yellow-300 py-[15vh]">
        <div>
          <Title className="text-center">How to measure</Title>
        </div>
      </section>
      <section className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Types of designs</h2>
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
