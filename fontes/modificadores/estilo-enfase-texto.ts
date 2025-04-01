import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";
import { validarValorString } from "./validacoes/string";

export class EstiloEnfaseTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "preenchido": "filled",
        "abrir": "open",
        "ponto": "dot",
        "circulo": "circle",
        "círculo": "circle",
        "circulo-duplo": "double-circle",
        "círculo-duplo": "double-circle",
        "triangulo": "triangle",
        "triângulo": "triangle",
        "sesamo": "sesame",
        "sésamo": "sesame",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(
            ["estilo-enfase-texto", "estilo-ênfase-texto"],
            "text-emphasis-style",
            pragmas
        );

        const validacaoString = validarValorString(valor);

        if (validacaoString) {
            this.valoresAceitos[valor] = valor;
        }

        if (!valorVariavel) validarValores('estilo-ênfase-texto', valor, this.valoresAceitos);

        this.valor = valor;
    }
}
