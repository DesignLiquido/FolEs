import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class PosicaoLegenda extends Modificador {
    static nomeFolEs: string[] = ["posicao-legenda", "posição-legenda"];
    static nomeCss: string = "caption-side";
    static descricao: string = 'Define o posicionamento das legendas a partir da posição de uma referida tabela.';
    static documentacao: string = '# `posicao-legenda`\nOs valores definidos para esta propriedade serão relativos ao `modo-escrita` da tabela especificada.';
    static exemploCodigo: string = 'tabela {\n  posicao-legenda: fim-bloco;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        superior: "top",
        inferior: "bottom",
        "inicio-bloco": "block-start",
        "início-bloco": "block-start",
        "fim-bloco": "block-end",
        "inicio-em-linha": "inline-start",
        "início-em-linha": "inline-start",
        "fim-em-linha": "inline-end",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(PosicaoLegenda.nomeFolEs, PosicaoLegenda.nomeCss, pragmas);

        if (!variavel) validarValores(PosicaoLegenda.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
