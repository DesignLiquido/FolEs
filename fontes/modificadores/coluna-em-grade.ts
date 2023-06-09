import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class ColunaEmGrade extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 2 valores.
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("coluna-em-grade", "grid-column");

        // OBS.: Também pode receber outros dois casos de valores:
        // 1. custom-indent
        // 2. valores separados por uma barra (ex.: auto / auto)

        // TODO: Implementar lógica para cobrir esses dois casos.

        validarValorNumerico('coluna-em-grade', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
