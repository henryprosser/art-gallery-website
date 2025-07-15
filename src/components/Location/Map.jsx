import { Link } from "react-router-dom";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import customMapStyle from "../../styles/customMapStyle";
import customMarker from "../../assets/icon-location.svg";

const center = {
  lat: 41.480472,
  lng: -71.310969,
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <section>
      <div className="relative w-full h-[550px] md:h-[600px] lg:h-[600px]">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={16}
          options={{
            styles: customMapStyle,
            disableDefaultUI: true,
            zoomControl: true,
          }}
        >
          <Marker
            position={center}
            icon={{
              url: customMarker,
              scaledSize: new window.google.maps.Size(41, 55),
            }}
          />
        </GoogleMap>
        <Link
          to="/"
          className="absolute overflow-hidden flex group w-max top-[10px] left-[10px] focus-visible:outline-[4px] focus-visible:outline-gold-500 focus-visible:outline-offset-[3px] md:top-[16px] md:left-[39px] lg:left-[156px]"
          aria-label="Back to home"
        >
          <div className="absolute inset-0 flex">
            <div className="bg-grey-900 w-[58px]"></div>
            <div className="bg-gold-500 flex-1"></div>
          </div>

          <div className="absolute inset-0 flex transition-transform duration-300 ease-in-out transform translate-x-0 group-hover:translate-x-full">
            <div className="bg-gold-500 w-[58px]"></div>
            <div className="bg-grey-900 flex-1"></div>
          </div>

          <span className="relative z-10 flex items-center justify-center cursor-pointer text-white transition-colors duration-300 ease-in-out">
            <img
              src="src/assets/icon-arrow-left.svg"
              className="p-[24px]"
              alt=""
            />
          </span>
          <span className="relative z-10 px-[33.5px] py-[26px] text-preset-6 cursor-pointer text-white group-hover:text-grey-900 transition-colors duration-300 ease-in-out">
            BACK TO HOME
          </span>
        </Link>
      </div>
    </section>
  );
}
