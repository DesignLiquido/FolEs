import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraBordaEmLinha extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        grossa: "thick",
    };

    static nomeCss: string = "border-inline-width";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("largura-borda-em-linha", LarguraBordaEmLinha.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "largura-borda-em-linha",
                valores,
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
