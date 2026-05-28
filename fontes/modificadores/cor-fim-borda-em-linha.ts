import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorFimBordaEmLinha extends Modificador {
    static nomeCss: string = "border-inline-end-color";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("cor-fim-borda-em-linha", CorFimBordaEmLinha.nomeCss, pragmas);

        if (!variavel) validarValorCor("cor-fim-borda-em-linha", valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
