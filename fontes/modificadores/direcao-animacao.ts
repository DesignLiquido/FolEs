import { listaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class DirecaoAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "reverter": "reverse",
        "alternar": "alternate",
        "alternar-reverter": "alternate-reverse"
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["direcao-animacao", "direção-animação"], 
            "animation-direction"
        );

        if (!(valor in this.valoresAceitos) && !(valor in listaDeValoresGlobais)) {
            throw new Error(`Propriedade 'direção-animação' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
