import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class MargemEsquerdaRolagemMouse extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("margem-esquerda-rolagem-mouse", "scroll-margin-left");

        validarValorNumerico('margem-esquerda-rolagem-mouse', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('margem-esquerda-rolagem-mouse', quantificador, comprimentos);

            this.quantificador = quantificador;
        }
    }
}
