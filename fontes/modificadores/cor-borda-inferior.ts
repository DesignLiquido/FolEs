import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaInferior extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("cor-borda-inferior", "border-bottom-color", pragmas);

        if (!valorVariavel) validarValorCor("cor-borda-inferior", valores);

        this.valores = valores;
    }
}
