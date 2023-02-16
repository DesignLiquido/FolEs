import { listaDeValoresGlobais } from "./atributos/globais";
import { ListaDeComprimento } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class MargemInferiorRolagemMouse extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("margem-inferior-rolagem-mouse", "scroll-margin-bottom");

        if (Number.isNaN(parseInt(valor)) &&
            !(valor in listaDeValoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'margem-inferior-rolagem-mouse' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
                ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in ListaDeComprimento) || quantificador === undefined) {
                throw new Error(
                    `Propriedade 'margem-inferior-rolagem-mouse' com quantificador inválido. Valores aceitos:
                    ${Object.keys(ListaDeComprimento).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
