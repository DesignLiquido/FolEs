import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class PosicaoSuperior extends Modificador {
    static nomeFolEs: string[] = ["posicao-superior", "posição-superior"];
    static nomeCss: string = "top";
    static descricao: string = 'Define a posição superior de um elemento da aplicação.';
    static documentacao: string = '# `posicao-superior`\nPropriedade que participa da especificação da posição horizontal de um elemento posicionado. A propriedade não tem efeito em elementos não posicionados.';
    static exemploCodigo: string = 'p {\n  posicao-superior: 2.4em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(PosicaoSuperior.nomeFolEs, PosicaoSuperior.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                PosicaoSuperior.nomeFolEs[1],
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
