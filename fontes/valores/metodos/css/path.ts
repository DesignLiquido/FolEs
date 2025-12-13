import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Path extends MetodoCss {
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
            "nonzero": "não-zero",
            "evenodd": "par-ímpar",
        }
    }

    paraTexto() {
        if (this.preenchimento) {
            const valoresCssAceitos: Array<string> = Object.keys(this.valoresAceitos);
            const traducaoValor: string = valoresCssAceitos.find((valorAceito) => valorAceito === this.preenchimento);

            if (traducaoValor) {
                return `path(${valoresCssAceitos[traducaoValor]} ${this.matriz})`;
            } else {
                throw new Error(
                    `Valor de preenchimento ${this.preenchimento} inválido para o método path.
                    Valores aceitos:
                    ${valoresCssAceitos.reduce((final, atual) => (final += `, ${atual}`))},`
                );
            }
        }

        return `definir-caminho(${this.matriz})`;
    }
}
