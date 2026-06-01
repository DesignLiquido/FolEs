import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBordaEmBloco extends Modificador {
    static nomeFolEs: string = "cor-borda-em-bloco";
    static nomeCss: string = "border-block-color";
    static descricao: string = 'Define a cor das bordas do bloco de um elemento.';
    static documentacao: string = '# `cor-borda-em-bloco`\nEsta propriedade mapeia o valor atribuído para uma cor de borda física, dependendo do modo de escrita, direcionalidade e orientação do texto do elemento.';
    static exemploCodigo: string = 'campo {\n  cor-borda-em-bloco: amarelo;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(CorBordaEmBloco.nomeFolEs, CorBordaEmBloco.nomeCss, pragmas);

        if (!variavel) validarValorCor(CorBordaEmBloco.nomeFolEs, valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
