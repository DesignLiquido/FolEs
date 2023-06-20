import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class MargemEmBlocoRolagemMouse extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 2 valores.

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("margem-em-bloco-rolagem-mouse", "scroll-margin-block");

        validarValorNumerico('margem-em-bloco-rolagem-mouse', valor);

        this.valor = valor;

        if (quantificador !== undefined) {
            validarQuantificador('margem-em-bloco-rolagem-mouse', quantificador, comprimentos);

            this.quantificador = quantificador;
        }
    }
}
