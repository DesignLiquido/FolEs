import { Modificador, PragmasModificador } from "./superclasse";
import { unidadesMedida } from "./atributos/quantificadores";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { Valor } from "../valores";

export class Borda extends Modificador {
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
        super("borda", "border", pragmas);

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "múltiplos-qualitativos",
                "borda",
                valores,
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        } else {
            validarMultiplosQualitativos(
                "borda",
                valores,
                this.valoresAceitos,
                unidadesMedida
            );
        }

        this.valores = valores;
    }
}
