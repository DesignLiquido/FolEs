import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorCor } from "./validacoes/cor";

export class EnfaseTexto extends Modificador {
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
        super(["enfase-texto", "ênfase-texto"], "text-emphasis", pragmas);

        // TODO: Aceita valor string

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "cor",
                "ênfase-texto",
                valores,
                this.valoresAceitos
            );
        } else {
            validarValorCor(
                "ênfase-texto",
                valores,
                this.valoresAceitos
            );
        }

        this.valores = valores;
    }
}
