import { Valor, ValorNumerico, ValorQualitativo } from "../valores";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LimiteFormaImagem extends Modificador {
    static nomeFolEs: string = "limite-forma-imagem";
    static nomeCss: string = "shape-image-threshold";
    static descricao: string = 'Define o limite da forma de uma imagem da aplicação.';
    static documentacao: string = '# `limite-forma-imagem`\nEsta propriedade especifica o limite do canal alfa usado para extrair a forma usando uma imagem como valor da propriedade `forma-externa`.';
    static exemploCodigo: string = 'imagem {\n  limite-forma-imagem: 0.7;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(LimiteFormaImagem.nomeFolEs, LimiteFormaImagem.nomeCss, pragmas);

        // Valor deve estar entre 0 e 1 (<alpha-value>) ou ser um valor global
        const valorNumericoTipado = valores[0] as ValorNumerico;
        const valorQualitativoTipado = valores[0] as ValorQualitativo;

        if (!variavel) {
            if (
                (valorNumericoTipado.literalNumerico >= 0 && valorNumericoTipado.literalNumerico <= 1) ||
                (valorQualitativoTipado.qualitativo in valoresGlobais)
            ) {
                validarValorNumerico(
                    LimiteFormaImagem.nomeFolEs,
                    valores,
                    null,
                    null,
                    null,
                    true
                );
            } else {
                throw new Error(`Modificador ou variável 'limite-forma-imagem' com valor ${valorNumericoTipado.literalNumerico} inválido. Valores aceitos:
                    número-quantificador (ex.: 12px),
                    valor numérico do tipo <alpha-value> (deve ser entre 0 e 1),
                    ${Object.keys(valoresGlobais).reduce((final, atual) => (final + `, ${atual}`))}.`);
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
