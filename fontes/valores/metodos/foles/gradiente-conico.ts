import { Simbolo } from "../../../lexador";
import { tratarValores } from "../comum";
import { Metodo } from "./metodo";

export class GradienteConico extends Metodo {
    arrayValores: Array<Simbolo> = [];
    traducao: string;
    valoresAceitos: { [nomeFolEs: string]: string };

    constructor(arrayValores: Array<Simbolo>) {
        super();
        this.arrayValores = arrayValores;
        this.traducao = "conic-gradient";
        
        this.valoresAceitos = {
            "de": "from",
        }
    }

    paraTexto() {
        const traducaoRetorno: string = tratarValores(this.arrayValores, this.valoresAceitos);

        return `conic-gradient(${traducaoRetorno})`;
    }
}
