import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class TipoMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "alfa": "alpha",
        "luminancia": "luminance",
        "luminância": "luminance",
    }

    constructor(valor: string, quantificador?: string) {
        super(["tipo-mascara", "tipo-máscara"], "mask-type");

        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'tipo-máscara' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
