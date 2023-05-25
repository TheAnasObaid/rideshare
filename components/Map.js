import mapboxgl from "mapbox-gl";
import { useEffect, useContext } from "react";
import { RideContext } from "@/context/rideContext";

const style = {
  wrapper: `flex-1 h-full w-full`,
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(RideContext);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/anasobaid/cle35k6xl000601p5921vsc1r",
      zoom: 5.5,
      center: [72.886, 30.887],
    });

    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates);
    }

    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates);
    }

    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([dropoffCoordinates, pickupCoordinates], { padding: 100 });
    }
  }, [pickupCoordinates, dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <div className={style.wrapper} id="map" />;
};

export default Map;
