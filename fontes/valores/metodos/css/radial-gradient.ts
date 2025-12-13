import { Simbolo } from "../../../lexador";
import { tratarValores, tratarValoresReversos } from "../comum";
import { MetodoCss } from "./metodo-css";

export class RadialGradient extends MetodoCss {
    arrayValores: Array<Simbolo> = [];
    traducao: string;
    valoresAceitos: { [nomeFolEs: string]: string };

    constructor(arrayValores: Array<Simbolo>) {
        super();

        this.arrayValores = arrayValores;

        this.valoresAceitos = {
            'closest-side': 'lado-mais-próximo',
            'closest-corner': 'canto-mais-próximo',
            'farthest-side': 'lado-mais-distante',
            'farthest-corner': 'canto-mais-distante',
            'circle': 'círculo',
            'center': 'centro',
            'at': 'no',
        };

        this.traducao = "radial-gradient";
    }

    paraTexto() {
        const traducaoRetorno: string = tratarValoresReversos(this.arrayValores, this.valoresAceitos);

        return `gradiente-radial(${traducaoRetorno})`;
    }
}
