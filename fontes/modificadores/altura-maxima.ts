import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class AlturaMaxima extends Modificador {
    static nomeFolEs: string[] = ["altura-maxima", "altura-máxima"];
    static nomeCss: string = "max-height";
    static descricao: string = 'Define a altura máxima de um elemento da aplicação.';
    static documentacao: string = '# `altura-máxima`\nUtilizar esta propriedade garante que o valor da propriedade `altura` nunca será maior do que o valor especificado.';
    static exemploCodigo: string = 'divisão {\n  altura-máxima: 3.5em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        nenhuma: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(AlturaMaxima.nomeFolEs, AlturaMaxima.nomeCss, pragmas);

        const valoresExtra = ["fit-content"];

        if (!variavel) {
            validarValorNumerico(
                AlturaMaxima.nomeFolEs[1],
                valores,
                this.valoresAceitos,
                valoresExtra,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
