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
    map.addControl(new mapboxgl.NavigationControl());

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    //Add cycling route
    // const directions = new MapboxGLMap({
    //   // accessToken: process.env.MAPBOX_KEY,
    //   unit: "metric",
    //   profile: "mapbox/cycling",
    //   coordinates: [],
    // });

    //Add a GeoJSON Line
    // map.on("load", () => {
    //   map.addSource("route", {
    //     type: "geojson",
    //     data: {
    //       type: "Feature",
    //       properties: {},
    //       geometry: {
    //         type: "LineString",
    //         coordinates: [
    //           [-122.329438, 47.642427],
    //           [-122.331685, 47.650051],
    //           [-122.327973, 47.653368],
    //           [-122.323135, 47.655262],
    //           [-122.320881, 47.654705],
    //           [-122.318596, 47.655789],
    //         ],
    //       },
    //     },
    //   });
    //   map.addLayer({
    //     id: "route",
    //     type: "line",
    //     source: "route",
    //     layout: {
    //       "line-join": "round",
    //       "line-cap": "round",
    //     },
    //     paint: {
    //       "line-color": "#fc6100",
    //       "line-width": 8,
    //     },
    //   });
    // });

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
