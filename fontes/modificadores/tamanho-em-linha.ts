import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class TamanhoEmLinha extends Modificador {
    static nomeFolEs: string = "tamanho-em-linha";
    static nomeCss: string = "inline-size";
    static descricao: string = 'Define o tamanho horizontal ou vertical do bloco de um elemento, dependendo do seu modo de escrita.';
    static documentacao: string = '# `tamanho-em-linha`\nPropriedade que corresponde tanto à propriedade largura quanto altura, dependendo do valor definido na propriedade `modo-escrita`. Se o modo de escrita for orientado verticalmente, o valor de tamanho-em-linha refere-se à largura do elemento; caso contrário, refere-se à altura do elemento.';
    static exemploCodigo: string = 'p {\n  tamanho-em-linha: conteúdo-máximo;\n}';

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
        super(TamanhoEmLinha.nomeFolEs, TamanhoEmLinha.nomeCss, pragmas);

        const valoresExtra = ["fit-content"];

        if (!variavel) {
            validarValorNumerico(
                TamanhoEmLinha.nomeFolEs,
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
