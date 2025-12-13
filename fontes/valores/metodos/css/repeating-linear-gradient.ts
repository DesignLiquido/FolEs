import { Simbolo } from "../../../lexador";
import { tratarValoresReversos } from "../comum";
import { MetodoCss } from "./metodo-css";

export class RepeatingLinearGradient extends MetodoCss {
    arrayValores: Array<Simbolo> = [];
    traducao: string;
    valoresAceitos: { [nomeFolEs: string]: string };

    constructor(arrayValores: Array<Simbolo>) {
        super();

        this.arrayValores = arrayValores;
        this.traducao = "repeating-linear-gradient";

        this.valoresAceitos = {
            'closest-side': 'lado-mais-próximo',
            'closest-corner': 'canto-mais-próximo',
            'farthest-side': 'lado-mais-distante',
            'farthest-corner': 'canto-mais-distante',
            'circle': 'círculo',
            'at': 'no',
        };
    }

    paraTexto() {
        let traducaoRetorno: string = tratarValoresReversos(this.arrayValores, this.valoresAceitos);

        return `repetir-gradiente-linear(${traducaoRetorno})`;
    }
}
