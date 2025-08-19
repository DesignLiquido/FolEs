import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EstiloEnfaseTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        preenchido: "filled",
        abrir: "open",
        ponto: "dot",
        circulo: "circle",
        círculo: "circle",
        "circulo-duplo": "double-circle",
        "círculo-duplo": "double-circle",
        triangulo: "triangle",
        triângulo: "triangle",
        sesamo: "sesame",
        sésamo: "sesame",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["estilo-enfase-texto", "estilo-ênfase-texto"],
            "text-emphasis-style",
            pragmas,
        );

        // TODO: Aceita valores string
        validarValores("estilo-ênfase-texto", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
