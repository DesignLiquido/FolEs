import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class VisibilidadeFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "visivel": "visible",
        "visível": "visible",
        "escondido": "hidden",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("visibilidade-fundo", "backface-visibility");

        if (!(valor in this.valoresAceitos) && 
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'visibilidade-fundo' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
