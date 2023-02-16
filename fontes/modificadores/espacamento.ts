import { listaDeValoresGlobais } from "./atributos/globais";
import { ListaDeQuantificadores } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class Espacamento extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super(["espacamento", "espaçamento"], "gap");

        // Pode receber também dois valores. Ex.: espacamento: 10px 2mm;
        // Também pode receber a função calc. Ex.: espacamento: calc(20% + 20px);
        // A lógica abaixo cobre somente o recebimento de UM único valor. 
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in listaDeValoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'espaçamento' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
                    ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (
                !(quantificador in ListaDeQuantificadores) ||
                quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'espaçamento' com quantificador inválido. Valores aceitos:
                    ${Object.keys(ListaDeQuantificadores).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
