import { ListaDeValoresGlobais } from "./atributos/globais";
import { ListaDeQuantificadores } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class RaioEsquerdoBordaInferior extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super("raio-esquerdo-borda-inferior", "border-bottom-left-radius");

        // Pode receber também dois valores número-quantificador
        // Ex.: raio-esquerdo-borda-inferior: 20% 20%;
        // A lógica abaixo cobre apenas o recebimento de UM único valor
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'raio-esquerdo-borda-inferior' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
                ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))){
            if (
                !(quantificador in ListaDeQuantificadores) ||
                quantificador === undefined
            ) {
                throw new Error(
                `Propriedade 'raio-esquerdo-borda-inferior' com quantificador inválido. Valores aceitos:
                ${Object.keys(ListaDeQuantificadores).reduce((final, atual) => final += `, ${atual}`)}.`);
            }
    
            this.quantificador = quantificador;
        }
    }
}
