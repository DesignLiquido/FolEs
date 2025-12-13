import { Simbolo } from "../../../lexador";
import { tratarValores } from "../comum";
import { Metodo } from "./metodo";

export class Xywh extends Metodo {
    arrayValores: Array<Simbolo> = [];
    traducao: string;
    valoresAceitos: { [nomeFolEs: string]: string };

    constructor(arrayValores: Array<Simbolo>) {
        super();

        this.arrayValores = arrayValores;
        this.traducao = "xywh";

        this.valoresAceitos = {
            "round": "arredondar",
        }
    }

    paraTexto() {
        let traducaoRetorno: string = tratarValores(this.arrayValores, this.valoresAceitos);

        return `xywh(${traducaoRetorno})`;
    }
}
