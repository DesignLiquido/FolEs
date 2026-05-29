import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraInicioBordaEmLinha extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        grossa: "thick",
    };

    static nomeCss: string = "border-inline-start-width";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["largura-inicio-borda-em-linha", "largura-início-borda-em-linha"],
            LarguraInicioBordaEmLinha.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                "largura-início-borda-em-linha",
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
