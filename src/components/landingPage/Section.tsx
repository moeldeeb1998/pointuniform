import React, { FunctionComponent } from "react";
import styles from "../../styles/landing-page.module.scss";

type Props = {
  title: string;
  description: string;
};

const Section: FunctionComponent<Props> = ({ title, description }) => {
  return (
    <section className={styles.section}>
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{description}</div>
    </section>
  );
};

export default Section;
