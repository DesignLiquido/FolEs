import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        espessa: "thick",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("largura-borda", "border-width", pragmas);

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "numérica", 
                "largura-borda", 
                valores, 
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        } else {
            validarValorNumerico(
                "largura-borda", 
                valores, 
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
    }
}
