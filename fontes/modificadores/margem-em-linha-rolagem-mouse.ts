import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemEmLinhaRolagemMouse extends Modificador {
    static nomeCss: string = "scroll-margin-inline";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("margem-em-linha-rolagem-mouse", MargemEmLinhaRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "margem-em-linha-rolagem-mouse",
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
