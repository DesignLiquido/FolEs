import { Valor } from "../valores";
import { posicoesBasicas } from "./atributos/posicoes";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class TransformarOrigem extends Modificador {
    static nomeFolEs: string = "transformar-origem";
    static nomeCss: string = "transform-origin";
    static descricao: string = 'Define a origem das transformações de um elemento.';
    static documentacao: string = '# `transformar-origem`\n A origem da transformação é o ponto ao redor do qual uma transformação é aplicada. Por exemplo, a origem da transformação da função rotate() é o centro de rotação. Essa propriedade envolve um par de translações em torno das outras transformações do elemento.';
    static exemploCodigo: string = 'divisao {\n  transformar-origem: direita superior;\n}';
    
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(TransformarOrigem.nomeFolEs, TransformarOrigem.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                TransformarOrigem.nomeFolEs,
                valores,
                posicoesBasicas,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
