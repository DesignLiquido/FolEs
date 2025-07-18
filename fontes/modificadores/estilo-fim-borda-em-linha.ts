import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloFimBordaEmLinha extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("estilo-fim-borda-em-linha", "border-inline-end-style", pragmas);

        if (!valorVariavel)
            validarValoresAdicionais(
                "estilo-fim-borda-em-linha",
                valores,
                estilos,
            );

        this.valores = valores;
    }
}
