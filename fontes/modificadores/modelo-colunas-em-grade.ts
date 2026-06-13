import { Valor } from "../valores";
import { unidadesMedida, valoresFlex } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class ModeloColunasEmGrade extends Modificador {
    static nomeFolEs: string = "modelo-colunas-em-grade";
    static nomeCss: string = "grid-template-columns";
    static descricao: string = 'Define o modelo das colunas em grade.';
    static documentacao: string = '# `modelo-colunas-em-grade`\nEsta propriedade especifica os nomes das linhas e as funções de dimensionamento das colunas da grade.';
    static exemploCodigo: string = 'tabela {\n  modelo-colunas-em-grade: conteudo-máximo;\n}';

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
        super(ModeloColunasEmGrade.nomeFolEs, ModeloColunasEmGrade.nomeCss, pragmas);

        const valoresExtra = ["minmax", "fit-content"];

        const quantificadoresAceitos: { [nome: string]: string } = { ...unidadesMedida, ...valoresFlex };

        if (!variavel) {
            validarValorNumerico(
                ModeloColunasEmGrade.nomeFolEs,
                valores,
                this.valoresAceitos,
                valoresExtra,
                quantificadoresAceitos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
