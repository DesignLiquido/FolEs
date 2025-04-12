import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class Cor extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("cor", "color", pragmas);

        if (!valorVariavel) validarValorCor("cor", valor);

        this.valor = valor;
    }
}
