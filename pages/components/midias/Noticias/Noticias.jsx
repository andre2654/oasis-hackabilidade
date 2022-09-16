/**
 *  ! ===========
 * 	! Importações
 *  ! ===========
 */
import React from "react";

import styles from "./noticias.module.css";

/**
 *  ! ===
 * 	! App
 *  ! ===
 */
export default function Noticias() {
    return (
        <div className="container d-flex flex-column align-items-start justify-content-start gap-1 p-0">
            <div
                id={styles.noticiaGrandeContainer}
                className="container-fluid d-flex flex-column flex-lg-row align-items-start justify-content-start p-0"
            >
                <div
                    className={`${styles.noticiaGrande} col-12 col-lg-7`}
                ></div>
                <div
                    className={`${styles.noticiaGrandeTexto} col-12 col-lg-5 d-flex flex-column align-items-start justify-content-between align-self-stretch p-4`}
                >
                    <div className="d-flex flex-column align-items-start justify-content-start">
                        <h2 id={styles.noticiaGrandeTitle}>Texto Maneiro</h2>
                        <p id={styles.noticiaGrandeDescription}>
                            Lorem ipsum asdaq chase oulis heigue Lorem ipsum
                            asdaq chase oulis heigue Lorem ipsum asdaq chase
                            oulis heigue Lorem ipsum asdaq chase oulis heigue
                            Lorem ipsum asdaq chase oulis heigue Lorem ipsum
                            asdaq chase oulis heigue...
                        </p>
                    </div>
                    <a id={styles.noticiaGrandeLink} href="#">
                        Acessar a noticia
                    </a>
                </div>
            </div>
            <div className="container-fluid d-flex flex-wrap align-items-start justify-content-start p-0 gap-1">
                <div
                    className={`${styles.noticiaPequeno} col d-flex align-items-end justify-content-center p-0`}
                >
                    <div
                        className={`${styles.noticiaPequenoTitulo} container-fluid p-0`}
                    >
                        Titulo
                    </div>
                </div>
                <div
                    className={`${styles.noticiaPequeno} col d-flex align-items-end justify-content-center p-0`}
                >
                    <div
                        className={`${styles.noticiaPequenoTitulo} container-fluid p-0`}
                    >
                        Titulo
                    </div>
                </div>
                <div
                    className={`${styles.noticiaPequeno} col d-flex align-items-end justify-content-center p-0`}
                >
                    <div
                        className={`${styles.noticiaPequenoTitulo} container-fluid p-0`}
                    >
                        Titulo
                    </div>
                </div>
                <div
                    className={`${styles.noticiaPequeno} col d-flex align-items-end justify-content-center p-0`}
                >
                    <div
                        className={`${styles.noticiaPequenoTitulo} container-fluid p-0`}
                    >
                        Titulo
                    </div>
                </div>
                <div
                    className={`${styles.noticiaPequeno} col d-flex align-items-end justify-content-center p-0`}
                >
                    <div
                        className={`${styles.noticiaPequenoTitulo} container-fluid p-0`}
                    >
                        Titulo
                    </div>
                </div>
            </div>
        </div>
    );
}
