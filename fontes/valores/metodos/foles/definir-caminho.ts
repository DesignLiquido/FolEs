import { Simbolo } from "../../../lexador";
import { Metodo } from "./metodo";

export class DefinirCaminho extends Metodo {
    matriz: string;
    preenchimento: string;
    traducao: string;
    valoresAceitos: { [valorFoles: string]: string };

    constructor(matriz: Simbolo, preenchimento?: Simbolo) {
        super();
        this.matriz = matriz.lexema;
        this.preenchimento = preenchimento.lexema;
        this.traducao = "path";
        this.valoresAceitos = {
            "nao-zero": "nonzero",
            "não-zero": "nonzero",
            "par-ímpar": "evenodd",
            "par-impar": "evenodd",
        }
    }

    paraTexto() {
        if (this.preenchimento) {
            const valoresFolEsAceitos: Array<string> = Object.keys(this.valoresAceitos);
            const traducaoValor: string = valoresFolEsAceitos.find((valorAceito) => valorAceito === this.preenchimento);

            if (traducaoValor) {
                return `path(${valoresFolEsAceitos[traducaoValor]} ${this.matriz})`;
            } else {
                throw new Error(
                    `Valor de preenchimento ${this.preenchimento} inválido para o método definir-caminho.
                    Valores aceitos:
                    ${valoresFolEsAceitos.reduce((final, atual) => (final + `, ${atual}`))},`
                );
            }
        }

        return `path(${this.matriz})`;
    }
}
