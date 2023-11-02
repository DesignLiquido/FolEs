import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class MargemEmLinhaRolagemMouse extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 2 valores.

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("margem-em-linha-rolagem-mouse", "scroll-margin-inline", pragmas);

        validarValorNumerico('margem-em-linha-rolagem-mouse', valor);

        this.valor = valor;

        if (quantificador !== undefined) {
            validarQuantificador('margem-em-bloco-rolagem-mouse', quantificador, comprimentos);

            this.quantificador = quantificador;
        }
    }
}
