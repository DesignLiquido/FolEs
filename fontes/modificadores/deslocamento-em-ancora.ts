import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class DeslocamentoEmAncora extends Modificador {
    static nomeFolEs: string[] = ["deslocamento-em-ancora", "deslocamento-em-âncora"];
    static nomeCss: string = "offset-anchor";
    static descricao: string = 'Especifica o ponto dentro da caixa de um elemento em movimento no seu trajeto-deslocamento.';
    static documentacao: string = '# `deslocamento-em-ancora`\nEsta propriedade especifica o ponto dentro da caixa de um elemento em movimento no seu `trajeto-deslocamento`.';
    static exemploCodigo: string = 'p {\n  deslocamento-em-ancora: centro;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        superior: "top",
        inferior: "bottom",
        esquerda: "left",
        direita: "right",
        centro: "center",
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            DeslocamentoEmAncora.nomeFolEs,
            DeslocamentoEmAncora.nomeCss,
            pragmas,
        );

        if (!variavel) {
            validarValorNumerico(
                DeslocamentoEmAncora.nomeFolEs[1],
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
