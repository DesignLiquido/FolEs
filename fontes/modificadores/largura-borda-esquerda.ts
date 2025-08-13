import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraBordaEsquerda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        grossa: "thick",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("largura-borda-esquerda", "border-left-width", pragmas);

        validarValorNumerico(
            "largura-borda-esquerda",
            valores,
            this.valoresAceitos,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
