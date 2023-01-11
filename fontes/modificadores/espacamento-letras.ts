import { ListaDeValoresGlobais } from "./atributos/globais";
import { ListaDeQuantificadores } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class EspacamentoLetras extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
    }

    constructor(valor: string, quantificador?: string) {
        super(["espacamento-letras", "espaçamento-letras"], "letter-spacing");

        // Também pode receber valores numéricos com ponto (.) na frente
        // Ex.: espaçamento-letras: .2rem;

        // A lógica abaixo cobre somente o recebimento de valores positivos e negativos
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'espaçamento-letras' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
        ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
        ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (
                !(quantificador in ListaDeQuantificadores) ||
                quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'espaçamento-letras' com quantificador inválido. Valores aceitos:
            ${Object.keys(ListaDeQuantificadores).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
