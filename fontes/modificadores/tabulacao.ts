import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Tabulacao extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["tabulacao", "tabulação"], "tab-size");

        validarValorNumerico('tabulação', valor)

        this.valor = valor;

        // Condicional parte do 2º parâmetro pois o modificador aceita receber
        // números inteiros também, sem quantificador.
        // Dentre os quantificadores, aceita somente os de comprimento/length.
        if (quantificador !== undefined) {
            validarQuantificador('tabulação', quantificador, comprimentos);

            this.quantificador = quantificador;
        }
    }
}
