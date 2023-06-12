import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class Flex extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 3 valores.
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "nenhum": "none",
        "inicial": "initial",
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        "conteudo": "content",
        "conteúdo": "content",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("flex", "flex");

        validarValorNumerico('flex', valor, this.valoresAceitos);

        this.valor = valor;

        if (quantificador !== undefined) {
            if (!(quantificador in unidadesMedida)) {
                throw new Error(`Propriedade 'flex' com quantificador inválido. Valores aceitos:
                ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
