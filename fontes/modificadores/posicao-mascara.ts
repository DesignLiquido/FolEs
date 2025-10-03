import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class PosicaoMascara extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["posicao-mascara", "posição-máscara"], "mask-position", pragmas);

        if (!variavel) validarValoresAdicionais("posição-máscara", valores, posicoesBasicas);

        this.valores = valores;
        this.variavel = variavel;
    }
}
