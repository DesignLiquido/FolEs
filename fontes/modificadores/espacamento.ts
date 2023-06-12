import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class Espacamento extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["espacamento", "espaçamento"], "gap");

        // Pode receber também dois valores. Ex.: espacamento: 10px 2mm;
        // Também pode receber a função calc. Ex.: espacamento: calc(20% + 20px);
        
        // A lógica abaixo cobre somente o recebimento de UM único valor.
        // TODO: Adaptar lógica para cobrir todos os casos.

        validarValorNumerico('espaçamento', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (
                !(quantificador in unidadesMedida) ||
                quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'espaçamento' com quantificador inválido. Valores aceitos:
                    ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
