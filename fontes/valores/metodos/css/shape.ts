import { Simbolo } from "../../../lexador";
import { tratarValoresReversos } from "../comum";
import { MetodoCss } from "./metodo-css";

export class Shape extends MetodoCss {
    arrayValores: Array<Simbolo> = [];
    traducao: string;
    valoresAceitos: { [nomeFolEs: string]: string };

    constructor(arrayValores: Array<Simbolo>) {
        super();
        this.arrayValores = arrayValores;
        this.traducao = "shape";
    }

    paraTexto() {
        // Elimina o parêntese direito a mais do objeto de valores
        this.arrayValores.pop();

        const traducaoRetorno: string = tratarValoresReversos(this.arrayValores);

        return `formato(${traducaoRetorno})`;
    }
}
