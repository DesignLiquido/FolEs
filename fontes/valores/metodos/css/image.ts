import { Simbolo } from "../../../lexador";
import { tratarValoresReversos } from "../comum";
import { MetodoCss } from "./metodo-css";

export class Image extends MetodoCss {
    arrayValores: Array<Simbolo> = [];
    traducao: string;
    valoresAceitos: { [nomeFolEs: string]: string };

    constructor(arrayValores: Array<Simbolo>) {
        super();
        this.arrayValores = arrayValores;
        this.traducao = "image";
    }

    paraTexto() {
        // Elimina o parêntese direito a mais do objeto de valores
        this.arrayValores.pop();

        const traducaoRetorno: string = tratarValoresReversos(this.arrayValores);

        return `configurar-imagem(${traducaoRetorno})`;
    }
}
