import { Simbolo } from "../../../lexador";
import { tratarValoresReversos } from "../comum";
import { MetodoCss } from "./metodo-css";

export class Circle extends MetodoCss {
    arrayValores: Array<Simbolo> = [];
    valoresAceitos: { [valorFoles: string]: string };
    traducao: string;

    constructor(arrayValores: Array<Simbolo>) {
        super();

        this.arrayValores = arrayValores;
        this.traducao = "circle";

        this.valoresAceitos = {
            "closest-side": "lado-mais-próximo",
            "farthest-side": "lado-mais-distante",
            "at": "no",
        }
    }

    paraTexto() {
        const traducaoRetorno: string = tratarValoresReversos(this.arrayValores, this.valoresAceitos);

        return `circular(${traducaoRetorno})`;
    }
}
