import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class MargemRolagemMouse extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 4 valores.

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("margem-rolagem-mouse", "scroll-margin", pragmas);

        validarValorNumerico('margem-rolagem-mouse', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('margem-rolagem-mouse', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
