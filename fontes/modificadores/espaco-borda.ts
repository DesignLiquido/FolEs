import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EspacoBorda extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["espaco-borda", "espaço-borda"], "border-spacing");

        // Pode receber também mais de um valor número-quantificador
        // Ex.: espaco-borda: 1cm 2em;

        // A lógica abaixo cobre apenas o recebimento de UM único valor
        // TODO: Adaptar lógica para cobrir todos os casos.

        validarValorNumerico('espaço-borda', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {

            // Verificação parte da lista de Comprimento, e não da de Quantificadores,
            // pois o modificador não aceita valores percentuais. 
            if (
                !(quantificador in unidadesMedida) ||
                quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'espaco-borda' com quantificador inválido. Valores aceitos:
                ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
