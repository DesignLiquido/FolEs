import { cores } from "./atributos/cores";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";
import { validarValorString } from "./validacoes/string";

export class EnfaseTexto extends Modificador {
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

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["enfase-texto", "ênfase-texto"], "text-emphasis", pragmas);

        const validacaoString = validarValorString(valor);

        if (validacaoString) {
            this.valoresAceitos[valor] = valor;
        }

        validarValorCor('ênfase-texto', valor, this.valoresAceitos);

        this.valor = valor;
    }
}
