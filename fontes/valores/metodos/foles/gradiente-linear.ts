import { Simbolo } from "../../../lexador";
import { tratarValores } from "../comum";
import { Metodo } from "./metodo";

export class GradienteLinear extends Metodo {
    arrayValores: Array<Simbolo>;
    traducao: string;

    valoresAceitos: { [nomeFolEs: string]: string } = {
        superior: "0deg",
        direita: "90deg",
        inferior: "180deg",
        esquerda: "270deg",
        graus: "deg",
    };

    constructor(arrayValores: Array<Simbolo>) {
        super();
        this.arrayValores = arrayValores;
        this.traducao = "linear-gradient";
    }

    paraTexto() {
        const traducaoRetorno: string = tratarValores(this.arrayValores, this.valoresAceitos);
        return `linear-gradient(${traducaoRetorno})`;
    }
}
