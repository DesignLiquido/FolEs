import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class InicioRecuoEmBloco extends Modificador {
    static nomeCss: string = "padding-block-start";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["inicio-recuo-em-bloco", "início-recuo-em-bloco"],
            InicioRecuoEmBloco.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                "início-recuo-em-bloco",
                valores,
                null,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
