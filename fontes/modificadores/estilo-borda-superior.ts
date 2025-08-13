import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBordaSuperior extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("estilo-borda-superior", "border-top-style", pragmas);

        validarValoresAdicionais("estilo-borda-superior", valores, estilos);

        this.valores = valores;
    }
}
