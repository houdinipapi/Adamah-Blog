import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src="/images/contact1.jpg"
          alt="Contact Image"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div>
          <h1 className="font-bold text-center text-3xl">Contact</h1>
        </div>

        <div className="my-8 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="sm:w-1/2 w-full flex justify-center">
            <Image
              src="/images/contact1.jpg"
              alt="Contact image"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain object-center"
            />
          </div>

          <div className="sm:w-1/2 w-full flex justify-center">
            <form className="mt-8 space-y-6 w-full max-w-md" action="#" method="POST">
              <div className="rounded-md shadow-sm space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Your Message"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
