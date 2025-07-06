export default function Footer() {
  return (
    <footer className="flex flex-col gap-[var(--spacing-40)] px-[40px] py-[48px] bg-black text-white md:flex-row md:items-start md:gap-[138px]">
      <div className="flex flex-col gap-[var(--spacing-40)] md:flex-row md:gap-[var(--spacing-64)] md:w-[450px] md:h-[100px] md:grow-2">
        <img
          src="src/assets/logo-light.svg"
          alt="Modern Art Gallery"
          className="w-[110px] h-auto md:h-[40px]"
        ></img>
        <p className="text-preset-7 text-white">
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>
      </div>
      <div className="flex gap-[var(--spacing-20)] md:ml-auto">
        <img src="src/assets/icon-facebook.svg" alt="Facebook icon"></img>
        <img src="src/assets/icon-instagram.svg" alt="Instagram icon"></img>
        <img src="src/assets/icon-twitter.svg" alt="Twitter icon"></img>
      </div>
    </footer>
  );
}
