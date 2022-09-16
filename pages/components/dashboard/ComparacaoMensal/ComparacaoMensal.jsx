/**
 *  ! ===========
 * 	! Importações
 *  ! ===========
 */
import React from "react";
import { ResponsiveBump } from "@nivo/bump";
import { HiQuestionMarkCircle } from "react-icons/hi";

import styles from "./comparacaoMensal.module.css";

/**
 *  ! ===
 * 	! App
 *  ! ===
 */
export default function ComparacaoMensal() {
    const data = [
        {
            id: "Serie 1",
            data: [
                {
                    x: 2000,
                    y: 2,
                },
                {
                    x: 2001,
                    y: 7,
                },
                {
                    x: 2002,
                    y: 1,
                },
                {
                    x: 2003,
                    y: 4,
                },
                {
                    x: 2004,
                    y: 3,
                },
            ],
        },
        {
            id: "Serie 2",
            data: [
                {
                    x: 2000,
                    y: 6,
                },
                {
                    x: 2001,
                    y: 11,
                },
                {
                    x: 2002,
                    y: 7,
                },
                {
                    x: 2003,
                    y: 1,
                },
                {
                    x: 2004,
                    y: 5,
                },
            ],
        },
        {
            id: "Serie 3",
            data: [
                {
                    x: 2000,
                    y: 12,
                },
                {
                    x: 2001,
                    y: 12,
                },
                {
                    x: 2002,
                    y: 11,
                },
                {
                    x: 2003,
                    y: 6,
                },
                {
                    x: 2004,
                    y: 1,
                },
            ],
        },
        {
            id: "Serie 4",
            data: [
                {
                    x: 2000,
                    y: 1,
                },
                {
                    x: 2001,
                    y: 5,
                },
                {
                    x: 2002,
                    y: 9,
                },
                {
                    x: 2003,
                    y: 11,
                },
                {
                    x: 2004,
                    y: 11,
                },
            ],
        },
        {
            id: "Serie 5",
            data: [
                {
                    x: 2000,
                    y: 3,
                },
                {
                    x: 2001,
                    y: 2,
                },
                {
                    x: 2002,
                    y: 8,
                },
                {
                    x: 2003,
                    y: 2,
                },
                {
                    x: 2004,
                    y: 4,
                },
            ],
        },
        {
            id: "Serie 6",
            data: [
                {
                    x: 2000,
                    y: 7,
                },
                {
                    x: 2001,
                    y: 6,
                },
                {
                    x: 2002,
                    y: 4,
                },
                {
                    x: 2003,
                    y: 7,
                },
                {
                    x: 2004,
                    y: 6,
                },
            ],
        },
        {
            id: "Serie 7",
            data: [
                {
                    x: 2000,
                    y: 8,
                },
                {
                    x: 2001,
                    y: 8,
                },
                {
                    x: 2002,
                    y: 6,
                },
                {
                    x: 2003,
                    y: 5,
                },
                {
                    x: 2004,
                    y: 7,
                },
            ],
        },
        {
            id: "Serie 8",
            data: [
                {
                    x: 2000,
                    y: 5,
                },
                {
                    x: 2001,
                    y: 10,
                },
                {
                    x: 2002,
                    y: 5,
                },
                {
                    x: 2003,
                    y: 10,
                },
                {
                    x: 2004,
                    y: 10,
                },
            ],
        },
        {
            id: "Serie 9",
            data: [
                {
                    x: 2000,
                    y: 4,
                },
                {
                    x: 2001,
                    y: 1,
                },
                {
                    x: 2002,
                    y: 2,
                },
                {
                    x: 2003,
                    y: 8,
                },
                {
                    x: 2004,
                    y: 9,
                },
            ],
        },
        {
            id: "Serie 10",
            data: [
                {
                    x: 2000,
                    y: 10,
                },
                {
                    x: 2001,
                    y: 9,
                },
                {
                    x: 2002,
                    y: 12,
                },
                {
                    x: 2003,
                    y: 12,
                },
                {
                    x: 2004,
                    y: 8,
                },
            ],
        },
        {
            id: "Serie 11",
            data: [
                {
                    x: 2000,
                    y: 9,
                },
                {
                    x: 2001,
                    y: 4,
                },
                {
                    x: 2002,
                    y: 3,
                },
                {
                    x: 2003,
                    y: 9,
                },
                {
                    x: 2004,
                    y: 2,
                },
            ],
        },
        {
            id: "Serie 12",
            data: [
                {
                    x: 2000,
                    y: 11,
                },
                {
                    x: 2001,
                    y: 3,
                },
                {
                    x: 2002,
                    y: 10,
                },
                {
                    x: 2003,
                    y: 3,
                },
                {
                    x: 2004,
                    y: 12,
                },
            ],
        },
    ];
    return (
        <div
            id={styles.comparacaoMensal}
            className="container d-flex flex-column align-items-center justify-content-center"
        >
            <div
                id={styles.comparacaoMensalTituloContainer}
                className="container-fluid d-flex flex-column align-items-start justify-content-center p-0 gap-2 mt-5"
            >
                <h3 id={styles.comparacaoMensalTitulo} className="p-2">
                    CADASTRAR HABILIDADE
                    <HiQuestionMarkCircle
                        className={`${styles.comparacaoMensalInterrogation} ms-2`}
                    />
                </h3>
                <small className={`${styles.small}`}>
                    Habilidades são diferentes formas de aprendizado a quais
                    seus funcionários precisam saber para completar determinada
                    trilha.
                </small>
            </div>
            <div
                id={styles.comparacaoMensalGraficoContainer}
                className="container-fluid"
            >
                <ResponsiveBump
                    data={data}
                    colors={{ scheme: "spectral" }}
                    lineWidth={3}
                    activeLineWidth={6}
                    inactiveLineWidth={11}
                    inactiveOpacity={0.25}
                    startLabelPadding={17}
                    pointSize={8}
                    activePointSize={24}
                    inactivePointSize={10}
                    pointColor={{ theme: "background" }}
                    pointBorderWidth={1}
                    activePointBorderWidth={3}
                    pointBorderColor={{ from: "serie.color" }}
                    axisTop={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "",
                        legendPosition: "middle",
                        legendOffset: -36,
                    }}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "",
                        legendPosition: "middle",
                        legendOffset: 32,
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "ranking",
                        legendPosition: "middle",
                        legendOffset: -40,
                    }}
                    margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
                    axisRight={null}
                />
            </div>
        </div>
    );
}
