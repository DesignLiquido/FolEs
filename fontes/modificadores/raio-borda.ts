import { valoresGlobais } from "./atributos/globais";
import { comprimentos, ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class RaioBorda extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("raio-borda", "border-radius");

        // OBS.: raio-borda também aceita uma sintaxe específica com uma barra (/) entre os valores
        // EX.: raio-borda: 10px / 20px;
        // TODO: Implementar lógica necessária para aceitar esse caso. 

        if (Number.isNaN(parseInt(valor)) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'raio-borda' com valor ${valor} inválido. Valores aceitos: 
            número-quantificador, 
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (quantificador !== undefined) {
            if (!(quantificador in comprimentos) && !(quantificador in ListaDeValorPercentual)) {
                throw new Error(`Propriedade 'raio-borda' com quantificador inválido. Valores aceitos:
                ${Object.keys(ListaDeValorPercentual).reduce((final, atual) => final += `, ${atual}`)}.
                ${Object.keys(comprimentos).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
