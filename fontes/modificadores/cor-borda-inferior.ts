import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaInferior extends Modificador {
    static nomeFolEs: string = "cor-borda-inferior";
    static nomeCss: string = "border-bottom-color";
    static descricao: string = 'Define a cor da borda inferior de um elemento.';
    static documentacao: string = '# `cor-borda-inferior`\nO valor de cor da borda inferior do elemento também pode ser definido através das propriedades `cor-borda` e `borda-inferior`.';
    static exemploCodigo: string = 'campo {\n  cor-borda-inferior: #ffbb00;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(CorBordaInferior.nomeFolEs, CorBordaInferior.nomeCss, pragmas);

        if (!variavel) validarValorCor(CorBordaInferior.nomeFolEs, valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
