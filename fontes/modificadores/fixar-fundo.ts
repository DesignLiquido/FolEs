import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FixarFundo extends Modificador {
    static nomeFolEs: string = "fixar-fundo";
    static nomeCss: string = "background-attachment";
    static descricao: string = 'Define a posição de uma imagem de plano de fundo.';
    static documentacao: string = '# `fixar-fundo`\nEsta propriedade define se a posição de uma imagem de plano de fundo é fixa na janela de exibição ou se a imagem deve rolar com o bloco em que está contida.';
    static exemploCodigo: string = 'imagem {\n  fixar-fundo: rolar;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        fixo: "fixed",
        local: "local",
        rolar: "scroll",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(FixarFundo.nomeFolEs, FixarFundo.nomeCss, pragmas);

        if (!variavel) validarValores(FixarFundo.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
