import { Modificador } from "./superclasse/modificador";

export class AnimacaoDuracao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;
    
    constructor(valor: string, quantificador: string) {
        super(["animacao-duracao", "animação-duração"], "animation-duration");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
