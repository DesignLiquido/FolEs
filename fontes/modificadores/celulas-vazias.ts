import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class CelulasVazias extends Modificador {
    static nomeFolEs: string[] = ["celulas-vazias", "células-vazias"];
    static nomeCss: string = "empty-cells";
    static descricao: string = 'Define se as bordas e planos de fundo aparecem ao redor das células da tabela.';
    static documentacao: string = '# `celulas-vazias`\nAplicável para os casos em que a tabela não possui conteúdo visual. Esta propriedade tem efeito somente quando a propriedade `recolher-borda` possui o valor separar.';
    static exemploCodigo: string = 'tabela {\n  celulas-vazias: exibir;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        exibir: "show",
        ocultar: "hide",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(CelulasVazias.nomeFolEs, CelulasVazias.nomeCss, pragmas);

        if (!variavel) validarValores(CelulasVazias.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
