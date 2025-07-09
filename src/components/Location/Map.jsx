import { Link } from "react-router-dom";

export default function Map() {
  return (
    <section>
      <div className="relative">
        <img
          src="src/assets/mobile/image-map@2x.png"
          alt="Map showing the location of Modern Art Gallery"
          className="w-full h-auto object-cover"
        />
        <Link
          to="/"
          className="absolute flex group w-max top-[10px] left-[10px] focus-visible:outline-[4px] focus-visible:outline-gold-500 focus-visible:outline-offset-[3px]"
          aria-label="Back to home"
        >
          <span className="bg-gold-500 flex items-center justify-center transition-colors duration-300 ease-in-out cursor-pointer group-hover:bg-grey-900">
            <img
              src="src/assets/icon-arrow-left.svg"
              className="p-[24px]"
            ></img>
          </span>
          <span className="bg-grey-900 text-white px-[32px] py-[26px] text-preset-6 transition-colors duration-300 ease-in-out cursor-pointer group-hover:bg-gold-500">
            BACK TO HOME
          </span>
        </Link>
      </div>
    </section>
  );
}
