import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class Colunas extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("colunas", "columns", pragmas);

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "numérica", 
                "colunas", 
                valores, 
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        } else {
            validarValorNumerico(
                "colunas", 
                valores, 
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
    }
}
