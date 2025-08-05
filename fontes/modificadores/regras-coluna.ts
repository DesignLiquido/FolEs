import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class RegrasColuna extends Modificador {
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
        super("regras-coluna", "column-rule", pragmas);

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("múltiplos-qualitativos", "regras-coluna", valores, this.valoresAceitos);
        //     } 

        validarMultiplosQualitativos("regras-coluna", valores, this.valoresAceitos, comprimentos);

        this.valores = valores;
    }
}
