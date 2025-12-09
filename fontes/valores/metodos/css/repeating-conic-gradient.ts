import { Simbolo } from "../../../lexador";
import { tratarValoresReversos } from "../comum";
import { MetodoCss } from "./metodo-css";

export class RepeatingConicGradient extends MetodoCss {
    arrayValores: Array<Simbolo> = [];
    traducao: string;
    valoresAceitos: { [nomeFolEs: string]: string };

    constructor(arrayValores: Array<Simbolo>) {
        super();

        this.arrayValores = arrayValores;
        this.traducao = "repeating-conic-gradient";
    }

    paraTexto() {
        let traducaoRetorno: string = tratarValoresReversos(this.arrayValores);

        return `repetir-gradiente-cônico(${traducaoRetorno})`;
    }
}
