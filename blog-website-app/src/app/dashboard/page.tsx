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
          quality={100}
          className="opacity-50"
        />
      </div>

      <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg">
        <div>
          <h1 className="font-bold text-center text-3xl mt-10">Dashboard</h1>
        </div>
        <div className="mt-4">
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore dicta reiciendis ab vel dolor aliquid, cumque culpa assumenda expedita aliquam ducimus temporibus nihil deleniti odio voluptas rerum, non velit dignissimos esse deserunt. Perspiciatis repellat nobis tenetur cum nesciunt officia possimus, corrupti sequi doloremque nam consequuntur eveniet omnis, nemo molestias.
          </p>
        </div>
        
      </div>
        

    </div>
  )
}

export default Dashboard