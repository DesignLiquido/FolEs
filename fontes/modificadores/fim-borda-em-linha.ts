import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class FimBordaEmLinha extends Modificador {
    static nomeCss: string = "border-inline-end";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("fim-borda-em-linha", FimBordaEmLinha.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    "fim-borda-em-linha",
                    valores
                );
            } else {
                validarMultiplosQualitativos(
                    "fim-borda-em-linha",
                    valores,
                    null,
                    unidadesMedida
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
