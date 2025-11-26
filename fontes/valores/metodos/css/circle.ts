import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Circle extends MetodoCss {
    valor: number | string;
    quantificador: string;
    valoresAceitos: { [valorFoles: string]: string };
    traducao: string;

    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = typeof valor.lexema === 'number' ? Number(valor.lexema) : valor.lexema;
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.valoresAceitos = {
            "closest-side": "lado-mais-próximo",
            "farthest-side": "lado-mais-distante",
        }
        this.traducao = "circle";
    }

    paraTexto() {
        if (this.quantificador) {
            return `circular(${this.valor}${this.quantificador})`;
        }

        const valorString: string = this.valor as string;
        const valoresCssAceitos: Array<string> = Object.keys(this.valoresAceitos);
        const traducaoValor: string = valoresCssAceitos.find((valorAceito) => valorAceito === valorString);

        if (traducaoValor) {
            return `circular(${this.valoresAceitos[traducaoValor]})`;
        } else {
            throw new Error(
                `Valor ${this.valor} inválido para o método 'circle'. Valores aceitos:
                número-quantificador (ex.: 12px),
                ${valoresCssAceitos.reduce((final, atual) => (final += `, ${atual}`))},`
            );
        }
    }
}

/**
 * Casos faltantes:
 * clip-path: circle(10% at 2rem 90%);
 * clip-path: circle(closest-side at 5rem 6rem);
 */