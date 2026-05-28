import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorFimBordaEmBloco extends Modificador {
    static nomeCss: string = "border-block-end-color";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("cor-fim-borda-em-bloco", CorFimBordaEmBloco.nomeCss, pragmas);

        if (!variavel) validarValorCor("cor-fim-borda-em-bloco", valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
