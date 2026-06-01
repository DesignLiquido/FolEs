import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBordaInferior extends Modificador {
    static nomeFolEs: string = "estilo-borda-inferior";
    static nomeCss: string = "border-bottom-style";
    static descricao: string = 'Define o estilo de linha da borda inferior de um elemento.';
    static documentacao: string = '# `estilo-borda-inferior`\nEsta propriedade aceita receber somente como valor somente as palavras-chave listadas na documentação. O estilo da borda inferior também pode ser definido através da propriedade `estilo-borda`.';
    static exemploCodigo: string = 'divisao {\n  estilo-borda-inferior: pontilhado;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(EstiloBordaInferior.nomeFolEs, EstiloBordaInferior.nomeCss, pragmas);

        if (!variavel) validarValoresAdicionais(EstiloBordaInferior.nomeFolEs, valores, estilos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
