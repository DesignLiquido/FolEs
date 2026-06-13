import { Valor } from "../valores";
import { unidadesMedida, valoresFlex } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class ModeloEmGrade extends Modificador {
    static nomeFolEs: string = "modelo-em-grade";
    static nomeCss: string = "grid-template";
    static descricao: string = 'Define as estilizações de um elemento com exibição em grade.';
    static documentacao: string = '# `modelo-em-grade`\nPropriedade de atribuição abreviada para definir colunas de grade, linhas de grade e áreas de grade.';
    static exemploCodigo: string = 'tabela {\n  modelo-em-grade: auto;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        auto: "auto",
        "conteudo-maximo": "max-content",
        "conteudo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteudo-mínimo": "min-content",
        "sub-grade": "subgrid",
        alvenaria: "masonry",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(ModeloEmGrade.nomeFolEs, ModeloEmGrade.nomeCss, pragmas);

        // TODO: Também aceita receber o valor do tipo matriz
        // Ex.: grid-template:
        //      "a a a" 20%
        //      "b b b" auto;

        const valoresExtra = ["fit-content"];

        const quantificadoresAceitos: { [nome: string]: string } = { ...unidadesMedida, ...valoresFlex };

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    ModeloEmGrade.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    valoresExtra,
                    quantificadoresAceitos
                );
            } else {
                validarValorNumerico(
                    ModeloEmGrade.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    valoresExtra,
                    quantificadoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
