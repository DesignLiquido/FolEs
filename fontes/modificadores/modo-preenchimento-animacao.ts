import { Modificador } from "./superclasse/modificador";

export class ModoPreenchimentoAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "para-frente": "forwards",
        "para-tras": "backwards",
        "para-trás": "backwards",
        "ambos": "both"
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["modo-preenchimento-animacao", "modo-preenchimento-animação"], 
            "animation-fill-mode"
        );

        if (!(valor in this.valoresAceitos)) {
            throw new Error(`Valor ${valor} inválido para 'modo-preenchimento-animação'. Valores aceitos: ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
