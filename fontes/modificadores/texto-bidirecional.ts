import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TextoBidirecional extends Modificador {
    static nomeFolEs: string = "texto-bidirecional";
    static nomeCss: string = "unicode-bidi";
    static descricao: string = 'Utilizada juntamente com a propriedade direção, determina como o texto bidirecional é tratado em um documento.';
    static documentacao: string = '# `texto-bidirecional`\nPor exemplo, se um bloco de conteúdo contiver texto da esquerda para a direita e da direita para a esquerda, o agente do usuário usará um algoritmo Unicode para decidir como exibir o texto. A propriedade substitui esse algoritmo e permite que o desenvolvedor controle a incorporação de texto.';
    static exemploCodigo: string = 'p {\n  texto-bidirecional: isolar;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        embutir: "embed",
        isolar: "isolate",
        "substituir-bidirecional": "bidi-override",
        "substituir-isolar": "isolate-override",
        "texto-simples": "plaintext",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(TextoBidirecional.nomeFolEs, TextoBidirecional.nomeCss, pragmas);

        if (!variavel) validarValores(TextoBidirecional.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
