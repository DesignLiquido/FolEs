import { Simbolo } from "../../../lexador";
import { tratarValoresReversos } from "../comum";
import { MetodoCss } from "./metodo-css";

export class Ellipse extends MetodoCss {
    arrayValores: Array<Simbolo> = [];
    traducao: string;
    valoresAceitos: { [nomeFolEs: string]: string };

    constructor(arrayValores: Array<Simbolo>) {
        super();

        this.arrayValores = arrayValores;
        this.traducao = "ellipse";

        this.valoresAceitos = {
            "closest-side": "lado-mais-próximo",
            "farthest-side": "lado-mais-distante",
            "at": "no",
        };
    }

    paraTexto() {
        const traducaoRetorno: string = tratarValoresReversos(this.arrayValores, this.valoresAceitos);

        return `elipse(${traducaoRetorno})`;
    }
}
