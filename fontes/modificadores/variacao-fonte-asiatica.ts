import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VariacaoFonteAsiatica extends Modificador {
    static nomeFolEs: string[] = ["variacao-fonte-asiatica", "variação-fonte-asiática"];
    static nomeCss: string = "font-variant-east-asian";
    static descricao: string = 'Controla o uso de glifos alternativos da fonte de um referido elemento.';
    static documentacao: string = '# `variacao-fonte-asiatica`\nPropriedade aplicável para scripts do Leste Asiático, como japonês e chinês.';
    static exemploCodigo: string = 'p {\n  variacao-fonte-asiatica: tradicional;\n}';

    // Os valores que incluem letras e números pertencem à lista <east-asian-variant-values>
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        rubi: "ruby",
        jis78: "jis78",
        jis83: "jis83",
        jis90: "jis90",
        jis04: "jis04",
        jis78s: "jis78",
        simplificada: "simplified",
        tradicional: "traditional",
        "largura-proporcional": "proportional-width",
        "largura-completa": "full-width",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            VariacaoFonteAsiatica.nomeFolEs,
            "font-variant-east-asian",
            pragmas,
        );

        if (!variavel) {
            validarValores(
                VariacaoFonteAsiatica.nomeFolEs[1],
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
