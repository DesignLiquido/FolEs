import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaInferior extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("cor-borda-inferior", "border-bottom-color", pragmas);

        if (!valorVariavel) validarValorCor('cor-borda-inferior', valor);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
