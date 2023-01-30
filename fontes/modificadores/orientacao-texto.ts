import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

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

    constructor(valor: string, quantificador?: string) {
        super(
            ["orientacao-texto", "orientação-texto"], 
            "text-orientation"
        );

        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)) {
            throw new Error(`Propriedade 'orientação-texto' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
