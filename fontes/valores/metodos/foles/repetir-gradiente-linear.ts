import { Simbolo } from "../../../lexador";
import { cores } from "../../../modificadores/atributos/cores";
import { Metodo } from "./metodo";

export class RepetirGradienteLinear extends Metodo {
    arrayValores: Array<Simbolo> = [];
    traducao: string;
    valoresAceitos: { [nomeFolEs: string]: string };

    constructor(arrayValores: Array<Simbolo>) {
        super();
        this.arrayValores = arrayValores;
        this.traducao = "repeating-linear-gradient";

        this.valoresAceitos = {
            'lado-mais-proximo': 'closest-side',
            'lado-mais-próximo': 'closest-side',
            'canto-mais-próximo': 'closest-corner',
            'canto-mais-proximo': 'closest-corner',
            'lado-mais-distante': 'farthest-side',
            'canto-mais-distante': 'farthest-corner',
            'circulo': 'circle',
            'círculo': 'circle',
        };
    }

    paraTexto() {
        let traducaoRetorno: string = '';
        const coresFolEs: Array<string> = Object.keys(cores);
        const valoresFolEs: Array<string> = Object.keys(this.valoresAceitos);

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
            } else if (valoresFolEs.includes(valor.lexema)) {
                if (index === 0) {
                    traducaoRetorno += `${this.valoresAceitos[valor.lexema]}`;
                } else {
                    traducaoRetorno += ` ${this.valoresAceitos[valor.lexema]}`;
                }
            } else {
                traducaoRetorno += `${valor.lexema}`;
            }
        });

        return `repeating-linear-gradient(${traducaoRetorno})`;
    }
}
