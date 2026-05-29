import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemEsquerdaRolagemMouse extends Modificador {
    static nomeCss: string = "scroll-margin-left";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("margem-esquerda-rolagem-mouse", MargemEsquerdaRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "margem-esquerda-rolagem-mouse",
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
