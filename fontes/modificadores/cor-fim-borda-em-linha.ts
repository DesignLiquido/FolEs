import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorFimBordaEmLinha extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("cor-fim-borda-em-linha", "border-inline-end-color", pragmas);

        if (!variavel) validarValorCor("cor-fim-borda-em-linha", valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
