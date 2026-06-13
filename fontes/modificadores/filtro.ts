import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Filtro extends Modificador {
    static nomeFolEs: string = "filtro";
    static nomeCss: string = "filter";
    static descricao: string = 'Aplica efeitos gráficos a um elemento, como desfoque ou mudança de cor.';
    static documentacao: string = '# `filtro`\nOs filtros são comumente usados para ajustar a renderização de imagens, planos de fundo e bordas.';
    static exemploCodigo: string = 'imagem {\n  filtro: url("filters.svg#filter-id");\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        url: "url",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Filtro.nomeFolEs, "filter", pragmas);

        const valoresExtra = ["url", "blur", "brightness", "contrast"];

        if (!variavel) validarValores(Filtro.nomeFolEs, valores, this.valoresAceitos, valoresExtra);

        this.valores = valores;
        this.variavel = variavel;
    }
}
