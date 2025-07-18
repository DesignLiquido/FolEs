import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class InicioMargemEmLinha extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["inicio-margem-em-linha", "início-margem-em-linha"],
            "margin-inline-start",
            pragmas,
        );

        if (!valorVariavel) {
            validarValorNumerico(
                "início-margem-em-linha",
                valores,
                this.valoresAceitos,
            );

            // if (Number(parseInt(valor))) {
            //     validarQuantificador(
            //         "início-margem-em-linha",
            //         quantificador,
            //         unidadesMedida,
            //     );

            //     this.quantificador = quantificador;
            // }
        }

        this.valores = valores;
    }
}
