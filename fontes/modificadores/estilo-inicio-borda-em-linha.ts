import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloInicioBordaEmLinha extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["estilo-inicio-borda-em-linha", "estilo-início-borda-em-linha"],
            "border-inline-start-style",
            pragmas,
        );

        if (!valorVariavel)
            validarValoresAdicionais(
                "estilo-início-borda-em-linha",
                valor,
                estilos,
            );

        this.valor = valor;
    }
}
