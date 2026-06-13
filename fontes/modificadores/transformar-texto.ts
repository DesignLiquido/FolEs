import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TransformarTexto extends Modificador {
    static nomeFolEs: string = "transformar-texto";
    static nomeCss: string = "text-transform";
    static descricao: string = 'Especifica como capitalizar o texto de um elemento.';
    static documentacao: string = '# `transformar-texto`\nEsta propriedade pode ser usada para fazer o texto aparecer em letras maiúsculas ou minúsculas, ou com cada palavra em maiúscula. Também pode ajudar a melhorar a legibilidade do texto do tipo ruby.';
    static exemploCodigo: string = 'título3 {\n  transformar-texto: maiúsculo;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        capitalizar: "capitalize",
        maiusculo: "uppercase",
        maiúsculo: "uppercase",
        minusculo: "lowercase",
        minúsculo: "lowercase",
        "largura-cheia": "full-width",
        "tamanho-completo-kana": "full-size-kana",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(TransformarTexto.nomeFolEs, TransformarTexto.nomeCss, pragmas);

        if (!variavel) validarValores(TransformarTexto.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
