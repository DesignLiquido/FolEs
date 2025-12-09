import { Simbolo } from "../../../lexador";
import { tratarValores } from "../comum";
import { Metodo } from "./metodo";

export class Retangulo extends Metodo {
    arrayValores: Array<Simbolo> = [];
    traducao: string;
    valoresAceitos: { [nomeFolEs: string]: string };

    constructor(arrayValores: Array<Simbolo> = []) {
        super();

        this.arrayValores = arrayValores;
        this.traducao = "rect";

        this.valoresAceitos = {
            "round": "arredondar",
            "auto": "auto",
        }
    }

    paraTexto() {
        const traducaoRetorno: string = tratarValores(this.arrayValores, this.valoresAceitos);

        return `rect(${traducaoRetorno})`;
    }
}
