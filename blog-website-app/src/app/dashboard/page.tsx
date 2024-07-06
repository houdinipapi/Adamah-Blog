import React from 'react';
import Image from 'next/image';

const Dashboard = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src="/images/dash1.jpg"
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
        <div className="mt-4 columns-3">
          <p className="text-lg shadow-lg rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore dicta reiciendis ab vel dolor aliquid, cumque culpa assumenda expedita aliquam ducimus temporibus nihil deleniti odio voluptas rerum, non velit dignissimos esse deserunt. Perspiciatis repellat nobis tenetur cum nesciunt officia possimus, corrupti sequi doloremque nam consequuntur eveniet omnis, nemo molestias.
          </p>

          <p className="text-lg shadow-lg rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore dicta reiciendis ab vel dolor aliquid, cumque culpa assumenda expedita aliquam ducimus temporibus nihil deleniti odio voluptas rerum, non velit dignissimos esse deserunt. Perspiciatis repellat nobis tenetur cum nesciunt officia possimus, corrupti sequi doloremque nam consequuntur eveniet omnis, nemo molestias.
          </p>

          <p className="text-lg shadow-lg rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore dicta reiciendis ab vel dolor aliquid, cumque culpa assumenda expedita aliquam ducimus temporibus nihil deleniti odio voluptas rerum, non velit dignissimos esse deserunt. Perspiciatis repellat nobis tenetur cum nesciunt officia possimus, corrupti sequi doloremque nam consequuntur eveniet omnis, nemo molestias.
          </p>
        </div>
        
      </div>
        

    </div>
  )
}

export default Dashboard