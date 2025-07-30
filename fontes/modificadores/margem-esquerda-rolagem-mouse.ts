import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemEsquerdaRolagemMouse extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("margem-esquerda-rolagem-mouse", "scroll-margin-left", pragmas);

        validarValorNumerico(
            "margem-esquerda-rolagem-mouse", 
            valores,
            null,
            null,
            comprimentos
        );

        this.valores = valores;
    }
}
