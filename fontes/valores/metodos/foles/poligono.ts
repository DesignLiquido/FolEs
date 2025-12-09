import { Simbolo } from "../../../lexador";
import { tratarValores } from "../comum";
import { Metodo } from "./metodo";

export class Poligono extends Metodo {
    arrayValores: Array<Simbolo> = [];
    traducao: string;

    constructor(arrayValores: Array<Simbolo>) {
        super();
        this.arrayValores = arrayValores;
        this.traducao = "polygon";
    }

    paraTexto() {        
        const traducaoRetorno: string = tratarValores(this.arrayValores);

        return `polygon(${traducaoRetorno})`;
    }
}
