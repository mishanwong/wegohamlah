import { useState } from "react";
import styles from "../styles/components/Button.module.css";

const SecondaryButton = ({ href }) => {
  return (
    <a href={href} className={styles.secondary}>
      About Us
    </a>
  );
};

export default SecondaryButton;
