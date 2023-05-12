import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class ModoPreenchimentoAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "para-frente": "forwards",
        "para-tras": "backwards",
        "para-trás": "backwards",
        "ambos": "both"
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["modo-preenchimento-animacao", "modo-preenchimento-animação"], 
            "animation-fill-mode"
        );

        if (!(valor in this.valoresAceitos) && !(valor in valoresGlobais)) {
            throw new Error(`Valor ${valor} inválido para 'modo-preenchimento-animação'. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
