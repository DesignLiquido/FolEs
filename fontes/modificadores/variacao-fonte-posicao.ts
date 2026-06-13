import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VariacaoFontePosicao extends Modificador {
    static nomeFolEs: string[] = ["variacao-fonte-posicao", "variação-fonte-posição"];
    static nomeCss: string = "font-variant-position";
    static descricao: string = 'Controla o uso de glifos menores e alternativos que são posicionados como sobrescrito ou subscrito.';
    static documentacao: string = '# `variacao-fonte-posicao`\nOs glifos são posicionados em relação à linha de base da fonte, que permanece inalterada. Esses glifos são normalmente usados ​​em elementos subscritos e sobrescritos.';
    static exemploCodigo: string = 'p {\n  variacao-fonte-posicao: subscrito;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        subscrito: "sub",
        sobrescrito: "super",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            VariacaoFontePosicao.nomeFolEs,
            VariacaoFontePosicao.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValores(
                VariacaoFontePosicao.nomeFolEs[1],
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
