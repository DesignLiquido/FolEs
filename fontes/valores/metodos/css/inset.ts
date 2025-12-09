import { Simbolo } from "../../../lexador";
import { MetodoCss } from "./metodo-css";

export class Inset extends MetodoCss {
    arrayValores: Array<Simbolo> = [];
    traducao: string;
    valoresAceitos: { [nomeFolEs: string]: string };

    constructor(arrayValores: Array<Simbolo>) {
        super();

        this.arrayValores = arrayValores;
        this.traducao = "inset";

        this.valoresAceitos = {
            "arredondar": "round",
        }
    }

    paraTexto() {
        let traducaoRetorno: string = '';
        const valoresFolEs: Array<string> = Object.keys(this.valoresAceitos);

        this.arrayValores.forEach((valor, index) => {
            if (valor.tipo === 'NUMERO') {
                if (index === 0) {
                    traducaoRetorno += `${valor.lexema}`;
                } else {
                    traducaoRetorno += ` ${valor.lexema}`;
                }
            } else if (valoresFolEs.includes(valor.lexema)) {
                if (index === 0) {
                    traducaoRetorno += `${this.valoresAceitos[valor.lexema]}`;
                } else {
                    traducaoRetorno += ` ${this.valoresAceitos[valor.lexema]}`;
                }
            } else if (valor.tipo === 'QUANTIFICADOR') {
                traducaoRetorno += `${valor.lexema}`;
            } else {
                traducaoRetorno += ` ${valor.lexema}`;
            }
        });

        return `inserir(${traducaoRetorno})`;
    }
}
