import React from "react";
import DPTitle from "../../components/DPTitle";
import styles from "../../styles/components/DetailPage.module.css";
import MapboxGLMap from "../../components/MapboxGLMap";
import * as data from "../../data/routes-data.json";

function SewardPark() {
  return (
    <div>
      <DPTitle title={"Seward Park"} difficulty={"Moderate"} />
      <div className={styles.row}>
        <div className={styles.item}>Length: 16.3 miles</div>
        <div className={styles.item}>Elevation gain: 697 ft</div>
        <div className={styles.item}>Route type: Out-and-back</div>
      </div>
      <hr />
      <p>
        Seward Park is a nice ride along the water that you can fit into a
        weekday evening short ride.
      </p>
      <hr />
      <MapboxGLMap
        coordinates={data.routes[2].coordinates}
        lng={data.routes[2].lng}
        lat={data.routes[2].lat}
        zoom={data.routes[2].zoom}
      />
    </div>
  );
}

export default SewardPark;
