import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraMinima extends Modificador {
    static nomeFolEs: string[] = ["largura-minima", "largura-minima"];
    static nomeCss: string = "min-width";
    static descricao: string = 'Define a largura mínima de um elemento da aplicação.';
    static documentacao: string = '# `largura-minima`\nO uso desta propriedade evita que o valor atribuído à propriedade `largura` seja menor que o valor especificado nesta propriedade.';
    static exemploCodigo: string = 'p {\n  largura-minima: 10vw;\n}';

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
        super(LarguraMinima.nomeFolEs, LarguraMinima.nomeCss, pragmas);

        const valoresExtra = ["fit-content"];

        if (!variavel) {
            validarValorNumerico(
                LarguraMinima.nomeFolEs[1],
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
