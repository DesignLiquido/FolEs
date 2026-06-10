import { Modificador, PragmasModificador } from "./superclasse";
import { unidadesMedida } from "./atributos/quantificadores";
import { validarValorNumerico } from "./validacoes/numerica";
import { Valor } from "../valores";

export class TamanhoEmBloco extends Modificador {
    static nomeFolEs: string = "tamanho-em-bloco";
    static nomeCss: string = "block-size";
    static descricao: string = 'Define o tamanho horizontal ou vertical do bloco de um elemento, dependendo do seu modo de escrita.';
    static documentacao: string = '# `tamanho-em-bloco`\nPropriedade que corresponde tanto à propriedade largura quanto altura, dependendo do valor definido na propriedade `modo-escrita`. Se o modo de escrita for orientado verticalmente, o valor de tamanho-em-bloco refere-se à largura do elemento; caso contrário, refere-se à altura do elemento.';
    static exemploCodigo: string = 'p {\n  tamanho-em-bloco: conteúdo-máximo;\n}';

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
        super(TamanhoEmBloco.nomeFolEs, TamanhoEmBloco.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                TamanhoEmBloco.nomeFolEs,
                valores,
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
