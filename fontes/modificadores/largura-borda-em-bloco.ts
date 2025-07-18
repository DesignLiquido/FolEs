import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class LarguraBordaEmBloco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        grossa: "thick",
    };

    constructor(
        valores: Valor[],
        quantificador: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("largura-borda-em-bloco", "border-block-width", pragmas);

        if (!valorVariavel) {
            validarValorNumerico(
                "largura-borda-em-bloco",
                valores,
                this.valoresAceitos,
            );

            // TODO: Repensar
            // if (Number(parseInt(valor))) {
            //     validarQuantificador(
            //         "largura-borda-em-bloco",
            //         quantificador,
            //         unidadesMedida,
            //     );

            //     this.quantificador = quantificador;
            // }
        }

        this.valores = valores;
    }
}
