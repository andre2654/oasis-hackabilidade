/**
 *  ! ===========
 * 	! Importações
 *  ! ===========
 */
import React from "react";
import TrilhasContainer from "./TrilhasContainer/TrilhasContainer";

import styles from "./trilhas.module.css";

/**
 *  ! ===
 * 	! App
 *  ! ===
 */
export default function Trilhas() {
    return (
        <div
            id={styles.trilhas}
            className="container d-flex flex-column align-items-start justify-content-start gap-3 p-0"
        >
            <div id={styles.trilhasTitle}>Galeria de cursos</div>
            <TrilhasContainer title="Em alta" destaque />
            <TrilhasContainer title="Escrita fiscal" />
            <TrilhasContainer title="Dominio sistemas" />
        </div>
    );
}
