import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class DecoracaoTextoSublinhado extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "nenhum": "none",
        "tudo": "all",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["decoracao-texto-sublinhado", "decoração-texto-sublinhado"],
            "text-decoration-skip-ink"
        );

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'decoração-texto-sublinhado' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
