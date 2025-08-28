import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class PosicaoObjeto extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["posicao-objeto", "posição-objeto"], "object-position", pragmas);

        if (!variavel) validarValoresAdicionais("posição-objeto", valores, posicoesBasicas);

        this.valores = valores;
        this.variavel = variavel;
    }
}
