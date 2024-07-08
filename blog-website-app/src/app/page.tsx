import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">

      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src="/images/home2.jpg"
          alt="Home Image"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div>
          <h1 className="font-bold text-center text-3xl">Home</h1>
        </div>
        <div className="my-8 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">

          <div className="sm:w-1/2 w-full flex justify-center">
            <p className="shadow-lg text-xl font-semibold rounded-lg p-4">
              In the history of war...not all wars fought were won...On all the soldiers who took the big step into the battlefield...not all came back home....
              <br />
              <br />
              The pride of war is not solely based on emerging victorious...sometimes the courage to fight...the belief of fighting for something that you believe in and the desire to bring joy to those you left behind is the greatest source of motivation for soldiers...
              <br />
              <br />
              Gen Zs had the courage to challenge the gladiators...they reminisced the challenge...they fought to the end...May the departed HEROES and HEROINES rest in Power.
              <br />
              <br />
              <i>~ OCHIENG ONYANGO</i>
              

            </p>
          </div>

          <div className="sm:w-1/2 w-full flex justify-center">
            <Image
              src="/images/home2.jpg"
              alt="Home image"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain object-center"
            />
          </div>

        </div>
        
      </div>
        
    </div>
  );
}
