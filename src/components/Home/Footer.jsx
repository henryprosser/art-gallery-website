export default function Footer() {
  return (
    <footer className="flex flex-col gap-[var(--spacing-40)] px-[40px] py-[48px] bg-grey-900 text-white md:flex-row md:items-start md:gap-[138px] lg:px-[165px] lg:py-[80px] lg:items-center lg:gap-[150px]">
      <div className="flex flex-col gap-[var(--spacing-40)] md:flex-row md:gap-[var(--spacing-64)] md:w-[450px] md:h-[100px] md:grow-2 lg:items-center lg:gap-[140px]">
        <img
          src="/assets/logo-light.svg"
          alt="Modern Art Gallery"
          className="w-[110px] h-auto md:h-[40px] lg:w-[160px] lg:h-[60px]"
        ></img>
        <p className="text-preset-7 text-white">
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>
      </div>
      <div className="flex gap-[var(--spacing-20)] md:ml-auto">
        <div
          className="w-20 h-20 cursor-pointer text-white transition-colors duration-200 ease-in-out hover:text-gold-500 focus:outline-[3px] focus:outline-gold-500 focus:outline-offset-[3px]"
          aria-label="Facebook icon"
          role="img"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-full h-full fill-current"
          >
            <path d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104A1.1 1.1 0 0 0 18.896 0Z" />
          </svg>
        </div>

        <div
          className="w-20 h-20 cursor-pointer text-white transition-colors duration-200 ease-in-out hover:text-gold-500 focus:outline-[3px] focus:outline-gold-500 focus:outline-offset-[3px]"
          aria-label="Instagram icon"
          role="img"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-full h-full fill-current"
          >
            <path d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058ZM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0Zm0 4.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27Zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666Zm5.338-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
          </svg>
        </div>

        <div
          className="w-20 h-20 cursor-pointer text-white transition-colors duration-200 ease-in-out hover:text-gold-500 focus:outline-[3px] focus:outline-gold-500 focus:outline-offset-[3px]"
          aria-label="Twitter icon"
          role="img"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 16.25"
            fill="currentColor"
            className="w-full h-full fill-current"
          >
            <path d="M20 2.172a8.192 8.192 0 0 1-2.357.646 4.11 4.11 0 0 0 1.805-2.27 8.22 8.22 0 0 1-2.606.996A4.096 4.096 0 0 0 13.847.248c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 0 1 1.392 1a4.109 4.109 0 0 0 1.27 5.478 4.086 4.086 0 0 1-1.858-.513c-.045 1.9 1.318 3.679 3.291 4.075a4.113 4.113 0 0 1-1.853.07 4.106 4.106 0 0 0 3.833 2.849A8.25 8.25 0 0 1 0 14.658a11.616 11.616 0 0 0 6.29 1.843c7.618 0 11.923-6.434 11.663-12.205A8.354 8.354 0 0 0 20 2.172Z" />
          </svg>
        </div>
      </div>
    </footer>
  );
}
