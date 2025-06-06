import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class LinhaEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("linha-em-grade", "grid-row", pragmas);

        if (!valorVariavel) {
            if (valor.includes(" ") || valor.includes("/")) {
                validarAtribuicaoAbreviada("numérica", "linha-em-grade", valor, this.valoresAceitos, undefined, false, true);
            } else {
                validarValorNumerico("linha-em-grade", valor, this.valoresAceitos);
            }
        }

        this.valor = valor;
    }
}
