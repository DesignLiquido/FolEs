import { Valor } from "../valores";
import { unidadesMedida, valoresFlex } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class TamanhoLinhasEmGrade extends Modificador {
    static nomeFolEs: string = "tamanho-linhas-em-grade";
    static nomeCss: string = "grid-auto-rows";
    static descricao: string = 'Especifica o tamanho da trilha de uma linha em grade.';
    static documentacao: string = '# `tamanho-linhas-em-grade`\nSe um item de grade for posicionado em uma linha que não seja dimensionada explicitamente pela propriedade modelo-linhas-em-grade, trilhas de grade implícitas serão criadas para mantê-lo. Isso pode acontecer pelo posicionamento explícito em uma linha que está fora do intervalo ou pelo algoritmo de posicionamento automático criando linhas adicionais.';
    static exemploCodigo: string = 'tabela {\n  tamanho-linhas-em-grade: 0.5fr;\n}';

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
        super(TamanhoLinhasEmGrade.nomeFolEs, TamanhoLinhasEmGrade.nomeCss, pragmas);

        const valoresExtra = ["minmax", "fit-content"];

        const quantificadoresAceitos: { [nome: string]: string } = { ...unidadesMedida, ...valoresFlex };

        if (!variavel) {
            validarValorNumerico(
                TamanhoLinhasEmGrade.nomeFolEs,
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
