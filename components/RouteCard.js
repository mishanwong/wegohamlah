import React from "react";
import styles from "../styles/components/RouteCard.module.css";
import Difficulty from "./Difficulty";

const RouteCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <img className={styles.image} src={`images/${props.image}`} />
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.routeName}>{props.routeName}</div>
        <Difficulty difficulty={props.difficulty} />
        <div className={styles.row}>
          <div className={styles.distance}>
            Distance: {props.distance} miles
          </div>
          <div className={styles.elevationGain}>
            Elev. gain: {props.elevationGain} ft
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteCard;
