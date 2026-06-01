import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FiltroFundo extends Modificador {
    static nomeFolEs: string = "filtro-fundo";
    static nomeCss: string = "backdrop-filter";
    static descricao: string = 'Permite aplicar efeitos gráficos como desfoque ou mudança de cor na área atrás de um elemento.';
    static documentacao: string = '# `filtro-fundo`\nPara ver o efeito desta propriedade, tendo em vista que ela se aplica a tudo atrás do elemento, você deve tornar o elemento ou seu plano de fundo, pelo menos, parcialmente transparente.';
    static exemploCodigo: string = 'imagem {\n  filtro-fundo: url(commonfilters.svg#filter); \n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(FiltroFundo.nomeFolEs, FiltroFundo.nomeCss, pragmas);

        const valoresExtra = [
            "blur",
            "brightness",
            "contrast",
            "drop-shadow",
            "grayscale",
            "hue-rotate",
            "invert",
            "opacity",
            "saturate",
            "sepia",
            "url",
        ];

        if (!variavel) {
            validarValores(
                FiltroFundo.nomeFolEs,
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
