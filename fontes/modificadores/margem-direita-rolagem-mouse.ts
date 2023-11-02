import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class MargemDireitaRolagemMouse extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("margem-direita-rolagem-mouse", "scroll-margin-right", pragmas);

        validarValorNumerico('margem-direita-rolagem-mouse', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('margem-direita-rolagem-mouse', quantificador, comprimentos);

            this.quantificador = quantificador;
        }
    }
}
