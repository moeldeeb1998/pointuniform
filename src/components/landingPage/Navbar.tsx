import Image from "next/image";
import styles from "../../styles/landing-page.module.scss";
import React, { FunctionComponent } from "react";

const Navbar: FunctionComponent = () => {
  return (
    <header className={styles.navbar}>
      <a href="#" className={styles.nav_logo}>
        <Image
          className={styles.nav_logo_img}
          src="/assets/logo.png"
          alt="logo"
          width={100}
          height={50}
        />
      </a>
      <nav>
        <ul className={styles.nav_links}>
          <li className={styles.nav_item}>
            <a className={styles.nav_link} href="#company-vision">
              رؤية الشركة
            </a>
          </li>
          <li className={styles.nav_item}>
            <a className={styles.nav_link} href="#company-quality">
              الجودة
            </a>
          </li>
        </ul>
      </nav>
      <a className={styles.nav_contact_link} href="#contacts">
        <button className={styles.nav_contact_button}>تواصل معنا</button>
      </a>
    </header>
  );
};

export default Navbar;
