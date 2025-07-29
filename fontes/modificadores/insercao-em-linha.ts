import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class InsercaoEmLinha extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["insercao-em-linha", "inserção-em-linha"],
            "inset-inline",
            pragmas,
        );

        validarValorNumerico(
            "inserção-em-linha",
            valores,
            this.valoresAceitos,
        );

        // if (Number(parseInt(valor))) {
        //     validarQuantificador(
        //         "inserção-em-linha",
        //         quantificador,
        //         unidadesMedida,
        //     );

        //     this.quantificador = quantificador;
        // }

        this.valores = valores;
    }
}
