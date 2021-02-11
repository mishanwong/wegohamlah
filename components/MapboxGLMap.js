import { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import Head from "next/head";
import styles from "../styles/components/Map.module.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWlzaGFuOTk1IiwiYSI6ImNrbDAxbjJicDBlc2Eybm1pdjYyMGM2eXQifQ.BjGEzQ-RZfFOCMEp7dXPgg";

const MapboxGLMap = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(-122.3333);
  const [lat, setLat] = useState(47.6396);
  const [zoom, setZoom] = useState(13);

  //Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    //Add navigation control (the +/- zoom buttons)

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    //Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div>
      <Head>
        <script src="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.js"></script>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <div>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div className={styles.mapContainer} ref={mapContainerRef}></div>
    </div>
  );
};

export default MapboxGLMap;
