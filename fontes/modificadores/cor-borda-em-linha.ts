import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaEmLinha extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("cor-borda-em-linha", "border-inline-color", pragmas);

        if (!valorVariavel) validarValorCor('cor-borda-em-linha', valor);

        this.valor = valor;
    }
}
