import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FormaExterna extends Modificador {
    static nomeFolEs: string = "forma-externa";
    static nomeCss: string = "shape-outside";
    static descricao: string = 'Define a forma externa de um elemento da aplicação.';
    static documentacao: string = '# `forma-externa`\nEsta propriedade  define uma forma - que pode ou não ser retangular - em torno da qual o conteúdo do tipo alinhado deve ser agrupado.';
    static exemploCodigo: string = 'imagem {\n  forma-externa: margem-caixa;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
        "margem-caixa": "margin-box",
        "conteudo-caixa": "content-box",
        "conteúdo-caixa": "content-box",
        "borda-caixa": "border-box",
        "preenchimento-caixa": "padding-box",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(FormaExterna.nomeFolEs, FormaExterna.nomeCss, pragmas);

        const valoresExtra = ['circle', 'ellipse', 'image', 'inset', 'polygon', 'path', 'rect', 'shape', 'url', 'xywh'];

        if (!variavel) {
            validarValores(
                FormaExterna.nomeFolEs,
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
