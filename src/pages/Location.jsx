import Map from "../components/Location/Map";
import Info from "../components/Location/Info";
import FooterLocation from "../components/Location/FooterLocation";

export default function Location() {
  return (
    <div>
      <main>
        <Map />
        <Info />
      </main>
      <FooterLocation />
    </div>
  );
}
