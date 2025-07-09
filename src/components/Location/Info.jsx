export default function Info() {
  return (
    <section className="bg-grey-900">
      <div className="flex flex-col px-[16px] py-[80px] gap-[var(--spacing-48)] md:flex-row md:px-[40px] md:gap-[97px] lg:px-[165px] lg:py-[130px] lg:gap-[325px]">
        <h1 className="text-white text-preset-2">OUR LOCATION</h1>
        <div className="flex flex-col gap-[var(--spacing-20)] lg:gap-[var(--spacing-32)]">
          <div className="flex flex-col gap-[var(--spacing-20)] lg:gap-[var(--spacing-24)]">
            <h2 className="text-gold-500 text-preset-4">99 KING STREET</h2>
            <p className="text-white text-preset-7 text-desktop-lg">
              Newport <br />
              RI 02840 <br />
              United States of America
            </p>
          </div>
          <p className="text-white text-preset-7 text-desktop-lg">
            Our newly opened gallery is located near the Edward King House on 99
            King Street, the Modern Art Gallery is free to all visitors and open
            seven days a week from 8am to 9pm.
          </p>
        </div>
      </div>
    </section>
  );
}
