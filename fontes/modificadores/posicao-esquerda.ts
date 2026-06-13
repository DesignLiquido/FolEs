import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class PosicaoEsquerda extends Modificador {
    static nomeFolEs: string[] = ["posicao-esquerda", "posição-esquerda"];
    static nomeCss: string = "left";
    static descricao: string = 'Define a posição esquerda de um elemento da aplicação.';
    static documentacao: string = '# `posicao-esquerda`\nPropriedade que participa da especificação da posição horizontal de um elemento posicionado. A propriedade não tem efeito em elementos não posicionados.';
    static exemploCodigo: string = 'p {\n  posicao-esquerda: 2.4em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(PosicaoEsquerda.nomeFolEs, PosicaoEsquerda.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                PosicaoEsquerda.nomeFolEs[1],
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
