import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex p-24">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to Our Coding Club! We teach coding to kids aged 9 to 11 in a fun and engaging way.
        </p>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[&apos;&apos;] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[&apos;&apos;] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark"
          src="/coding2.svg"
          alt="coding"
          width={200}
          height={200}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left p-24">
        <a
          href="#coding-adventure"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Join our Coding Adventure!{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Let your child explore the exciting world of coding with our interactive classes!
          </p>
        </a>

        <a
          href="#curriculum"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Curriculum{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Our comprehensive coding curriculum covers a wide range of topics, ensuring your child develops a strong foundation in computer science.
          </p>
        </a>

        <a
          href="#fun-activities"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Filled with Fun Activities!{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            From coding games to creative projects, there&apos;s something for every child to enjoy!
          </p>
        </a>

        <a
          href="#start-coding"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Start Coding Today!{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Give your child a head start in technology with our coding classes!
          </p>
        </a>
      </div>

      <section id="coding-adventure" className="w-full max-w-5xl p-24 min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image
            src="/coding.svg"
            alt="Coding Adventure"
            width={300}
            height={300}
            priority
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">Join our Coding Adventure!</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Engaging and interactive classes.</li>
              <li>Hands-on projects and fun activities.</li>
              <li>Introduction to basic Python concepts.</li>
              <li>Control flow, data structures, functions.</li>
              <li>Create a simple text-based game as a final project.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="curriculum" className="w-full max-w-5xl p-24 min-h-screen flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6 text-center">Curriculum</h2>
        <p className="mb-6 text-center">
          Our comprehensive coding curriculum covers a wide range of topics, ensuring your child develops a strong foundation in computer science.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Fundamentals of Coding</h3>
            <p>Introduction to coding principles and basic concepts.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
            <p>Develop problem-solving skills through coding challenges and projects.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Advanced Topics</h3>
            <p>Introduction to more complex programming concepts and techniques.</p>
          </div>
        </div>
      </section>

      <section id="fun-activities" className="w-full max-w-5xl p-24 min-h-screen flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6">Filled with Fun Activities!</h2>
        <p className="mb-6">Here are a few:</p>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/dragon.svg"
              alt="Dragon Game"
              width={180}
              height={180}
              priority
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">Dragon Game</h3>
              <p>An adventurous journey through caves of uncertainty—flip a coin with your choice; enter a treasure cave for victory, or dare the dragon cave for defeat.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Great Question of Life</h3>
              <p>A cosmic quest where you&apos;re asked the ultimate question—input 42, forty-two, or forty two, and get a mystical &quot;Yes&quot;; say anything else, and receive a cosmic &quot;No.&quot;</p>
            </div>
            <Image
              src="/space.svg"
              alt="Deep Thought"
              width={180}
              height={180}
              priority
            />
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/coaster.svg"
              alt="Creative Projects"
              width={180}
              height={180}
              priority
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">Rollercoaster Eligibility Checker</h3>
              <p>Find out if you are tall enough to ride the rollercoaster, and no standing on your toes is not allowed.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="start-coding" className="w-full max-w-5xl p-24 min-h-screen flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6">Start Coding Today!</h2>
        <p className="mb-6">
          Give your child a head start in technology with our coding classes! Enroll now and watch as they develop skills that will serve them for a lifetime. Our classes are designed to be accessible and enjoyable for kids aged 9 to 11, making it easy for them to start their coding journey.
        </p>
        <p className="mb-6">For more information and to enroll, please contact us at:</p>
        <p>Email: info@codingclub.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>
    </main>
  );
}
