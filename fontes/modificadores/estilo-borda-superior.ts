import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBordaSuperior extends Modificador {
    static nomeFolEs: string = "estilo-borda-superior";
    static nomeCss: string = "border-top-style";
    static descricao: string = 'Define o estilo de linha da borda superior de um elemento.';
    static documentacao: string = '# `estilo-borda-superior`\nEsta propriedade aceita receber somente como valor somente as palavras-chave listadas na documentação. O estilo da borda superior também pode ser definido através da propriedade `estilo-borda`.';
    static exemploCodigo: string = 'divisao {\n  estilo-borda-superior: pontilhado;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(EstiloBordaSuperior.nomeFolEs, EstiloBordaSuperior.nomeCss, pragmas);

        if (!variavel) validarValoresAdicionais(EstiloBordaSuperior.nomeFolEs, valores, estilos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
