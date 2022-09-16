/**
 *  ! ===========
 * 	! Importações
 *  ! ===========
 */
import React from "react";
import { ResponsiveBullet } from "@nivo/bullet";

import styles from "./historicoConcluido.module.css";

/**
 *  ! ===
 * 	! App
 *  ! ===
 */
export default function historicoConcluido() {
    const data = [
        {
            id: "temp.",
            ranges: [26, 54, 39, 0, 100],
            measures: [88],
            markers: [96],
        },
        {
            id: "power",
            ranges: [
                1.0287325042201214, 0.32725238420610014, 1.2235107352255166, 0,
                2,
            ],
            measures: [0.00709315327933615, 0.11790108076631078],
            markers: [1.7473822293223387],
        },
        {
            id: "volume",
            ranges: [12, 26, 4, 10, 8, 23, 0, 40],
            measures: [30],
            markers: [26],
        },
        {
            id: "cost",
            ranges: [152650, 185937, 298049, 0, 500000],
            measures: [199879, 278171],
            markers: [498743],
        },
        {
            id: "revenue",
            ranges: [11, 1, 12, 0, 13],
            measures: [11],
            markers: [9.17744790971985, 12.708170474263138],
        },
    ];
    return (
        <div
            id={styles.historicoConcluidoGraficoContainer}
            class="container-fluid rounded p-3"
        >
            <div class={styles.title}>Histórico de trilhas</div>
            <ResponsiveBullet
                data={data}
                margin={{ top: 20, right: 90, bottom: 40, left: 90 }}
                spacing={46}
                titleAlign="start"
                titleOffsetX={-70}
                measureSize={0.2}
            />
        </div>
    );
}
