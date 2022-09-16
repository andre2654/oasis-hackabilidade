/**
 *  ! ===========
 * 	! Importações
 *  ! ===========
 */
import React from "react";
import { HiDownload } from "react-icons/hi";
import { RiPlayCircleFill } from "react-icons/ri";

import styles from "./trilhaVideo.module.css";

/**
 *  ! ===
 * 	! App
 *  ! ===
 */
export default function TrilhaVideo({ download }) {
    return (
        <div
            className={`${styles.trilhaVideo} col d-flex flex-column align-items-center justify-content-end p-3 gap-3`}
        >
            {download && <HiDownload className={`${styles.downloadTag}`} />}
            <RiPlayCircleFill className={styles.trilhaVideoPlay} />
            <div className={`${styles.trilhaVideoTitulo}`}>Titulo</div>
            <button className={`${styles.trilhaVideoVerBTN} container-fluid`}>
                VER
            </button>
        </div>
    );
}
