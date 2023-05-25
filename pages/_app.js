import "@/styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { RideProvider } from "@/context/rideContext";

export default function App({ Component, pageProps }) {
  return (
    <RideProvider>
      <Component {...pageProps} />
    </RideProvider>
  );
}
