import { Simbolo } from "../../../lexador";
import { tratarValores } from "../comum";
import { Metodo } from "./metodo";

export class Circular extends Metodo {
    arrayValores: Array<Simbolo> = [];
    valoresAceitos: { [valorFoles: string]: string };
    traducao: string;

    constructor(arrayValores: Array<Simbolo>) {
        super();
        this.arrayValores = arrayValores;
        this.valoresAceitos = {
            "lado-mais-próximo": "closest-side",
            "lado-mais-proximo": "closest-side",
            "lado-mais-distante": "farthest-side",
        }
        this.traducao = "circle";
    }

    paraTexto() {
        const traducaoRetorno: string = tratarValores(this.arrayValores, this.valoresAceitos);

        return `circle(${traducaoRetorno})`;
    }
}
