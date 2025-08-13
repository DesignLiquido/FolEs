import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemSuperiorRolagemMouse extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("margem-superior-rolagem-mouse", "scroll-margin-top", pragmas);

        validarValorNumerico(
            "margem-superior-rolagem-mouse", 
            valores,
            null,
            null,
            comprimentos
        );

        this.valores = valores;
    }
}
