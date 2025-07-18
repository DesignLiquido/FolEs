import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class MargemInferior extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("margem-inferior", "margin-bottom", pragmas);

        if (!valorVariavel) {
            validarValorNumerico("margem-inferior", valores, this.valoresAceitos);

            // TODO: Repensar
            // if (Number(parseInt(valor))) {
            //     validarQuantificador(
            //         "margem-inferior",
            //         quantificador,
            //         unidadesMedida,
            //     );

            //     this.quantificador = quantificador;
            // }
        }

        this.valores = valores;
    }
}
