import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class PosicaoFundo extends Modificador {
    static nomeFolEs: string[] = ["posicao-fundo", "posição-fundo"];
    static nomeCss: string = "background-position";
    static descricao: string = 'Define a posição inicial de cada imagem de plano de fundo.';
    static documentacao: string = '# `posicao-fundo`\nA posição especificada para esta propriedade será relativa à camada de posição definida pela propriedade `origem-fundo`.';
    static exemploCodigo: string = 'p {\n  posicao-fundo: superior;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            PosicaoFundo.nomeFolEs,
            PosicaoFundo.nomeCss,
            pragmas,
        );
        
        const quantificadoresAceitos = {
            px: "px",
            "%": "%",
            rem: "rem",
            vmin: "vmin",
            vmax: "vmax",
        };
        
        if (!variavel) {
            validarValorNumerico(
                PosicaoFundo.nomeFolEs[1],
                valores,
                posicoesBasicas,
                null,
                quantificadoresAceitos
            );
        }
        
        this.valores = valores;
        this.variavel = variavel;
    }
}
