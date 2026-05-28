import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBordaEmBloco extends Modificador {
    static nomeCss: string = "border-block-style";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("estilo-borda-em-bloco", EstiloBordaEmBloco.nomeCss, pragmas);

        if (!variavel) validarValoresAdicionais("estilo-borda-em-bloco", valores, estilos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
