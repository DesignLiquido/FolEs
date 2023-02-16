import { listaDeValoresGlobais } from "./atributos/globais";
import { ListaDeComprimento } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class Tabulacao extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super(["tabulacao", "tabulação"], "tab-size");

        if (Number.isNaN(parseInt(valor)) &&
            !(valor in listaDeValoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'tabulação' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
                ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Condicional parte do 2º parâmetro pois o modificador aceita receber
        // números inteiros também, sem quantificador.
        // Dentre os quantificadores, aceita somente os de comprimento/length.
        if (quantificador !== undefined) {
            if (!(quantificador in ListaDeComprimento)) {
                throw new Error(
                    `Propriedade 'tabulação' com quantificador inválido. Valores aceitos:
                    ${Object.keys(ListaDeComprimento).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
