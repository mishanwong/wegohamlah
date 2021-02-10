import React from "react";
import styles from "../styles/components/Difficulty.module.css";

function Difficulty(props) {
  const difficulty = props.difficulty;

  if (difficulty === "Hard") {
    return (
      <div className={`${styles.difficulty} ${styles.hard}`}>
        {props.difficulty}
      </div>
    );
  } else if (difficulty === "Moderate") {
    return (
      <div className={`${styles.difficulty} ${styles.moderate}`}>
        {props.difficulty}
      </div>
    );
  } else {
    return (
      <div className={`${styles.difficulty} ${styles.easy}`}>
        {props.difficulty}
      </div>
    );
  }
}

export default Difficulty;
