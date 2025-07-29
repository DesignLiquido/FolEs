import { Modificador, PragmasModificador } from "./superclasse";
import { unidadesMedida } from "./atributos/quantificadores";
import { validarQuantificador } from "./validacoes/quantificador";
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

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("múltiplos-qualitativos", "borda", valores, this.valoresAceitos);
        //     } else {
        //         validarMultiplosQualitativos("borda", valores, this.valoresAceitos);
        //     }

        //     if (Number(parseInt(valor))) {
        //         validarQuantificador("borda", quantificador, unidadesMedida);

        //         this.quantificador = quantificador;
        //     }

        this.valores = valores;
    }
}
