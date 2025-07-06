export default function Footer() {
  return (
    <footer className="flex flex-col gap-[var(--spacing-40)] px-[40px] py-[48px] bg-black text-white">
      <div className="flex flex-col gap-[var(--spacing-40)]">
        <img
          src="src/assets/logo-light.svg"
          alt="Modern Art Gallery"
          className="w-[110px] h-auto"
        ></img>
        <p className="text-preset-7 text-white">
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>
      </div>
      <div className="flex gap-[var(--spacing-20)]">
        <img src="src/assets/icon-facebook.svg" alt="Facebook icon"></img>
        <img src="src/assets/icon-instagram.svg" alt="Instagram icon"></img>
        <img src="src/assets/icon-twitter.svg" alt="Twitter icon"></img>
      </div>
    </footer>
  );
}
