import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class PosicaoInferior extends Modificador {
    static nomeFolEs: string[] = ["posicao-inferior", "posição-inferior"];
    static nomeCss: string = "bottom";
    static descricao: string = 'Define a posição inferior de um elemento da aplicação.';
    static documentacao: string = '# `posicao-inferior`\nPropriedade que participa da especificação da posição horizontal de um elemento posicionado. A propriedade não tem efeito em elementos não posicionados.';
    static exemploCodigo: string = 'p {\n  posicao-inferior: 2.4em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(PosicaoInferior.nomeFolEs, PosicaoInferior.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                PosicaoInferior.nomeFolEs[1],
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
