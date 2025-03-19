import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaSuperior extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("cor-borda-superior", "border-top-color", pragmas);

        if (!valorVariavel) validarValorCor('cor-borda-superior', valor);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
