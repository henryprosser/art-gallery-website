import Hero from "../components/Home/Hero.jsx";
import Gallery from "../components/Home/Gallery.jsx";

export default function Home() {
  return (
    <main className="flex flex-col gap-[100px]">
      <Hero />
      <Gallery />
    </main>
  );
}
