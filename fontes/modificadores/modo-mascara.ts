import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse/modificador";

export class ModoMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "alfa": "alpha",
        "luminancia": "luminance",
        "luminância": "luminance",
        "fonte-correspondente": "match-source",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["modo-mascara", "modo-máscara"], "mask-mode");

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'modo-máscara' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
