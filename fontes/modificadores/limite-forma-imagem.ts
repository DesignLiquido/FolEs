import { Valor, ValorNumerico, ValorQualitativo } from "../valores";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LimiteFormaImagem extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("limite-forma-imagem", "shape-image-threshold", pragmas);

        // Valor deve estar entre 0 e 1 (<alpha-value>) ou ser um valor global
        const valorNumericoTipado = valores[0] as ValorNumerico;
        const valorQualitativoTipado = valores[0] as ValorQualitativo;
        
        if (
            (valorNumericoTipado.literalNumerico >= 0 && valorNumericoTipado.literalNumerico <= 1) ||
            (valorQualitativoTipado.qualitativo in valoresGlobais)
        ) {
            validarValorNumerico(
                "limite-forma-imagem",
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
            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
        }

        this.valores = valores;
    }
}
