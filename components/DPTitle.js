import React from "react";
import Difficulty from "./Difficulty";
import styles from "../styles/components/DetailPage.module.css";

function DPTitle(props) {
  return (
    <div>
      <div className={styles.title}>{props.title}</div>
      <Difficulty difficulty={props.difficulty} />
    </div>
  );
}

export default DPTitle;
