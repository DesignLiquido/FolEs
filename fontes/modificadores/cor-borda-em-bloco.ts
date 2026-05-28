import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaEmBloco extends Modificador {
    static nomeCss: string = "border-block-color";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("cor-borda-em-bloco", CorBordaEmBloco.nomeCss, pragmas);

        if (!variavel) validarValorCor("cor-borda-em-bloco", valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
