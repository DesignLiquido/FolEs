import { Simbolo } from "../../../lexador";
import { validarIdentificacaoPersonalizada } from "../../../modificadores/validacoes/identificacao-personalizada";
import { Metodo } from "./metodo";

export class Ornamentos extends Metodo {
    valor: number | string;
    traducao: string;

    constructor(valor: Simbolo) {
        super();
        this.valor = valor.tipo === 'NUMERO' ? Number(valor.lexema) : valor.lexema;
        this.traducao = "ornaments";
    }

    paraTexto() {
        if (typeof this.valor === 'number') {
            if (this.valor < 1 || this.valor > 99) {
                throw new Error('O valor da função ornamentos() deve estar entre 1 e 99');
            }
            return `ornaments(${this.valor})`;
        }

        const valorSemAspas = this.valor.replace(/^['"]|['"]$/g, '');
        // TODO: Repensar
        // validarIdentificacaoPersonalizada('variação-fonte-alternativa', valorSemAspas);
        return `ornaments(${this.valor})`;
    }
}
