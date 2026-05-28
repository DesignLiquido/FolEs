import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaEmLinha extends Modificador {
    static nomeCss: string = "border-inline-color";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("cor-borda-em-linha", CorBordaEmLinha.nomeCss, pragmas);

        if (!variavel) validarValorCor("cor-borda-em-linha", valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
