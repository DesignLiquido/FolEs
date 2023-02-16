import { listaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class ModoBordaMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "luminancia": "luminance",
        "luminância": "luminance",
        "alfa": "alpha",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["modo-borda-mascara", "modo-borda-máscara"],
            "mask-border-mode"
        );

        if (!(valor in this.valoresAceitos) &&
            !(valor in listaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'modo-borda-máscara' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
