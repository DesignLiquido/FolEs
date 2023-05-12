import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class ComportamentoRolagem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "suave": "smooth",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("comportamento-rolagem", "scroll-behavior");

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'comportamento-rolagem' com valor ${valor} inválido. Valores aceitos: 
        ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
        ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
