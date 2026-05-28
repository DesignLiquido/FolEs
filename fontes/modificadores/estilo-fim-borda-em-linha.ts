import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloFimBordaEmLinha extends Modificador {
    static nomeCss: string = "border-inline-end-style";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("estilo-fim-borda-em-linha", EstiloFimBordaEmLinha.nomeCss, pragmas);

        if (!variavel) {
            validarValoresAdicionais(
                "estilo-fim-borda-em-linha",
                valores,
                estilos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
