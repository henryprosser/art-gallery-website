export default function Hero() {
  return (
    <section>
      <img
        src="src/assets/mobile/image-hero@2x.jpg"
        alt="Hero"
        className="w-full h-auto object-cover"
      />
      <div className="flex flex-col gap-[var(--spacing-32)] mt-[var(--spacing-32)] mr-[var(--spacing-16)] ml-[var(--spacing-16)]">
        <h1 className="text-preset-1">MODERN ART GALLERY</h1>
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
