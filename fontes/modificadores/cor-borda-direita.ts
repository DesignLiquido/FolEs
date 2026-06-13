import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaDireita extends Modificador {
    static nomeFolEs: string = "cor-borda-direita";
    static nomeCss: string = "border-right-color";
    static descricao: string = 'Define a cor da borda direita de um elemento.';
    static documentacao: string = '# `cor-borda-direita`\nO valor de cor da borda direita do elemento também pode ser definido através das propriedades `cor-borda` e `borda-direita`.';
    static exemploCodigo: string = 'campo {\n  cor-borda-direita: #ffbb00;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(CorBordaDireita.nomeFolEs, CorBordaDireita.nomeCss, pragmas);

        if (!variavel) validarValorCor(CorBordaDireita.nomeFolEs, valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
