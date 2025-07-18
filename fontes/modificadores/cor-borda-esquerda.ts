import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaEsquerda extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("cor-borda-esquerda", "border-left-color", pragmas);

        if (!valorVariavel) validarValorCor("cor-borda-esquerda", valores);

        this.valores = valores;
    }
}
