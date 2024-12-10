import { Simbolo } from "../../../lexador";
import { posicoesRaio } from "../../../modificadores/atributos/posicoes";
import { MetodoCss } from "./metodo-css";

export class Ray extends MetodoCss {
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
            return `raio(${this.posicao} ${this.valor}${this.quantificador})`
        }

        return `raio(${this.valor}${this.quantificador})`
    }
}