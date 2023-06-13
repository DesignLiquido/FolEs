import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemSuperiorRolagemMouse extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("margem-superior-rolagem-mouse", "scroll-margin-top");

        validarValorNumerico('margem-superior-rolagem-mouse', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in comprimentos) || quantificador === undefined) {
                throw new Error(
                    `Propriedade 'margem-superior-rolagem-mouse' com quantificador inválido. Valores aceitos:
            ${Object.keys(comprimentos).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
