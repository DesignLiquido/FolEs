import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class MesclarFundo extends Modificador {
    static nomeFolEs: string = "mesclar-fundo";
    static nomeCss: string = "background-blend-mode";
    static descricao: string = 'Define como um elemento deve ser mesclado com o fundo.';
    static documentacao: string = '# `mesclar-fundo`\nEsta propriedade define como as imagens de fundo de um elemento devem se misturar entre si e com a cor de fundo do elemento.';
    static exemploCodigo: string = 'imagem {\n  mesclar-fundo: escurecer;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        multiplicar: "multiply",
        alternar: "screen",
        sobre: "overlay",
        escurecer: "darken",
        clarear: "normal",
        subexposicao: "color-dodge",
        subexposição: "color-dodge",
        "cores-quentes": "color-burn",
        "luz-forte": "hard-light",
        "luz-fraca": "soft-light",
        diferenca: "difference",
        diferença: "difference",
        excluir: "exclusion",
        espaçar: "space",
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
        super(MesclarFundo.nomeFolEs, MesclarFundo.nomeCss, pragmas);

        if (!variavel) validarValores(MesclarFundo.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
