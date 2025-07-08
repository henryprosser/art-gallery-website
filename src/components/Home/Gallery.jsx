export default function Gallery() {
  return (
    <section className="mr-[var(--spacing-16)] ml-[var(--spacing-16)] md:mr-[39.5px] md:ml-[39.5px] lg:ml-[165px] lg:mr-[165px]">
      <div className="flex flex-col gap-[var(--spacing-32)] md:gap-[var(--spacing-12)] lg:gap-[var(--spacing-32)]">
        {/* Gallery section */}
        <div className="flex flex-col gap-[var(--spacing-24)] md:grid md:grid-cols-[0.36fr_0.64fr] md:items-center md:gap-[68px] lg:gap-[125px]">
          <picture className="md:order-2">
            <source
              media="(min-width: 1440px)" // lg breakpoint
              srcSet="src/assets/desktop/image-grid-1@2x.jpg"
            />
            <source
              media="(min-width: 768px)" // md breakpoint
              srcSet="src/assets/tablet/image-grid-1@2x.jpg"
            />
            <img
              src="src/assets/mobile/image-grid-1@2x.jpg"
              alt="Art Gallery Exhibition"
              className="w-full h-auto object-cover"
            />
          </picture>

          {/* Gallery Details */}
          <div className="flex flex-col gap-[var(--spacing-24)] md:order-1 lg:gap-[var(--spacing-32)]">
            <h2 className="text-preset-3">YOUR DAY AT THE GALLERY</h2>
            <p className="text-preset-7 text-grey-700 text-desktop-lg">
              Wander through our distinct collections and find new insights
              about our artists. Dive into the details of their creative
              process.
            </p>
          </div>
        </div>

        {/* Inspiration Section */}
        <div className="flex flex-col gap-[var(--spacing-16)] md:grid md:grid-cols-[0.59fr_0.41fr] md:grid-rows-[0.44fr_0.56fr] md:gap-[var(--spacing-12)] lg:gap-[30px] lg:grid-rows-[0.45fr_0.55fr]">
          <div className="md:row-span-2">
            <picture>
              <source
                media="(min-width: 1440px)" // lg breakpoint
                srcSet="src/assets/desktop/image-grid-2@2x.jpg"
              />
              <source
                media="(min-width: 768px)" // md breakpoint
                srcSet="src/assets/tablet/image-grid-2@2x.jpg"
              />
              <img
                src="src/assets/mobile/image-grid-2@2x.jpg"
                alt="Art Gallery Seat with a Picture"
                className="w-full h-auto object-cover"
              />
            </picture>
          </div>
          <div className="md:col-start-2 md:row-start-1">
            <picture>
              <source
                media="(min-width: 1440px)" // lg breakpoint
                srcSet="src/assets/desktop/image-grid-3@2x.jpg"
              />
              <source
                media="(min-width: 768px)" // md breakpoint
                srcSet="src/assets/tablet/image-grid-3@2x.jpg"
              />
              <img
                src="src/assets/mobile/image-grid-3@2x.jpg"
                alt="People exploring the Art Gallery"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>

          {/* Inspiration Details */}
          <div className="flex flex-col gap-[var(--spacing-24)] bg-black px-[24px] py-[48px] md:px-[32px] md:py-[80px] md:col-start-2 md:row-start-2 md:justify-center lg:px-[48px] lg:py-[64px] lg:gap-[var(--spacing-32)]">
            <h2 className="text-preset-3 text-white">COME & BE INSPIRED</h2>
            <p className="text-preset-7 text-white text-desktop-lg">
              We're excited to welcome you to our gallery and see how our
              collections influence you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
