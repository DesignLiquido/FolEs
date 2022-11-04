import { Modificador } from "./superclasse/modificador";

export class DuracaoAnimacao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(["duracao-animacao", "duração-animação"], "animation-duration");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
