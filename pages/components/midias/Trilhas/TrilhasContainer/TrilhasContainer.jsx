/**
 *  ! ===========
 * 	! Importações
 *  ! ===========
 */
import React from "react";
import TrilhaVideo from "../TrilhaVideo/TrilhaVideo";

import styles from "./trilhasContainer.module.css";

/**
 *  ! ===
 * 	! App
 *  ! ===
 */
export default function TrilhasContainer({ title, destaque }) {
    return (
        <div
            id={styles.trilhasContainer}
            className={`${
                destaque && styles.destaque + " p-3"
            }  container d-flex flex-column align-items-start justify-content-start gap-1 p-0`}
        >
            <div id={styles.titleCategory}>{title}</div>
            <div
                id={styles.cursosContainer}
                className={`container-fluid d-flex align-items-end justify-content-start p-0 gap-2 mt-2`}
            >
                <TrilhaVideo />
                <TrilhaVideo download />
                <TrilhaVideo />
                <TrilhaVideo />
                <TrilhaVideo />
                <TrilhaVideo download />
                <TrilhaVideo />
                <TrilhaVideo />
                <TrilhaVideo />
            </div>
        </div>
    );
}
