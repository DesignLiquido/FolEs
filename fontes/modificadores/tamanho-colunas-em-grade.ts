import { Valor } from "../valores";
import { unidadesMedida, valoresFlex } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class TamanhoColunasEmGrade extends Modificador {
    static nomeFolEs: string = "tamanho-colunas-em-grade";
    static nomeCss: string = "grid-auto-columns";
    static descricao: string = 'Especifica o tamanho da trilha de uma coluna em grade.';
    static documentacao: string = '# `tamanho-colunas-em-grade`\nEsta propriedade afeta apenas colunas cujo tamanho não está definido.';
    static exemploCodigo: string = 'coluna {\n  tamanho-colunas-em-grade: 20cm;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(TamanhoColunasEmGrade.nomeFolEs, TamanhoColunasEmGrade.nomeCss, pragmas);

        const valoresExtra = ["minmax", "fit-content"];

        const quantificadoresAceitos: { [nome: string]: string } = { ...unidadesMedida, ...valoresFlex };

        if (!variavel) {
            validarValorNumerico(
                TamanhoColunasEmGrade.nomeFolEs,
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
