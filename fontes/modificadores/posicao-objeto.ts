import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class PosicaoObjeto extends Modificador {
    static nomeFolEs: string[] = ["posicao-objeto", "posição-objeto"];
    static nomeCss: string = "object-position";
    static descricao: string = 'Especifica o alinhamento do conteúdo do elemento substituído selecionado dentro da caixa do elemento.';
    static documentacao: string = '# `posicao-objeto`\nAs áreas da caixa que não são cobertas pelo objeto do elemento substituído mostrarão o plano de fundo do elemento.';
    static exemploCodigo: string = 'divisão {\n  posicao-objeto: esquerda;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(PosicaoObjeto.nomeFolEs, PosicaoObjeto.nomeCss, pragmas);

        if (!variavel) validarValoresAdicionais(PosicaoObjeto.nomeFolEs[1], valores, posicoesBasicas);

        this.valores = valores;
        this.variavel = variavel;
    }
}
