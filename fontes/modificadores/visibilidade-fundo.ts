import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VisibilidadeFundo extends Modificador {
    static nomeFolEs: string = "visibilidade-fundo";
    static nomeCss: string = "backface-visibility";
    static descricao: string = 'Define se a face posterior (backface) de um elemento é visível quando voltada para o usuário.';
    static documentacao: string = '# `visibilidade-fundo`\nA face posterior de um elemento é uma imagem espelhada de sua face frontal. Embora invisível em 2D, a face posterior pode se tornar visível quando uma transformação faz com que o elemento seja girado no espaço 3D. Esta propriedade não tem efeito nas transformações 2D, que não têm perspectiva.';
    static exemploCodigo: string = 'corpo {\n  visibilidade-fundo: visível;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        visivel: "visible",
        visível: "visible",
        escondido: "hidden",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(VisibilidadeFundo.nomeFolEs, VisibilidadeFundo.nomeCss, pragmas);

        if (!variavel) validarValores(VisibilidadeFundo.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
