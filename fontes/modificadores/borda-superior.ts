import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";
import { validarQuantificador } from "./validacoes/quantificador";

export class BordaSuperior extends Modificador {
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
        super("borda-superior", "border-top", pragmas);

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("múltiplos-qualitativos", "borda-superior", valores, this.valoresAceitos);
        //     } else {
        //         validarMultiplosQualitativos("borda-superior", valores, this.valoresAceitos);
        //     }

        //     if (Number(parseInt(valor))) {
        //         validarQuantificador("borda-superior", quantificador, unidadesMedida);

        //         this.quantificador = quantificador;
        //     }

        this.valores = valores;
    }
}
