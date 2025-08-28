import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RaioEsquerdoBordaInferior extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            "raio-esquerdo-borda-inferior",
            "border-bottom-left-radius",
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                "raio-esquerdo-borda-inferior",
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
