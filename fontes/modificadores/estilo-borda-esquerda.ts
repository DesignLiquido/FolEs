import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBordaEsquerda extends Modificador {
    static nomeCss: string = "border-left-style";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("estilo-borda-esquerda", EstiloBordaEsquerda.nomeCss, pragmas);

        if (!variavel) validarValoresAdicionais("estilo-borda-esquerda", valores, estilos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
