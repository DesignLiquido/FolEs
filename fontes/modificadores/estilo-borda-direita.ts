import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBordaDireita extends Modificador {
    static nomeFolEs: string = "estilo-borda-direita";
    static nomeCss: string = "border-right-style";
    static descricao: string = 'Define o estilo de linha da borda direita de um elemento.';
    static documentacao: string = '# `estilo-borda-direita`\nEsta propriedade aceita receber somente como valor somente as palavras-chave listadas na documentação. O estilo da borda direita também pode ser definido através da propriedade `estilo-borda`';
    static exemploCodigo: string = 'divisao {\n  estilo-borda-direita: pontilhado;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(EstiloBordaDireita.nomeFolEs, EstiloBordaDireita.nomeCss, pragmas);

        if (!variavel) validarValoresAdicionais(EstiloBordaDireita.nomeFolEs, valores, estilos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
