import React, { FunctionComponent } from "react";
import LandingPage from "../components/landingPage";
import PageMetaData from "../components/partials/PageMetaData";
import styles from "../styles/landing-page.module.scss";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <PageMetaData title="point" />
      <LandingPage />
    </div>
  );
};

export default Home;
