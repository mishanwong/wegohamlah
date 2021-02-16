import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import mapboxgl from "mapbox-gl";
import DPTitle from "../../components/DPTitle";
import styles from "../../styles/components/DetailPage.module.css";
import MapboxGLMap from "../../components/MapboxGLMap";

function MercerIslandLoop(props) {
  return (
    <div>
      <DPTitle />
      <div className={styles.row}>
        <div className={styles.item}>Length: 6.4 miles</div>
        <div className={styles.item}>Elevation gain: 194 ft</div>
        <div className={styles.item}>Route type: Loop</div>
      </div>
      <hr />

      <p>
        Lake Union Loop is a heavily traffic, mixed-use walking/running/biking
        trail. This route offers scenic view of Seattle Skyline and Lake Union.
      </p>
      <hr />
      <MapboxGLMap />
    </div>
  );
}

export default MercerIslandLoop;
