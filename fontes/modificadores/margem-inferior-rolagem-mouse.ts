import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemInferiorRolagemMouse extends Modificador {
    static nomeCss: string = "scroll-margin-bottom";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("margem-inferior-rolagem-mouse", MargemInferiorRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "margem-inferior-rolagem-mouse",
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
