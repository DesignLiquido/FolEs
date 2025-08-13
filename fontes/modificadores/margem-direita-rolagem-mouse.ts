import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemDireitaRolagemMouse extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("margem-direita-rolagem-mouse", "scroll-margin-right", pragmas);

        validarValorNumerico(
            "margem-direita-rolagem-mouse", 
            valores,
            null,
            null,
            comprimentos
        );

        this.valores = valores;
    }
}
