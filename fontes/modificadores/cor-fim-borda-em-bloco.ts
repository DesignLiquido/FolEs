import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorFimBordaEmBloco extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("cor-fim-borda-em-bloco", "border-block-end-color", pragmas);

        if (!valorVariavel) validarValorCor('cor-fim-borda-em-bloco', valor);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
