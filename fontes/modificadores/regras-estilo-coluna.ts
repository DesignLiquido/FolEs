import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class RegrasEstiloColuna extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("regras-estilo-coluna", "column-rule-style", pragmas);

        validarValoresAdicionais("regras-estilo-coluna", valores, estilos);

        this.valores = valores;
    }
}
