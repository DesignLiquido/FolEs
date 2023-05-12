import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class ModoBordaMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "luminancia": "luminance",
        "luminância": "luminance",
        "alfa": "alpha",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["modo-borda-mascara", "modo-borda-máscara"],
            "mask-border-mode"
        );

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'modo-borda-máscara' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
