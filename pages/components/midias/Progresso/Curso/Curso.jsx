/**
 *  ! ===========
 * 	! Importações
 *  ! ===========
 */
import React from "react";
import { IoDocument } from "react-icons/io5";

import styles from "./curso.module.css";

/**
 *  ! ===
 * 	! App
 *  ! ===
 */
export default function Curso({ current }) {
    return (
        <div
            className={`${styles.progressoCursoProgresso} container-fluid d-flex flex-column align-items-start justify-content-start gap-1 p-0`}
        >
            <div
                className={`${
                    current && styles.active
                } container-fluid d-flex align-items-center justify-content-start gap-1 p-0`}
            >
                <label
                    className={`${styles.progressoCursoProgressoCirculo} ${
                        current && styles.active
                    } rounded-circle`}
                ></label>
                <span
                    className={`${styles.progressoCursoProgressoPassoLabel} ${
                        current && styles.active
                    }`}
                >
                    {current ? "Passo atual" : "Próximo passo"}
                </span>
            </div>
            <div
                className={`${styles.progressoCursoDadosContainer} ${
                    current && styles.active
                } container-fluid d-flex align-items-center justify-content-start gap-3 py-2 px-4`}
            >
                <div
                    className={`${styles.progressoCursoNomeIcone} ${
                        current && styles.active
                    } d-flex flex-column align-items-center justify-content-center p-2 rounded-circle`}
                >
                    <IoDocument />
                </div>
                <div className="d-flex flex-column align-items-start justify-content-center gap-1">
                    <div className={styles.progressoCursoNomeLabel}>CURSO</div>
                    <span className={styles.progressoCursoNome}>
                        Adobe illustrator: desenho vetorial
                    </span>
                </div>
            </div>
        </div>
    );
}
