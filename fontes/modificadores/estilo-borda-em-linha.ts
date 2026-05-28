import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBordaEmLinha extends Modificador {
    static nomeCss: string = "border-inline-style";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("estilo-borda-em-linha", EstiloBordaEmLinha.nomeCss, pragmas);

        if (!variavel) validarValoresAdicionais("estilo-borda-em-linha", valores, estilos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
