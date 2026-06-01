import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaSuperior extends Modificador {
    static nomeFolEs: string = "cor-borda-superior";
    static nomeCss: string = "border-top-color";
    static descricao: string = 'Define a cor da borda superior de um elemento.';
    static documentacao: string = '# `cor-borda-superior`\nO valor de cor da borda superior do elemento também pode ser definido através das propriedades `cor-borda` e `borda-superior`.';
    static exemploCodigo: string = 'campo {\n  cor-borda-superior: #ffbb00;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(CorBordaSuperior.nomeFolEs, CorBordaSuperior.nomeCss, pragmas);

        if (!variavel) validarValorCor(CorBordaSuperior.nomeFolEs, valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
