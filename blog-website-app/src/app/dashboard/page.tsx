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
          <h1 className="font-bold text-center text-3xl"><strong>DASHBOARD</strong></h1>
        </div>
        
        {/* Part 1 */}
        <div className="my-8 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="sm:w-1/2 w-full flex justify-center">
            <Image
              src="/images/dash3.jpg"
              alt="dashboard image"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain object-center"
            />
          </div>

          <div className="sm:w-1/2 w-full flex justify-center">
            <p className="shadow-lg font-semibold rounded-lg p-4">
              <strong>DEAR MOTHER</strong> <br />
              <br />
              Dear mother, I know you&apos;re concerned,<br />
              About my decision to take to the streets, to be heard.<br />
              But I must stand up, for what is right,<br />
              For justice and freedom, for the light.<br />
              <br />

              Last week&apos;s demonstration, a memory so vivid,<br />
              The armed turned against us, with bullets so cruel and vivid.<br />
              Many lives lost, many left maimed and broken,<br />
              But I will not falter, my spirit unspoken.<br />
              <br />

              I&apos;ve heard of abduction, of innocent citizens taken,<br />
              In broad daylight, their rights forsaken.<br />
              But I will not be silenced, I will not be a coward,<br />
              I&apos;ll take to the streets, to be heard, to be a beacon.<br />
              <br />

              If I don&apos;t return, tell my younger siblings to be strong,<br />
              To never give up, to fight for what is right.<br />
              To use my pen to communicate, to spread the word and be bold,<br />
              To give victims a befitting send off, if need be donate blood wholeheartedly,<br />
              Together we&apos;ll rise, and this iron fist regime requiem will be conducted.<br />
              <br />
              <i>~ OCHIENG ONYANGO</i>

            </p>
          </div>

        </div>

        {/* Part 2 */}
        <div className="my-8 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">

          <div className="sm:w-1/2 w-full flex justify-center">
            <p className="shadow-lg font-semibold rounded-lg p-4">
              <strong>MAY THE SOUL OF PAP ONDITI VICTIMS REST IN PEACE😭😭</strong><br />
              <br />
              Upon the road from Kisumu they did tread,<br />
              With hopes and dreams within their weary heads.<br />
              Calls made to loved ones, promises were spread,<br />
              Of reunions soon, in warmth they would be led.<br />
              <br />

              At Ahero, bags of rice they did procure,<br />
              To feed their families, to make their futures sure.<br />
              But fate&apos;s cruel hand, it did obscure,<br />
              Their final journey, destiny obscure.<br />
              <br />

              In Katito, bananas and water they did buy,<br />
              To quench their thirst beneath the blazing sky.<br />
              Little did they know, they soon would fly,<br />
              To realms unknown, where sorrow does lie.<br />
              <br />

              Among them, a boy with future bright,<br />
              A leader, a preacher, or a beacon of light.<br />
              But destiny&apos;s whim, it took its flight,<br />
              Leaving behind a void, an endless night.<br />
              <br />

              Mothers weep by the roadside, hearts torn apart,<br />
              Their promises broken, dreams shattered in part.<br />
              Gifts for children, now a painful art,<br />
              As sorrow grips, and tears freely start.<br />
              <br />
              <i>~OCHIENG ONYANGO</i>

            </p>
          </div>

          <div className="sm:w-1/2 w-full flex justify-center">
            <Image
              src="/images/dash5.jpg"
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
              src="/images/dash7.jpg"
              alt="dashboard image"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain object-center"
            />
          </div>

          <div className="sm:w-1/2 w-full flex justify-center">
            <p className="shadow-lg font-semibold rounded-lg p-4">
              <strong>HISTORY OF WAR</strong> <br />
              <br />
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

        </div>

        {/* Part 4 */}
        <div className="my-8 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">

          <div className="sm:w-1/2 w-full flex justify-center">
            <p className="shadow-lg font-semibold rounded-lg p-4">
              <strong>LET&apos;S SAVE THE FUTURE</strong> <br />
              <br />
              In Kenya&apos;s land of beauty and grace,<br />
              A challenge we face burden we bear,<br />
              Adolescents, 24.6%, a quarter of our race,<br />
              Their future, our hope, our nation&apos;s next in line.<br />
              <br />
              From 10 to 19, they&apos;re the ones to empower,<br />
              Their voices, their dreams, we must hear and support,<br />
              For they&apos;ll be the workers, mothers, and fathers of tomorrow,<br />
              Protected from harm, their potential we must borrow.<br />
              <br />
              Adolescent pregnancy, a threat to their fate,<br />
              Interrupted education, a loss we cannot abate,<br />
              Health and wealth suffer, a cycle we must break,<br />
              Delaying sexual initiation, a choice we must make.<br />
              <br />
              HIV infections rise, a burden we cannot ignore,<br />
              Adolescent mothers, a lifetime of treatment they must endure,<br />
              Poverty spreads like wildfire, a drain on our nation&apos;s resources,<br />
              Violence infringes on rights, a threat to our humanity&apos;s courses.<br />
              <br />
              Child marriage and FGM, practices we must denounce,<br />
              Perpetrators must face justice, a law we must enforce,<br />
              Triple threat, a drain on our girls, our families, and our land,<br />
              Everybody&apos;s responsibility, to end this menace, hand in hand.<br />
              <br />
              Say no to child violence, teenage pregnancy, a form of abuse,<br />
              It&apos;s a criminal offense, to aid child marriage, we must refuse,<br />
              Defilement punishable by law, we must report and stop before it&apos;s too late,<br />
              Children have a voice, they must shout, they must participate.<br />
              <br />
              Dial 1195, for assistance and aid,<br />
              Create awareness on sexuality issues, let&apos;s educate and persuade,<br />
              For a quality population, a prosperous nation we strive,<br />
              Together we can, empower our youth, and let our nation thrive.<br />
              <br />
              <i>~OCHIENG ONYANGO</i>

            </p>
          </div>

          <div className="sm:w-1/2 w-full flex justify-center">
            <Image
              src="/images/dash8.jpg"
              alt="dashboard image"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain object-center"
            />
          </div>

        </div>

        {/* Part 5 */}
        <div className="my-8 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="sm:w-1/2 w-full flex justify-center">
            <Image
              src="/images/african-women.jpg"
              alt="dashboard image"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain object-center"
            />
          </div>

          <div className="sm:w-1/2 w-full flex justify-center">
            <p className="shadow-lg font-semibold rounded-lg p-4">
              <strong>WOMEN&apos;S DAY</strong> <br />
              <br />
              Today is women&apos;s day...<br />
              I appreciate the women without whom our life would be a downer and a bum trip...<br />
              I appreciate those who brought essence in the vagueness of existence...<br />
              Those who taught us to live and to love...<br />
              Those who gave a clock to our timelessness and a radar to our journey...<br />
              I appreciate with a tender heart those who would endure our wrongs and those who believe in us even in moments of disbelief...<br />
              Much appreciation to those who throw a shade of light in a dimly lit futures full of unknowns...<br />
              You are the pillars upon which humanity rests...<br />
              You are we...<br />
              You are the springs upon which the world is nourished!<br />
              Happy women&apos;s Day<br />
              <br />
              <i>~ OCHIENG ONYANGO</i>
            </p>
          </div>

        </div>

        {/* Part 6 */}
        <div className="my-8 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">

          <div className="sm:w-1/2 w-full flex justify-center">
            <p className="shadow-lg font-semibold rounded-lg p-4">
              <strong>MOTHER&apos;S DAY</strong> <br />
              <br />
              We celebrate the MOTHERS who made us see the light of day<br />
              Alongside those who now lead the way....<br />
              Without you...<br />
              The world could have been pale and lifeless...<br />
              Humanity could have been grounded, extinct and forgotten...<br />
              HAPPY MOTHER&apos;S DAY TO ALL MOTHERS<br />

              <br />
              <i>~OCHIENG ONYANGO</i>

            </p>
          </div>

          <div className="sm:w-1/2 w-full flex justify-center">
            <Image
              src="/images/mother-africa.jpg"
              alt="dashboard image"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain object-center"
            />
          </div>

        </div>
        
      </div>
        

    </div>
  )
}

export default Dashboard