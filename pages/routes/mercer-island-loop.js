import React from "react";
import DPTitle from "../../components/DPTitle";
import styles from "../../styles/components/DetailPage.module.css";
import MapboxGLMap from "../../components/MapboxGLMap";
import * as data from "../../data/routes-data.json";

function MercerIslandLoop(props) {
  return (
    <div>
      <DPTitle title={"Mercer Island Loop"} difficulty={"Hard"} />
      <div className={styles.row}>
        <div className={styles.item}>Length: 23.6 miles</div>
        <div className={styles.item}>Elevation gain: 1,456 ft</div>
        <div className={styles.item}>Route type: Loop</div>
      </div>
      <hr />

      <p>
        The Mercer Island loop is one of the classic Seattle area rides for most
        skill levels.
      </p>
      <hr />
      <MapboxGLMap
        coordinates={data.routes[1].coordinates}
        lng={data.routes[1].lng}
        lat={data.routes[1].lat}
        zoom={data.routes[1].zoom}
      />
    </div>
  );
}

export default MercerIslandLoop;
