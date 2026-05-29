import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class RegrasEstiloColuna extends Modificador {
    static nomeCss: string = "column-rule-style";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("regras-estilo-coluna", RegrasEstiloColuna.nomeCss, pragmas);

        if (!variavel) validarValoresAdicionais("regras-estilo-coluna", valores, estilos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
