import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class JustificarTexto extends Modificador {
    static nomeFolEs: string = "justificar-texto";
    static nomeCss: string = "text-justify";
    static descricao: string = 'Define a justificação de um elemento de texto da aplicação.';
    static documentacao: string = '# `justificar-texto`\nEsta propriedadedefine qual tipo de justificação deve ser aplicada ao texto quando um elemento tem a propriedade `alinhar-texto` definida com o valor justificar.';
    static exemploCodigo: string = 'p {\n  justificar-texto: distribuir;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        nenhum: "none",
        "entre-palavras": "inter-word",
        "entre-caracteres": "inter-character",
        distribuir: "distribute",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(JustificarTexto.nomeFolEs, JustificarTexto.nomeCss, pragmas);

        if (!variavel) validarValores(JustificarTexto.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
