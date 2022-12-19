import { Modificador } from "./superclasse/modificador";

export class DirecaoAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "reverter": "reverse",
        "alternar": "alternate",
        "alternar-reverter": "alternate-reverse"
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["direcao-animacao", "direção-animação"], 
            "animation-direction"
        );

        if (!(valor in this.valoresAceitos)) {
            throw new Error(`Valor ${valor} inválido para 'direção-animação'. Valores aceitos: ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
