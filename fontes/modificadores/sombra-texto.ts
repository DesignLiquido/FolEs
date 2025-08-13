import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class SombraTexto extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("sombra-texto", "text-shadow", pragmas);

        validarValorNumerico(
            "sombra-texto", 
            valores,
            null,
            null,
            unidadesMedida
        );

        this.valores = valores;
    }
}
