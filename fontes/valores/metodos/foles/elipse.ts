import { Simbolo } from "../../../lexador";
import { tratarValores } from "../comum";
import { Metodo } from "./metodo";

export class Elipse extends Metodo {
    arrayValores: Array<Simbolo> = [];
    traducao: string;
    valoresAceitos: { [nomeFolEs: string]: string };

    constructor(arrayValores: Array<Simbolo>) {
        super();
        
        this.arrayValores = arrayValores;
        this.traducao = "ellipse";

        this.valoresAceitos = {
            "lado-mais-próximo": "closest-side",
            "lado-mais-proximo": "closest-side",
            "lado-mais-distante": "farthest-side",
            "no": "at",
        };
    }

    paraTexto() {
        const traducaoRetorno: string = tratarValores(this.arrayValores, this.valoresAceitos);

        return `ellipse(${traducaoRetorno})`;
    }
}
