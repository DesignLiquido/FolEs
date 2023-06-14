import { valoresGlobais } from "./atributos/globais";
import { posicoesBasicas } from "./atributos/posicoes";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class TransformarOrigem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "esquerda": "left",
        "direita": "right",
        "superior": "top",
        "inferior": "bottom",
        "centro": "center",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("transformar-origem", "transform-origin");

        // Pode receber de 1 a 3 valores;
        // A lógica abaixo cobre somente o recebimento de UM único valor.
        // TODO: Adaptar lógica para cobrir todos os casos
        validarValorNumerico('transformar-origem', valor, this.valoresAceitos);

        this.valor = valor;

        // Aceita valores de posição (palavras) e também valor-quantificador.
        if (Number(parseInt(valor))) {
            if (
                !(quantificador in unidadesMedida) ||
                quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'transformar-origem' com quantificador inválido. Valores aceitos:
                    ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
