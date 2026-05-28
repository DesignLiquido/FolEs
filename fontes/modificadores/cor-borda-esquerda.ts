import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaEsquerda extends Modificador {
    static nomeCss: string = "border-left-color";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("cor-borda-esquerda", CorBordaEsquerda.nomeCss, pragmas);

        if (!variavel) validarValorCor("cor-borda-esquerda", valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
