import { listaDeValoresGlobais } from "./atributos/globais";
import { ListaDeQuantificadores } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class InicioRecuoEmLinha extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super(
            ["inicio-recuo-em-linha", "início-recuo-em-linha"],
            "padding-inline-start"
        );

        if (Number.isNaN(parseInt(valor)) &&
            !(valor in listaDeValoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'início-recuo-em-linha' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
    ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in ListaDeQuantificadores) || quantificador === undefined) {
                throw new Error(
                    `Propriedade 'início-recuo-em-linha' com quantificador inválido. Valores aceitos:
        ${Object.keys(ListaDeQuantificadores).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
