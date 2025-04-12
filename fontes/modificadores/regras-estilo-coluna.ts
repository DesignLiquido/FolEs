import { estilos } from "./atributos/estilo";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class RegrasEstiloColuna extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("regras-estilo-coluna", "column-rule-style", pragmas);

        if (!valorVariavel)
            validarValoresAdicionais("regras-estilo-coluna", valor, estilos);

        this.valor = valor;
    }
}
