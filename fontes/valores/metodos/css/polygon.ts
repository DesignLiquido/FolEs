import { Simbolo } from "../../../lexador";
import { tratarValoresReversos } from "../comum";
import { MetodoCss } from "./metodo-css";

export class Polygon extends MetodoCss {
    arrayValores: Array<Simbolo> = [];
    traducao: string;

    constructor(arrayValores: Array<Simbolo>) {
        super();

        this.arrayValores = arrayValores;
        this.traducao = "polygon";
    }

    paraTexto() {
        const traducaoRetorno: string = tratarValoresReversos(this.arrayValores);

        return `polígono(${traducaoRetorno})`;
    }
}
