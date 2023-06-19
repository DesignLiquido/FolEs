import { cores } from "./atributos/cores";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class EnfaseTexto extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 2 valores.
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
        super(["enfase-texto", "ênfase-texto"], "text-emphasis");

        // Também aceita receber uma string qualquer como primeiro parâmetro
        // Ex.: ênfase-texto: "/25B2" #FA55A5;3
        // A lógica abaixo cobre somente o recebimento de um dos valores aceitos.
        // TODO: Adaptar lógica para cobrir todos os casos
        validarValorCor('ênfase-texto', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;

    }
}
