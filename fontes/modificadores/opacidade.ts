import { Valor, ValorNumerico } from "../valores";
import { valoresGlobais } from "./atributos/globais";
import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class Opacidade extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("opacidade", "opacity", pragmas);

        // Valor numérico deve estar entre 0 e 1 (<alpha-value>).
        // Caso haja um quantificador (%), pode ser qualquer número.        
        const valorTipado = valores[0] as ValorNumerico;

        if (!variavel) {
            if (valorTipado.quantificador) {
                validarValorNumerico(
                    "opacidade",
                    valores,
                    null,
                    null,
                    ListaDeValorPercentual
                );
            } else if (valorTipado.literalNumerico >= 0 && valorTipado.literalNumerico <= 1) {
                validarValorNumerico(
                    "opacidade",
                    valores,
                    null,
                    null,
                    null,
                    true
                )
            } else {
                throw new Error(
                    `Modificador ou variável 'opacidade' com valor ${valorTipado.literalNumerico} inválido. Valores aceitos:
                    número-quantificador (ex.: 12px),
                    valor numérico do tipo <alpha-value> (deve ser entre 0 e 1),
                    ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.
                `);
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
