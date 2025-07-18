import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class InicioMargemEmBloco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["inicio-margem-em-bloco", "início-margem-em-bloco"],
            "margin-block-start",
            pragmas,
        );

        if (!valorVariavel) {
            validarValorNumerico(
                "início-margem-em-bloco",
                valores,
                this.valoresAceitos,
            );

            // if (Number(parseInt(valor))) {
            //     validarQuantificador(
            //         "início-margem-em-bloco",
            //         quantificador,
            //         unidadesMedida,
            //     );

            //     this.quantificador = quantificador;
            // }
        }

        this.valores = valores;
    }
}
