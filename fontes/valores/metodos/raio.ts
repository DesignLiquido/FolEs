import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";
import { posicoesRaio } from "../../modificadores/atributos/posicoes";

export class Raio extends Metodo {
    posicao: string;
    valor: number;
    quantificador: string;
    traducao: string;
    
    constructor(posicao: Simbolo, valor: Simbolo, quantificador: Simbolo) {
        super();
        this.posicao = posicao ? posicao.lexema : null;
        this.valor = Number(valor.lexema);
        this.quantificador = quantificador.lexema;
        this.traducao = 'ray';
    }

    paraTexto() {
        if (this.posicao) {
            this.posicao = posicoesRaio[this.posicao];
            this.quantificador === 'graus' ? this.quantificador = 'deg' : null;
            return `ray(${this.posicao} ${this.valor}${this.quantificador})`
        }

        return `ray(${this.valor}${this.quantificador})`
    }
}