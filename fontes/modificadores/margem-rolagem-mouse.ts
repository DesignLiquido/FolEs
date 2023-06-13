import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemRolagemMouse extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 4 valores.

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("margem-rolagem-mouse", "scroll-margin");

        validarValorNumerico('margem-rolagem-mouse', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in unidadesMedida) || quantificador === undefined) {
                throw new Error(
                `Propriedade 'margem-rolagem-mouse' com quantificador inválido. Valores aceitos:
                ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
