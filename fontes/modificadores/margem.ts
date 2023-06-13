import { ListaDeValorPercentual, unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class Margem extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 4 valores.

    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("margem", "margin");

        validarValorNumerico('margem', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in ListaDeValorPercentual) &&
                !(quantificador in unidadesMedida) ||
                quantificador === undefined) {
                throw new Error(`Propriedade 'margem' com quantificador inválido. Valores aceitos:
                ${Object.keys(ListaDeValorPercentual).reduce((final, atual) => final += `, ${atual}`)}.
                ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
