import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaEmLinha extends Modificador {
    static nomeFolEs: string = "cor-borda-em-linha";
    static nomeCss: string = "border-inline-color";
    static descricao: string = 'Define a cor das bordas em linha de um elemento.';
    static documentacao: string = '# `cor-borda-em-linha`\nEsta propriedade mapeia o valor atribuído para uma cor de borda física, dependendo do modo de escrita, direcionalidade e orientação do texto do elemento.';
    static exemploCodigo: string = 'campo {\n  cor-borda-em-linha: amarelo;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(CorBordaEmLinha.nomeFolEs, CorBordaEmLinha.nomeCss, pragmas);

        if (!variavel) validarValorCor(CorBordaEmLinha.nomeFolEs, valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
