import { Valor, ValorNumerico, ValorQualitativo } from "../valores";
import { unidadesMedida, valoresFlex } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValores } from "./validacoes/comum";
import { validarValorNumerico } from "./validacoes/numerica";

export class Grade extends Modificador {
    static nomeFolEs: string = "grade";
    static nomeCss: string = "grid";
    static descricao: string = 'Define as estilizações de grade da aplicação.';
    static documentacao: string = '# `grade`\nPropriedade de atribuição abreviada que define todas as propriedades de grade explícitas e implícitas em uma única declaração.';
    static exemploCodigo: string = 'coluna {\n  grade: 100px / 200px;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        auto: "auto",
        linha: "row",
        coluna: "column",
        denso: "dense",
        nenhum: "none",
        "sub-grade": "subgrid",
        alvenaria: "masonry",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Grade.nomeFolEs, Grade.nomeCss, pragmas);

        const valoresExtra = ["minmax"];

        const quantificadoresAceitos: { [nome: string]: string } = { ...unidadesMedida, ...valoresFlex };

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "comum",
                    Grade.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    valoresExtra
                );
            } else if (valores[0] instanceof ValorNumerico) {
                validarValorNumerico(
                    Grade.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    valoresExtra,
                    quantificadoresAceitos
                );
            } else {
                validarValores(
                    Grade.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    valoresExtra
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
