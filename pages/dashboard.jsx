/**
 *  ! ===========
 * 	! Importações
 *  ! ===========
 */
import React from "react";
import Layout from "./components/general/Layout/Layout";
import ComparacaoMensal from "./components/dashboard/ComparacaoMensal/ComparacaoMensal";
import ResumoHabilidades from "./components/dashboard/ResumoHabilidades/ResumoHabilidades";
import ComparacaoCategorias from "./components/dashboard/ComparacaoCategorias/ComparacaoCategorias";
import HistoricoConcluido from "./components/dashboard/HistoricoConcluido/HistoricoConcluido";

/**
 *  ! ===
 * 	! App
 *  ! ===
 */
export default function Index() {
    return (
        <Layout>
            <div className="container d-flex flex-column align-items-start justify-content-start gap-3">
                <ComparacaoMensal />
                <div className="container-fluid d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3 p-0">
                    <ResumoHabilidades />
                    <ComparacaoCategorias />
                </div>
                <HistoricoConcluido />
            </div>
        </Layout>
    );
}
