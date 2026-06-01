import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorFimBordaEmBloco extends Modificador {
    static nomeFolEs: string = "cor-fim-borda-em-bloco";
    static nomeCss: string = "border-block-end-color";
    static descricao: string = 'Define a cor da borda do bloco final de um elemento.';
    static documentacao: string = '# `cor-fim-borda-em-bloco`\nEsta propriedade mapeia o valor atribuído para uma cor de borda física, dependendo do modo de escrita, direcionalidade e orientação do texto do elemento.';
    static exemploCodigo: string = 'p {\n  cor-fim-borda-em-bloco: #f5f6f7;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(CorFimBordaEmBloco.nomeFolEs, CorFimBordaEmBloco.nomeCss, pragmas);

        if (!variavel) validarValorCor(CorFimBordaEmBloco.nomeFolEs, valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
