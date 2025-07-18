import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorFundo extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("cor-fundo", "background-color", pragmas);

        if (!valorVariavel) validarValorCor("cor-fundo", valores);

        this.valores = valores;
    }
}
