import { listaDeValoresGlobais } from "./atributos/globais";
import { ListaDeQuantificadores } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class RecuoInferior extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("recuo-inferior", "padding-bottom");

        if (Number.isNaN(parseInt(valor)) &&
            !(valor in listaDeValoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'recuo-inferior' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
                ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // O seletor aceita o número 0.
        // Logo, o código só passa pela validação caso haja um segundo parâmetro
        // ou caso o primeiro seja diferente de 0.
        if (quantificador !== undefined || valor !== '0') {
            if (!(quantificador in ListaDeQuantificadores)) {
                throw new Error(
                    `Propriedade 'recuo-inferior' com quantificador inválido. Valores aceitos:
                    ${Object.keys(ListaDeQuantificadores).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
