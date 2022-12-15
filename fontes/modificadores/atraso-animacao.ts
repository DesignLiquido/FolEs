import { Modificador } from "./superclasse/modificador";

export class AtrasoAnimacao extends Modificador {
    constructor(valor: string, quantificador: string) {
        super(
            ["atraso-animacao", "atraso-animação"], 
            "animation-delay"
        );
        if (Number.isNaN(parseInt(valor))) {
            throw new Error(`Propriedade 'atraso-animação' com valor ${valor} inválido. Valor deve ser um número`)
        }

        this.valor = valor;

        if (!['s', 'ms'].includes(quantificador)) {
            throw new Error(`Propriedade 'atraso-animação' com quantificador ${quantificador} inválido. Valores aceitos: 's', 'ms'`);
        }
        this.quantificador = quantificador;
    }
}
