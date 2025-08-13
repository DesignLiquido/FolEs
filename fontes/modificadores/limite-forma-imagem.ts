import { Valor, ValorNumerico } from "../valores";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class LimiteFormaImagem extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("limite-forma-imagem", "shape-image-threshold", pragmas);

        const valorTipado = valores[0] as ValorNumerico;

        // Valor numérico deve estar entre 0 e 1 (<alpha-value>).
        if (
            (Number(valorTipado.literalNumerico) < 0 || Number(valorTipado.literalNumerico) > 1) &&
            !(valorTipado.literalNumerico in valoresGlobais)
        ) {
            throw new Error(
                `Modificador ou variável 'limite-forma-imagem' com valor ${valorTipado.literalNumerico} inválido. O valor deve estar entre 0 e 1 ou ser um dos valores:
                ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`,
            );
        }

        proibirQuantificador("limite-forma-imagem", valorTipado.quantificador);

        this.valores = valores;
    }
}
