import { Valor } from "../valores";
import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class FatiarBordaMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        preencher: "fill",
    };

    static nomeCss: string = "mask-border-slice";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["fatiar-borda-mascara", "fatiar-borda-máscara"],
            FatiarBordaMascara.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                "fatiar-borda-máscara",
                valores,
                this.valoresAceitos,
                null,
                ListaDeValorPercentual
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
