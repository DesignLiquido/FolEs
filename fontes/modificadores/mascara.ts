import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class Mascara extends Modificador {
    static nomeFolEs: string[] = ["mascara", "máscara"];
    static nomeCss: string = "mask";
    static descricao: string = 'Define a estilização da máscara a ser aplicada a um elemento.';
    static documentacao: string = '# `mascara`\nPropriedade de atribuição abreviada que oculta um elemento (parcial ou totalmente), mascarando ou recortando a imagem em pontos específicos.';
    static exemploCodigo: string = 'divisão {\n  mascara: arredondar;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        alfa: "alpha",
        luminancia: "luminance",
        luminância: "luminance",
        "fonte-correspondente": "match-source",
        auto: "auto",
        nenhuma: "none",
        conter: "contain",
        cobrir: "cover",
        "repetir-horizontal": "repeat-x",
        "repetir-vertical": "repeat-y",
        repetir: "repeat",
        espacar: "space",
        espaçar: "space",
        arredondar: "round",
        "nao-repetir": "no-repeat",
        "não-repetir": "no-repeat",
        adicionar: "add",
        subtrair: "subtract",
        cruzar: "intersect",
        excluir: "exclude",
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
        "preenchimento-caixa": "padding-box",
        "borda-caixa": "border-box",
        "margem-caixa": "margin-box",
        "completar-caixa": "fill-box",
        "delimitar-caixa": "stroke-box",
        "visualizar-caixa": "view-box",
        "nao-recortar": "no-clip",
        "não-recortar": "no-clip",
        borda: "border",
        preenchimento: "padding",
        conteudo: "content",
        conteúdo: "content",
        texto: "text",
        url: "url",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Mascara.nomeFolEs, Mascara.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "condição-extra",
                    Mascara.nomeFolEs[1],
                    valores,
                    posicoesBasicas,
                    this.valoresAceitos
                );
            } else {
                validarValoresAdicionais(
                    Mascara.nomeFolEs[1],
                    valores,
                    posicoesBasicas,
                    this.valoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
