import { ListaDeValorPercentual, unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RecuoEmBloco extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 2 valores.
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("recuo-em-bloco", "padding-block", pragmas);

        validarValorNumerico('recuo-em-bloco', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('recuo-em-bloco', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
