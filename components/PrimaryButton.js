import React, { useState } from "react";
import styles from "../styles/components/Button.module.css";

const PrimaryButton = React.forwardRef(({ href }, ref) => {
  return (
    <a href={href} className={styles.primary}>
      Discover
    </a>
  );
});

export default PrimaryButton;
