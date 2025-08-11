import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class BordaEsquerda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        espessa: "thick",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador
    ) {
        super("borda-esquerda", "border-left", pragmas);

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "múltiplos-qualitativos", 
                "borda-esquerda", 
                valores, 
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        } else {
            validarMultiplosQualitativos(
                "borda-esquerda", 
                valores, 
                this.valoresAceitos, 
                unidadesMedida
            );
        }

        this.valores = valores;
    }
}
