import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";
import { validarValorString } from "./validacoes/string";

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

        // TODO: Repensar
        // const validacaoString = validarValorString(valores);

        // if (validacaoString) {
        //     this.valoresAceitos[valor] = valor;
        // }

        validarValores("estilo-ênfase-texto", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
