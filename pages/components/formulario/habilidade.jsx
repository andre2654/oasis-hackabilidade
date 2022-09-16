/**
 *  ! ===========
 * 	! Importações
 *  ! ===========
 */
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiQuestionMarkCircle } from "react-icons/hi";

import styles from "./habilidade.module.css";

/**
 *  ! ===
 * 	! App
 *  ! ===
 */
export default function FormularioHabilidade() {
    return (
        <div
            id={styles.formulario}
            className="container-fluid d-flex flex-column align-items-center justify-content-center p-0"
        >
            <div
                id={styles.formularioTituloContainer}
                className="container-fluid d-flex flex-column align-items-start justify-content-center p-0 gap-2 mt-5"
            >
                <h3 id={styles.formularioTitulo} className="p-2">
                    CADASTRAR HABILIDADE
                    <HiQuestionMarkCircle
                        className={`${styles.formularioInterrogation} ms-2`}
                    />
                </h3>
                <small className={`${styles.small}`}>
                    Habilidades são diferentes formas de aprendizado a quais
                    seus funcionários precisam saber para completar determinada
                    trilha.
                </small>
            </div>
            <form
                id={styles.formularioForm}
                className="container-fluid d-flex flex-column align-items-start justify-content-end gap-3 p-0 mt-5"
            >
                <input
                    className={`${styles.input} container-fluid p-2`}
                    type="text"
                    placeholder="Nome da habiliade"
                />
                <input
                    className={`${styles.input} container-fluid p-2`}
                    type="text"
                    placeholder="Link do vídeo"
                />
                <small className={`${styles.small}`}>
                    Nos envie o link de sua habilidade, as plataformas a seguir
                    são aceitas: Youtube, Vimeo e Twitch
                </small>
                <select className={`${styles.select} container-fluid p-2`}>
                    <option disable selected value="">
                        Categoria
                    </option>
                    <option value="1">Categoria 1</option>
                    <option value="2">Categoria 2</option>
                    <option value="3">Categoria 3</option>
                </select>
                <select className={`${styles.select} container-fluid p-2`}>
                    <option disable selected value="">
                        Deepartamento
                    </option>
                    <option value="1">Deepartamento 1</option>
                    <option value="2">Deepartamento 2</option>
                    <option value="3">Deepartamento 3</option>
                </select>
                <select className={`${styles.select} container-fluid p-2`}>
                    <option disable selected value="">
                        Habilidade compartilhada
                    </option>
                    <option value="1">Sim</option>
                    <option value="0">Não</option>
                </select>
                <small className={`${styles.small}`}>
                    Habilidade compartilhada permite que outras pessoas acessem
                    a sua habilidade e a utilizem em seus projetos, além disto o
                    criador da habilidade receberá créditos por cada utilização.
                </small>
                <textarea
                    className={`${styles.textarea} container-fluid p-2`}
                    placeholder="Descrição"
                ></textarea>
                <div className="container-fluid d-flex align-items-center justify-content-end p-0">
                    <button
                        id={styles.inputBTN}
                        className="d-flex align-items-center justify-content-center py-2 px-5 rounded mt-3"
                    >
                        Entrar
                        <FaArrowRight className="ms-3" />
                    </button>
                </div>
                <small
                    id={`${styles.description}`}
                    className="container-fluid p-0"
                >
                    Ao enviar essa habilidade não se preocupe, ela poderá ser
                    removida posteriormente se assim desejar.
                </small>
            </form>
        </div>
    );
}
