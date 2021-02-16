import { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import Head from "next/head";
import styles from "../styles/components/Map.module.css";
import * as data from "../data/routes-data.json";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWlzaGFuOTk1IiwiYSI6ImNrbDAxbjJicDBlc2Eybm1pdjYyMGM2eXQifQ.BjGEzQ-RZfFOCMEp7dXPgg";

const MapboxGLMap = (props) => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(props.lng);
  const [lat, setLat] = useState(props.lat);
  const [zoom, setZoom] = useState(props.zoom);

  //Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    //Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl());

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Add a GeoJSON Line
    map.on("load", () => {
      map.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: props.coordinates,
          },
        },
      });
      map.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#fc6100",
          "line-width": 6,
        },
      });
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
