import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class DistanciaDeslocamento extends Modificador {
    static nomeCss: string = "offset-distance";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["distancia-deslocamento", "distância-deslocamento"],
            DistanciaDeslocamento.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                "distância-deslocamento",
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
