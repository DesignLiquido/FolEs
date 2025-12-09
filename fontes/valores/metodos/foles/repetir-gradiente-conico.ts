import { Simbolo } from "../../../lexador";
import { tratarValores } from "../comum";
import { Metodo } from "./metodo";

export class RepetirGradienteConico extends Metodo {
    arrayValores: Array<Simbolo> = [];
    traducao: string;

    constructor(
        arrayValores: Array<Simbolo>
    ) {
        super();
        this.arrayValores = arrayValores;
        this.traducao = "repeating-conic-gradient";
    }

    paraTexto() {
        const traducaoRetorno: string = tratarValores(this.arrayValores);

        return `repeating-conic-gradient(${traducaoRetorno})`;
    }
}
