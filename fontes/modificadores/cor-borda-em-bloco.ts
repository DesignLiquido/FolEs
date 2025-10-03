import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaEmBloco extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("cor-borda-em-bloco", "border-block-color", pragmas);

        if (!variavel) validarValorCor("cor-borda-em-bloco", valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
