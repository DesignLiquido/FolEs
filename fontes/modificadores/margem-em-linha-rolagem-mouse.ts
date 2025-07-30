import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemEmLinhaRolagemMouse extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("margem-em-linha-rolagem-mouse", "scroll-margin-inline", pragmas);

        validarValorNumerico(
            "margem-em-linha-rolagem-mouse", 
            valores,
            null,
            null,
            comprimentos
        );

        this.valores = valores;
    }
}
