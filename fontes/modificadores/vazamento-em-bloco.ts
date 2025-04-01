import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VazamentoEmBloco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "visivel": "visible",
        "visível": "visible",
        "escondido": "hidden",
        "recortar": "clip",
        "barra-rolagem": "scroll",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("vazamento-em-bloco", "overflow-block", pragmas);

        if (!valorVariavel) validarValores('vazamento-em-bloco', valor, this.valoresAceitos);

        this.valor = valor;
    }
}
