import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RecuoEmLinha extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 2 valores.

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("recuo-em-linha", "padding-inline");

        validarValorNumerico('recuo-em-linha', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('recuo-em-linha', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
