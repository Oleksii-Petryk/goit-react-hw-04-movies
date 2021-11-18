import styles from "./Header.module.css";
import React from "react";

const Header = ({ text }) => <h1 className={styles.header}>{text}</h1>;

export default Header;
