import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FlexAgrupar extends Modificador {
    static nomeFolEs: string = "flex-agrupar";
    static nomeCss: string = "flex-wrap";
    static descricao: string = 'Define o agrupamento dos itens com exibição do tipo flex.';
    static documentacao: string = '# `flex-agrupar`\nEsta propriedade define se os itens flexíveis são forçados em uma linha ou se podem ser agrupados em várias linhas. Se a quebra for permitida, ela definirá a direção em que as linhas serão agrupadas.';
    static exemploCodigo: string = 'divisao {\n  flex-agrupar: inverter-agrupamento;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "nao-agrupar": "nowrap",
        "não-agrupar": "nowrap",
        agrupar: "wrap",
        "inverter-agrupamento": "wrap-reverse",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(FlexAgrupar.nomeFolEs, FlexAgrupar.nomeCss, pragmas);

        if (!variavel) validarValores(FlexAgrupar.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
