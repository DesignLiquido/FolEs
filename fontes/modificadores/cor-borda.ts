import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBorda extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 4 valores.
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("cor-borda", "border-color");

        validarValorCor('cor-borda', valor);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
