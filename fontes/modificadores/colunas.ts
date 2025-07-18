import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Colunas extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador
    ) {
        super("colunas", "columns", pragmas);

        // TODO: Repensar
        // if (!valorVariavel) {
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("numérica", "colunas", valores, this.valoresAceitos);
        //     } else {
        //         validarValorNumerico("colunas", valores, this.valoresAceitos);

        //         if (quantificador !== undefined) {
        //             validarQuantificador("colunas", quantificador, unidadesMedida);

        //             this.quantificador = quantificador;
        //         }
        //     }
        // }

        this.valores = valores;
    }
}
