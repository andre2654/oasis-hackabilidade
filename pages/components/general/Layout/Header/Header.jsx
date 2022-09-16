/**
 *  ! ===========
 * 	! Importações
 *  ! ===========
 */
import React from "react";
import { ReactSVG } from "react-svg";
import { FaSearch } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";

import styles from "./header.module.css";

/**
 *  ! ===
 * 	! App
 *  ! ===
 */
export default function Header() {
    return (
        <div
            id={styles.header}
            className="container-fluid d-flex align-items-center justify-content-center"
        >
            <div className="container d-flex align-items-center justify-content-center p-0 gap-3">
                <a href="/">
                    <ReactSVG
                        className="d-flex align-items-center justify-content-center "
                        src={"/assets/img/Marca/logo.svg"}
                        id={styles.logo}
                    />
                </a>
                <div id={styles.menu} className="p-0 m-0">
                    <div id={styles.menuTitle}>Tópicos</div>
                    <div
                        id={styles.menuItems}
                        className="flex-column align-items-start justify-content-start p-0"
                    >
                        <a href="#" className="container-fluid p-2">
                            Imposto de renda
                        </a>
                        <a href="#" className="container-fluid p-2">
                            Escrita fiscal
                        </a>
                        <a href="#" className="container-fluid p-2">
                            Departamento pessoal
                        </a>
                        <a href="#" className="container-fluid p-2">
                            Excel
                        </a>
                        <a href="#" className="container-fluid p-2">
                            Dominio sistemas
                        </a>
                        <a href="#" className="container-fluid p-2">
                            IOB
                        </a>
                    </div>
                </div>
                <div
                    id={styles.searchBar}
                    className="d-flex align-items-center justify-content-start p-2"
                >
                    <FaSearch id={styles.searchBarIcon} className="ms-3" />
                    <input
                        className="container-fluid ms-3"
                        placeholder="Pesquise por algum tema"
                        type="text"
                    />
                </div>
                <a
                    className="d-flex align-items-center justify-content-start py-2 px-4"
                    id={styles.ensine}
                    href="#"
                >
                    <IoSchoolSharp id={styles.ensineIcon} className="me-2" />
                    Ensine na OASIS
                </a>
            </div>
        </div>
    );
}
