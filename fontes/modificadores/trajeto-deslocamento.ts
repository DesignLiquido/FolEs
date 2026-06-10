import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TrajetoDeslocamento extends Modificador {
    static nomeFolEs: string = "trajeto-deslocamento";
    static nomeCss: string = "offset-path";
    static descricao: string = 'Define o trajeto de deslocamento de um referido elemento.';
    static documentacao: string = '# `trajeto-deslocamento`\nPropriedade para especificar um caminho de movimento para um elemento seguir e para definir o posicionamento do elemento dentro do contêiner pai ou sistema de coordenadas SVG.';
    static exemploCodigo: string = 'divisao {\n  trajeto-deslocamento: margem-caixa;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        "margem-caixa": "margin-box",
        "caixa-batida": "stroke-box",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(TrajetoDeslocamento.nomeFolEs, TrajetoDeslocamento.nomeCss, pragmas);

        const valoresExtra = ['url', 'ray', 'path', 'inset', 'circle', 'ellipse', 'polygon', 'rect', 'shape', 'xywh'];

        if (!variavel) {
            validarValores(
                TrajetoDeslocamento.nomeFolEs,
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
