import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemEmLinhaRolagemMouse extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 2 valores.

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("margem-em-linha-rolagem-mouse", "scroll-margin-inline");

        validarValorNumerico('margem-em-linha-rolagem-mouse', valor);

        this.valor = valor;

        if (quantificador !== undefined) {
            if (!(quantificador in comprimentos)) {
                throw new Error(
                    `Propriedade 'margem-em-bloco-rolagem-mouse' com quantificador inválido. Valores aceitos:
                    ${Object.keys(comprimentos).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
