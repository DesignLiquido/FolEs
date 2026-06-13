import { Valor } from "../valores";
import { unidadesMedida, valoresFlex } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class ModeloLinhasEmGrade extends Modificador {
    static nomeFolEs: string = "modelo-linhas-em-grade";
    static nomeCss: string = "grid-template-rows";
    static descricao: string = 'Define o modelo das linhas em grade.';
    static documentacao: string = '# `modelo-linhas-em-grade`\nEsta propriedade define os nomes das linhas e as funções de dimensionamento das linhas da grade.';
    static exemploCodigo: string = 'tabela {\n  modelo-linhas-em-grade: 3s linear 1s deslizar;\n}';

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
        super(ModeloLinhasEmGrade.nomeFolEs, ModeloLinhasEmGrade.nomeCss, pragmas);

        // OBS.: Também aceita receber o valor do tipo [linename]
        const valoresExtra = ["minmax", "fit-content"];

        const quantificadoresAceitos: { [nome: string]: string } = { ...unidadesMedida, ...valoresFlex };

        if (!variavel) {
            validarValorNumerico(
                ModeloLinhasEmGrade.nomeFolEs,
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
