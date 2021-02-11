import React from "react";
import Difficulty from "./Difficulty";
import styles from "../styles/components/DetailPage.module.css";

function DPTitle() {
  return (
    <div>
      <div className={styles.title}>Lake Union Loop</div>
      <Difficulty difficulty="Easy" />
    </div>
  );
}

export default DPTitle;
