import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraMinima extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        "nenhuma": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["largura-minima", "largura-minima"], "min-width");

        // Também pode receber a função fit-content(<length-percentage>);
        // A lógica abaixo cobre o recebimento de valores próprios ou numéricos
        // TODO: Ajustar lógica para cobrir todos os casos.
        validarValorNumerico('largura-minima', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (
                !(quantificador in unidadesMedida) ||
                quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'largura-minima' com quantificador inválido. Valores aceitos:
            ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
