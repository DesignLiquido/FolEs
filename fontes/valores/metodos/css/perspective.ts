import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Perspective extends MetodoCss {
    valor: number | string;
    quantificador: string;
    traducao: string;
    
    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = typeof valor === "number" ? Number((valor as Simbolo).lexema) : (valor as Simbolo).lexema;
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = 'perspective';
    }

    paraTexto() {
        if (this.quantificador) {
            return `perspectivar(${this.valor}${this.quantificador})`
        }

        return `perspectivar(${this.valor})`
    }
}