import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraInicioBordaEmBloco extends Modificador {
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
        super(
            ["largura-inicio-borda-em-bloco", "largura-início-borda-em-bloco"],
            "border-block-start-width",
            pragmas,
        );

        validarValorNumerico(
            "largura-início-borda-em-bloco",
            valores,
            this.valoresAceitos,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
