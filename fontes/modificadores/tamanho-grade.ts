import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class TamanhoGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("tamanho-grade", "grid-area", pragmas);

        if (!valorVariavel) {
            if (valor.includes("/") || valor.includes(" ")) {
               validarAtribuicaoAbreviada("numérica", "tamanho-grade", valor, this.valoresAceitos, undefined, false, true);
            } else {
                validarValorNumerico("tamanho-grade", valor, this.valoresAceitos);
            }
        }

        this.valor = valor;
    }
}
