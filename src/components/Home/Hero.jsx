import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="md:flex md:relative lg:grid lg:grid-cols-[0.3125fr_0.375fr_0.3125fr] lg:bg-[linear-gradient(90deg,_#151515_0%_50%,_#ffffff_50%_100%)] lg:mx-auto lg:w-full overflow-hidden">
      <div className="hidden lg:relative lg:block lg:bg-grey-900">
        <motion.h1
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="hidden text-preset-1 md:top-1/3 md:right-[-163px] md:translate-y-[-50%] lg:block lg:text-white lg:absolute lg:mix-blend-difference lg:z-10"
        >
          MODERN <br /> ART GALLERY
        </motion.h1>
      </div>
      <motion.picture
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <source
          media="(min-width: 1440px)" // lg breakpoint
          srcSet="src/assets/desktop/image-hero@2x.jpg"
        />
        <source
          media="(min-width: 768px)" // md breakpoint
          srcSet="src/assets/tablet/image-hero@2x.jpg"
        />
        <img
          src="src/assets/mobile/image-hero@2x.jpg"
          alt="Art Gallery Exhibition"
          className="w-full h-auto object-cover md:w-[437px] lg:w-full overflow-hidden"
        />
      </motion.picture>
      {/* Gallery Info */}
      <div className="md:relative lg:relative">
        <motion.div
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="flex flex-col gap-[var(--spacing-32)] mt-[var(--spacing-32)] mr-[var(--spacing-16)] ml-[var(--spacing-16)] md:absolute md:top-1/2 md:left-[-48px] md:translate-y-[-50%] md:mx-0 md:my-0 md:mr-[var(--spacing-40)] md:gap-[var(--spacing-48)] md:w-[340px] lg:gap-[var(--spacing-64)] lg:left-[-66.5px] lg:w-[350px] lg:translate-y-[-55%] lg:mr-0"
        >
          <h1 className="text-preset-1 lg:hidden">
            MODERN <br /> ART GALLERY
          </h1>
          <p className="text-preset-7 text-grey-700 text-desktop-lg">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <Link
            to="/location"
            className="relative overflow-hidden flex group w-max focus-visible:outline-[4px] focus-visible:outline-gold-500 focus-visible:outline-offset-[3px]"
            aria-label="Go to our location page"
          >
            <div className="absolute inset-0 flex">
              <div className="bg-gold-500 flex-1"></div>
              <div className="bg-grey-900 w-[58px]"></div>
            </div>

            <div className="absolute inset-0 flex transition-transform duration-300 ease-in-out transform translate-x-0 group-hover:-translate-x-full">
              <div className="bg-grey-900 flex-1"></div>
              <div className="bg-gold-500 w-[58px]"></div>
            </div>

            <span className="relative z-10 px-[33.5px] py-[26px] text-preset-6 cursor-pointer text-white group-hover:text-grey-900 transition-colors duration-300 ease-in-out">
              OUR LOCATION
            </span>
            <span className="relative z-10 flex items-center justify-center cursor-pointer text-white transition-colors duration-300 ease-in-out">
              <img
                src="src/assets/icon-arrow-right.svg"
                className="p-[24px]"
                alt=""
              />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
