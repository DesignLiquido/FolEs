import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class CombinarTextoVertical extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "tudo": "all",
        "digitos": "digits",
        "dígitos": "digits",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("combinar-texto-vertical", "text-combine-upright");

        // OBS.: Também aceita receber valores do tipo dígito (<digit>).
        // Ex.:  combinar-texto-vertical: digits 4; 

        // A lógica abaixo cobre somente o recebimento de UM dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos. 
        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'combinar-texto-vertical' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
