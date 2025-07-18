import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RaioEsquerdoBordaInferior extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            "raio-esquerdo-borda-inferior",
            "border-bottom-left-radius",
            pragmas,
        );

        if (!valorVariavel) {
            validarValorNumerico("raio-esquerdo-borda-inferior", valores);

            // if (Number(parseInt(valor))) {
            //     validarQuantificador(
            //         "raio-esquerdo-borda-inferior",
            //         quantificador,
            //         unidadesMedida,
            //     );

            //     this.quantificador = quantificador;
            // }
        }

        this.valores = valores;
    }
}
