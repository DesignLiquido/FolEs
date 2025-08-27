import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorFimBordaEmBloco extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("cor-fim-borda-em-bloco", "border-block-end-color", pragmas);

        if (!variavel) validarValorCor("cor-fim-borda-em-bloco", valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
