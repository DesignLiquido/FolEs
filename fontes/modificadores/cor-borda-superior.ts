import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaSuperior extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("cor-borda-superior", "border-top-color", pragmas);

        if (!valorVariavel) validarValorCor("cor-borda-superior", valores);

        this.valores = valores;
    }
}
