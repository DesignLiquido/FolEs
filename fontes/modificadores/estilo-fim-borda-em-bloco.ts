import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloFimBordaEmBloco extends Modificador {
    static nomeCss: string = "border-block-end-style";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("estilo-fim-borda-em-bloco", EstiloFimBordaEmBloco.nomeCss, pragmas);

        if (!variavel) {
            validarValoresAdicionais(
                "estilo-fim-borda-em-bloco",
                valores,
                estilos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
