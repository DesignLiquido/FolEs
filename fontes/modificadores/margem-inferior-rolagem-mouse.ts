import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class MargemInferiorRolagemMouse extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("margem-inferior-rolagem-mouse", "scroll-margin-bottom");

        validarValorNumerico('margem-inferior-rolagem-mouse', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('margem-inferior-rolagem-mouse', quantificador, comprimentos);

            this.quantificador = quantificador;
        }
    }
}
