import React from 'react';
import Image from 'next/image';

const Dashboard = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">

      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src="/images/dashback1.jpg"
          alt="Dashboard Image"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
      </div>

      <div className="relative">
        <div>
          <h1 className="font-bold text-center text-3xl">Dashboard</h1>
        </div>
        
        {/* Part 1 */}
        <div className="my-8 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="sm:w-1/2 w-full flex justify-center">
            <Image
              src="/images/dash2.jpg"
              alt="dashboard image"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain object-center"
            />
          </div>

          <div className="sm:w-1/2 w-full flex justify-center">
            <p className="shadow-lg text-xl rounded-lg p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Quia dolore dicta reiciendis ab vel dolor aliquid, cumque culpa assumenda expedita aliquam ducimus temporibus nihil deleniti odio voluptas rerum, non velit dignissimos esse deserunt. <br />
              Perspiciatis repellat nobis tenetur cum nesciunt officia possimus, corrupti sequi doloremque nam consequuntur eveniet omnis, nemo molestias. <br />
            </p>
          </div>

        </div>

        {/* Part 2 */}
        <div className="my-8 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">

          <div className="sm:w-1/2 w-full flex justify-center">
            <p className="shadow-lg text-xl rounded-lg p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Quia dolore dicta reiciendis ab vel dolor aliquid, cumque culpa assumenda expedita aliquam ducimus temporibus nihil deleniti odio voluptas rerum, non velit dignissimos esse deserunt. <br />
              Perspiciatis repellat nobis tenetur cum nesciunt officia possimus, corrupti sequi doloremque nam consequuntur eveniet omnis, nemo molestias. <br />
            </p>
          </div>

          <div className="sm:w-1/2 w-full flex justify-center">
            <Image
              src="/images/dash3.jpg"
              alt="dashboard image"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain object-center"
            />
          </div>

        </div>

        {/* Part 3 */}
        <div className="my-8 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="sm:w-1/2 w-full flex justify-center">
            <Image
              src="/images/dash4.jpg"
              alt="dashboard image"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain object-center"
            />
          </div>

          <div className="sm:w-1/2 w-full flex justify-center">
            <p className="shadow-lg text-xl rounded-lg p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Quia dolore dicta reiciendis ab vel dolor aliquid, cumque culpa assumenda expedita aliquam ducimus temporibus nihil deleniti odio voluptas rerum, non velit dignissimos esse deserunt. <br />
              Perspiciatis repellat nobis tenetur cum nesciunt officia possimus, corrupti sequi doloremque nam consequuntur eveniet omnis, nemo molestias. <br />
            </p>
          </div>

        </div>
        
      </div>
        

    </div>
  )
}

export default Dashboard