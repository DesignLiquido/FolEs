import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class PosicaoMascara extends Modificador {
    static nomeFolEs: string[] = ["posicao-mascara", "posição-máscara"];
    static nomeCss: string = "mask-position";
    static descricao: string = 'Define a posição inicial para cada imagem de máscara definida.';
    static documentacao: string = '# `posição-máscara`\nA posição especificada para esta propriedade será relativa à camada de posição da máscara definida pela propriedade `origem-máscara`.';
    static exemploCodigo: string = 'p {\n  posição-máscara: centro;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(PosicaoMascara.nomeFolEs, PosicaoMascara.nomeCss, pragmas);

        if (!variavel) validarValoresAdicionais(PosicaoMascara.nomeFolEs[1], valores, posicoesBasicas);

        this.valores = valores;
        this.variavel = variavel;
    }
}
