import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaEsquerda extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("cor-borda-esquerda", "border-left-color", pragmas);

        if (!valorVariavel) validarValorCor("cor-borda-esquerda", valor);

        this.valor = valor;
    }
}
