import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VisibilidadeFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "visivel": "visible",
        "visível": "visible",
        "escondido": "hidden",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("visibilidade-fundo", "backface-visibility", pragmas);

        if (!valorVariavel) validarValores('visibilidade-fundo', valor, this.valoresAceitos);

        this.valor = valor;
    }
}
