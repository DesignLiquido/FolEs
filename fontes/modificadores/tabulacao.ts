import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Tabulacao extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(["tabulacao", "tabulação"], "tab-size", pragmas);

        validarValorNumerico(
            "tabulação", 
            valores,
            null,
            null,
            comprimentos
        );

        this.valores = valores;
    }
}
