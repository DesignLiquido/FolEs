import { valoresGlobais } from "./atributos/globais";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class DeslocarContorno extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("deslocar-contorno", "outline-offset");

        if (Number.isNaN(parseInt(valor)) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'deslocar-contorno' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
                ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (!(quantificador in comprimentos) || quantificador === undefined) {
                throw new Error(
                    `Propriedade 'deslocar-contorno' com quantificador inválido. Valores aceitos:
                    ${Object.keys(comprimentos).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
