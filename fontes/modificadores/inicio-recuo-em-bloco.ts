import { ListaDeValoresGlobais } from "./atributos/globais";
import { ListaDeQuantificadores } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class InicioRecuoEmBloco extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super(
            ["inicio-recuo-em-bloco", "início-recuo-em-bloco"],
            "padding-block-start"
        );

        if (Number.isNaN(parseInt(valor)) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'início-recuo-em-bloco' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
    ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in ListaDeQuantificadores) || quantificador === undefined) {
                throw new Error(
                    `Propriedade 'início-recuo-em-bloco' com quantificador inválido. Valores aceitos:
        ${Object.keys(ListaDeQuantificadores).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
