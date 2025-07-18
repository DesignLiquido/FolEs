import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class AlturaLinha extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("altura-linha", "line-height", pragmas);

        if (!valorVariavel) {
            validarValorNumerico("altura-linha", valores, this.valoresAceitos);

            // Lógica diferente dos demais pois o modificador pode receber valores numéricos s/ quantificador
            // TODO: Repensar
            // if (quantificador !== undefined) {
            //     validarQuantificador(
            //         "altura-linha",
            //         quantificador,
            //         unidadesMedida,
            //     );

            //     this.quantificador = quantificador;
            // }
        }

        this.valores = valores;
    }
}
