export default function Gallery() {
  return (
    <section className="mr-[var(--spacing-16)] ml-[var(--spacing-16)]">
      <div className="flex flex-col gap-[var(--spacing-32)]">
        {/* Gallery section */}
        <div className="flex flex-col gap-[var(--spacing-24)]">
          <img
            src="src/assets/mobile/image-grid-1@2x.jpg"
            alt="Art Gallery Exhibition"
            className="w-full h-auto object-cover"
          />
          {/* Gallery Details */}
          <div className="flex flex-col gap-[var(--spacing-24)]">
            <h2 className="text-preset-3">YOUR DAY AT THE GALLERY</h2>
            <p className="text-preset-7 text-grey-700">
              Wander through our distinct collections and find new insights
              about our artists. Dive into the details of their creative
              process.
            </p>
          </div>
        </div>

        {/* Inspiration Section */}
        <div className="flex flex-col gap-[var(--spacing-16)]">
          <img
            src="src/assets/mobile/image-grid-2@2x.jpg"
            alt="Art Gallery Seat with a Picture"
            className="w-full h-auto object-cover"
          />
          <img
            src="src/assets/mobile/image-grid-3@2x.jpg"
            alt="People exploring the Art Gallery"
            className="w-full h-auto object-cover"
          />
          {/* Inspiration Details */}
          <div className="flex flex-col gap-[var(--spacing-24)] bg-black px-[24px] py-[48px]">
            <h2 className="text-preset-3 text-white">COME & BE INSPIRED</h2>
            <p className="text-preset-7 text-white">
              We're excited to welcome you to our gallery and see how our
              collections influence you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
