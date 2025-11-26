import { Simbolo } from "../../../lexador";
import { Metodo } from "./metodo";

export class Circular extends Metodo {
    valor: number | string;
    quantificador: string;
    valoresAceitos: { [valorFoles: string]: string };
    traducao: string;

    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = typeof valor.lexema === 'number' ? Number(valor.lexema) : valor.lexema;
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.valoresAceitos = {
            "lado-mais-próximo": "closest-side",
            "lado-mais-proximo": "closest-side",
            "lado-mais-distante": "farthest-side",
        }
        this.traducao = "circle";
    }

    paraTexto() {
        if (this.quantificador) {
            return `circle(${this.valor}${this.quantificador})`;
        }

        const valorString: string = this.valor as string;
        const valoresFolEsAceitos: Array<string> = Object.keys(this.valoresAceitos);
        const traducaoValor: string = valoresFolEsAceitos.find((valorAceito) => valorAceito === valorString);

        if (traducaoValor) {
            return `circle(${this.valoresAceitos[traducaoValor]})`;
        } else {
            throw new Error(
                `Valor ${this.valor} inválido para o método 'circular'. Valores aceitos:
                número-quantificador (ex.: 12px),
                ${valoresFolEsAceitos.reduce((final, atual) => (final += `, ${atual}`))},`
            );
        }
    }
}
