import { ListaDeValorPercentual, unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RecuoRolagemMouse extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 4 valores.
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("recuo-rolagem-mouse", "scroll-padding");

        validarValorNumerico('recuo-rolagem-mouse', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('recuo-rolagem-mouse', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
