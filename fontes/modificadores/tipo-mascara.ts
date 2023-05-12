import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class TipoMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "alfa": "alpha",
        "luminancia": "luminance",
        "luminância": "luminance",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["tipo-mascara", "tipo-máscara"], "mask-type");

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'tipo-máscara' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
