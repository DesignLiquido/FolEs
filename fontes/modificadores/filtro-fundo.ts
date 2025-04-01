import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FiltroFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("filtro-fundo", "backdrop-filter", pragmas);
       
        const valoresExtra = ['blur', 'brightness', 'contrast', 'drop-shadow', 'grayscale', 'hue-rotate', 'invert', 'opacity', 'saturate', 'sepia', 'url'];
        
        if (!valorVariavel) validarValores('filtro-fundo', valor, this.valoresAceitos, valoresExtra);

        this.valor = valor;
    }
}
