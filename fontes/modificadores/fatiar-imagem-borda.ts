import { Valor } from "../valores";
import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class FatiarImagemBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        preencher: "fill",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("fatiar-imagem-borda", "border-image-slice", pragmas);

        const valoresExtra = ["url"];

        if (!valorVariavel) {
            validarValorNumerico(
                "fatiar-imagem-borda",
                valores,
                this.valoresAceitos,
                valoresExtra,
            );

            // TODO: Repensar
            // if (quantificador !== undefined) {
            //     validarQuantificador(
            //         "fatiar-imagem-borda",
            //         quantificador,
            //         ListaDeValorPercentual,
            //     );
            // }
        }

        this.valores = valores;
    }
}
