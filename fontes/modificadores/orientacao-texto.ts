import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse/modificador";

export class OrientacaoTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "misturado": "mixed",
        "de-pe": "upright",
        "de-pé": "upright",
        "de-lado": "sideways",
        "lateral-direita": "sideways-right",
        "usar-orientacao-glifo": "use-glyph-orientation",
        "usar-orientação-glifo": "use-glyph-orientation",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["orientacao-texto", "orientação-texto"], 
            "text-orientation"
        );

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'orientação-texto' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
