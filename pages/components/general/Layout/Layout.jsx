/**
 *  ! ===========
 * 	! Importações
 *  ! ===========
 */
import React from "react";
import Header from "./Header/Header";

import styles from "./layout.module.css";

/**
 *  ! ===
 * 	! App
 *  ! ===
 */
export default function Layout({ children }) {
    return (
        <div
            id={styles.layout}
            className="d-flex flex-column align-items-start justify-content-start p-0"
        >
            <Header />
            <div id={styles.body}>{children}</div>
        </div>
    );
}
