import React from "react";
import { TabProps } from "./types";
import styles from "./FullTab.module.css";

function FullTab({ children }: TabProps) {
    return <div className={styles.fullTab}>{children}</div>;
}

export default FullTab;
