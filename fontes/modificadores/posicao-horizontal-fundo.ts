import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class PosicaoHorizontalFundo extends Modificador {
    static nomeFolEs: string[] = ["posicao-horizontal-fundo", "posição-horizontal-fundo"];
    static nomeCss: string = "background-position-x";
    static descricao: string = 'Define a posição horizontal inicial para cada imagem do plano de fundo.';
    static documentacao: string = '# `posicao-horizontal-fundo`\nA posição especificada para esta propriedade será relativa à camada de posição definida pela propriedade `origem-fundo`.';
    static exemploCodigo: string = 'p {\n  posicao-horizontal-fundo: inferior;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            PosicaoHorizontalFundo.nomeFolEs,
            PosicaoHorizontalFundo.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                PosicaoHorizontalFundo.nomeFolEs[1],
                valores,
                posicoesBasicas,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
