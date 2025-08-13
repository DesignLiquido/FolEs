import { Valor } from "../valores";
import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class FatiarImagemBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        preencher: "fill",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("fatiar-imagem-borda", "border-image-slice", pragmas);

        const valoresExtra = ["url"];

        validarValorNumerico(
            "fatiar-imagem-borda",
            valores,
            this.valoresAceitos,
            valoresExtra,
            ListaDeValorPercentual
        );

        this.valores = valores;
    }
}
