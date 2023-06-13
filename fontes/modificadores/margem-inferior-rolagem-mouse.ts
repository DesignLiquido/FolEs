import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemInferiorRolagemMouse extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("margem-inferior-rolagem-mouse", "scroll-margin-bottom");

        validarValorNumerico('margem-inferior-rolagem-mouse', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in comprimentos) || quantificador === undefined) {
                throw new Error(
                    `Propriedade 'margem-inferior-rolagem-mouse' com quantificador inválido. Valores aceitos:
                    ${Object.keys(comprimentos).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
