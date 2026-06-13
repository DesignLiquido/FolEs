import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class PosicaoVerticalFundo extends Modificador {
    static nomeFolEs: string[] = ["posicao-vertical-fundo", "posição-vertical-fundo"];
    static nomeCss: string = "background-position-y";
    static descricao: string = 'Define a posição vertical inicial para cada imagem do plano de fundo.';
    static documentacao: string = '# `posicao-vertical-fundo`\nA posição especificada para esta propriedade será relativa à camada de posição definida pela propriedade `origem-fundo`.';
    static exemploCodigo: string = 'p {\n  posicao-vertical-fundo: inferior;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            PosicaoVerticalFundo.nomeFolEs,
            PosicaoVerticalFundo.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                PosicaoVerticalFundo.nomeFolEs[1],
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
