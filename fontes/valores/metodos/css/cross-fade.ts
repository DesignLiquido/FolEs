import { Simbolo } from "../../../lexador";
import { tratarValores } from "../comum";
import { MetodoCss } from "./metodo-css";

export class CrossFade extends MetodoCss {
    arrayValores: Array<Simbolo> = [];
    traducao: string;
    valoresAceitos: { [nomeFolEs: string]: string };

    constructor(arrayValores: Array<Simbolo>) {
        super();
        this.arrayValores = arrayValores;
        this.traducao = "cross-fade";
    }

    paraTexto() {
        // Elimina o parêntese direito a mais do objeto de valores
        this.arrayValores.pop();

        const traducaoRetorno: string = tratarValores(this.arrayValores);

        return `transição-gradual(${traducaoRetorno})`;
    }
}
