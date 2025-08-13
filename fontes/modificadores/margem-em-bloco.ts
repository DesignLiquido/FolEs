import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class MargemEmBloco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("margem-em-bloco", "margin-block", pragmas);

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "numérica", 
                "margem-em-bloco", 
                valores, 
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        } else {
            validarValorNumerico(
                "margem-em-bloco", 
                valores, 
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
    }
}
