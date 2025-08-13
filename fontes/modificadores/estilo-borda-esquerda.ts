import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBordaEsquerda extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("estilo-borda-esquerda", "border-left-style", pragmas);

        validarValoresAdicionais("estilo-borda-esquerda", valores, estilos);

        this.valores = valores;
    }
}
