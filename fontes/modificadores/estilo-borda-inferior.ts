import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBordaInferior extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("estilo-borda-inferior", "border-bottom-style", pragmas);

        if (!valorVariavel)
            validarValoresAdicionais("estilo-borda-inferior", valores, estilos);

        this.valores = valores;
    }
}
