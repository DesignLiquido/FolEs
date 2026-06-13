import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RegrasLarguraColuna extends Modificador {
    static nomeFolEs: string = "regras-largura-coluna";
    static nomeCss: string = "column-rule-width";
    static descricao: string = 'Define a largura da linha desenhada entre as colunas em um layout de várias colunas.';
    static documentacao: string = '# `regras-largura-coluna`\nEsta propriedade também pode ser definida através da propriedade de atribuição abreviada `regras-coluna`.';
    static exemploCodigo: string = 'p {\n  regras-largura-coluna: pontilhado;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        grossa: "thick",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RegrasLarguraColuna.nomeFolEs, RegrasLarguraColuna.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                RegrasLarguraColuna.nomeFolEs,
                valores,
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
