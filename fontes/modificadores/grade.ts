import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValores } from "./validacoes/comum";

export class Grade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        auto: "auto",
        linha: "row",
        coluna: "column",
        denso: "dense",
        nenhum: "none",
        "conteudo-mínimo": "min-content",
        "sub-grade": "subgrid",
        alvenaria: "masonry",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("grade", "grid", pragmas);

        // TODO: Também aceita valor-quantificador
        const valoresExtra = ["minmax"];

        if (!valorVariavel) {
            if (typeof valor === 'string' && valor.includes(" ")) {
                validarAtribuicaoAbreviada("comum", "grade", valor, this.valoresAceitos, valoresExtra);
            } else {
                validarValores("grade", valor, this.valoresAceitos, valoresExtra);
            }
        }

        this.valor = valor;
    }
}
