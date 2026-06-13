import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaEsquerda extends Modificador {
    static nomeFolEs: string = "cor-borda-esquerda";
    static nomeCss: string = "border-left-color";
    static descricao: string = 'Define a cor da borda esquerda de um elemento.';
    static documentacao: string = '# `cor-borda-esquerda`\nO valor de cor da borda esquerda do elemento também pode ser definido através das propriedades `cor-borda` e `borda-esquerda`.';
    static exemploCodigo: string = 'campo {\n  cor-borda-esquerda: #ffbb00;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(CorBordaEsquerda.nomeFolEs, CorBordaEsquerda.nomeCss, pragmas);

        if (!variavel) validarValorCor(CorBordaEsquerda.nomeFolEs, valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
