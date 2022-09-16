/**
 *  ! ===========
 * 	! Importações
 *  ! ===========
 */
import React from "react";
import { ReactSVG } from "react-svg";

import styles from "./footer.module.css";

/**
 *  ! ===
 * 	! App
 *  ! ===
 */
export default function Footer() {
    return (
        <div
            id={styles.footer}
            className="container-fluid d-flex flex-column align-items-center justify-content-center mt-3 py-5"
        >
            <ReactSVG
                className="d-flex align-items-center justify-content-center "
                src={"/assets/img/Marca/logo.svg"}
                id={styles.logo}
            />
            <p id={styles.footerText} className="container mt-4 p-0">
                OASIS Centro Academico UTFPR-SH. | CNPJ 12.998.132/0001-03 Rua
                Araucaria, 716, Jardim Universitario, Santa Helena PR, CEP:
                85892000| Fale conosco| ajuda-ajudaoasis@oasis.com.br.
            </p>
        </div>
    );
}
