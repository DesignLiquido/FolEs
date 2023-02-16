import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class EspacamentoLinhas extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super(["espacamento-linhas", "espaçamento-linhas"], "row-gap");

        if (Number.isNaN(parseInt(valor)) &&
        !(valor in valoresGlobais)
    ) {
        throw new Error(
            `Propriedade 'espaçamento-linhas' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
    ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
    }

    this.valor = valor;

    if (Number(parseInt(valor))) {
        if (
            !(quantificador in unidadesMedida) ||
            quantificador === undefined
        ) {
            throw new Error(
                `Propriedade 'espaçamento-linhas' com quantificador inválido. Valores aceitos:
        ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.quantificador = quantificador;
    }
    }
}
