import { posicoesBasicas } from "./atributos/posicoes";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class TransformarOrigem extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("transformar-origem", "transform-origin", pragmas);

        if (!valorVariavel) {
            validarValorNumerico("transformar-origem", valor, posicoesBasicas);

            // Aceita valores de posição (palavras) e também valor-quantificador.
            if (Number(parseInt(valor))) {
                validarQuantificador(
                    "transformar-origem",
                    quantificador,
                    unidadesMedida,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
