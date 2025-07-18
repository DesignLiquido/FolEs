import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBordaEmLinha extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("estilo-borda-em-linha", "border-inline-style", pragmas);

        if (!valorVariavel)
            validarValoresAdicionais("estilo-borda-em-linha", valores, estilos);

        this.valores = valores;
    }
}
