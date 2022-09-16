/**
 *  ! ===========
 * 	! Importações
 *  ! ===========
 */
import React from "react";
import Curso from "./Curso/Curso";
import { HiGift } from "react-icons/hi";

import styles from "./progresso.module.css";

/**
 *  ! ===
 * 	! App
 *  ! ===
 */
export default function Progresso() {
    return (
        <div
            id={styles.progresso}
            className="container-fluid d-flex flex-column align-items-start justify-content-start gap-1 p-0"
        >
            <div id={styles.titulo} className="container-fluid p-3">
                Progresso em formação
            </div>
            <div className="container-fluid d-flex flex-column align-items-start justify-content-start gap-4 p-3">
                <div className="container-fluid">
                    <span id={styles.mensagemPremio}>
                        Parabén André, você já lucrou:{" "}
                        <strong>
                            256,00 reais <HiGift />
                        </strong>
                    </span>
                </div>
                <div className="container-fluid d-flex flex-column align-items-center justify-content-center p-4">
                    <div id={styles.profileImagem} className="rounded"></div>
                    <div id={styles.profileName} className="mt-2">
                        André Saraiva
                    </div>
                </div>
                <div className="container-fluid d-flex flex-column align-items-start justify-content-start gap-1 p-0">
                    <span id={styles.tagFormacao}>Formação</span>
                    <div id={styles.formacao}>Fiscal contábil</div>
                </div>
                <div className="container-fluid d-flex align-items-start justify-content-between gap-3 p-0">
                    <div className="col d-flex flex-column align-items-start justify-content-start gap-1 p-0">
                        <div
                            id={styles.courseProgressBar}
                            className="container-fluid d-flex align-items-center justify-content-center rounded"
                        >
                            <span id={styles.courseProgressBarLabel}>
                                30% Concluído
                            </span>
                        </div>
                    </div>
                    <button
                        id={styles.courseProgressBarBTN}
                        className="align-self-stretch col p-2 rounded"
                    >
                        Continuar Formação
                    </button>
                </div>
                <div className="container-fluid d-flex flex-column align-items-start justify-content-start gap-3 p-0">
                    <Curso current />
                    <Curso />
                </div>
            </div>
        </div>
    );
}
