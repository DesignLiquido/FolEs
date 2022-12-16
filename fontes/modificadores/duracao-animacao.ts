import { Modificador } from "./superclasse/modificador";

export class DuracaoAnimacao extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["duracao-animacao", "duração-animação"], 
            "animation-duration"
        );

        if (Number.isNaN(parseInt(valor))) {
            throw new Error(`Propriedade 'duração-animação' com valor ${valor} inválido. Valor deve ser um número`)
        }

        this.valor = valor;

        if (!['s', 'ms'].includes(quantificador)) {
            throw new Error(`Propriedade 'duração-animação' com quantificador ${quantificador} inválido. Valores aceitos: 's', 'ms'`);
        }

        this.quantificador = quantificador;
    }
}
