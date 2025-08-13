import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBordaEmBloco extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("estilo-borda-em-bloco", "border-block-style", pragmas);

        validarValoresAdicionais("estilo-borda-em-bloco", valores, estilos);

        this.valores = valores;
    }
}
