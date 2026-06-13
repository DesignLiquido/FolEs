import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBordaEsquerda extends Modificador {
    static nomeFolEs: string = "estilo-borda-esquerda";
    static nomeCss: string = "border-left-style";
    static descricao: string = 'Define o estilo de linha da borda esquerda de um elemento.';
    static documentacao: string = '# `estilo-borda-esquerda`\nEsta propriedade aceita receber somente como valor somente as palavras-chave listadas na documentação. O estilo da borda esquerda também pode ser definido através da propriedade `estilo-borda`';
    static exemploCodigo: string = 'divisao {\n  estilo-borda-esquerda: pontilhado;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(EstiloBordaEsquerda.nomeFolEs, EstiloBordaEsquerda.nomeCss, pragmas);

        if (!variavel) validarValoresAdicionais(EstiloBordaEsquerda.nomeFolEs, valores, estilos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
