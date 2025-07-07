export default function Hero() {
  return (
    <section className="md:flex md:relative">
      <div className="hidden lg:block lg:bg-black w-[450px]">
        <h1 className="hidden text-preset-1 lg:block lg:text-white lg:absolute md:top-1/3 md:left-[165px] md:translate-y-[-50%] lg:mix-blend-difference">
          MODERN <br /> ART GALLERY
        </h1>
      </div>
      <picture>
        <source
          media="(min-width: 1024px)" // lg breakpoint
          srcSet="src/assets/desktop/image-hero@2x.jpg"
        />
        <source
          media="(min-width: 768px)" // md breakpoint
          srcSet="src/assets/tablet/image-hero@2x.jpg"
        />
        <img
          src="src/assets/mobile/image-hero@2x.jpg"
          alt="Art Gallery Exhibition"
          className="w-full h-auto object-cover md:w-[437px] lg:w-[540px]"
        />
      </picture>
      {/* Gallery Info */}
      <div className="flex flex-col gap-[var(--spacing-32)] mt-[var(--spacing-32)] mr-[var(--spacing-16)] ml-[var(--spacing-16)] md:absolute md:top-1/2 md:left-[389px] md:translate-y-[-50%] md:mx-0 md:my-0 md:mr-[var(--spacing-40)] md:gap-[var(--spacing-48)] lg:gap-[var(--spacing-64)] lg:left-[936px] lg:w-[350px] lg:translate-y-[-65%] lg:mr-0 lg:pr-[70px]">
        <h1 className="text-preset-1 lg:hidden">MODERN ART GALLERY</h1>
        <p className="text-preset-7 text-grey-700">
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>
        <button className="flex">
          <span className="bg-grey-900 text-white px-[33.5px] py-[26px] text-preset-6">
            OUR LOCATION
          </span>
          <span className="bg-gold-500 flex items-center justify-center">
            <img
              src="src/assets/icon-arrow-right.svg"
              className="p-[24px]"
            ></img>
          </span>
        </button>
      </div>
    </section>
  );
}
