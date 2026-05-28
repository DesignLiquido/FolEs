import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloInicioBordaEmBloco extends Modificador {
    static nomeCss: string = "border-block-start-style";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["estilo-inicio-borda-em-bloco", "estilo-início-borda-em-bloco"],
            EstiloInicioBordaEmBloco.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValoresAdicionais(
                "estilo-início-borda-em-bloco",
                valores,
                estilos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
