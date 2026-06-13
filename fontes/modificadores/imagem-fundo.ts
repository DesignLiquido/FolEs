import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ImagemFundo extends Modificador {
    static nomeFolEs: string = "imagem-fundo";
    static nomeCss: string = "background-image";
    static descricao: string = 'Define uma ou mais imagens de fundo em um elemento.';
    static documentacao: string = 'imagem-fundo`\nAs imagens de fundo são desenhadas em camadas empilhadas umas sobre as outras. A primeira camada especificada é desenhada como se estivesse mais próxima do usuário. As bordas do elemento são então desenhadas em cima delas, e o valor definido para a propriedade `cor-fundo` é desenhado abaixo delas.';
    static exemploCodigo: string = 'corpo {\n  imagem-fundo: url("catfront.png");\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        url: "url",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(ImagemFundo.nomeFolEs, ImagemFundo.nomeCss, pragmas);

        const valoresExtra: Array<string> = [
            'conic-gradient',
            'cross-fade',
            'element',
            'image',
            'image-set',
            'paint',
            'radial-gradient',
            'repeating-conic-gradient',
            'repeating-linear-gradient',
            'repeating-radial-gradient',            
        ];

        if (!variavel) {
            validarValores(
                ImagemFundo.nomeFolEs,
                valores,
                this.valoresAceitos,
                valoresExtra
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
