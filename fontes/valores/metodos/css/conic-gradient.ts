import { Simbolo } from "../../../lexador";
import { tratarValores, tratarValoresReversos } from "../comum";
import { MetodoCss } from "./metodo-css";

export class ConicGradient extends MetodoCss {
    arrayValores: Array<Simbolo> = [];
    traducao: string;
    valoresAceitos: { [nomeFolEs: string]: string };

    constructor(arrayValores: Array<Simbolo>) {
        super();
        this.arrayValores = arrayValores;
        this.traducao = "conic-gradient";
        
        this.valoresAceitos = {
            "from": "de",
        }
    }

    paraTexto() {
        const traducaoRetorno: string = tratarValoresReversos(this.arrayValores, this.valoresAceitos);

        return `gradiente-cônico(${traducaoRetorno})`;
    }
}
