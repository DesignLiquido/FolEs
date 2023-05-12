import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class AjustarObjeto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conter": "contain",
        "cobrir": "cover",
        "preencher": "fill",
        "nenhum": "none",
        "diminuir-escala": "scale-down",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("ajustar-objeto", "object-fit");

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'ajustar-objeto' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
