import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBordaDireita extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("estilo-borda-direita", "border-right-style", pragmas);

        validarValoresAdicionais("estilo-borda-direita", valores, estilos);

        this.valores = valores;
    }
}
