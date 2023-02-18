import styles from "../../styles/landing-page.module.scss";
import React, { FunctionComponent } from "react";

const Banner: FunctionComponent = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_image}></div>
      <div className={styles.banner_footer}></div>
    </div>
  );
};

export default Banner;
