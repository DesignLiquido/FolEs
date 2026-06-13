import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class TamanhoMaximoEmBloco extends Modificador {
    static nomeFolEs: string[] = ["tamanho-maximo-em-bloco", "tamanho-máximo-em-bloco"];
    static nomeCss: string = "max-block-size";
    static descricao: string = 'Especifica o tamanho máximo de um elemento na direção oposta à direção de escrita, conforme especificado pela propriedade `modo-escrita`.';
    static documentacao: string = '# `tamanho-maximo-em-bloco`\nSe a direção da escrita for horizontal, então a propriedade é equivalente à propriedade `altura-máxima`; se a direção da escrita for `vertical`, é a mesma que `largura-máxima`. O comprimento máximo da outra dimensão do elemento é especificado através da propriedade `tamanho-máximo-em-linha`.';
    static exemploCodigo: string = 'divisao {\n  tamanho-maximo-em-bloco: 300px;\n}';

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
            TamanhoMaximoEmBloco.nomeFolEs,
            TamanhoMaximoEmBloco.nomeCss,
            pragmas,
        );

        const valoresExtra = ["fit-content"];

        if (!variavel) {
            validarValorNumerico(
                TamanhoMaximoEmBloco.nomeFolEs[1],
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
