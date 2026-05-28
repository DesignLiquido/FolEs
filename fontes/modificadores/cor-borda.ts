import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorCor } from "./validacoes/cor";

export class CorBorda extends Modificador {
    static nomeCss: string = "border-color";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("cor-borda", CorBorda.nomeCss, pragmas);
        
        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "cor",
                    "cor-borda",
                    valores
                );
            } else {
                validarValorCor(
                    "cor-borda",
                    valores,
                    null
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
