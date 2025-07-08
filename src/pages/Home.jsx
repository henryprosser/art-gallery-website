import Hero from "../components/Home/Hero.jsx";
import Gallery from "../components/Home/Gallery.jsx";
import Footer from "../components/Home/Footer.jsx";

export default function Home() {
  return (
    <div className="flex flex-col gap-[100px] md:gap-[120px] lg:gap-[180px]">
      <main className="flex flex-col gap-[100px] md:gap-[120px] lg:gap-[180px]">
        <Hero />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
