import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class RegrasCorColuna extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("regras-cor-coluna", "column-rule-color", pragmas);

        if (!valorVariavel) validarValorCor('regras-cor-coluna', valor)

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
