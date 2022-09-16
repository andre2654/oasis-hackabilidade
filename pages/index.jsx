/**
 *  ! ===========
 * 	! Importações
 *  ! ===========
 */
import React from "react";
import Layout from "./components/general/Layout/Layout";
import Footer from "./components/general/Layout/Footer/Footer";
import Noticias from "./components/midias/Noticias/Noticias";
import Trilhas from "./components/midias/Trilhas/Trilhas";
import Progresso from "./components/midias/Progresso/Progresso";
import Jornal from "./components/midias/Jornal/Jornal";

/**
 *  ! ===
 * 	! App
 *  ! ===
 */
export default function Index() {
    return (
        <Layout>
            <div className="container d-flex flex-column flex-lg-row align-items-start justify-content-start gap-3">
                <div className="col-12 col-lg-8 d-flex flex-column align-items-start justify-content-start gap-5 p-0">
                    <Noticias />
                    <Trilhas />
                </div>
                <div className="col-12 col-lg-4 d-flex flex-column align-items-start justify-content-start gap-3 p-0">
                    <Progresso />
                    <Jornal />
                </div>
            </div>
            <Footer />
        </Layout>
    );
}
