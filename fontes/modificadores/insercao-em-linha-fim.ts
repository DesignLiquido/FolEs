import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class InsercaoEmLinhaFim extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["insercao-em-linha-fim", "inserção-em-linha-fim"],
            "inset-inline-end",
            pragmas,
        );

        if (!valorVariavel) {
            validarValorNumerico(
                "inserção-em-linha-fim",
                valores,
                this.valoresAceitos,
            );

            // TODO: Repensar
            // if (Number(parseInt(valor))) {
            //     validarQuantificador(
            //         "inserção-em-linha-fim",
            //         quantificador,
            //         unidadesMedida,
            //     );

            //     this.quantificador = quantificador;
            // }
        }

        this.valores = valores;
    }
}
