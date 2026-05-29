import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemSuperiorRolagemMouse extends Modificador {
    static nomeCss: string = "scroll-margin-top";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("margem-superior-rolagem-mouse", MargemSuperiorRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "margem-superior-rolagem-mouse",
                valores,
                null,
                null,
                comprimentos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
