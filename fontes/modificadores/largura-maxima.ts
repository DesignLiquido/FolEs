import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraMaxima extends Modificador {
    static nomeFolEs: string[] = ["largura-maxima", "largura-máxima"];
    static nomeCss: string = "max-width";
    static descricao: string = 'Define a largura máxima de um elemento da aplicação.';
    static documentacao: string = '# `largura-maxima`\nO uso desta propriedade evita que o valor atribuído à propriedade `largura` seja maior que o valor especificado nesta propriedade.';
    static exemploCodigo: string = 'p {\n  largura-maxima: 10vw;\n}';

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
        super(LarguraMaxima.nomeFolEs, LarguraMaxima.nomeCss, pragmas);

        const valoresExtra = ["fit-content"];

        if (!variavel) {
            validarValorNumerico(
                LarguraMaxima.nomeFolEs[1],
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
