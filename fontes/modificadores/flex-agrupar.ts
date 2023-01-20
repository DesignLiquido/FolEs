import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class FlexAgrupar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nao-agrupar": "nowrap",
        "não-agrupar": "nowrap",
        "agrupar": "wrap",
        "inverter-agrupamento": "wrap-reverse",
    }

    constructor(valor: string, quantificador?: string) {
        super("flex-agrupar", "flex-wrap");

        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'flex-agrupar' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
