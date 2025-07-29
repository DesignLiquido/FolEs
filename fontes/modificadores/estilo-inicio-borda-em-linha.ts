import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloInicioBordaEmLinha extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["estilo-inicio-borda-em-linha", "estilo-início-borda-em-linha"],
            "border-inline-start-style",
            pragmas,
        );

        validarValoresAdicionais(
            "estilo-início-borda-em-linha",
            valores,
            estilos,
        );

        this.valores = valores;
    }
}
