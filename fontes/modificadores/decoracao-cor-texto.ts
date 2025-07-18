import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class DecoracaoCorTexto extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["decoracao-cor-texto", "decoração-cor-texto"],
            "text-decoration-color",
            pragmas,
        );

        if (!valorVariavel) validarValorCor("decoração-cor-texto", valores);

        this.valores = valores;
    }
}
