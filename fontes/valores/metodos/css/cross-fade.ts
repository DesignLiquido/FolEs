import { Simbolo } from "../../../lexador";
import { tratarValores, tratarValoresReversos } from "../comum";
import { MetodoCss } from "./metodo-css";

export class CrossFade extends MetodoCss {
    arrayValores: Array<Simbolo> = [];
    traducao: string;
    valoresAceitos: { [nomeFolEs: string]: string };

    constructor(arrayValores: Array<Simbolo>) {
        super();
        this.arrayValores = arrayValores;
        this.traducao = "cross-fade";
        
        this.valoresAceitos = {
            "de": "from",
        }
    }

    paraTexto() {
        // Elimina o parêntese direito a mais do objeto de valores
        this.arrayValores.pop();
        
        const traducaoRetorno: string = tratarValoresReversos(this.arrayValores, this.valoresAceitos);

        return `transição-gradual(${traducaoRetorno})`;
    }
}
