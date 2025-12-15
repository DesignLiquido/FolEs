import { Simbolo } from "../../../lexador";
import { tratarValores } from "../comum";
import { Metodo } from "./metodo";

export class TransicaoGradual extends Metodo {
    arrayValores: Array<Simbolo> = [];
    traducao: string;
    valoresAceitos: { [nomeFolEs: string]: string };

    constructor(arrayValores: Array<Simbolo>) {
        super();
        this.arrayValores = arrayValores;
        this.traducao = "cross-fade";
        
        this.valoresAceitos = {
            "de": "from",
        }
    }

    paraTexto() {
        // Elimina o parêntese direito a mais do objeto de valores
        this.arrayValores.pop();
        console.log(this.arrayValores);
        
        const traducaoRetorno: string = tratarValores(this.arrayValores, this.valoresAceitos);

        return `cross-fade(${traducaoRetorno})`;
    }
}
