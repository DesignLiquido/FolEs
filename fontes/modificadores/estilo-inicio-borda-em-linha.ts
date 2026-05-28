import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloInicioBordaEmLinha extends Modificador {
    static nomeCss: string = "border-inline-start-style";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["estilo-inicio-borda-em-linha", "estilo-início-borda-em-linha"],
            EstiloInicioBordaEmLinha.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValoresAdicionais(
                "estilo-início-borda-em-linha",
                valores,
                estilos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
