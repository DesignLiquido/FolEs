import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class InicioRecuoEmLinha extends Modificador {
    static nomeCss: string = "padding-inline-start";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["inicio-recuo-em-linha", "início-recuo-em-linha"],
            InicioRecuoEmLinha.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                "início-recuo-em-linha",
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
