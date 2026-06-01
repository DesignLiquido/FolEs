import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class DecoracaoCorTexto extends Modificador {
    static nomeFolEs: string[] = ["decoracao-cor-texto", "decoração-cor-texto"];
    static nomeCss: string = "text-decoration-color";
    static descricao: string = 'Define  a cor das decorações adicionadas ao texto.';
    static documentacao: string = '# `decoracao-cor-texto`\nA cor definida por esta propriedade se aplica a decorações como textos sublinhados, riscados, tachados e com linhas onduladas.';
    static exemploCodigo: string = 'p {\n  decoracao-cor-texto: transparente;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            DecoracaoCorTexto.nomeFolEs,
            DecoracaoCorTexto.nomeCss,
            pragmas,
        );

        if (!variavel) validarValorCor(DecoracaoCorTexto.nomeFolEs[1], valores);

        this.valores = valores;
        this.variavel = variavel;
    }
}
