import { posicoesBasicas } from "./atributos/posicoes";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class TransformarOrigem extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("transformar-origem", "transform-origin", pragmas);

        validarValorNumerico('transformar-origem', valor, posicoesBasicas);

        this.valor = valor;

        // Aceita valores de posição (palavras) e também valor-quantificador.
        if (Number(parseInt(valor))) {
            validarQuantificador('transformar-origem', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
