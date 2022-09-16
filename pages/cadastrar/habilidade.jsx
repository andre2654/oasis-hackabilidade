/**
 *  ! ===========
 * 	! Importações
 *  ! ===========
 */
import React from "react";
import Layout from "../components/general/Layout/Layout";
import Footer from "../components/general/Layout/Footer/Footer";
import FormularioHabilidade from "../components/formulario/habilidade";

/**
 *  ! ===
 * 	! App
 *  ! ===
 */
export default function CadastrarHabilidade() {
    return (
        <Layout>
            <div className="container d-flex align-items-center justify-content-center gap-3">
                <FormularioHabilidade />
            </div>
            <Footer />
        </Layout>
    );
}
