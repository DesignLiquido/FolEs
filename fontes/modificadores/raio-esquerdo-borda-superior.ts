import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RaioEsquerdoBordaSuperior extends Modificador {
    static nomeCss: string = "border-top-left-radius";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            "raio-esquerdo-borda-superior",
            RaioEsquerdoBordaSuperior.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                "raio-esquerdo-borda-superior",
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
