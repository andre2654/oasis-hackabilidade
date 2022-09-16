/**
 *  ! ===========
 * 	! Importações
 *  ! ===========
 */
import React from "react";
import { ReactSVG } from "react-svg";

import styles from "./layoutLogin.module.css";

/**
 *  ! ===
 * 	! App
 *  ! ===
 */
export default function LayoutLogin() {
    return (
        <div
            id={styles.layoutLogin}
            className="d-flex flex-row align-items-center justify-content-center p-0"
        >
            <form
                id={styles.layoutLoginForm}
                className="d-flex flex-column align-items-center justify-content-center p-5 gap-3"
            >
                <ReactSVG
                    className="d-flex align-items-center justify-content-center "
                    src={"/assets/img/Marca/logo.svg"}
                    id={styles.logo}
                />
                <input
                    className={`${styles.loginInput} container-fluid p-2 rounded mt-5`}
                    type="text"
                    placeholder="Usuário"
                />
                <input
                    className={`${styles.loginInput} container-fluid p-2 rounded`}
                    type="password"
                    placeholder="Senha"
                />
                <button
                    id={styles.loginBTN}
                    className="container-fluid p-2 rounded mt-3"
                >
                    Entrar
                </button>
                <small id={`${styles.description}`} className="container-fluid">
                    Este usuário deve ser criado via solicitação junto a equipe
                    de TI de sua empresa, qualquer dúvida, por favor, contate-os
                </small>
            </form>
        </div>
    );
}
