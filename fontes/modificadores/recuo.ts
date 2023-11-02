import { comprimentos, ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Recuo extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 4 valores.

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("recuo", "padding", pragmas);

        validarValorNumerico('recuo', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('recuo', quantificador, comprimentos, ListaDeValorPercentual);

            this.quantificador = quantificador;
        }
    }
}
