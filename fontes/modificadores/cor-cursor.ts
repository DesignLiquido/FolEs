import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorCursor extends Modificador {
    static nomeFolEs: string = "cor-cursor";
    static nomeCss: string = "caret-color";
    static descricao: string = 'Define a cor do cursor de inserção - o marcador visível onde o próximo caractere digitado será inserido.';
    static documentacao: string = '# `cor-cursor`\nO cursor aparece em elementos como um campo de texto ou naqueles com o atributo de conteúdo editável. É normalmente uma linha vertical fina que pisca para ajudar a torná-la mais perceptível. Por padrão, o cursor é preto, o que pode ser alterado com o uso dessa propriedade.';
    static exemploCodigo: string = 'campo {\n  cor-cursor: rgb(30, 222, 121);\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(CorCursor.nomeFolEs, CorCursor.nomeCss, pragmas);

        if (!variavel) validarValorCor(CorCursor.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
