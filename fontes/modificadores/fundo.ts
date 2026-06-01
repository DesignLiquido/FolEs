import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class Fundo extends Modificador {
    static nomeFolEs: string = "fundo";
    static nomeCss: string = "background";
    static descricao: string = 'Define as estilizações do plano de fundo da aplicação.';
    static documentacao: string = '# `fundo`\nPropriedade de atribuição abreviada que define todas as propriedades de estilo de plano de fundo de uma só vez, como cor, imagem, origem e tamanho ou método de repetição. As propriedades de fundo não definidas através desta propriedade são definidas com seus valores padrão.';
    static exemploCodigo: string = 'imagem {\n  fundo: borda #f5f5a6;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        fixo: "fixed",
        local: "local",
        rolar: "scroll",
        "borda-caixa": "border-box",
        preenchimento: "padding-box",
        conteudo: "content-box",
        conteúdo: "content-box",
        texto: "text",
        superior: "top",
        inferior: "bottom",
        esquerda: "left",
        direita: "right",
        centro: "center",
        "repetir-horizontal": "repeat-x",
        "repetir-vertical": "repeat-y",
        repetir: "repeat",
        espacar: "space",
        espaçar: "space",
        completar: "round",
        "nao-repetir": "no-repeat",
        "não-repetir": "no-repeat",
        alargar: "contain",
        diminuir: "cover",
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Fundo.nomeFolEs, Fundo.nomeCss, pragmas);

        const valoresExtra: Array<string> = [
            'conic-gradient',
            'element',
            'image',
            'paint',
            'radial-gradient',
            'repeating-conic-gradient',
            'repeating-linear-gradient',
            'repeating-radial-gradient',
        ];

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "múltiplos-qualitativos",
                    Fundo.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    valoresExtra
                );
            } else {
                validarMultiplosQualitativos(
                    Fundo.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    unidadesMedida,
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
