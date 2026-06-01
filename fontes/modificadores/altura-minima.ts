import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class AlturaMinima extends Modificador {
    static nomeFolEs: string[] = ["altura-minima", "altura-mínima"];
    static nomeCss: string = "min-height";
    static descricao: string = 'Define a altura mínima de um elemento da aplicação.';
    static documentacao: string = '# `altura-mínima`\nUtilizar esta propriedade garante que o valor da propriedade `altura` nunca será menor do que o valor especificado.';
    static exemploCodigo: string = 'divisão {\n  altura-mínima: 3.5em;\n}';

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
        super(AlturaMinima.nomeFolEs, AlturaMinima.nomeCss, pragmas);

        const valoresExtra = ["fit-content"];

        if (!variavel) {
            validarValorNumerico(
               AlturaMinima.nomeFolEs[1],
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
