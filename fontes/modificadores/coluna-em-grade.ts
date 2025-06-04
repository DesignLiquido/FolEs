import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class ColunaEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("coluna-em-grade", "grid-column", pragmas);

        if (!valorVariavel) {
            if (valor.includes("/") || valor.includes(" ")) {
                validarAtribuicaoAbreviada("numérica", "coluna-em-grade", valor, this.valoresAceitos, undefined, false, true);
            } else {
                validarValorNumerico("coluna-em-grade", valor, this.valoresAceitos);
            }
        }

        this.valor = valor;
    }
}
