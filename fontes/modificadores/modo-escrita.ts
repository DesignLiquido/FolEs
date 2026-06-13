import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ModoEscrita extends Modificador {
    static nomeFolEs: string = "modo-escrita";
    static nomeCss: string = "writing-mode";
    static descricao: string = 'Define se as linhas de texto são dispostas horizontal ou verticalmente.';
    static documentacao: string = '# `modo-escrita`\nAlém da direção especificada, esta propriedade também define a direção na qual os blocos progridem. Quando definido para um documento inteiro, o valor deve ser especificado no elemento HTML raiz.';
    static exemploCodigo: string = 'p {\n  modo-escrita: vertical-direita-esquerda;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        horizontal: "horizontal-tb",
        "vertical-direita-esquerda": "vertical-rl",
        "vertical-esquerda-direita": "vertical-lr",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(ModoEscrita.nomeFolEs, ModoEscrita.nomeCss, pragmas);

        if (!variavel) validarValores(ModoEscrita.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
