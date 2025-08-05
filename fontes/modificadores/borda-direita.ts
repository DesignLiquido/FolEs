import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class BordaDireita extends Modificador {
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
        super("borda-direita", "border-right", pragmas);

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("múltiplos-qualitativos", "borda-direita", valores, this.valoresAceitos);
        //     }

        validarMultiplosQualitativos("borda-direita", valores, this.valoresAceitos, unidadesMedida);

        this.valores = valores;
    }
}
