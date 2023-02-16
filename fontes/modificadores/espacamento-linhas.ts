import { listaDeValoresGlobais } from "./atributos/globais";
import { ListaDeQuantificadores } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class EspacamentoLinhas extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super(["espacamento-linhas", "espaçamento-linhas"], "row-gap");

        if (Number.isNaN(parseInt(valor)) &&
        !(valor in listaDeValoresGlobais)
    ) {
        throw new Error(
            `Propriedade 'espaçamento-linhas' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
    ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
    }

    this.valor = valor;

    if (Number(parseInt(valor))) {
        if (
            !(quantificador in ListaDeQuantificadores) ||
            quantificador === undefined
        ) {
            throw new Error(
                `Propriedade 'espaçamento-linhas' com quantificador inválido. Valores aceitos:
        ${Object.keys(ListaDeQuantificadores).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.quantificador = quantificador;
    }
    }
}
