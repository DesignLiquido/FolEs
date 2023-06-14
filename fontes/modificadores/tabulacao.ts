import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class Tabulacao extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["tabulacao", "tabulação"], "tab-size");

        validarValorNumerico('tabulação', valor)

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
