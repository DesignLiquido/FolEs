import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBordaInferior extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("estilo-borda-inferior", "border-bottom-style", pragmas);

        if (!variavel) validarValoresAdicionais("estilo-borda-inferior", valores, estilos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
