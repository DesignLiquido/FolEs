import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Filtro extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "url": "url",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("filtro", "filter", pragmas);

        const valoresExtra = ['url', 'blur', 'brightness', 'contrast'];

        if (!valorVariavel) validarValores('filtro', valor, this.valoresAceitos, valoresExtra);

        this.valor = valor;
    }
}
