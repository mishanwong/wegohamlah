import React from "react";
import Difficulty from "./Difficulty";
import styles from "../styles/components/DetailPage.module.css";

function DPTitle(props) {
  return (
    <div>
      <div className={styles.title}>Mercer Island Loop</div>
      <Difficulty difficulty="Hard" />
    </div>
  );
}

export default DPTitle;
