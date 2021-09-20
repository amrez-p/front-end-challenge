import Head from "next/head";
import {
  ArrowLeftIcon,
  ArrowNarrowRightIcon,
  ArrowRightIcon,
  MenuIcon,
} from "@heroicons/react/outline";
export default function Home() {
  const ToggleMenu = () => {};
  return (
    <div>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="grid grid-cols-1 grid-rows-5 md:grid-cols-4 md:grid-rows-3 font-spartan min-h-screen">
        <header className="row-auto md:row-span-2 col-span-2  bg-ImgOne bg-no-repeat bg-contain md:bg-cover md:bg-center p-5 ">
          <nav className="text-center md:flex items-center justify-evenly text-gray-200 relative md:w-1/2">
            <span className="flex items-center">
              <MenuIcon onClick={ToggleMenu} className="h-8  md:invisible" />
              <h1 className="text-2xl font-bold ml-20 md:ml-0 md:mr-4">room</h1>
            </span>
            <ul className="flex bg-white text-black justify-evenly container text-sm font-bold absolute top-0 p-5 drop-shadow-2xl lg:p-0 lg:drop-shadow-none lg:static lg:bg-transparent lg:text-gray-200">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <span className="flex items-center absolute top-44  -right-4 visible sm:invisible">
              <ArrowLeftIcon className="h-10 md:h-12 bg-black text-white p-2 cursor-pointer" />
              <ArrowRightIcon className="h-10 md:h-12 bg-black text-white p-2 cursor-pointer" />
            </span>
          </nav>
        </header>
        <section className="row-auto md:row-span-2 col-span-2 px-6 md:mb-14 md:p-24 relative">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-6">
            Discover innovative ways to decorate
          </h2>
          <p className="text-gray-500 text-md font-normalBold mb-10 ">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <button className="flex item-center text-lg md:text-xl outline-none uppercase font-normalBold cursor-pointer ">
            Shop now <ArrowNarrowRightIcon className="h-7 ml-5" />
          </button>
          <span className="flex items-center absolute bottom-25 right-0 invisible lg:visible lg:-bottom-14 lg:left-0">
            <ArrowLeftIcon className="h-10 md:h-12 bg-black text-white p-2 cursor-pointer" />
            <ArrowRightIcon className="h-10 md:h-12 bg-black text-white p-2 cursor-pointer" />
          </span>
        </section>

        {/* <section>
          <h3>We are available all across the globe</h3>
          <p>
            With stores all over the world, it's easy for you to find furniture
            for your home or place of business. Locally, we’re in most major
            cities throughout the country. Find the branch nearest you using our
            store locator. Any questions? Don't hesitate to contact us today.
          </p>
          <button>Shop now</button>
        </section>
        <section>
          Manufactured with the best materials
          <p>
            Our modern furniture store provide a high level of quality. Our
            company has invested in advanced technology to ensure that every
            product is made as perfect and as consistent as possible. With three
            decades of experience in this industry, we understand what customers
            want for their home and office.
          </p>
          <button>Shop now</button>
        </section> */}
        <article className="bg-ImgTwo bg-no-repeat bg-contain md:bg-cover md:bg-center mt-14 md:mt-0"></article>
        <article className="flex flex-col justify-center p-8 md:p-14 row-auto md:row-span-2 col-span-2">
          <h3 className="uppercase text-xl mb-4 font-semibold md:font-bold">
            About our furniture
          </h3>
          <p className="text-gray-500 text-md font-normalBold ">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </article>
        <article className="bg-ImgThree bg-no-repeat bg-contain md:bg-cover md:bg-center mt-14 md:mt-0"></article>
      </main>
    </div>
  );
}
