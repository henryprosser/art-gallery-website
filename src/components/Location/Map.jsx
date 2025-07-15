import { Link } from "react-router-dom";

export default function Map() {
  return (
    <section>
      <div className="relative">
        <picture>
          <source
            media="(min-width: 1440px)" // lg breakpoint
            srcSet="src/assets/desktop/image-map@2x.png"
          />
          <source
            media="(min-width: 768px)" // md breakpoint
            srcSet="src/assets/tablet/image-map@2x.png"
          />
          <img
            src="src/assets/mobile/image-map@2x.png"
            alt="Map showing the location of Modern Art Gallery"
            className="w-full h-auto object-cover"
          />
        </picture>
        <Link
          to="/"
          className="absolute overflow-hidden flex group w-max top-[10px] left-[10px] focus-visible:outline-[4px] focus-visible:outline-gold-500 focus-visible:outline-offset-[3px] md:top-[16px] md:left-[39px] lg:left-[156px]"
          aria-label="Back to home"
        >
          <div className="absolute inset-0 flex">
            <div className="bg-grey-900 w-[58px]"></div>
            <div className="bg-gold-500 flex-1"></div>
          </div>

          <div className="absolute inset-0 flex transition-transform duration-300 ease-in-out transform translate-x-0 group-hover:translate-x-full">
            <div className="bg-gold-500 w-[58px]"></div>
            <div className="bg-grey-900 flex-1"></div>
          </div>

          <span className="relative z-10 flex items-center justify-center cursor-pointer text-white transition-colors duration-300 ease-in-out">
            <img
              src="src/assets/icon-arrow-left.svg"
              className="p-[24px]"
              alt=""
            />
          </span>
          <span className="relative z-10 px-[33.5px] py-[26px] text-preset-6 cursor-pointer text-white group-hover:text-grey-900 transition-colors duration-300 ease-in-out">
            BACK TO HOME
          </span>
        </Link>
      </div>
    </section>
  );
}
