import { valoresGlobais } from "./atributos/globais";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";

export class Tabulacao extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["tabulacao", "tabulação"], "tab-size");

        if (Number.isNaN(parseInt(valor)) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'tabulação' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
                ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Condicional parte do 2º parâmetro pois o modificador aceita receber
        // números inteiros também, sem quantificador.
        // Dentre os quantificadores, aceita somente os de comprimento/length.
        if (quantificador !== undefined) {
            if (!(quantificador in comprimentos)) {
                throw new Error(
                    `Propriedade 'tabulação' com quantificador inválido. Valores aceitos:
                    ${Object.keys(comprimentos).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
