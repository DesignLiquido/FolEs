import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorFimBordaEmLinha extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("cor-fim-borda-em-linha", "border-inline-end-color", pragmas);

        if (!valorVariavel) validarValorCor('cor-fim-borda-em-linha', valor);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
