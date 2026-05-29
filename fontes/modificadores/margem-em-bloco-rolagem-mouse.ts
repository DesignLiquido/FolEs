import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class MargemEmBlocoRolagemMouse extends Modificador {
    static nomeCss: string = "scroll-margin-block";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("margem-em-bloco-rolagem-mouse", MargemEmBlocoRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "margem-em-bloco-rolagem-mouse",
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
