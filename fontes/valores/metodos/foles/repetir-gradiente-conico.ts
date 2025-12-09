import { Simbolo } from "../../../lexador";
import { cores } from "../../../modificadores/atributos/cores";
import { Metodo } from "./metodo";

export class RepetirGradienteConico extends Metodo {
    arrayValores: Array<Simbolo> = [];
    traducao: string;

    constructor(
        arrayValores: Array<Simbolo>
    ) {
        super();
        this.arrayValores = arrayValores;
        this.traducao = "repeating-conic-gradient";
    }

    paraTexto() {
        let traducaoRetorno: string = '';
        const coresFolEs: Array<string> = Object.keys(cores);

        this.arrayValores.forEach((valor, index) => {
            if (valor.tipo === 'NUMERO') {
                if (index === 0) {
                    traducaoRetorno += `${valor.lexema}`;
                } else {
                    traducaoRetorno += ` ${valor.lexema}`;
                }
            } else if (coresFolEs.includes(valor.lexema)) {
                if (index === 0) {
                    traducaoRetorno += `${cores[valor.lexema]}`;
                } else {
                    traducaoRetorno += ` ${cores[valor.lexema]}`;
                }
            } else {
                traducaoRetorno += `${valor.lexema}`;
            }
        });

        return `repeating-conic-gradient(${traducaoRetorno})`;
    }
}
