import { listaDeValoresGlobais } from "./atributos/globais";
import { ListaDeQuantificadores } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class EspacamentoColuna extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
    }

    constructor(valor: string, quantificador?: string) {
        super(["espacamento-coluna", "espaçamento-coluna"], "column-gap");


        // Pode receber valores próprios ou número-quantificador
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos) &&
            !(valor in listaDeValoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'espaçamento-coluna' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
                    ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
                    ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (
                !(quantificador in ListaDeQuantificadores) ||
                quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'espaçamento-coluna' com quantificador inválido. Valores aceitos:
                    ${Object.keys(ListaDeQuantificadores).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
