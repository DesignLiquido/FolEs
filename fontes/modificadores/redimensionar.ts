import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Redimensionar extends Modificador {
    static nomeFolEs: string = "redimensionar";
    static nomeCss: string = "resize";
    static descricao: string = 'Define o redimensionamento de um elemento da aplicação.';
    static documentacao: string = '# `redimensionar`\nPropriedade que especifica se um elemento é redimensionável e, no caso dos elementos que são, em quais direções.';
    static exemploCodigo: string = 'divisao {\n  redimensionar: horizontal;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        ambos: "both",
        horizontal: "horizontal",
        vertical: "vertical",
        "em-bloco": "block",
        "em-linha": "inline",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Redimensionar.nomeFolEs, Redimensionar.nomeCss, pragmas);

        if (!variavel) validarValores(Redimensionar.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
