import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class LarguraImagemBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("largura-imagem-borda", "border-image-width", pragmas);

        if (!valorVariavel) {
            validarValorNumerico(
                "largura-imagem-borda",
                valores,
                this.valoresAceitos,
            );

            // TODO: Repensar
            // if (quantificador !== undefined) {
            //     validarQuantificador(
            //         "largura-imagem-borda",
            //         quantificador,
            //         unidadesMedida,
            //     );

            //     this.quantificador = quantificador;
            // }
        }

        this.valores = valores;
    }
}
