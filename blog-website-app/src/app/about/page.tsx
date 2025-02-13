import React from 'react'
import Image from 'next/image';

export default function About() {
  return (
    <div className="relative min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">

      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src="/images/about1.jpg"
          alt="Dashboard Image"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div>
          <h1 className="font-bold text-center text-3xl"><strong>ABOUT AUTHOR</strong></h1>
        </div>
        <div className="my-8 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="sm:w-1/2 w-full flex justify-center">
            <Image
              src="/images/about1.jpg"
              alt="about image"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain object-center"
            />
          </div>

          <div className="sm:w-1/2 w-full flex justify-center">
            <p className="shadow-lg rounded-lg p-4 font-semibold">
              <i>OCHIENG ONYANGO</i> is a passionate poet whose words weave vivid imagery and deep emotions.
              <br />
              His work explores themes of love, identity, and the human experience, drawing inspiration from everyday moments and profound personal journeys.
              <br />
              With a unique voice and a gift for storytelling, Ochieng&apos;s poetry resonates with readers, inviting them to reflect and connect on a deeper level.
              <br />
              His collections have been celebrated for their lyrical beauty and poignant insights, making him a cherished voice in contemporary poetry.
            </p>
          </div>

        </div>
        
      </div>
        
    </div>
  )
}
