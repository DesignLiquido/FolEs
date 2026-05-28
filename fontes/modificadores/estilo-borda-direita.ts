import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBordaDireita extends Modificador {
    static nomeCss: string = "border-right-style";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("estilo-borda-direita", EstiloBordaDireita.nomeCss, pragmas);

        if (!variavel) validarValoresAdicionais("estilo-borda-direita", valores, estilos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
