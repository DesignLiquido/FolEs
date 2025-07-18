import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBordaEsquerda extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("estilo-borda-esquerda", "border-left-style", pragmas);

        if (!valorVariavel)
            validarValoresAdicionais("estilo-borda-esquerda", valores, estilos);

        this.valores = valores;
    }
}
