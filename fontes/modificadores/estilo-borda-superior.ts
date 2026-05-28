import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBordaSuperior extends Modificador {
    static nomeCss: string = "border-top-style";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("estilo-borda-superior", EstiloBordaSuperior.nomeCss, pragmas);

        if (!variavel) validarValoresAdicionais("estilo-borda-superior", valores, estilos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
