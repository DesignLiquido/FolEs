import { valoresGlobais } from "./atributos/globais";
import { angulos } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class Girar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string) {
        super("girar", "rotate");

        // OBS.: Também aceita receber múltiplos valores. 
        // Ex.: girar: z 1.57rad;
    
        // A lógica abaixo cobre somente o recebimento de UM valor, seja numérico ou o valor listado. 
        // TODO: Adaptar lógica para cobrir os demais casos. 
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'girar' com valor ${valor} inválido. Valores aceitos: 
                ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
                ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Quantificador deve ser do tipo ângulo (<angle>)
        if (Number(parseInt(valor))) {
            if (
                !(quantificador in angulos) ||
                quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'girar' com quantificador inválido. Valores aceitos:
                    ${Object.keys(angulos).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
