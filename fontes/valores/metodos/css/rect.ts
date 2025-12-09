import { Simbolo } from "../../../lexador";
import { tratarValores, tratarValoresReversos } from "../comum";
import { MetodoCss } from "./metodo-css";

export class Rect extends MetodoCss {
    arrayValores: Array<Simbolo> = [];
    traducao: string;
    valoresAceitos: { [nomeFolEs: string]: string };

    constructor(arrayValores: Array<Simbolo> = []) {
        super();

        this.arrayValores = arrayValores;
        this.traducao = "rect";

        this.valoresAceitos = {
            "arredondar": "round",
            "auto": "auto",
        }
    }

    paraTexto() {
        const traducaoRetorno: string = tratarValoresReversos(this.arrayValores, this.valoresAceitos);

        return `retângulo(${traducaoRetorno})`;
    }
}
