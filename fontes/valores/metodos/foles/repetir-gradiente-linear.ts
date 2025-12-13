import { Simbolo } from "../../../lexador";
import { tratarValores } from "../comum";
import { Metodo } from "./metodo";

export class RepetirGradienteLinear extends Metodo {
    arrayValores: Array<Simbolo> = [];
    traducao: string;
    valoresAceitos: { [nomeFolEs: string]: string };

    constructor(arrayValores: Array<Simbolo>) {
        super();
        this.arrayValores = arrayValores;
        this.traducao = "repeating-linear-gradient";

        this.valoresAceitos = {
            'lado-mais-proximo': 'closest-side',
            'lado-mais-próximo': 'closest-side',
            'canto-mais-próximo': 'closest-corner',
            'canto-mais-proximo': 'closest-corner',
            'lado-mais-distante': 'farthest-side',
            'canto-mais-distante': 'farthest-corner',
            'circulo': 'circle',
            'círculo': 'circle',
            'no': 'at',
        };
    }

    paraTexto() {        
        const traducaoRetorno: string = tratarValores(this.arrayValores, this.valoresAceitos);

        return `repeating-linear-gradient(${traducaoRetorno})`;
    }
}
