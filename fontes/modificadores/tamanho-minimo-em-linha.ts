import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class TamanhoMinimoEmLinha extends Modificador {
    static nomeFolEs: string[] = ["tamanho-minimo-em-linha", "tamanho-mínimo-em-linha"];
    static nomeCss: string = "min-inline-size";
    static descricao: string = 'Define  o tamanho minimo, horizontal ou `vertical`, do bloco de um elemento, dependendo do seu modo de escrita.';
    static documentacao: string = '# `tamanho-minimo-em-linha`\nCorresponde à propriedade `altura-máxima` ou largura-máxima, dependendo do valor atribuído à `modo-escrita`. Se o modo de escrita for orientado verticalmente, o valor de tamanho-minimo-em-linha refere-se à `altura-máxima` do elemento; caso contrário, refere-se à largura-máxima do elemento.';
    static exemploCodigo: string = 'divisao {\n  tamanho-minimo-em-linha: 30px;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            TamanhoMinimoEmLinha.nomeFolEs,
            TamanhoMinimoEmLinha.nomeCss,
            pragmas,
        );

        const valoresExtra = ["fit-content"];

        if (!variavel) {
            validarValorNumerico(
                TamanhoMinimoEmLinha.nomeFolEs[1],
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
