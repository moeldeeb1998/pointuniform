import styles from "../../styles/landing-page.module.scss";
import React, { FunctionComponent } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer: FunctionComponent = () => {
  return (
    <footer id="contacts" className={styles.footer}>
      <div className={styles.title}>تواصل معنا</div>
      <div>
        <ul className={styles.contacts_list}>
          <li className={styles.contacts_Item}>
            <IoLogoWhatsapp style={{ color: "#00A783" }} />
            <BsTelephoneFill />
            +20 109-893-9317
          </li>
          <li className={styles.contacts_Item}>
            <IoLogoWhatsapp style={{ color: "#00A783" }} />
            <BsTelephoneFill />
            +20 111-365-8575
          </li>
          <li className={styles.contacts_Item}>
            <BsTelephoneFill />
            +20 122-333-8932
          </li>
          <li className={styles.contacts_Item}>
            <AiOutlineMail />
            <a href="mailto:sales.point@pointuniform.com">
              sales.point@pointuniform.com
            </a>
          </li>
          <li className={styles.contacts_Item}>
            <AiOutlineMail />
            <a href="mailto:mahmoud.gad@pointuniform.com">
              mahmoud.gad@pointuniform.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
