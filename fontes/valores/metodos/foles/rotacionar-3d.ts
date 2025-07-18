import { Simbolo } from "../../../lexador";
import { angulos } from "../../../modificadores/atributos/quantificadores";
import { validarQuantificador } from "../../../modificadores/validacoes/quantificador";
import { Metodo } from "./metodo";

export class Rotacionar3d extends Metodo {
    valor1: number;
    valor2: number;
    valor3: number;
    valor4: number;
    quantificador: string;
    traducao: string;

    constructor(valor1: Simbolo, valor2: Simbolo, valor3: Simbolo, valor4: Simbolo, quantificador: Simbolo) {
        super();
        this.valor1 = Number(valor1.lexema);
        this.valor2 = Number(valor2.lexema);
        this.valor3 = Number(valor3.lexema);
        this.valor4 = Number(valor4.lexema);
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = "rotate3d";
    }

    paraTexto() {
        if (this.quantificador) {
            this.quantificador === "graus"
                ? (this.quantificador = "deg")
                : null;

            validarQuantificador('transformar', this.quantificador, angulos);

            return `rotate3d(${this.valor1}, ${this.valor2}, ${this.valor3}, ${this.valor4}${this.quantificador})`;
        }

        return `rotate3d(${this.valor1}, ${this.valor2}, ${this.valor3}, ${this.valor4})`;
    }
}
