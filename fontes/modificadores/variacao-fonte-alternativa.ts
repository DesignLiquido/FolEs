import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VariacaoFonteAlternativa extends Modificador {
    static nomeFolEs: string[] = ["variacao-fonte-alternativa", "variação-fonte-alternativa"];
    static nomeCss: string = "font-variant-alternates";
    static descricao: string = 'Controla o uso de glifos alternativos na fonte de texto definida para a aplicação.';
    static documentacao: string = '# `variacao-fonte-alternativa`\nOs glifos alternativos podem ser referenciados por nomes alternativos definidos nos valores de recurso de fonte.';
    static exemploCodigo: string = 'p {\n  variacao-fonte-alternativa: formas-históricas;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        "formas-historicas": "historical-forms",
        "formas-históricas": "historical-forms",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            VariacaoFonteAlternativa.nomeFolEs,
            VariacaoFonteAlternativa.nomeCss,
            pragmas,
        );

        const valoresExtra = ['annotation', 'character-variant', 'ornaments', 'styleset', 'stylistic', 'swash'];

        if (!variavel) {
            validarValores(
                VariacaoFonteAlternativa.nomeFolEs[1],
                valores,
                this.valoresAceitos,
                valoresExtra
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
