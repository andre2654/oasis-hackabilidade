/**
 *  ! ===========
 * 	! Importações
 *  ! ===========
 */
import React from "react";
import { ResponsiveRadar } from "@nivo/radar";

import styles from "./resumoHabilidades.module.css";

/**
 *  ! ===
 * 	! App
 *  ! ===
 */
export default function ResumoHabilidades() {
    const data = [
        {
            taste: "fruity",
            chardonay: 65,
            carmenere: 52,
            syrah: 83,
        },
        {
            taste: "bitter",
            chardonay: 103,
            carmenere: 31,
            syrah: 101,
        },
        {
            taste: "heavy",
            chardonay: 54,
            carmenere: 35,
            syrah: 86,
        },
        {
            taste: "strong",
            chardonay: 60,
            carmenere: 21,
            syrah: 88,
        },
        {
            taste: "sunny",
            chardonay: 95,
            carmenere: 100,
            syrah: 88,
        },
    ];
    return (
        <div
            id={styles.resumoHabilidadesGraficoContainer}
            class="col rounded p-3"
        >
            <div class={styles.title}>Resumo das habilidades</div>
            <ResponsiveRadar
                data={data}
                keys={["chardonay", "carmenere", "syrah"]}
                indexBy="taste"
                valueFormat=">-.2f"
                margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                borderColor={{ from: "color" }}
                gridLabelOffset={36}
                dotSize={10}
                dotColor={{ theme: "background" }}
                dotBorderWidth={2}
                colors={{ scheme: "nivo" }}
                blendMode="multiply"
                motionConfig="wobbly"
                legends={[
                    {
                        anchor: "top-left",
                        direction: "column",
                        translateX: -50,
                        translateY: -40,
                        itemWidth: 80,
                        itemHeight: 20,
                        itemTextColor: "#999",
                        symbolSize: 12,
                        symbolShape: "circle",
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemTextColor: "#000",
                                },
                            },
                        ],
                    },
                ]}
            />
        </div>
    );
}
