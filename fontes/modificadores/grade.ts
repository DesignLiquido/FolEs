import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Grade extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 6 valores.
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        "auto": "auto",
        "linha": "row",
        "coluna": "column",
        "denso": "dense",
        "nenhum": "none",
        "conteudo-mínimo": "min-content",
        "sub-grade": "subgrid",
        "alvenaria": "masonry",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("grade", "grid", pragmas);

        const valoresExtra = ['minmax'];
        validarValores('grade', valor, this.valoresAceitos, valoresExtra);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
