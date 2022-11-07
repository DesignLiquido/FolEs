import { Modificador } from "./superclasse/modificador";

export class DirecaoAnimacao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["direcao-animacao", "direção-animação"], "animation-direction");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
