import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Direcao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "esquerda-direita": "ltr",
        "direita-esquerda": "rtl",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(["direcao", "direção"], "direction", pragmas);

        if (!valorVariavel) validarValores('direção', valor, this.valoresAceitos);

        this.valor = valor;
    }
}
