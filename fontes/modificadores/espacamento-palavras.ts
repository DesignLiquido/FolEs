import { valoresGlobais } from "./atributos/globais";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class EspacamentoPalavras extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
    }

    constructor(valor: string, quantificador?: string) {
        super(["espacamento-palavras", "espaçamento-palavras"], "word-spacing");

        if (Number.isNaN(parseInt(valor)) &&
        !(valor in this.valoresAceitos) &&
        !(valor in valoresGlobais)
    ) {
        throw new Error(
            `Propriedade 'espaçamento-palavras' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
    }

    this.valor = valor;

    if (Number(parseInt(valor))) {
        if (
            !(quantificador in comprimentos) ||
            quantificador === undefined
        ) {
            throw new Error(
                `Propriedade 'espaçamento-palavras' com quantificador inválido. Valores aceitos:
                ${Object.keys(comprimentos).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.quantificador = quantificador;
    }
    }
}
