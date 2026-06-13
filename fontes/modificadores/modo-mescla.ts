import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ModoMescla extends Modificador {
    static nomeFolEs: string = "modo-mescla";
    static nomeCss: string = "mix-blend-mode";
    static descricao: string = 'Especifica o modo de mesclagem de um elemento da aplicação.';
    static documentacao: string = '# `modo-mescla`\nEsta propriedade define como o conteúdo de um elemento deve ser mesclado com o conteúdo do elemento pai e o plano de fundo.';
    static exemploCodigo: string = 'imagem {\n  modo-mescla: sobrepor;\n}';

    // Valores do tipo <blend-mode>
    // https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        multiplicar: "multiply",
        tela: "screen",
        sobre: "overlay",
        escurecer: "darken",
        clarear: "lighten",
        subexposicao: "color-dodge",
        subexposição: "color-dodge",
        "cores-quentes": "color-burn",
        "luz-forte": "hard-light",
        "luz-fraca": "soft-light",
        diferenca: "difference",
        diferença: "difference",
        excluir: "exclusion",
        matiz: "hue",
        saturar: "saturation",
        colorir: "color",
        luminosidade: "luminosity",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(ModoMescla.nomeFolEs, ModoMescla.nomeCss, pragmas);

        if (!variavel) validarValores(ModoMescla.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
