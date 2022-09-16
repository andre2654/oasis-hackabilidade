/**
 *  ! ===========
 * 	! Importações
 *  ! ===========
 */
import React from "react";

import styles from "./jornal.module.css";

/**
 *  ! ===
 * 	! App
 *  ! ===
 */
export default function Jornal() {
    return (
        <div
            id={styles.jornal}
            className="container d-flex flex-column align-items-start justify-content-start gap-1 p-3"
        >
            <marquee
                behavior="scroll"
                align="center"
                direction="up"
                height="200"
                scrollamount="2"
                scrolldelay="20"
            >
                <iframe
                    id="scroll"
                    width="100%"
                    height="650px"
                    frameBorder="0"
                    src="https://www.sitecontabil.com.br/noticias/frame-not.php?fonte=Tahoma&amp;size=12&amp;cor=black&amp;estilo=none"
                    scrolling="no"
                    allowtransparency="true"
                ></iframe>
            </marquee>
        </div>
    );
}
