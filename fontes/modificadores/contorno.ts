import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class Contorno extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        grossa: "thick",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("contorno", "outline", pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    "contorno",
                    valores,
                    this.valoresAceitos,
                    null,
                    comprimentos
                );
            } else {
                validarMultiplosQualitativos(
                    "contorno",
                    valores,
                    this.valoresAceitos,
                    comprimentos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
