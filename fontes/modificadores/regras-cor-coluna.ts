import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class RegrasCorColuna extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("regras-cor-coluna", "column-rule-color", pragmas);

        validarValorCor('regras-cor-coluna', valor)

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
