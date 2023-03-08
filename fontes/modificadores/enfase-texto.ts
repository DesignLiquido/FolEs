import { cores } from "./atributos/cores";
import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

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

    constructor(valor: string, quantificador?: string) {
        super(["enfase-texto", "ênfase-texto"], "text-emphasis");

        // O valor é recebido como objeto, o que impossibilita de utilizar a função includes().
        // A constante abaixo é criada para ser possível fazer as validações seguintes.
        const valorString = valor.toString();

        const validaçõesCor = !(valorString.includes('rgb')) && !(valorString.includes('rgba')) &&
            !(valorString.includes('hsl')) && !(valorString.includes('hsla'));

        const validaçõesHEX = !(valorString.startsWith('#') && valorString.length <= 7);

        if (!(valor in this.valoresAceitos) &&
            validaçõesCor &&
            validaçõesHEX &&
            Number.isNaN(parseInt(valor)) &&
            !(valor in cores) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'ênfase-texto' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(cores).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;

    }
}
