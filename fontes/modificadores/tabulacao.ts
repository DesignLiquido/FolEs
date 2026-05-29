import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class Tabulacao extends Modificador {
    static nomeCss: string = "tab-size";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["tabulacao", "tabulação"], Tabulacao.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "tabulação",
                valores,
                null,
                null,
                comprimentos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
