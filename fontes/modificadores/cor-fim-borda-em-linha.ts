import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorFimBordaEmLinha extends Modificador {
    static nomeFolEs: string = "cor-fim-borda-em-linha";
    static nomeCss: string = "border-inline-end-color";
    static descricao: string = 'Define a cor da borda em linha final de um elemento.';
    static documentacao: string = '# `cor-fim-borda-em-linha`\nEsta propriedade mapeia o valor atribuído para uma cor de borda física, dependendo do modo de escrita, direcionalidade e orientação do texto do elemento.';
    static exemploCodigo: string = 'p {\n  cor-fim-borda-em-linha: #f5f6f7;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(CorFimBordaEmLinha.nomeFolEs, CorFimBordaEmLinha.nomeCss, pragmas);

        if (!variavel) validarValorCor(CorFimBordaEmLinha.nomeFolEs, valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
