import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class RegrasEstiloColuna extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("regras-estilo-coluna", "column-rule-style", pragmas);

        if (!valorVariavel)
            validarValoresAdicionais("regras-estilo-coluna", valores, estilos);

        this.valores = valores;
    }
}
