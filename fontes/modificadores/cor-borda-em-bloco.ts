import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaEmBloco extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("cor-borda-em-bloco", "border-block-color", pragmas);

        if (!valorVariavel) validarValorCor('cor-borda-em-bloco', valor);

        this.valor = valor;
    }
}
