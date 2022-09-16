// ? State and context
import { useState } from "react";

// ? Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// ? Own CSS
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    // ! Retorna o APP
    return (
        <div>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
