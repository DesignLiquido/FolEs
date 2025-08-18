import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class ColunaEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador
    ) {
        super("coluna-em-grade", "grid-column", pragmas);
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica", 
                    "coluna-em-grade", 
                    valores, 
                    this.valoresAceitos
                );
                // TODO: Aceitava validacaoPersonalizada como true
            } else {
                validarValorNumerico(
                    "coluna-em-grade", 
                    valores, 
                    this.valoresAceitos
                );
            }

        this.valores = valores;
    }
}
