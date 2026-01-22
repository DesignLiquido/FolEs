import { Simbolo } from "../../../lexador";
import { tratarValores } from "../comum";
import { Metodo } from "./metodo";

export class Formato extends Metodo {
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

        const traducaoRetorno: string = tratarValores(this.arrayValores);

        return `shape(${traducaoRetorno})`;
    }
}
