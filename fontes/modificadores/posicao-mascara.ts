import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class PosicaoMascara extends Modificador {
    static nomeCss: string = "mask-position";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["posicao-mascara", "posição-máscara"], PosicaoMascara.nomeCss, pragmas);

        if (!variavel) validarValoresAdicionais("posição-máscara", valores, posicoesBasicas);

        this.valores = valores;
        this.variavel = variavel;
    }
}
