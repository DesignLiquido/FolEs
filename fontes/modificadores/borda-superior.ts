import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

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

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "múltiplos-qualitativos", 
                "borda-superior", 
                valores, 
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        } else {
            validarMultiplosQualitativos(
                "borda-superior", 
                valores, 
                this.valoresAceitos, 
                unidadesMedida
            );
        }

        this.valores = valores;
    }
}
