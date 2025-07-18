import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorFimBordaEmBloco extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("cor-fim-borda-em-bloco", "border-block-end-color", pragmas);

        if (!valorVariavel) validarValorCor("cor-fim-borda-em-bloco", valores);

        this.valores = valores;
    }
}
